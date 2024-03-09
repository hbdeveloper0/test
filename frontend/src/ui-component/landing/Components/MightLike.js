import React from "react";
import { Container, Typography, CardMedia, Grid, Card } from "@mui/material";
import { mightLikeGames } from "../Data/Data";
import Skeleton from "@mui/material/Skeleton";
import CrousalSlider from "../Components/Slider";
import { useSelector, useDispatch } from "react-redux";
import Skelton from "./Skelton";
import img from "../../../assets/images/landing/ps5.svg";
import { containerSpace, skeltonColor } from "../constants/style";
import defaultImage from '../../../assets/images/landing/default-noImage.jpg'
import { AddProductDetail } from "../../../store/slices/landing/productDetail"; 
import {
  mightLikeTitle,
  mightLikeCard,
  mightLikeImg,
  mightLikeTxt,
  mightLikePrice,
  mightLikeDisPrice,
} from "../constants/style";
import { useNavigate } from "react-router-dom";

const icon = {
  fontSize: "16px",
  paddingRight: "6px",
  pt: 0.1,
};

const MightLike = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const { products } = useSelector((state) => state.changeSkelton);

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: { lg: 1, sm: 1, xs: 1 },
        ...containerSpace,
      }}
    >
      <Grid sx={{ pt: { sm: 2, xs: 0 } }}>
        <Grid sx={{ pb: { sm: 3, xs: 0.2 } }}>
          {skeltonStatus && products ? (
            <Typography
              sx={{
                ...mightLikeTitle,
              }}
            >
              You might like it
            </Typography>
          ) : (
            <Skelton
              style={{
                width: { sm: "410px", xs: "70%" },
                height: { sm: "48px", xs: "24px" },
              }}
            />
          )}
        </Grid>
        <CrousalSlider
          slideToshow={6}
          firstbp={4}
          secondbp={3.3}
          thirdbp={2.1}
          title=" "
          haveBtn={false}
        >
          {skeltonStatus && products &&
            products.map((product, index) => (
              <Grid
                onClick={() => { 
                  // dispatch(AddProductDetail(product))
                  dispatch(AddProductDetail(null))
                  navigate("/game-purchase", {state: product.productId})
                }}
                sx={{ px: { sm: 0.6, xs: 0.5 }, pt: { sm: 0, xs: 1 } }}
              >
                {/* <Grid
                sx={{
                  background: "#005CF6",
                  
                  px: { sm: 2.5, xs: 1 },
                  borderRadius: {
                    sm: "20px 20px 0px 0px",
                    xs: "17px 17px 0px 0px",
                  },
                  color: "#FFFF",
                  fontSize: { sm: 16, xs: 14 },
                  fontWeight: 600,
                  
                }}
              >
                
                <Typography sx={{fontSize:"15px",alignContent:"center",fontWeight:"inherit",lineHeight:"24px",pt:0.3,fontFamily: "Titillium_Web variant0, Tofu"}}><FontAwesomeIcon icon={data.icon} style={{ ...icon }} />{data.title}</Typography>
              </Grid> */}
                <CardMedia component="img" image={img} alt="not" />
                <Card
                  sx={{
                    // maxWidth: 345,
                    ...mightLikeCard,
                  }}
                >
                  <CardMedia
                    sx={{
                      ...mightLikeImg,
                    }}
                    component="img"
                    image={product.images && product.images.cover && product.images.cover.thumbnail ? product.images.cover.thumbnail : (product.images && product.images.cover && product.images.cover.url ? product.images.cover.url : (product.coverImageOriginal ? product.coverImageOriginal : (product.coverImage ? product.coverImage : (product.screenshots && product.screenshots[0] ? product.screenshots[0].url : (product.images && product.images.screenshots && product.images.screenshots[0] ? product.images.screenshots[0].url : (product.screenshots && product.screenshots[0] ? product.screenshots[0].url : defaultImage))))))}
                    title="green iguana"
                  />

                  <Grid
                    sx={{
                      display: { sm: "flex", xs: "block" },
                      justifyContent: "space-between",
                      px: 0.5,
                      pt: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        ...mightLikePrice,
                      }}
                    >
                      {product.price} €
                    </Typography>
                    <Typography
                      sx={{
                        ...mightLikeDisPrice,
                      }}
                    >
                      25 990 KZT
                    </Typography>
                  </Grid>
                  <Typography
                    sx={{
                      ...mightLikeTxt,
                    }}
                  >
                    {product.originalName ? product.originalName : product.name}
                  </Typography>
                </Card>
              </Grid>
            ))}

          {!skeltonStatus &&
            [1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => (
              <Grid key={index} sx={{ pr: 2 }}>
                <Skelton
                  width="100%"
                  style={{
                    height: { sm: "278px", xs: "160px" },
                  }}
                />
                <Skeleton
                  sx={{
                    ...skeltonColor,
                    width: "81px",
                    height: "24px",
                    mt: 1,
                  }}
                />
                <Skeleton
                  sx={{
                    ...skeltonColor,
                    width: "111px",
                    height: "14px",
                    mb: 7,
                  }}
                />
              </Grid>
            ))}
        </CrousalSlider>
      </Grid>
    </Container>
  );
};

export default MightLike;
