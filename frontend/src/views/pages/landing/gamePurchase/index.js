import React, { useEffect } from "react";
import DrawerAppBar from "../../../../layout/landing/HomePageLayout";
import Footer from "../../../../layout/landing/HomePageFooter";
import SEOBlock from "../../../../ui-component/landing/Components/SEOBlock";
import BannerImg from "./BannerImg";
import { Grid, Typography } from "@mui/material";
import MightLike from "../../../../ui-component/landing/Components/MightLike";
import GameImageSlider from "./GameImageSlider";
import GameDetail from "./GameDetail";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { AddProductDetail } from '../../../../store/slices/landing/productDetail'

import myAxios from '../../../../axios'


const GamePurchase = () => {
  // const { productDetail } = useSelector((state) => state.productDetail);
  // const allProducts = useSelector((state) => state.changeSkelton.products);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const productId = location.state;

  useEffect(() => {
    if (!productId) {
      navigate('/')
    } else {
      console.log('aaa', productId)
      const getGame = async() => {
        const response = await myAxios.post('/product/getProduct', {productId});
        if(response.status == 200) {
          const productData = response.data.data.product;
          dispatch(AddProductDetail(productData))
        }
      }
      getGame()
      // dispatch(AddProductDetail(product))
      // const getProductDetail = async () => {
      //   const response = await fetch(`/api/v2/products/${productId}`, {
      //     headers: {
      //       'X-Api-Key': `${process.env.REACT_APP_KINGUIN_SANDBOX_API_KEY}`
      //     }
      //   });

      //   const data = await response.json()
      //   console.log('aa', data)
      //   dispatch(AddProductDetail(data))
      // }
      // getProductDetail()
    }
  })

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  });


  return (
    <>
      <DrawerAppBar />
      <BannerImg />
      <GameImageSlider />
      <GameDetail />
      <Grid sx={{ pt: { lg: 5, sm: 2, xs: 1 } }}>
        <MightLike />
      </Grid>

      <Grid sx={{ pt: { lg: 1.7, sm: 0, xs: 2 } }}>
        <SEOBlock />
      </Grid>

      <Grid
        sx={{
          background: "rgba(131, 151, 195, 0.1)",
          borderRadius: { sm: 0, xs: "16px 16px 0px 0px" },

        }}
      >
        <Footer />
      </Grid>
    </>
  );
};

export default GamePurchase;
