import { useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
import {
  Container,
  Typography,
  CardMedia,
  Grid,
  Card,
  Chip,
  Box,
} from "@mui/material";
import CrousalSlider from "../../../../ui-component/landing/Components/Slider";
import Skelton from "../../../../ui-component/landing/Components/Skelton";
import { useSelector } from "react-redux";
import HotChip from "../../../../ui-component/landing/Components/HotChip";
import defaultImage from '../../../../assets/images/landing/default-noImage.jpg'
import { containerSpace, skeltonColor } from "../../../../ui-component/landing/constants/style";
import {
  ServiceDisChip,
  popServiceChipRap,
  popServiceCard,
  popServiceImg,
  popServicePriceRap,
  popServicePrice,
  popServiceDisPrice,
  popServiceDesc,
} from "../../../../ui-component/landing/constants/homepageSx";
import {
  MobileGameSkelton,
  popularServiceCard,
} from "../../../../ui-component/landing/Data/HomePageData";

export default function ServicesSlider() {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const { products } = useSelector((state) => state.changeSkelton);
  // console.log("pro", products)

  // useEffect(() => {
  //   return () => {
  //     console.warn("asdasdasdasdasdas =================");
  //   };
  // }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: { lg: 5, sm: 2.5 },
        ...containerSpace,
      }}
    >
      {" "}
      <Grid sx={{ pt: 2 }}>
        <CrousalSlider
          slideToshow={6}
          firstbp={4.2}
          secondbp={3.3}
          thirdbp={3.1}
          title="Popular services"
          haveBtn={true}
        >
          {skeltonStatus
            ? products.map((product, index) => (
                <Grid
                  key={index}
                  sx={{
                    pl: index === 0 ? { sm: 0, xs: 0.3 } : { sm: 0.6, xs: 0.3 },
                    pr: { sm: 0.6, xs: 0.8 },
                  }}
                >
                  <Card
                    sx={{
                      ...popServiceCard,
                    }}
                  >
                    <Grid
                      sx={{
                        // display:"block",
                        ...popServiceChipRap,
                      }}
                    >
                      <Box>
                        <Chip
                          label={`${index + 11}%`}
                          sx={{
                            ...ServiceDisChip,
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          mt: { sm: 0.4, xs: "-3px" },
                        }}
                      >
                        <HotChip />
                      </Box>
                    </Grid>

                    <CardMedia
                      component="img"
                      sx={{ ...popServiceImg}}
                      image={product.coverImageOriginal ? product.coverImageOriginal : (product.images && product.images.cover && product.images.cover.thumbnail ? product.images.cover.thumbnail : (product.images && product.images.cover && product.images.cover.url ? product.images.cover.url : (product.screenshots && product.screenshots[0] ? product.screenshots[0].url : (product.images && product.images.screenshots && product.images.screenshots[0] ? product.images.screenshots[0].url : (product.screenshots && product.screenshots[0] ? product.screenshots[0].url : defaultImage )))))}
                      alt="Paella dish"
                    />
                    <Grid
                      sx={{
                        ...popServicePriceRap,
                      }}
                    >
                      <Typography
                        sx={{
                          ...popServicePrice,
                        }}
                      >
                        {(product.price + 5).toFixed(2)} €
                      </Typography>
                      <Typography
                        sx={{
                          ...popServiceDisPrice,
                        }}
                      >
                        25 990 KZT
                      </Typography>
                    </Grid>
                    <Typography
                      sx={{ ...popServiceDesc }}
                    >
                      {product.originalName ? product.originalName : product.name}
                    </Typography>
                  </Card>
                </Grid>
              ))
            : MobileGameSkelton.map((data, index) => (
                <Grid key={index} sx={{ pr: 2 }}>
                  <Skelton
                    width="100%"
                    style={{
                      height: { sm: 256, xs: 145 },
                      pt: 2,
                    }}
                  />
                  <Skeleton
                    sx={{
                      ...skeltonColor,
                    }}
                  />
                  <Skeleton
                    sx={{
                      ...skeltonColor,
                    }}
                  />
                </Grid>
              ))}
        </CrousalSlider>
      </Grid>
    </Container>
  );
}
