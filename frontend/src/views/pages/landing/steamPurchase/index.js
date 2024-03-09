import React, { useEffect } from "react";
import DrawerAppBar from "../../../../layout/landing/HomePageLayout";
import Footer from "../../../../layout/landing/HomePageFooter";
import SEOBlock from "../../../../ui-component/landing/Components/SEOBlock";
import { Grid } from "@mui/material";
import MightLike from "../../../../ui-component/landing/Components/MightLike";
import BannerImage from "./BannerImage";
import SteamDetail from "./steamDetail";


const SteamPurchase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DrawerAppBar/>
      <BannerImage />
      <SteamDetail />
      <MightLike />
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

export default SteamPurchase;
