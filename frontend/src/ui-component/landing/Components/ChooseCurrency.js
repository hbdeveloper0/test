import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { boxStyle } from "../constants/style";
import { useSelector } from "react-redux";
import Skelton from "./Skelton";
import {
  chooseCurrBtn,
  chooseCurrBtnImg,
  chooseCurrBtnCode,
  chooseCurrBtnPay,
  chooseCurrTxt,
  chooseCurrSubTxt,
} from "../constants/style";

const ChooseCurrency = ({ arr, subtitle, bg }) => {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const [select, setSelect] = useState(0);
  return skeltonStatus ? (
    <Card
      sx={{
        ...boxStyle,
        // pt: { sm: 4, xs: 1.5 },
      }}
    >
      <Grid sx={{ pl: 1 }}>
        <Typography
          sx={{
            ...chooseCurrTxt,
          }}
        >
          2. Choose a currency
        </Typography>
        <Typography
          sx={{
            ...chooseCurrSubTxt,
          }}
        >
          {subtitle}
        </Typography>
      </Grid>

      <Grid container spacing={2} sx={{ pt: { sm: 1.5, xs: 1 } }}>
        {arr.map((data, index) => (
          <Grid
            key={index}
            item
            sm={6}
            xs={12}
            onClick={() => setSelect(index)}
            // sx={{ p: 0.5 }}
          >
            <Button
              fullWidth
              style={{
                background: index === select ? "rgba(0, 238, 52, 0.1)" : "",
                color: "#FFFF",
                border:
                  index === select
                    ? "1px solid rgba(0, 238, 52, 0.3)"
                    : "1px solid #5B6479",
              }}
              sx={{
                ...chooseCurrBtn,
              }}
            >
              <Grid container>
                <Grid
                  item
                  xs={9}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <CardMedia
                    component="img"
                    image={data.image}
                    alt="not"
                    sx={{
                      ...chooseCurrBtnImg,
                      background: bg ? "#101010" : "",
                      p: bg ? 1 : 0,
                    }}
                  />

                  <Typography
                    sx={{
                      ...chooseCurrBtnCode,
                    }}
                  >
                    {data.code}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={3}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "right",
                  }}
                >
                  <Typography
                    sx={{
                      ...chooseCurrBtnPay,
                    }}
                  >
                    {data.pay}
                  </Typography>
                </Grid>
              </Grid>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Card>
  ) : (
    <Skelton
      style={{
        width: "100%",
        height: { lg: "396px", md: "399px", sm: "396px", xs: "411px" },
      }}
    />
  );
};

export default ChooseCurrency;
