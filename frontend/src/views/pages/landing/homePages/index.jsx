import React, { useEffect } from "react";
import HeaderImg from "./HeaderImg";
import ServicesSlider from "./PopulerServices";
import MobileGames from "./MobileGames";
import SEOBlock from "../../../../ui-component/landing/Components/SEOBlock";
import { Grid } from "@mui/material";
import NewsPromotion from "../../../../ui-component/landing/Components/NewsPromotion";
import Reviews from "./Reviews";
import ServicesCatalog from "./ServicesCatalog";
import GamesCatelog from "./GameCatalog";
import MobileLanding from "./MobileLandingModel";
import { useDispatch, useSelector } from "react-redux";
import HomeStatus from "./homepageStatus";
import StatusScreen from "./homepageStatus/StatusScreen";
import MobileDropDown from "./MobileDropDown";
import { useMediaQuery } from "@mui/material";
import { changeMobileDropDownView } from "../../../../store/slices/landing/showMobileDropDown";
import { changeMobile } from "../../../../store/slices/landing/showMobileScreen";
import { AddProductDetail } from '../../../../store/slices/landing/productDetail';
import DrawerAppBar from "../../../../layout/landing/HomePageLayout";
import Footer from "../../../../layout/landing/HomePageFooter";

const HomePage = () => {
  const { gameStatus } = useSelector((state) => state.showStatus);
  const { status } = useSelector((state) => state.changeMobileScreen);
  const { dropDownStatus } = useSelector((state) => state.mobileDropDown);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (status) {
      dispatch(changeMobile(isSmallScreen));
    }
    if (dropDownStatus) {
      console.log(dropDownStatus);
      dispatch(
        changeMobileDropDownView({
          status: isSmallScreen,
          title: "",
          data: {},
        })
      );
    }
  }, [isSmallScreen]);

  useEffect(() => {
    dispatch(AddProductDetail(null))
  })

  if (gameStatus) {
    return <StatusScreen />;
  }


  // console.warn(status);

  return (
    <>
      <MobileDropDown />
      <Grid
        sx={{
          display: dropDownStatus ? "none" : "block",
        }}
      >
        <MobileLanding />
        <Grid
          sx={{
            display: status ? "none" : "block",
          }}
        >
          <DrawerAppBar/>
          <HomeStatus />
          <HeaderImg />
          <ServicesSlider />
          <ServicesCatalog />
          <MobileGames />
          <GamesCatelog />
          <Grid sx={{ pt: { sm: 6, xs: 0 } }}>
            <NewsPromotion />
          </Grid>
          <Grid sx={{ background: "rgba(131, 151, 195, 0.1)" }}>
            <Reviews />
          </Grid>
          <Grid sx={{ mt: { sm: 5.3, xs: 3 } }}>
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
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
