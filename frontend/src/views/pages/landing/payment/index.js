import React, { useEffect } from "react";
import "./payment.css";
import { Container } from "@mui/material";
import DetailCard from "./DetailCard";
import { useDispatch, useSelector } from "react-redux";
import { paymentFooter } from "../../../../store/slices/landing/paymentMethod";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentAppBar from "./paymentAppBar";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { productDetail } = useSelector((state) => state.productDetail);
  const { pId, token, pName } = location.state;
  if (!productDetail || !pId) {
    navigate('/')
  }

  // To manage page refresh
  useEffect(() => {
    if (localStorage.getItem('paymentStatus') === 'false') {
      navigate(-1);
    }
    return () => {
      localStorage.setItem('paymentStatus', false)
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('paymentStatus') === 'true') {
      const options = {
        clientToken: token,
        callbacks: {
          onPaymentSuccess: () => {
            localStorage.setItem('pId', pId);
            localStorage.setItem('pName', pName);
            navigate(`/payment-success`);
          },
          onPaymentFail: () => { console.log("fail") },
          onPaymentMethodSelected: () => { console.log("onPaymentMethodSelected") }, // optional
          onPaymentCancel: () => { console.log("onPaymentCancel") }, // optional
        },
        style: {
          "container_padding": "0rem",
          "container_background": "#101328", //use for popup
          "container-iframe_background": "#1b2038",
          "container-iframe-loading_background": "#1b2038",
          "container-iframe_borderRadius": "18px",
          "container-iframe_boxshadow": "0px 0px 0px #1b2038, 0px 4px 6px black",

        }, // optional, for customizing your integration,
        config: {
          redirectionTarget: "new_window", // optional -> "self" or "new_window"
          popup: false, // optional -> true or false // by default iframe will be embedded
          origins: '/payment', // required only, if Tazapay iframe embedded site (your site) is loaded inside another site/iframe (your host site).
        },
      };

      window.tazapay.checkout(options);
      localStorage.setItem('paymentStatus', false)
    }


  }, [token]);


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
        id="checkout"
        maxWidth="xl"
        sx={{
          mt: { md: 18.5, sm: 20, xs: 9.3 },
          px: {
            xl: "132px !important",
            lg: "130px !important",
            md: "40px !important",
            sm: "80px !important",
          },
        }}
      >
        <DetailCard />
      </Container>
    </>

  );
};

export default Payment;
