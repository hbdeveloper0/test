import React, { useEffect } from "react";
import whiteTele from "../../../assets/images/landing/telegram1.svg";
import { Container, Grid, Typography, Button, CardMedia } from "@mui/material";
import FAQS from "../../../ui-component/landing/Components/Faqs";
import { containerSpace } from "../../../ui-component/landing/constants/style";
import DrawerAppBar from "../../../layout/landing/HomePageLayout";
import Footer from "../../../layout/landing/HomePageFooter";
import {
  FaqsTitle,
  FaqsBtn,
  FaqsBtnImg,
  FaqsBtnTxt,
  FaqsBtnWrap,
} from "../../../ui-component/landing/constants/FaqSx";

const FAQs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DrawerAppBar />
      <Container
        maxWidth="xl"
        sx={{
          ...containerSpace,
          mt: { md: 15.5, sm: 23, xs: 12.3 },
          pt: { sm: 6, xs: 1 },
          pb: { lg: 12, md: 10, xs: 3 },
        }}
      >
        <Grid sx={{ width: { xl: "92%", xs: "100%" } }}>
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                ...FaqsTitle,
              }}
            >
              FAQ
            </Typography>
            <Grid>
              <Button
                sx={{
                  ...FaqsBtn,
                }}
              >
                <Grid
                  sx={{
                    ...FaqsBtnWrap,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={whiteTele}
                    alt="not"
                    sx={{
                      ...FaqsBtnImg,
                    }}
                  />
                </Grid>

                <Typography
                  variant="overline"
                  sx={{
                    ...FaqsBtnTxt,
                  }}
                >
                  Official Telegram
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid sx={{ pt: 4 }}>
            <FAQS padd={{ sm: 1, xs: 0 }} />
          </Grid>
        </Grid>
      </Container>

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

export default FAQs;
