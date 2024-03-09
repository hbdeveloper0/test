import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
import Paper from "@mui/material/Paper";
import {
  CardMedia,
  Container,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCountry,
  selectCurrencyData,
} from "../../../store/slices/landing/showMobileDropDown";

const HomeDropDown = ({
  open,
  close,
  arr,
  setItemname,
  width,
  title,
  selected,
}) => {
  const dispatch = useDispatch();

  const { selectedCountryName, selectCurrency } = useSelector(
    (state) => state.mobileDropDown
  );

  const domRef = useRef(null);
  const [element, setElement] = useState();
  const length = arr.length >= 12 ? true : false;
  useEffect(() => {
    setElement(domRef.current);
  }, []);

  const Wrapper = styled.div`
    overflow: auto;
    white-space: normal;
    width: 100%;
    height: ${length ? "50vh" : ""};
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 6.26px;
      background: #00000038;
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgba(131, 151, 195, 0.2);
      height: 150px;
    }
  `;

  const handleMenuItem = (name, flag) => {
    // console.log(item1, item2);

    if (flag) {
      dispatch(
        selectCountry({
          name: name,
          flg: flag,
        })
      );
    } else {
      dispatch(selectCurrencyData({ name: name }));
    }

    // setItemname({ name: item1, flag: item2 ? item2 : " " });
    close();
  };

  return (
    <Menu
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      sx={{
        //   color:"red !important",fxgfgdfgfd
        "& .MuiPaper-root": {
          borderRadius: 3,
          marginTop: "7px",
          minWidth: width,
          px: 0.5,
          py: 0.5,
          color: "#FFFF",
          backgroundColor: "#2F3654",
          overflow: "unset",
          "& .MuiMenu-list": {
            padding: "4px 0",
          },
          "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
              fontSize: 18,
              color: "black",
              marginRight: "12px",
            },
            "&:active": {
              backgroundColor: "rgba(131, 151, 195, 0.2)",
            },
          },
        },
      }}
      // elevation={0}
    >
      <Wrapper ref={domRef}>
        {title !== "" && <Typography sx={{ px: 2, py: 2 }}>{title}</Typography>}

        {arr.map((data, index) => (
          <MenuItem
            key={index}
            onClick={() => handleMenuItem(data.name, data.flg)}
            sx={{ py: 1.5, px: 2 }}
          >
            <Grid
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {data.flg && (
                  <CardMedia
                    component="img"
                    image={data.flg}
                    alt="not"
                    sx={{ width: 30, height: 30, marginRight: 1.5 }}
                  />
                )}

                <Typography sx={{ font: "Nunito,Sans" }}>
                  {data.name}
                </Typography>
              </Grid>
              {(selectedCountryName.name == data.name ||
                selectCurrency.name == data.name) && (
                <CheckIcon
                  sx={{
                    color: "#00EE34 !important",
                  }}
                />
              )}
            </Grid>
          </MenuItem>
        ))}
      </Wrapper>
    </Menu>
  );
};

export default HomeDropDown;
