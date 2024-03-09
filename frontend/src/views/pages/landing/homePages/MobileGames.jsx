import {
  Button,
  CardMedia,
  Container,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  MobileGame,
  Subscription,
  MobileGameSkelton,
} from "../../../../ui-component/landing/Data/HomePageData";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BannerContSpace, skeltonBg } from "../../../../ui-component/landing/constants/style";
import {
  mobileGamHeadTxt,
  mobGamGridWrap,
  mobAndSubWrap,
  mobAndSubTxt,
  mobAndSubImgWrap,
  mobAndSubImg,
  mobGamBecButton,
  mobGamBecTxt,
  mobGamBecWrap,
} from "../../../../ui-component/landing/constants/homepageSx";
import Skelton from "../../../../ui-component/landing/Components/Skelton";

const MobileGames = () => {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);

  const navigate = useNavigate();
  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: { md: 3, xs: 0 },
        ...BannerContSpace,
      }}
    >
      <Grid container spacing={{ sm: 3, xs: 0 }} sx={{ py: { sm: 5, xs: 3 } }}>
        <Grid item md={6} xs={12}>
          <Grid
            sx={{
              ...mobGamGridWrap,
            }}
          >
            {skeltonStatus ? (
              <>
                <Typography
                  sx={{
                    ...mobileGamHeadTxt,
                  }}
                >
                  Mobile games
                </Typography>
                <Grid sx={{ ...mobGamBecWrap }}>
                  <Button
                    onClick={() => navigate("/game-purchase")}
                    sx={{
                      ...mobGamBecButton,
                    }}
                  >
                    <Typography
                      sx={{
                        ...mobGamBecTxt,
                      }}
                    >
                      Bec
                    </Typography>{" "}
                    <ChevronRightIcon />
                  </Button>
                </Grid>
              </>
            ) : (
              <>
                <Skeleton
                  width="40%"
                  height={60}
                  sx={{
                    backgroundColor: "#1B2037",
                    marginBottom: "10px",
                  }}
                />
                <Skeleton
                  width="15%"
                  height={60}
                  sx={{
                    backgroundColor: "#1B2037",
                    borderRadius: 6,
                  }}
                />
              </>
            )}
          </Grid>

          <Grid sx={{ pt: { sm: 3, xs: 1.5 } }}>
            <Grid
              container
              sx={{
                ...mobAndSubWrap,
              }}
            >
              {skeltonStatus ? (
                <>
                  {MobileGame.map((data, index) => (
                    <Grid
                      item
                      lg={2}
                      md={2.4}
                      sm={2.4}
                      xs={3}
                      // sx={{     textAlign: '-webkit-center'}}
                      sx={{
                        ...mobAndSubImgWrap,
                      }}
                      key={index}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          ...mobAndSubImg,
                        }}
                        image={data.img}
                        alt="Paella dish"
                      />
                      <Typography
                        sx={{
                          ...mobAndSubTxt,
                        }}
                      >
                        {data.title}
                      </Typography>
                    </Grid>
                  ))}
                </>
              ) : (
                <>
                  {MobileGameSkelton.map((data, index) => (
                    <Grid
                      item
                      lg={2}
                      md={2.4}
                      sm={2.4}
                      xs={3}
                      sx={{ pr: 1 }}
                      key={index}
                    >
                      <Skelton
                        // height={98}
                        // width={70}
                        style={{
                          ...skeltonBg,
                          height: "98px",
                          width: "100%",
                        }}
                      />
                      <Skeleton
                        width="90%"
                        style={{
                          ...skeltonBg,
                        }}
                      />
                      <Skeleton
                        width="60%"
                        style={{
                          ...skeltonBg,
                        }}
                      />
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={6} xs={12} sx={{ pt: { sm: "none", xs: 2 } }}>
          <Grid
            sx={{
              ...mobGamGridWrap,
              pt: { md: 0, sm: 2.5, xs: 1 },
            }}
          >
            {skeltonStatus ? (
              <>
                <Typography
                  sx={{
                    ...mobileGamHeadTxt,
                  }}
                >
                  Subscriptions and payment cards
                </Typography>
                <Grid sx={{ ...mobGamBecWrap }}>
                  <Button
                    sx={{
                      ...mobGamBecButton,
                    }}
                  >
                    <Typography
                      sx={{
                        ...mobGamBecTxt,
                      }}
                    >
                      Bec
                    </Typography>{" "}
                    <ChevronRightIcon />
                  </Button>
                </Grid>
              </>
            ) : (
              <>
                <Skeleton
                  width="60%"
                  height={60}
                  sx={{
                    backgroundColor: "#1B2037",
                    marginBottom: "10px",
                  }}
                />
                <Skeleton
                  width="15%"
                  height={60}
                  sx={{
                    backgroundColor: "#1B2037",
                    borderRadius: 6,
                  }}
                />
              </>
            )}
          </Grid>

          <Grid sx={{ pt: { sm: 3, xs: 1.5 } }}>
            <Grid
              container
              sx={{
                ...mobAndSubWrap,
              }}
            >
              {skeltonStatus ? (
                <>
                  {Subscription.map((data, index) => (
                    <Grid
                      item
                      lg={2}
                      md={2.4}
                      sm={2.4}
                      xs={3}
                      sx={{
                        ...mobAndSubImgWrap,
                      }}
                      key={index}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          ...mobAndSubImg,
                        }}
                        image={data.img}
                        alt="Paella dish"
                      />
                      <Typography
                        sx={{
                          ...mobAndSubTxt,
                        }}
                      >
                        {data.title}
                      </Typography>
                    </Grid>
                  ))}
                </>
              ) : (
                <>
                  {MobileGameSkelton.map((data, index) => (
                    <Grid
                      item
                      lg={2}
                      md={2.4}
                      sm={2.4}
                      xs={3}
                      sx={{ pr: 1 }}
                      key={index}
                    >
                      <Skelton
                        // height={98}
                        // width={70}
                        style={{
                          ...skeltonBg,
                          height: "98px",
                          width: "100%",
                        }}
                      />
                      <Skeleton
                        width="90%"
                        style={{
                          ...skeltonBg,
                        }}
                      />
                      <Skeleton
                        width="60%"
                        style={{
                          ...skeltonBg,
                        }}
                      />
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MobileGames;
