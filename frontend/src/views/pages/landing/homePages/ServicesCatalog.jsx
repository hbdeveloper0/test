import React from "react";
import { useSelector } from "react-redux";
import img2 from "../../../../assets/images/landing/IMG/IMG4.png";
import img4 from "../../../../assets/images/landing/IMG/IMG5.png";
import img5 from "../../../../assets/images/landing/IMG/IMG3.png";
import img6 from "../../../../assets/images/landing/IMG/IMG6.png";
import img7 from "../../../../assets/images/landing/IMG/IMG7.png";
import img8 from "../../../../assets/images/landing/IMG/IMG6.png";
import { Container, Grid, Skeleton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Skelton from "../../../../ui-component/landing/Components/Skelton";
import HotChip from "../../../../ui-component/landing/Components/HotChip";
import { containerSpace, skeltonColor } from "../../../../ui-component/landing/constants/style";
import {
  SreviceimgSx,
  ServicetextSx,
  ServiceHeadTxt,
  ServicedisplayImg,
} from "../../../../ui-component/landing/constants/homepageSx";

const ServicesCatalog = () => {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: { lg: 4.5, sm: 3, xs: 2 },
        ...containerSpace,
      }}
    >
      {skeltonStatus ? (
        <Typography
          sx={{
            ...ServiceHeadTxt,
          }}
        >
          Services catalog
        </Typography>
      ) : (
        <Skeleton
          width="50%"
          height={60}
          sx={{ ...skeltonColor, marginBottom: "20px" }}
        />
      )}
      <Grid
        container
        spacing={{ sm: 2, xs: 1 }}
        sx={{ display: { md: "flex", sm: "none", xs: "flex" } }}
      >
        {skeltonStatus ? (
          <>
            <Grid
              order={{ sm: 1, xs: 2 }}
              item
              xs={3}
              sx={{
                ...ServicedisplayImg,
              }}
            >
              <Grid
                onClick={() => navigate("/xbox")}
                sx={{
                  background: `url(${img2})`,
                  height: { lg: "318px", md: "293px", xs: "94px" },
                  mb: { sm: "12px", xs: "8px" },
                  ...SreviceimgSx,
                }}
              >
                <Grid>
                  <HotChip />
                </Grid>
                <Typography
                  sx={{
                    width: { sm: "75%", xs: "96%" },
                    ...ServicetextSx,
                  }}
                >
                  Subscription : Xbox and Playstation
                </Typography>
              </Grid>
              <Grid
                onClick={() => navigate("/steam-purchase")}
                sx={{
                  background: `url(${img2})`,
                  height: { lg: "323px", md: "298px", xs: "90px" },
                  ...SreviceimgSx,
                }}
              >
                <Grid>
                  <HotChip />
                </Grid>
                <Typography
                  sx={{
                    width: { sm: "75%", xs: "96%" },
                    ...ServicetextSx,
                  }}
                >
                  Replenishment Steam
                </Typography>
              </Grid>
            </Grid>
            <Grid
              order={{ sm: 2, xs: 3 }}
              item
              xs={3}
              sx={{
                ...ServicedisplayImg,
              }}
            >
              <Grid
                sx={{
                  background: `url(${img4})`,
                  height: { lg: "413px", md: "368px", xs: "94px" },
                  ...SreviceimgSx,
                }}
              >
                <Grid>
                  <HotChip />
                </Grid>
                <Typography
                  sx={{
                    width: { lg: "75%", sm: "85%", xs: "96%" },
                    ...ServicetextSx,
                  }}
                >
                  Games at competitive prices
                </Typography>
              </Grid>

              <Grid
                onClick={() => navigate("/steam-gift-card-purchase")}
                sx={{
                  background: `url(${img4})`,
                  height: { lg: "228px", md: "223px", xs: "90px" },
                  ...SreviceimgSx,
                }}
              >
                {" "}
                <Grid>
                  <HotChip />
                </Grid>
                <Typography
                  sx={{
                    width: { sm: "75%", xs: "96%" },
                    ...ServicetextSx,
                  }}
                >
                  Gift cards
                </Typography>
              </Grid>
            </Grid>
            <Grid
              order={{ sm: 3, xs: 1 }}
              item
              xs={6}
              sx={{
                ...ServicedisplayImg,
              }}
            >
              <Grid
                sx={{
                  background: `url(${img5})`,
                  height: { lg: "289px", md: "264px", xs: "90px" },
                  ...SreviceimgSx,
                }}
              >
                {" "}
                <Grid>
                  <HotChip />
                </Grid>
                <Typography
                  sx={{
                    width: { sm: "75%", xs: "96%" },
                    ...ServicetextSx,
                  }}
                >
                  Mobile games replenishment
                </Typography>
              </Grid>
              <Grid container spacing={{ sm: 2, xs: 1 }}>
                <Grid item xs={6}>
                  <Grid
                    sx={{
                      background: `url(${img6})`,
                      height: { lg: "352px", md: "327px", xs: "90px" },
                      ...SreviceimgSx,
                    }}
                  >
                    {" "}
                    <Grid>
                      <HotChip />
                    </Grid>
                    <Typography
                      sx={{
                        width: { sm: "75%", xs: "96%" },
                        ...ServicetextSx,
                      }}
                    >
                      Call of Duty 3. Warfare 3
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid
                    onClick={() => navigate("/pubg-purchase")}
                    sx={{
                      background: `url(${img7})`,
                      height: { lg: "352px", md: "327px", xs: "90px" },
                      ...SreviceimgSx,
                    }}
                  >
                    {" "}
                    <Grid>
                      <HotChip />
                    </Grid>
                    <Typography
                      sx={{
                        width: { sm: "75%", xs: "96%" },
                        ...ServicetextSx,
                      }}
                    >
                      PUPG Mobile
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Grid
              order={{ sm: 1, xs: 2 }}
              item
              xs={3}
              sx={{
                ...ServicedisplayImg,
              }}
            >
              <Skelton
                style={{
                  width: "100%",
                  height: { sm: 318, xs: 90 },
                }}
              />
              <Grid sx={{ pt: 2 }}>
                <Skelton
                  style={{
                    width: "100%",
                    height: { sm: 323, xs: 90 },
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              order={{ sm: 2, xs: 3 }}
              item
              xs={3}
              sx={{
                ...ServicedisplayImg,
              }}
            >
              <Skelton
                style={{
                  width: "100%",
                  height: { sm: 413, xs: 90 },
                }}
              />
              <Grid sx={{ pt: 2 }}>
                <Skelton
                  style={{
                    width: "100%",
                    height: { sm: 228, xs: 90 },
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              order={{ sm: 3, xs: 1 }}
              item
              xs={6}
              sx={{
                ...ServicedisplayImg,
              }}
            >
              <Skelton
                style={{
                  height: { sm: 289, xs: 90 },
                  width: "100%",
                  // ml: { sm: 0, xs: 3 },
                }}
              />
              <Grid container>
                <Grid item xs={6}>
                  <Skelton
                    style={{
                      width: "97%",
                      height: { sm: 352, xs: 90 },
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Skelton
                    style={{
                      width: "100%",
                      height: { sm: 352, xs: 90 },
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
      <Grid
        container
        spacing={1.5}
        sx={{ display: { md: "none", sm: "flex", xs: "none" } }}
      >
        {skeltonStatus ? (
          <>
            <Grid item xs={8}>
              <Grid container spacing={1.5}>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* <CardMedia
                    component="img"
                    image={img1}
                    alt="not"
                    sx={{
                      // width:"244px",
                      height: "197px",
                      objectFit: "fill",
                      pb: 1.5,
                    }}
                  /> */}

                  <Grid
                    onClick={() => navigate("/xbox")}
                    sx={{
                      background: `url(${img2})`,
                      height: "197px",
                      mb: 1.5,
                      ...SreviceimgSx,
                    }}
                  >
                    {" "}
                    <Grid>
                      <HotChip />
                    </Grid>
                    <Typography
                      sx={{
                        width: { sm: "75%", xs: "96%" },
                        ...ServicetextSx,
                      }}
                    >
                      Subscriptions: Xbox and Playstation
                    </Typography>
                  </Grid>

                  <Grid
                    onClick={() => navigate("/steam-purchase")}
                    sx={{
                      background: `url(${img2})`,
                      height: "231px",
                      ...SreviceimgSx,
                    }}
                  >
                    {" "}
                    <Grid>
                      <HotChip />
                    </Grid>
                    <Typography
                      sx={{
                        width: { sm: "75%", xs: "96%" },
                        ...ServicetextSx,
                      }}
                    >
                      Replenishment Steam
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Grid
                    sx={{
                      background: `url(${img4})`,
                      height: "292px",
                      mb: 1.5,
                      ...SreviceimgSx,
                    }}
                  >
                    <Grid>
                      <HotChip />
                    </Grid>
                    <Typography
                      sx={{
                        width: { sm: "75%", xs: "96%" },
                        ...ServicetextSx,
                      }}
                    >
                      Games at competitive prices
                    </Typography>
                  </Grid>

                  <Grid
                    onClick={() => navigate("/steam-gift-card-purchase")}
                    sx={{
                      background: `url(${img4})`,
                      height: "138px",
                      ...SreviceimgSx,
                    }}
                  >
                    {" "}
                    <Grid>
                      <HotChip />
                    </Grid>
                    <Typography
                      sx={{
                        width: { sm: "75%", xs: "96%" },
                        ...ServicetextSx,
                      }}
                    >
                      Gift cards
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid sx={{ pt: 1.5 }}>
                <Grid
                  sx={{
                    background: `url(${img5})`,
                    height: "232px",
                    ...SreviceimgSx,
                  }}
                >
                  {" "}
                  <Grid>
                    <HotChip />
                  </Grid>
                  <Typography
                    sx={{
                      width: { sm: "75%", xs: "96%" },
                      ...ServicetextSx,
                    }}
                  >
                    Mobile games replenishment
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                ...ServicedisplayImg,
              }}
            >
              <Grid
                sx={{
                  background: `url(${img8})`,
                  height: "377px",
                  mb: 1.5,
                  ...SreviceimgSx,
                }}
              >
                {" "}
                <Grid>
                  <HotChip />
                </Grid>
                <Typography
                  sx={{
                    width: { sm: "75%", xs: "96%" },
                    ...ServicetextSx,
                  }}
                >
                  Call of Duty 3. Warfare 3
                </Typography>
              </Grid>

              <Grid
                onClick={() => navigate("/pubg-purchase")}
                sx={{
                  background: `url(${img7})`,
                  height: "301px",
                  ...SreviceimgSx,
                }}
              >
                <Grid>
                  <HotChip />
                </Grid>
                <Typography
                  sx={{
                    width: { sm: "75%", xs: "96%" },
                    ...ServicetextSx,
                  }}
                >
                  PUPG Mobile
                </Typography>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={8}>
              <Grid container spacing={1.5}>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Skelton
                    style={{
                      // width:"244px",
                      height: "197px",
                      mb: 1.5,
                    }}
                  />
                  <Skelton
                    style={{
                      height: "231px",
                      // width:"244px",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Skelton
                    style={{
                      // width:"244px",
                      height: "292px",
                      mb: 1.5,
                    }}
                  />
                  <Skelton
                    style={{
                      height: "138px",
                      // width:"244px",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid sx={{ pt: 1.5 }}>
                <Skelton
                  style={{
                    height: "232px",
                    // width:"505px",
                  }}
                />
              </Grid>
            </Grid>

            <Grid
              item
              xs={4}
              sx={{
                ...ServicedisplayImg,
              }}
            >
              <Skelton
                style={{
                  // width:"248px",
                  height: "377px",
                  mb: 2,
                }}
              />
              <Skelton
                style={{
                  // width:"248px",
                  height: "301px",
                }}
              />
            </Grid>
          </>
        )}
      </Grid>
    </Container>
  );
};
export default ServicesCatalog;
