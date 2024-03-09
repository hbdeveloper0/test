import { Container } from "@mui/material";
import React, { useEffect } from "react";
import PaymentAppBar from "../paymentAppBar";
import { useDispatch } from "react-redux";
import { paymentFooter } from "../../../../../store/slices/landing/paymentMethod";
import PaymentSuccessModal from "./PaymentSuccessModal";

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(paymentFooter(true));
    return () => {
      dispatch(paymentFooter(false));
    };
  }, []);

  return (
    <>
      <PaymentAppBar />
      <Container
        maxWidth="xl"
        sx={{
          mt: { md: 18.5, sm: 20, xs: 15 },
          px: {
            xl: "132px !important",
            lg: "130px !important",
            md: "40px !important",
            sm: "80px !important",
          },
        }}
      >
        <PaymentSuccessModal />
      </Container>
    </>
  );
};

export default PaymentSuccess;
