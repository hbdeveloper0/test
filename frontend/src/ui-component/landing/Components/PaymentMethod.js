import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { boxStyle } from "../constants/style";
import { useSelector } from "react-redux";
import Skelton from "./Skelton";
import SwipeableEdgeDrawer from "./SmallModal";
import CrousalSlider from "../Components/Slider";
import { useDispatch } from "react-redux";
import { paymentComponent } from "../../../store/slices/landing/paymentMethod";
import { payments } from "../Data/Data";
import {
  paymentMethodBtn,
  paymentMethodTitle,
  paymentMethodImg,
  paymentMethodTxt,
} from "../constants/style";

const PaymentMethod = ({ stock, modalData, title, screen, price }) => {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const { productDetail } = useSelector((state) => state.productDetail);
  const { activePayment } = useSelector((state) => state.paymentCompCheck);
  console.log(activePayment)
  const [select, setSelect] = useState(0);
  const dispatch = useDispatch();

  // Modal stete and function
  const [isBottomDrawerOpen, setBottomDrawerOpen] = useState(false);
  const openDrawer = () => {
    dispatch(paymentComponent(screen));
    setBottomDrawerOpen(true);
  };
  const closeDrawer = () => {
    dispatch(paymentComponent(""));
    setBottomDrawerOpen(false);
  };

  const Payment = (size, checkClick) => {
    return payments.map((data, index) => (
      <Grid
        key={index}
        item
        xs={size}
        onClick={() => {
          setSelect(index);
          dispatch(paymentComponent(data.name))
        }}
        sx={{ p: size ? 0 : 0.5 }}
      >
        <Button
          fullWidth
          onClick={() => (checkClick ? openDrawer() : undefined)}
          style={{
            background: stock
              ? index === select
                ? "rgba(0, 238, 52, 0.1)"
                : ""
              : "rgba(131, 151, 195, 0.15)",
            color:  stock ? (index ===select ? "#FFFF" : "#5B6479") : "#5B6479",
            border: stock
              ? index === select
                ? "1px solid rgba(0, 238, 52, 0.3)"
                : "1px solid #5B6479"
              : "1px solid #5B6479",
          }}
          sx={{
            ...paymentMethodBtn,
          }}
          disabled={stock ? false : true}
        >
          <CardMedia
            component="img"
            image={data.image}
            alt="not"
            sx={{ ...paymentMethodImg }}
          />
          <Typography
            sx={{
              ...paymentMethodTxt,
            }}
          >
            {price} ₽
          </Typography>
        </Button>
      </Grid>
    ));
  };

  return skeltonStatus && productDetail ? (
    <Card
      sx={{
        ...boxStyle,

        pb: { sm: 2.5, xs: 1.5 },
      }}
    >
      <Grid>
        <Typography
          sx={{
            ...paymentMethodTitle,
          }}
        >
          {title}
        </Typography>
      </Grid>

      <Grid>
        {isBottomDrawerOpen && (
          <SwipeableEdgeDrawer open={openDrawer} close={closeDrawer}>
            {modalData}
          </SwipeableEdgeDrawer>
        )}
      </Grid>
      <Grid container spacing={2} sx={{ display: { md: "flex", xs: "none" } }}>
        {Payment(6, false)}
      </Grid>
      <Grid sx={{ display: { md: "none", xs: "block" } }}>
        <CrousalSlider
          slideToshow={2.2}
          firstbp={2.2}
          secondbp={2.2}
          thirdbp={1.2}
          title=" "
          haveBtn={false}
        >
          {Payment(0, true)}
        </CrousalSlider>
      </Grid>
    </Card>
  ) : (
    <Skelton
      style={{
        width: "100%",
        height: { lg: "252px", md: "278px", sm: "162px", xs: "146px" },
      }}
    />
  );
};

export default PaymentMethod;
