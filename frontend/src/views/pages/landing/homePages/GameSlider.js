import React, { useEffect } from "react";
import Slider from "react-slick";
import { Typography, CardMedia, Grid, Card, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";
import Skelton from "../../../../ui-component/landing/Components/Skelton";
// import im from "../../../../assets/images/landing/xbox.svg"
import defaultImage from '../../../../assets/images/landing/default-noImage.jpg'
import { useDispatch } from "react-redux"; 
import { AddProductDetail } from "../../../../store/slices/landing/productDetail"; 
import { skeltonColor } from "../../../../ui-component/landing/constants/style";
import { MobileGameSkelton } from "../../../../ui-component/landing/Data/HomePageData";
import {
  GmSlideCardSx,
  GmSlideImg,
  GmSlideDetail,
  GmSlideTxt1,
  GmSlideTxt2,
  GmSlideTitle,
} from "../../../../ui-component/landing/constants/homepageSx";


const icon = {
  fontSize: "15px",
  paddingRight: "6px",
  pt: 0.1,
};

const sliderSettings = {
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,

  infinite: false,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3.3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};



const GameSlider = ({ setSliderRef, arrayShow, headImage }) => {
  const navigate = useNavigate();
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const dispatch = useDispatch();
  // console.log('aaa', setSliderRef)
  return (
    <Slider ref={setSliderRef} {...sliderSettings}>
      {skeltonStatus && arrayShow.length > 0 ?
        arrayShow.map((card, index) => (
          <Grid
            container
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* {console.log('xxx', card)} */}
            {card.games.map((product, index) => (
              <Grid
                key={index + 1}
                sx={{ px: { sm: 0.6, xs: 0.5 }, pt: 1 }}
                onClick={() => { 
                  // dispatch(AddProductDetail(product))
                  navigate("/game-purchase", {state: product.productId})
                }}
                
              >
                {/* <Grid
                sx={{
                  background: "#005CF6",
                  
                  px: { sm: 2.5, xs: 1 },
                  borderRadius: {
                    sm: "20px 20px 0px 0px",
                    xs: "8px 8px 0px 0px",
                  },
                  color: "#FFFF",
                  fontSize: { sm: 16, xs: 14 },
                  fontWeight: 600,
                  
                }}
              ><Typography sx={{fontSize:"14px",alignContent:"center",fontWeight:"inherit",lineHeight:"18px",pt:0.4,fontFamily: "'Nothing You Could Do', cursive"}}><FontAwesomeIcon icon={data.icon} style={{ ...icon }} />{data.title}</Typography>
              </Grid> */}

                <Card
                  sx={{
                    ...GmSlideCardSx,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={headImage}
                    alt="not"
                    sx={{
                      height: { sm: "auto", xs: "auto" },
                      objectFit: "fill",
                    }}
                  />
                  <CardMedia
                    sx={{
                      ...GmSlideImg,
                    }}
                    component="img"
                   
                    // image={ product.images && product.images.cover && product.images.cover.thumbnail ? product.images.cover.thumbnail : (product.images && product.images.cover && product.images.cover.url ? product.images.cover.url : (product.coverImageOriginal ? product.coverImageOriginal : (product.coverImage ? product.coverImage : (product.screenshots && product.screenshots[0] ? product.screenshots[0].url : (product.images && product.images.screenshots && product.images.screenshots[0] ? product.images.screenshots[0].url : (product.screenshots && product.screenshots[0] ? product.screenshots[0].url : defaultImage))))))}
                    image={product.coverImageOriginal ? product.coverImageOriginal : (product.coverImage ? product.coverImage : defaultImage)}
                    title="green iguana"
                  />

                  <Grid
                    sx={{
                      ...GmSlideDetail,
                    }}
                  >
                    <Typography
                      sx={{
                        ...GmSlideTxt1,
                      }}
                    >
                      {(product.price + 5).toFixed(2)} €
                    </Typography>
                    <Typography
                      sx={{
                        ...GmSlideTxt2,
                      }}
                    >
                      25 990 KZT
                    </Typography>
                  </Grid>
                  <Typography
                    sx={{
                      ...GmSlideTitle,
                    }}
                  >
                    {product.originalName ? product.originalName : product.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        ))
        :''
      }

      {!skeltonStatus &&
        MobileGameSkelton.map((data, index) => (
          <Grid
            container
            key={index}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Grid sx={{ pr: 2 }}>
              <Skelton
                style={{
                  // width: { sm: "200px", xs: "107px" },
                  height: { sm: 278, xs: 190 },
                  pt: 2,
                }}
              />
              <Skeleton
                height={31}
                style={{
                  ...skeltonColor,
                  width: { sm: "200px", xs: "107px" },
                }}
              />
              <Skeleton
                height={11}
                style={{
                  ...skeltonColor,
                  width: { sm: "200px", xs: "107px" },
                }}
              />
            </Grid>
            <Grid key={index + 1} sx={{ pr: 2, pt: 2 }}>
              <Skelton
                style={{
                  // width: { sm: "200px", xs: "107px" },
                  height: { sm: 278, xs: 190 },
                  pt: 2,
                }}
              />
              <Skeleton
                height={31}
                style={{
                  ...skeltonColor,
                  width: { sm: "200px", xs: "107px" },
                }}
              />
              <Skeleton
                height={11}
                style={{
                  ...skeltonColor,
                  width: { sm: "200px", xs: "107px" },
                }}
              />
            </Grid>
          </Grid>
        ))}
    </Slider>
  );
};

export default GameSlider;
