import {
  Button,
  Card,
  CardMedia,
  Divider,
  Grid,
  Typography,
  OutlinedInput,
  FormControl,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import React, { useState, useEffect } from "react";
import { boxStyle } from "../../../../ui-component/landing/constants/style";
import imageIcon from "../../../../assets/images/landing/Pubg/icon.png";
import apple from "../../../../assets/images/landing/paymentMethod/ApplePay.png";
import card from "../../../../assets/images/landing/paymentMethod/CardPay.png";
import LockIcon from "@mui/icons-material/Lock";
import PaymentModal from "../../../../ui-component/landing/Components/PaymentModal";
import img from "../../../../assets/images/landing/paymentMethod/tick.png";
import img1 from "../../../../assets/images/landing/paymentMethod/modalImg.png";
import img2 from "../../../../assets/images/landing/paymentMethod/modalImg1.png";
import img3 from "../../../../assets/images/landing/paymentMethod/modalImage2.png";
import PaymentInvoice from "./PaymentInvoice";
import InvoiceModal from "../../../../ui-component/landing/Components/InvoiceModal";
import PaymentModal2 from "../../../../ui-component/landing/Components/PaymentModal2";
import {
  paymentSx,
  paymentWrap,
  paymentTitle,
  paymentTitleBtn,
  paymentCardNo,
  paymentCardNoInp,
  paymentTermInp,
  paymentTerms,
  paymentCVV,
  paymentCVVInp,
  paymentLockTxt,
  paymentBtn,
  paymentStrip,
  paymentImg,
} from "../../../../ui-component/landing/constants/PaymentSx";
import { useDispatch, useSelector } from "react-redux";
import defaultImage from '../../../../assets/images/landing/default-noImage.jpg'
import myAxios from "../../../../axios";


//stripe
// import {
//   PaymentElement,
//   useStripe,
//   useElements
// } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import { CoPresentOutlined } from "@mui/icons-material";


const DetailCard = () => {
  
  const navigate = useNavigate();
  // const stripe = useStripe();
  // const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [select, setSelect] = useState("card");
  const { productDetail } = useSelector((state) => state.productDetail);
  const { email } = useSelector((state) => state.email);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!stripe || !elements) {
  //     // Stripe.js hasn't yet loaded.
  //     // Make sure to disable form submission until Stripe.js has loaded.
  //     return;
  //   }

  //   setIsLoading(true);

  //   stripe.confirmPayment({
  //     elements,
  //     confirmParams: {
  //       // Return URL where the customer should be redirected after the PaymentIntent is confirmed.
  //       return_url: `http://localhost:3000/payment-success`,

  //     },
  //     redirect: "if_required"
  //   })
  //     .then(function (result) {
  //       console.log('aa', result)
  //       if (result.error) {
  //         if (result.error.type === "card_error" || result.error.type === "validation_error") {
  //           setMessage(result.error.message);
  //           setIsLoading(false);
  //         } else {
  //           setMessage("An unexpected error occurred.");
  //           setIsLoading(false);
  //         }
  //       } else {
  //         const getProductDetail = async () => {
  //           const response = await fetch(`/api/v2/products/${productDetail.productId}`, {
  //             headers: {
  //               'X-Api-Key': `${process.env.REACT_APP_KINGUIN_SANDBOX_API_KEY}`
  //             }
  //           });
  //           if (response.status === 200) {
  //             const data = await response.json();
  //             if (data) {
  //               // const addGame = async() => {
  //               //   const response = await myAxios.post('/game/add-ordered-game', {gameData: data})
  //               // }
  //               // addGame()
  //               localStorage.setItem('paymentStatus', true);
  //               window.location.href = `http://localhost:3000/payment-success/?payment_intent=${result.paymentIntent.id}&payment_intent_client_secret=${result.paymentIntent.client_secret}&product_name=${data.name}&product_kinguin_id=${data.kinguinId}&product_price=${data.price}&product_id${data.productId}&email=${email}`;
  //             }
  //           }
  //         }
  //         getProductDetail();


  //       }
  //     });

  //   // This point will only be reached if there is an immediate error when
  //   // confirming the payment. Otherwise, your customer will be redirected to
  //   // your `return_url`. For some payment methods like iDEAL, your customer will
  //   // be redirected to an intermediate site first to authorize the payment, then
  //   // redirected to the `return_url`.
  //   // if (error.type === "card_error" || error.type === "validation_error") {
  //   //   setMessage(error.message);
  //   // } else {
  //   //   setMessage("An unexpected error occurred.");
  //   // }
  //   // setIsLoading(false);


  // };

  // const paymentElementOptions = {
  //   layout: "tabs"
  // }


  // useEffect(() => {
  //   if (!stripe) {
  //     return;
  //   }

  //   const clientSecret = new URLSearchParams(window.location.search).get(
  //     "payment_intent_client_secret"
  //   );
  //   if (!clientSecret) {
  //     return;
  //   }

  //   stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
  //     switch (paymentIntent.status) {
  //       case "succeeded":
  //         navigate('/payment')
  //         // setMessage("Payment succeeded!");
  //         break;
  //       case "processing":
  //         setMessage("Your payment is processing.");
  //         break;
  //       case "requires_payment_method":
  //         setMessage("Your payment was not successful, please try again.");
  //         break;
  //       default:
  //         setMessage("Something went wrong.");
  //         break;
  //     }
  //   });
  // }, [stripe]);


  return productDetail && (
    <>
      <Grid container>
        <Grid
          item
          xl={6}
          lg={6.4}
          md={6}
          xs={12}
          sx={{ pt: { md: 0, xs: 3 } }}
          order={{ md: 1, xs: 2 }}
        >
          <Card
            sx={{
              ...boxStyle,
              pt: { sm: 4, xs: 2 },
              pl: { sm: 4, xs: 2 },
              pr: { sm: 4, xs: 2 },
            }}
          >
            <Grid container>
              <Grid
                item
                sm={8}
                xs={12}
                sx={{
                  ...paymentWrap,
                }}
                order={{ sm: 1, xs: 2 }}
              >
                <CardMedia
                  component="img"
                  image={productDetail.images && productDetail.images.cover && productDetail.images.cover.thumbnail ? productDetail.images.cover.thumbnail : (productDetail.images && productDetail.images.cover && productDetail.images.cover.url ? productDetail.images.cover.url : (productDetail.coverImageOriginal ? productDetail.coverImageOriginal : (productDetail.coverImage ? productDetail.coverImage : (productDetail.screenshots && productDetail.screenshots[0] ? productDetail.screenshots[0].url : (productDetail.images && productDetail.images.screenshots && productDetail.images.screenshots[0] ? productDetail.images.screenshots[0].url : (productDetail.screenshots && productDetail.screenshots[0] ? productDetail.screenshots[0].url : defaultImage))))))}
                  alt="not"
                  sx={{ objectFit: "fill", height: "48px", width: "48px" }}
                />
                <Typography
                  sx={{
                    ...paymentTitle,
                  }}
                >
                  {/* Replenishment of codes PUBG Mobile */}
                  {productDetail.originalName ? productDetail.originalName : productDetail.name}
                </Typography>
              </Grid>
              <Grid
                item
                sm={4}
                xs={12}
                sx={{ display: "flex", justifyContent: "end" }}
                order={{ sm: 2, xs: 1 }}
              >
                <Button
                  sx={{
                    ...paymentTitleBtn,
                  }}
                >
                  0:15:01
                </Button>
              </Grid>
            </Grid>
            <Divider width="100%" sx={{ py: 1, borderColor: "#303542" }} />

            <PaymentInvoice />
          </Card>
        </Grid>

        <Grid
          item
          xl={5}
          md={5}
          xs={12}
          sx={{ ml: { xl: 10, md: 5, xs: 0 }, pt: { md: 0, xs: 3 } }}
          order={{ md: 2, xs: 1 }}
        >
          <div id="tz-checkout"></div>
        </Grid>


        {/* <Grid
          item
          xl={4}
          md={5}
          xs={12}
          sx={{ ml: { xl: 10, md: 5, xs: 0 }, pt: { md: 0, xs: 3 } }}
          order={{ md: 2, xs: 1 }}
        >

          <FormControl fullWidth>
            <Typography
              sx={{
                ...paymentCardNo,
              }}
            >
              Number Card
            </Typography>
            <OutlinedInput
              id="outlined-adornment-email"
              type="email"
              placeholder="Number Card"
              name="email"
              sx={{
                ...paymentCardNoInp,
                //   background: "rgba(131, 151, 195, 0.2)",
              }}
              inputProps={{}}
              endAdornment={<HelpOutlineIcon sx={{ color: "#848CA1" }} />}
            />
          </FormControl>
          <Grid container spacing={2} sx={{ pt: 3 }}>
            <Grid item xs={6}>
              <Grid
                onClick={() => setSelect("card")}
                sx={{
                  ...paymentSx,
                  border:
                    select === "card"
                      ? "2px solid #3CCA5B"
                      : "2px solid rgba(131, 151, 195, 0.15)",
                }}
              >
                <CardMedia
                  component="img"
                  image={card}
                  alt="not"
                  sx={{ ...paymentImg }}
                />
                <Typography sx={{ pt: 1.5 }}>Card</Typography>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid
                onClick={() => setSelect("apple")}
                sx={{
                  ...paymentSx,
                  border:
                    select === "apple"
                      ? "2px solid #3CCA5B"
                      : "2px solid rgba(131, 151, 195, 0.15)",
                }}
              >
                <CardMedia
                  component="img"
                  image={apple}
                  alt="not"
                  sx={{ objectFit: "fill", height: "24px", width: "40px" }}
                />
                <Typography sx={{ pt: 1.5 }}>Apple Pay</Typography>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <Typography
                  sx={{
                    ...paymentTerms,
                  }}
                >
                  Term
                </Typography>
                <OutlinedInput
                  id="outlined-adornment-email"
                  type="email"
                  placeholder="ММ/YY"
                  value="ММ/YY"
                  name="email"
                  sx={{
                    ...paymentTermInp,
                  }}
                  inputProps={{}}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <Typography
                  sx={{
                    ...paymentCVV,
                  }}
                >
                  CVV
                </Typography>
                <OutlinedInput
                  id="outlined-adornment-email"
                  type="email"
                  value="CVC"
                  placeholder="CVC"
                  name="email"
                  sx={{
                    ...paymentCVVInp,
                  }}
                  inputProps={{}}
                  endAdornment={
                    <CardMedia
                      component="img"
                      image={card}
                      alt="not"
                      sx={{ ...paymentImg }}
                    />
                  }
                />
              </FormControl>

              
            </Grid>

            <Button
                fullWidth
                sx={{ ...paymentBtn }}
                onClick={() => navigate("/payment-success")}
              >
                Pay — 5,2 €
              </Button>
          </Grid>
          
        </Grid> */}

      </Grid>

      {/* <Grid sx={{ display: { sm: "flex", xs: "block" }, my: 4 }}>
        <PaymentModal
          btntext="Payment Modal 2"
          image={img1}
          height="183px"
          width={{ sm: "520px", xs: "200px" }}
        />
        <PaymentModal
          btntext="Payment Modal 3"
          image={img2}
          height="208px"
          width={{ sm: "520px", xs: "200px" }}
        />
        <InvoiceModal />
        <PaymentModal2
          btntext="Payment Modal 4"
          image={img3}
          height="208px"
          width={{ sm: "520px", xs: "270px" }}
        />
      </Grid> */}

    </>
  );
};

export default DetailCard;
