import React from "react";
import headerImg from "../../../../assets/images/landing/Mainimage.svg";
import header2 from "../../../../assets/images/landing/header2.png";
import img1 from "../../../../assets/images/landing/headerDownimg1.png";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { Card, CardMedia, Container, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import CrousalSlider from "../../../../ui-component/landing/Components/Slider";
import Skelton from "../../../../ui-component/landing/Components/Skelton";
import { useSelector } from "react-redux";
import HotChip from "../../../../ui-component/landing/Components/HotChip";
import { containerSpace, skeltonColor } from "../../../../ui-component/landing/constants/style";
import {
  HeaderImgGames,
  HeaderSliderImgs,
} from "../../../../ui-component/landing/Data/HomePageData";
import {
  homepageBanner,
  homepageBannerChip,
  homepageBannerGradient,
  homepageBanner2,
  homepageSliderImg,
  homepageSliderCard,
  homepageSliderTxt,
  homepageCircualImg,
  homepageCircualProgress,
  homepageCircualSelectImgWrap,
  homepageCircualSelectImg,
  homepageCircualImgWrap,
} from "../../../../ui-component/landing/constants/homepageSx";

const HeaderImg = () => {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: { md: 2, xs: 1 },
        ...containerSpace,
      }}
    >
      {skeltonStatus ? (
        <Grid
          container
          sx={{
            display: "flex",
            borderRadius: { sm: 6, xs: 4 },
            overflow: "hidden",
          }}
        >
          <Grid
            sx={{
              background: `url(${header2})`,
              ...homepageBanner,
            }}
          ></Grid>
          <Grid
            sx={{
              background: `url(${headerImg})`,
              ...homepageBanner2,
            }}
          >
            <Grid
              sx={{
                ...homepageBannerChip,
              }}
            >
              <HotChip />
            </Grid>

            <Grid
              sx={{
                ...homepageBannerGradient,
              }}
            ></Grid>

            {/* <Grid
              sx={{
                position: "absolute",
                zIndex: 1,
                top: { lg: 80, md: 100, sm: 70, xs: 28 },
                left: { lg: -60, md: -120, sm: -110, xs: -45 },
              }}
            >
              <Typography
                sx={{
                  Font: "Nunito Sans",
                  lineHeight: { sm: "64px", xs: "25px" },
                  fontWeight: 700,
                  fontSize: {
                    xl: "48px",
                    lg: "48px",
                    md: "48px",
                    sm: "48px",
                    xs: "18px",
                  },
                }}
              >
                WEEK OF DISCOUNTS
                <br />
                ON PUPG MOBILE
              </Typography>
              <Button
                style={{ background: "#00EE34", color: "#000" }}
                sx={{
                  p: { sm: "14px 24px", xs: "8px 18px" },
                  borderRadius: { sm: 4, xs: "10px" },
                  mt: 1.5,
                  fontWeight: { sm: 700, xs: 600 },
                  fontSize: { sm: "18px", xs: "16px" },
                  lineHeight: { sm: "24px", xs: "22px" },
                  textTransform: "none",
                }}
              >
                <Typography sx={{}}></Typography> Забрать, скидку!
              </Button>
            </Grid> */}
            <Grid
              sx={{
                ...homepageCircualImgWrap,
              }}
            >
              <Box sx={{ position: "relative", display: "inline-flex", mr: 2 }}>
                <CircularProgress
                  size={35}
                  sx={{
                    ...homepageCircualProgress,
                  }}
                  variant="determinate"
                  value={75}
                />
                <Box
                  sx={{
                    ...homepageCircualSelectImgWrap,
                  }}
                >
                  <CardMedia
                    sx={{
                      ...homepageCircualSelectImg,
                    }}
                    component="img"
                    image={img1}
                    alt="Paella dish"
                  />
                </Box>
              </Box>

              {HeaderSliderImgs.map((data, index) => (
                <CardMedia
                  sx={{
                    ...homepageCircualImg,
                  }}
                  key={index}
                  component="img"
                  image={data.image}
                  alt="Paella dish"
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Skeleton
          variant="rectangular"
          width="100%"
          // height={{sm:400,xs:"184px"}}
          sx={{
            ...skeltonColor,
            height: { sm: "400px", xs: "184px" },
          }}
        />
      )}

      <Grid sx={{ pt: { md: 4, xs: 3 } }}>
        <CrousalSlider
          slideToshow={8.1}
          bp={6.2}
          firstbp={5.1}
          secondbp={5.1}
          thirdbp={2.1}
          title=" "
          haveBtn={false}
        >
          {skeltonStatus
            ? HeaderImgGames.map((data, index) => (
                <Grid key={index} sx={{ pr: 1.2 }}>
                  <Card
                    onClick={() => navigate("/steam-purchase")}
                    sx={{
                      ...homepageSliderCard,
                      // width:"max-content !important"
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={data.img}
                      alt="not"
                      sx={{ ...homepageSliderImg }}
                    />
                    <Typography
                      sx={{
                        ...homepageSliderTxt,
                      }}
                    >
                      {data.name}
                    </Typography>
                  </Card>
                </Grid>
              ))
            : [1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => (
                <Grid key={index} sx={{ pr: 2 }}>
                  <Skelton
                    style={{
                      width: "100%",
                      height: "48px",
                    }}
                  />
                </Grid>
              ))}
        </CrousalSlider>
      </Grid>
    </Container>
  );
};

export default HeaderImg;
