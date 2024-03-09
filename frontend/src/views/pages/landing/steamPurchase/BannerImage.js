import {
  Container,
  Grid,
  Typography,
  Skeleton,
  CardMedia,
} from "@mui/material";
import React from "react";
import { BannerContSpace, skeltonColor } from "../../../../ui-component/landing/constants/style";
import headerImg from "../../../../assets/images/landing/SteamPurchase/SteamHeader.svg";
import img1 from "../../../../assets/images/landing/SteamPurchase/Steamicon.svg";
import { useSelector } from "react-redux";
import {
  steamPurHeadImgWrap,
  steamPurHeadImg,
  steamPurHeadIcon,
  steamPurHeadTitle,
  steamPurHeadTitleWrap,
  steamPurHeadDesc,
  steamPurHeadImgGradient,
} from "../../../../ui-component/landing/constants/SteamSx";
import DescriptionLength from "../../../../ui-component/landing/Components/DescriptionLength";

const title =
  "Steam — онлайн-сервис цифрового распространения компьютерных игр и программ, разработанный и поддерживаемый компанией Valve";

const BannerImage = () => {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: { md: 15.5, sm: 23, xs: 8.5 },
        ...BannerContSpace,
      }}
    >
      {skeltonStatus ? (
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
              backgroundImage: `url(${headerImg})`,
              ...steamPurHeadImg,
            }}
          >
            <Grid
              sx={{
                ...steamPurHeadImgGradient,
              }}
            ></Grid>

            <Grid
              container
              sx={{
                ...steamPurHeadImgWrap,
              }}
            >
              <Grid item xl={2} lg={2.5} md={3} sm={3} xs={3.5} sx={{}}>
                <CardMedia
                  component="img"
                  image={img1}
                  alt="not"
                  sx={{
                    ...steamPurHeadIcon,
                  }}
                />
              </Grid>
              <Grid
                item
                xl={5}
                md={5.5}
                sm={6.8}
                xs={7.4}
                sx={{
                  ...steamPurHeadTitleWrap,
                }}
              >
                <Typography
                  sx={{
                    ...steamPurHeadTitle,
                  }}
                >
                  Instant replenishment Steam account
                </Typography>
                <Typography
                  sx={{
                    ...steamPurHeadDesc,
                  }}
                >
                  <DescriptionLength title={title} />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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

export default BannerImage;
