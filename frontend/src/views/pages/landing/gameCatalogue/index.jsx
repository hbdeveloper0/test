import React, { useEffect } from "react";
import GamesContainer from "./GamesContainer";

import DrawerAppBar from "../../../../layout/landing/HomePageLayout";
import Footer from "../../../../layout/landing/HomePageFooter";
import { Grid } from "@mui/material";

const GameCatalogue = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DrawerAppBar />
      <GamesContainer />
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

export default GameCatalogue;
