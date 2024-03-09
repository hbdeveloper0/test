import { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Container, Typography, Rating, Grid, Card, Box } from "@mui/material";
import { useSelector } from "react-redux";
import Skelton from "../../../../ui-component/landing/Components/Skelton";
import CrousalSlider from "../../../../ui-component/landing/Components/Slider";
import { containerSpace, skeltonBg } from "../../../../ui-component/landing/constants/style";
import { review } from "../../../../ui-component/landing/Data/HomePageData";
import {
  reviewCardSx,
  ReviewHeadTxt,
  ReviewHeadStarTxt,
  ReviewHeadDesc,
  reviewCardDate,
  reviewCardDesc,
  reviewCardTitle,
  reviewCardVerfied,
  reviewCardVerfiedTxt,
  reviewCardStarTxt,
} from "../../../../ui-component/landing/constants/homepageSx";

export default function Reviews() {
  const [value, setValue] = useState(5);
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);

  return (
    <Container maxWidth="xl" sx={{ ...containerSpace }}>
      <Grid sx={{ pt: { sm: 3, xs: 2 }, pb: { sm: 4, xs: 2 } }}>
        <Grid item xs={6} sx={{}}>
          {skeltonStatus ? (
            <Typography
              sx={{
                ...ReviewHeadTxt,
              }}
            >
              Reviews
            </Typography>
          ) : (
            <Skelton
              width={167}
              height={40}
              style={{
                ...skeltonBg,
              }}
            />
          )}
        </Grid>
        <Grid container sx={{ pb: { sm: 2, xs: 0 } }}>
          <Grid item sm={6} xs={12}>
            {skeltonStatus ? (
              <Typography
                sx={{
                  ...ReviewHeadDesc,
                }}
              >
                Рейтинг более 5 из 5 на <StarRateIcon sx={{ pt: 1 }} />{" "}
                trustpilot.com
              </Typography>
            ) : (
              <Skelton
                width={259}
                height={24}
                style={{
                  ...skeltonBg,
                  mt: 1,
                }}
              />
            )}
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: { sm: "end", xs: "start" },
              py: { sm: 0, xs: 1 },
            }}
          >
            {skeltonStatus ? (
              <>
                <Rating
                  sx={{ color: "#3CCA5B", fontSize: "auto" }}
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <Typography
                  sx={{
                    ...ReviewHeadStarTxt,
                  }}
                >
                  &nbsp;
                  {value} (102)
                </Typography>
              </>
            ) : (
              <Skelton
                width={259}
                height={24}
                style={{
                  ...skeltonBg,
                  mr: { lg: 1.6, xs: 0 },
                }}
              />
            )}
          </Grid>
        </Grid>
        <CrousalSlider
          slideToshow={4}
          firstbp={3.1}
          secondbp={3.1}
          thirdbp={1.2}
          title=" "
          haveBtn={false}
        >
          {skeltonStatus
            ? review.map((data, index) => (
                <Grid sx={{ pr: { md: 1.5, xs: 0.7 } }} key={index}>
                  <Card
                    sx={{
                      ...reviewCardSx,
                    }}
                  >
                    <Grid>
                      <Grid
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={{ ...reviewCardTitle }}>
                          {data.title}
                        </Typography>
                        <Typography
                          sx={{
                            ...reviewCardStarTxt,
                          }}
                        >
                          <StarRateIcon sx={{ fontSize: 31, pb: 1 }} />
                          <Box>5</Box>
                        </Typography>
                      </Grid>
                      <Typography
                        sx={{
                          ...reviewCardVerfied,
                        }}
                      >
                        <VerifiedIcon />{" "}
                        <Box
                          sx={{
                            ...reviewCardVerfiedTxt,
                          }}
                        >
                          {data.verified}
                        </Box>
                      </Typography>
                      <Typography
                        sx={{
                          ...reviewCardDesc,
                        }}
                      >
                        {data.desc}
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography
                        sx={{
                          ...reviewCardDate,
                        }}
                      >
                        {data.date}
                      </Typography>
                    </Grid>
                  </Card>
                </Grid>
              ))
            : [1, 2, 3, 4].map((data, index) => (
                <Grid key={index} sx={{ pr: 2 }}>
                  <Skelton
                    width="100%"
                    height={256}
                    style={{
                      ...skeltonBg,
                    }}
                  />
                </Grid>
              ))}

          {}
        </CrousalSlider>
      </Grid>
    </Container>
  );
}
