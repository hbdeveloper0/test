import React, { useEffect } from "react";
import SEOBlock from "../../../../ui-component/landing/Components/SEOBlock";
import { Grid } from "@mui/material";
import MightLike from "../../../../ui-component/landing/Components/MightLike";
import HeaderPubgPurchase from "./HeaderPubgPurchase";
import PubgPurchaseDetail from "./PubgPurchaseDetail";
import DrawerAppBar from "../../../../layout/landing/HomePageLayout";
import Footer from "../../../../layout/landing/HomePageFooter";

const PUBGPurchase = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DrawerAppBar />
      <HeaderPubgPurchase />
      <PubgPurchaseDetail />
      <Grid sx={{ pt: { lg: 2, xs: 1 } }}>
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

export default PUBGPurchase;
