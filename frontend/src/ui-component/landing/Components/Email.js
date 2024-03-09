import React, { useState } from "react";
import {
  Card,
  Typography,
  FormControl,
  Checkbox,
  OutlinedInput,
  FormControlLabel,
} from "@mui/material";
import { boxStyle } from "../constants/style";
import { useSelector, useDispatch } from "react-redux";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Skelton from "./Skelton";
import { addEmail, setEmailError } from "../../../store/slices/landing/Email"; 
import {
  emailtitle,
  emailInput,
  emaildesc,
  checkText,
} from "../constants/style";

const skeltonSx = {
  width: "100%",
  height: { lg: "228px", md: "252px", sm: "228px", xs: "236px" },
};

const Email = ({ stock, title, labal }) => {
  const dispatch = useDispatch()
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const { emailError, email } = useSelector((state) => state.email);
  const { productDetail } = useSelector((state) => state.productDetail);

  // const [error, setError] = useState(false);

  const handelEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(inputEmail && emailRegex.test(inputEmail)){
      dispatch(addEmail(inputEmail)); 
      dispatch(setEmailError(false))
    }else{
      dispatch(addEmail(null));
      dispatch(setEmailError(true))
    }
  }

  return (
    <>
      {skeltonStatus && productDetail ? (
        <Card
          sx={{
            ...boxStyle,
            // pt: 1.5,
          }}
        >
          <Typography sx={{ ...emailtitle }}>1. Enter your email</Typography>
          <Typography sx={{ ...emaildesc }}>{title}</Typography>

          <FormControl
            error={emailError}
            sx={{ width: { sm: "70%", xs: "100%" }, pt: 1.5 }}
          >
            <OutlinedInput
              id="outlined-adornment-email"
              type="email"
              placeholder={email ? email : "E-mail"}
              name="email"
              autoFocus={email ? false : true}
              onChange={(e) =>  { handelEmail(e.target.value) } }
              sx={{
                ...emailInput,
                border: "1px solid #5B6479",
                background: stock ? "" : "rgba(131, 151, 195, 0.2)",
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#38FD63",
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#38FD63",
                  },

                // Webkit autofill styles
                "input:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 0px rgba(131, 151, 195, 0.2) inset",
                  transition: "background-color 5000s ease-in-out 0s", // Adjust transition speed
                  "-webkit-text-fill-color": "#848CA1",
                },
              }}
              disabled={stock ? false : true}
              inputProps={{}}
              endAdornment={
                <HelpOutlineIcon
                  sx={{ color: "#848CA1" }}
                  // onClick={() => setError(!error)}
                />
              }
            />
          </FormControl>
          <FormControlLabel
            sx={{ pt: { sm: 2, xs: 1 } }}
            control={
              <Checkbox
                defaultChecked
                sx={{
                  color: "#00EE34",
                  "&.Mui-checked": {
                    color: stock ? "#00EE34" : "rgba(131, 151, 195, 0.2)",
                  },

                }}
                disabled={stock ? false : true}
              />
            }
            label={
              <Typography
                sx={{ ...checkText, color: stock ? "#BEBEBE" : "#5B6479" }}
              >
                {labal}
              </Typography>
            }
          />
        </Card>
      ) : (
        <Skelton
          style={{
            ...skeltonSx,
          }}
        />
      )}
    </>
  );
};

export default Email;
