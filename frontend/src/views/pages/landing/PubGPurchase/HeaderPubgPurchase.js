import {
  Container,
  Grid,
  Typography,
  Skeleton,
  CardMedia,
} from "@mui/material";
import React from "react";
import { BannerContSpace, skeltonColor } from "../../../../ui-component/landing/constants/style";
import headerImg from "../../../../assets/images/landing/Pubg/pubg.svg";
import img1 from "../../../../assets/images/landing/Pubg/icon.svg";
import { useSelector } from "react-redux";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";

import {
  pubgPurHead,
  pubgPurHeadTxtWrap,
  pubgPurHeadTxt,
  pubgPurHeadPreTxt,
  pubgPurHeadDesc,
  pubgPurHeadIcon,
  pubgPurHeadGradient,
} from "../../../../ui-component/landing/constants/PubgSx";
import DescriptionLength from "../../../../ui-component/landing/Components/DescriptionLength";

const HeaderPubgPurchase = () => {
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
              ...pubgPurHead,
            }}
          >
            <Grid
              sx={{
                ...pubgPurHeadGradient,
              }}
            ></Grid>

            <Grid
              container
              sx={{
                ...pubgPurHeadTxtWrap,
              }}
            >
              <Grid item xl={2} lg={2.5} md={3} sm={3} xs={3.5} sx={{}}>
                <CardMedia
                  component="img"
                  image={img1}
                  alt="not"
                  sx={{
                    ...pubgPurHeadIcon,
                  }}
                />
              </Grid>
              <Grid
                item
                xl={10}
                lg={9}
                md={9}
                sm={9}
                xs={8.5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Grid sx={{ display: { sm: "flex", xs: "none" } }}>
                  <GppMaybeIcon sx={{ height: "16px", width: "16px" }} />
                  <Typography
                    sx={{
                      ...pubgPurHeadPreTxt,
                    }}
                  >
                    Официальный партнер
                  </Typography>
                </Grid>
                <Typography
                  sx={{
                    ...pubgPurHeadTxt,
                  }}
                >
                  Replenishment of codes PUBG Mobile
                </Typography>
                <Typography
                  sx={{
                    ...pubgPurHeadDesc,
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

export default HeaderPubgPurchase;
