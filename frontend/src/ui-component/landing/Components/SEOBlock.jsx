import { CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Skelton from "./Skelton";
import { containerSpace } from "../constants/style";
import { SeoBlockdata } from "../Data/Data";
import {
  seoBlockTitle,
  seoBlockTitle2,
  seoBlockWrap,
  seoBlockDivider,
  seoBlockImg,
  seoBlockTxt,
  seoBlockDesc,
  seoBlockTitleWrap,
} from "../constants/style";

const SEOBlock = () => {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  return (
    <Container maxWidth="xl" sx={{ mb: 1, ...containerSpace }}>
      <Grid sx={{ pb: { sm: 3.5, xs: 2 } }}>
        {skeltonStatus ? (
          <Typography
            sx={{
              ...seoBlockTitle,
            }}
          >
            SEO-БЛОК
          </Typography>
        ) : (
          <Skelton
            style={{
              width: { sm: "none", xs: "260px" },
              height: { sm: "none", xs: "30px" },
              mb: 2,
              mt: 1,
            }}
          />
        )}

        {skeltonStatus ? (
          <Grid
            container
            sx={{
              ...seoBlockWrap,
            }}
          >
            <Typography
              sx={{
                ...seoBlockTitle2,
              }}
            >
              SEO-БЛОК
            </Typography>
            <Divider
              sx={{
                ...seoBlockDivider,
              }}
            />
            {SeoBlockdata.map((item, index) => (
              <Grid
                container
                key={index}
                sx={{ pt: { sm: 3.5, xs: 1 }, pb: 1.5 }}
              >
                <Grid
                  item
                  lg={1.5}
                  md={2}
                  sm={3}
                  sx={{ display: { sm: "flex", xs: "none" } }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      ...seoBlockImg,
                    }}
                    image={item.image}
                    alt="Paella dish"
                  />
                </Grid>
                <Grid
                  item
                  lg={8}
                  md={10}
                  sm={9}
                  sx={{
                    ...seoBlockTitleWrap,
                  }}
                >
                  <Typography
                    sx={{
                      ...seoBlockTxt,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      pt: { sm: 0, xs: 1 },
                      ...seoBlockDesc,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Skelton
            width="100%"
            height={450}
            style={{
              backgroundColor: "rgba(131, 151, 195, 0.1)",
            }}
          />
        )}
      </Grid>
    </Container>
  );
};

export default SEOBlock;
