import React, { useState, useEffect } from "react";
import { Card, Grid, Typography, Divider, Button } from "@mui/material";
import { boxStyle } from "../../../../../ui-component/landing/constants/style";
import LockIcon from "@mui/icons-material/Lock";
import { useSelector } from "react-redux";
import Skelton from "../../../../../ui-component/landing/Components/Skelton";
import ClearIcon from "@mui/icons-material/Clear";
import {
  gamePurDetTitle,
  gamePurDetLineH,
  gamePurDetWrap,
  gamePurDetBtn,
  gamePurDetTotal,
  gamePurDetDivi,
  gamePurDetPrice,
  gamePurDetDis,
} from "../../../../../ui-component/landing/constants/GamePurchaseSX";
import { useNavigate } from "react-router-dom";
import myAxios from "../../../../../axios";
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";

const PaymentDetail = ({ stock, close, priceCommission }) => {
  const navigate = useNavigate();
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const { productDetail } = useSelector((state) => state.productDetail);
  const { email } = useSelector((state) => state.email);
  const { activePayment } = useSelector((state) => state.paymentCompCheck);

  const [loading, setLoading]= useState(false)

  // for product name showing
  let [headingName, name] = ''
  if (productDetail) {
    [headingName, name] = productDetail.name.split(':');
  }

  const handleBuy = async () => {
    setLoading(true)
    if (email) {
      if (activePayment === 'card') {
        const response = await myAxios.post('/payment/create-tazapay-session', { name: 'abc', email: email, country: 'US', invoice_currency: 'USD', amount: productDetail.price, transaction_description: `For Buying Product from Kinguin. Product Name is ${productDetail.name}`, productId: productDetail._id });
        if (response.status === 200) {
          localStorage.setItem('paymentStatus', true);
          navigate('/payment', {
            state: {
              pId: response.data.data.pId,
              token: response.data.data.token,
              pName: activePayment
            }
          });
          setLoading(false)
        } else {
          console.log('Error', response)
        }
      } else if (activePayment === 'wooppay') {
        const response = await myAxios.post('/payment/create-woopkassa-invoice', 
          { 
            amount: 1000, 
            back_url: `http://localhost:3000/payment-success`, 
            option: 5, 
            user_phone: "03000000000" ,
            productId: productDetail._id,
            email: email,
          }
        );
        if (response.status === 200) {
          const data = response.data.data;
          localStorage.setItem('pId', data.pId);
          localStorage.setItem('pName', activePayment);
          setLoading(false)
          window.location.href = data.operational_url;
        }
      } else if (activePayment === 'qiwi') {
        console.log('wiqi accepted');
        const response = await myAxios.post('/payment/create-citypay-payment', {amount: 10, productId: productDetail._id, email: email});
        if(response.status === 200){
          console.log(response.data.data);
          const data = response.data.data;
          localStorage.setItem('pId', data.pId);
          localStorage.setItem('pName', activePayment);
          window.location.href = data.payment_url;
          setLoading(false)
        }
        setLoading(false)
      } else {
        console.log('others');
        setLoading(false)
      }

    } else {
      setLoading(false)
    }
  }

  return skeltonStatus && productDetail ? (
    <Card
      sx={{ ...boxStyle, pt: { sm: 2.2, xs: 1.5 }, pb: { sm: 2.2, xs: 1.5 } }}
    >
      <Grid sx={{ ...gamePurDetDis }}>
        {name ?
          (
            <Typography
              sx={{
                ...gamePurDetTitle,
              }}
            >
              {headingName}: <br />
              {name}
            </Typography>
          )
          :
          (
            <Typography
              sx={{
                ...gamePurDetTitle,
              }}
            >
              {productDetail.name}
            </Typography>
          )
        }
        {/* <Typography
          sx={{
            ...gamePurDetTitle,
          }}
        >
          Buy Cyberpunk 2077: Phantom Liberty
        </Typography> */}
        <ClearIcon
          onClick={close}
          sx={{ display: { md: "none", xs: "flex" } }}
        />
      </Grid>

      {stock ? (
        <>
          <Grid
            sx={{
              ...gamePurDetWrap,
            }}
          >
            <Typography sx={{ ...gamePurDetLineH }}>Price</Typography>
            <Typography
              sx={{ textDecoration: "line-through", ...gamePurDetLineH }}
            >
              {/* 2050.50 ₽ */}
              {(productDetail.price + 10).toFixed(2)} €
            </Typography>
          </Grid>
          <Typography sx={{ ...gamePurDetPrice }}>{(productDetail.price).toFixed(2)} €</Typography>
          <Divider
            sx={{
              ...gamePurDetDivi,
            }}
          />
          <Grid sx={{ ...gamePurDetDis }}>
            <Typography sx={{ ...gamePurDetLineH }}>Commission</Typography>
            <Typography sx={{ ...gamePurDetLineH }}>{priceCommission} €</Typography>
          </Grid>
          <Grid sx={{ ...gamePurDetDis, pt: 1 }}>
            <Typography
              sx={{
                ...gamePurDetTotal,
              }}
            >
              Total price
            </Typography>
            <Typography
              sx={{
                ...gamePurDetTotal,
              }}
            >
              {(productDetail.price + priceCommission).toFixed(2)} €
            </Typography>
          </Grid>
        </>
      ) : (
        ""
      )}

      <Button
        onClick={() => handleBuy()}
        fullWidth
        style={{
          background: stock  ? "#00EE34" : "#5B6479",
          color: "#000000",
        }}
        sx={{
          ...gamePurDetBtn,
        }}
        disabled={stock ? false : true}
      >
        {loading ?  
          <CircularProgress sx={{color: '#1b2038'}}/>: 
          stock ? `Buy — ${(productDetail.price + priceCommission).toFixed(2)} ₽` : "Нет в наличии"
        }
        
        {/* {stock ? `Buy — ${(productDetail.price + priceCommission).toFixed(2)} ₽` : "Нет в наличии"} */}
      </Button>
      <Grid sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
        {" "}
        <LockIcon sx={{ fontSize: "16px", color: "#848CA0" }} />{" "}
        <Typography sx={{ fontSize: "14px", color: "#848CA0" }}>
          &nbsp;&nbsp;Payments are securely protected
        </Typography>
      </Grid>
    </Card>
  ) : (
    <Skelton
      style={{
        width: "100%",
        height: { lg: "402px", md: "352px" },
      }}
    />
  );
};

export default PaymentDetail;
