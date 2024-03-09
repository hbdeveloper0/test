import { Container, Grid, Typography, Skeleton, Button } from "@mui/material";
import React from "react";
import headerImg from "../../../../assets/images/landing/NewsAndPermotion/news.svg";
import { useSelector } from "react-redux";
import { BannerContSpace, skeltonColor } from "../../../../ui-component/landing/constants/style";
import { Newsproperties } from "../../../../ui-component/landing/Data/NewsData";
import {
  newsIcon,
  newsHeadWrap,
  newsHeadImg,
  newsHeadXsStyle,
  newsHeadTitle,
  newsHeadTitleWrap,
  newsHeadPreTitle,
  newsHeadDate,
  newsHeadGradient,
} from "../../../../ui-component/landing/constants/NewsSx";
import DescriptionLength from "../../../../ui-component/landing/Components/DescriptionLength";

export const HeaderDetaial = () => {
  return (
    <>
      {Newsproperties.map((data, index) => (
        <Button
          sx={{
            ...newsIcon,
          }}
        >
          {data.icon}
        </Button>
      ))}
    </>
  );
};

const HeaderNews = () => {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const title =
    "Merry Game-mas: лучшие рождественские предложения для видеоигр";

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
              ...newsHeadWrap,
            }}
          >
            <Grid
              sx={{
                backgroundImage: `url(${headerImg})`,
                ...newsHeadImg,
              }}
            >
              <Grid
                sx={{
                  ...newsHeadGradient,
                }}
              ></Grid>
              <Grid
                container
                sx={{
                  ...newsHeadTitleWrap,
                }}
              >
                <Grid sx={{}}>
                  <Grid
                    sx={{
                      ...newsHeadPreTitle,
                    }}
                  >
                    <Typography>Главная | </Typography>
                    <Typography sx={{ pl: 1 }}> Новости</Typography>
                  </Grid>
                  <Typography
                    sx={{
                      ...newsHeadTitle,
                    }}
                  >
                    <DescriptionLength title={title} />
                  </Typography>
                  <Typography
                    sx={{
                      ...newsHeadDate,
                    }}
                  >
                    15 декабря 2023 | 10:58
                  </Typography>

                  <Grid
                    container
                    sx={{ pt: 6, display: { sm: "flex", xs: "none" } }}
                  >
                    <HeaderDetaial />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              ...newsHeadXsStyle,
            }}
          >
            <HeaderDetaial />
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

export default HeaderNews;
