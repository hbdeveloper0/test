import {
  Container,
  Grid,
  Typography,
  Skeleton,
  CardMedia,
} from "@mui/material";
import React from "react";
import { BannerContSpace, skeltonColor } from "../../../../ui-component/landing/constants/style";
import headerImg from "../../../../assets/images/landing/SteamPurchase/HeaderImage1.png";
import img1 from "../../../../assets/images/landing/SteamPurchase/Steamicon.svg";
import img2 from "../../../../assets/images/landing/SteamPurchase/giftImg.svg";
import { useSelector } from "react-redux";
import {
  steamgiftHead,
  steamgiftHeadGradient,
  steamgiftHeadTitleWrap,
  steamgiftHeadTitle,
  steamgiftHeadDesc,
  steamgiftHeadEndImg,
  steamgiftHeadIcon,
} from "../../../../ui-component/landing/constants/SteamSx";
import DescriptionLength from "../../../../ui-component/landing/Components/DescriptionLength";

const HeaderImage = () => {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const title =
    "Steam — онлайн-сервис цифрового распространения компьютерных игр и программ, разработанный и поддерживаемый компанией Valve";
  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: { md: 15.5, sm: 23, xs: 8.5 },
        ...BannerContSpace,
      }}
    >
      {skeltonStatus ? (
        <>
          <Grid
            container
            sx={{
              display: "flex",
              borderRadius: { sm: 4, xs: 0 },
              overflow: "hidden",
            }}
          >
            <Grid
              sx={{
                background: `url(${headerImg})`,
                ...steamgiftHead,
              }}
            >
              <Grid
                sx={{
                  ...steamgiftHeadGradient,
                }}
              ></Grid>

              <Grid
                container
                sx={{
                  ...steamgiftHeadTitleWrap,
                }}
              >
                <Grid
                  item
                  xl={2}
                  lg={2.5}
                  md={2.5}
                  sm={3}
                  xs={3.5}
                  sx={{ pt: { lg: 9, md: 2, xs: 0 } }}
                >
                  <CardMedia
                    component="img"
                    image={img1}
                    alt="not"
                    sx={{
                      ...steamgiftHeadIcon,
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xl={5.7}
                  lg={4.5}
                  md={4.5}
                  xs={8.5}
                  sx={{ pt: { lg: 9, md: 2, xs: 0 } }}
                >
                  <Typography
                    sx={{
                      ...steamgiftHeadTitle,
                    }}
                  >
                    Покупка Gift Card Steam
                  </Typography>
                  <Typography
                    sx={{
                      ...steamgiftHeadDesc,
                    }}
                  >
                    <DescriptionLength title={title} />
                  </Typography>
                </Grid>
                <Grid item xl={4.3} lg={5} md={5}>
                  {" "}
                  <CardMedia
                    component="img"
                    image={img2}
                    alt="not"
                    sx={{
                      ...steamgiftHeadEndImg,
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      ) : (
        <Skeleton
          variant="rectangular"
          width="100%"
          sx={{
            ...skeltonColor,
            height: { sm: "355px", xs: "184px" },
          }}
        />
      )}
    </Container>
  );
};

export default HeaderImage;
