import Skeleton from "@mui/material/Skeleton";
import { Typography, CardMedia, Grid, Card, Container } from "@mui/material";
import { useSelector } from "react-redux";
import CrousalSlider from "./Slider";
import Skelton from "./Skelton";
import { useNavigate } from "react-router-dom";
import { containerSpace, skeltonColor } from "../constants/style";
import { NewsPromotionData } from "../Data/Data";
import {
  newsPromoTitle,
  newsPromoTxt,
  newsPromoDate,
  newsPromoDesc,
  newsPromoCard,
  newsPromoImg,
} from "../constants/style";

export default function NewsPromotion() {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: { sm: 0.1, xs: 2 },
        ...containerSpace,
      }}
    >
      <Grid sx={{ pt: 0, pb: { sm: 3, xs: 1.5 } }}>
        <Grid container sx={{}}>
          {skeltonStatus ? (
            <Typography
              sx={{
                ...newsPromoTitle,
              }}
            >
              News and promotions
            </Typography>
          ) : (
            <Skeleton width="50%" height={70} sx={{ ...skeltonColor }} />
          )}
        </Grid>

        <CrousalSlider
          slideToshow={4}
          firstbp={3.2}
          secondbp={2.3}
          thirdbp={1.2}
          title="Popular services"
          haveBtn={false}
        >
          {skeltonStatus
            ? NewsPromotionData.map((card, index) => (
                <Grid
                  key={index}
                  container
                  sx={{
                    display: "flex",
                    pt: { sm: 3, xs: 1 },
                  }}
                >
                  <Grid sx={{ pl: index === 0 ? 0 : { sm: 1.5, xs: 1.5 } }}>
                    <Card
                      onClick={() => navigate("/news-promotion")}
                      sx={{
                        ...newsPromoCard,
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          ...newsPromoImg,
                        }}
                        image={card.imageSrc}
                        alt="Paella dish"
                      />
                      <Grid>
                        <Typography
                          sx={{
                            // pl: 0.5,
                            // pr: 2.5,
                            ...newsPromoTxt,
                          }}
                        >
                          {card.name}
                        </Typography>
                        <Typography
                          sx={{
                            ...newsPromoDesc,
                            // pl: 0.5,
                          }}
                        >
                          {card.desc}
                        </Typography>
                        <Typography
                          sx={{
                            ...newsPromoDate,
                          }}
                        >
                          {card.date}
                        </Typography>
                      </Grid>
                    </Card>
                  </Grid>
                </Grid>
              ))
            : [1, 2, 3, 4].map((data, index) => (
                <Grid key={index} sx={{ pr: 2, pt: 1 }}>
                  <Skelton
                    width="100%"
                    style={{
                      height: 206,
                    }}
                  />
                  <Skeleton
                    style={{
                      ...skeltonColor,
                      height: 56,
                      pt: 1,
                    }}
                  />
                  <Skeleton
                    style={{
                      ...skeltonColor,
                      height: 26,
                    }}
                  />
                </Grid>
              ))}
        </CrousalSlider>

        {/* <Grid container>

                {skeltonStatus ?

                (
                 <CrousalSlider
                            slideToshow={6}
                            firstbp={4}
                            secondbp={3}
                            thirdbp={2}
                            title="Popular services"
                            haveBtn={true}
                        >
                    {pricingCards.map((card, index) => (
                        <Grid item xs={3} sx={{ pr: 2.4 }} key={index}>
                            <Card
                                sx={{
                                    background: "#101328",
                                    boxShadow:
                                        " 0px 1px 1px -1px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 1px 100px 0px rgba(0,0,0,0.12); !important",
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{
                                        height: "187px",
                                        objectFit: "fill",
                                        borderRadius: 3,
                                    }}
                                    image={card.imageSrc}
                                    alt="Paella dish"
                                />
                                <Typography
                                    sx={{
                                        pt: 2,
                                        pl: 0.5,
                                        pr: 2.5,
                                        fontSize: 20,
                                        fontWeight: {sm:700,xs:400},
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {card.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 16,
                                        fontWeight: 400,
                                        color: "#FFFFFF",
                                        pt: 1,
                                    }}
                                >
                                    {card.desc}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 14,
                                        fontWeight: 400,
                                        color: "#8C95AD",
                                        py: 2,
                                    }}
                                >
                                    {card.date}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                    </CrousalSlider>
                    
                )
                :  (
                    <>
                    {[1, 2, 3, 4].map((data, index) => (
                        <Grid item xs={3} key={index} sx={{ pr: 2 }}>
                            <Skelton
                                width={305}
                                height={187}

                            />
                            <Skelton
                             width={227}
                             height={46}
                                style={{
                                    borderRadius:2,
                                    marginTop:"20px"
                                }}
                            />
                            <Skelton
                              width={178}
                              height={37}
                                style={{
                                    borderRadius:2,
                                    marginTop:"8px"
                                }}
                            />
                            <Skelton
                              width={219}
                              height={24}
                                style={{
                                    borderRadius:1,
                                    marginTop:"12px"
                                }}
                            />
                        </Grid>
                    ))}
                    </>
                )}

                </Grid> */}
      </Grid>
    </Container>
  );
}
