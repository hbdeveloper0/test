import React, { useState } from "react";
import { containerSpace } from "../../../../ui-component/landing/constants/style";
import { GameSlideimages } from "../../../../ui-component/landing/Data/gamePurchaseData";
import { Container, Grid, CardMedia } from "@mui/material";
import CrousalSlider from "../../../../ui-component/landing/Components/Slider";
import Skelton from "../../../../ui-component/landing/Components/Skelton";
import { useSelector, useDispatch } from "react-redux";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import { modalGallery } from "../../../../store/slices/landing/galleryModal";
import { gamePurSliderImg } from "../../../../ui-component/landing/constants/GamePurchaseSX";
import { MobileGameSkelton } from "../../../../ui-component/landing/Data/HomePageData";
import defaultImage from '../../../../assets/images/landing/default-noImage.jpg'

const GameImageSlider = () => {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const { productDetail } = useSelector((state) => state.productDetail);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(1);

  let imagesArray = [];
  if (productDetail) {
    productDetail.images && productDetail.images.screenshots ?
      imagesArray = productDetail.images.screenshots

      :
      productDetail.screenshots ?
        imagesArray = productDetail.screenshots
        :
        imagesArray = []
    // console.log('aaa', imagesArray)
  }

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: { sm: 1.3, xs: 0.5 },
        ...containerSpace,
      }}
    >
      <Grid sx={{ pt: 1 }}>
        <CrousalSlider
          slideToshow={7.2}
          firstbp={5.2}
          secondbp={4.2}
          thirdbp={2.2}
          title=" "
          haveBtn={false}
        >
          {(skeltonStatus && productDetail && imagesArray && imagesArray.length > 0) ?
            imagesArray.map((screenshot, index) => (
              <Grid
                key={index}
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                  dispatch(modalGallery("none"));
                }}
              >
                <CardMedia
                  component="img"
                  image={screenshot.url}
                  alt="not"
                  sx={{
                    ...gamePurSliderImg,
                  }}
                />
              </Grid>
            ))
            :
            (skeltonStatus && productDetail && imagesArray) ?
              <Grid sx={{ display: 'none !important' }}>
                <CardMedia
                  component="img"
                  image={defaultImage}
                  alt="not"

                />
              </Grid>

              : MobileGameSkelton.map((data, index) => (
                <Grid key={index} sx={{ pr: 1 }}>
                  <Skelton
                    style={{
                      height: { sm: "112px", xs: "102px" },
                      width: { sm: "100%", xs: "100%" },
                    }}
                  />
                </Grid>
              ))}
        </CrousalSlider>
      </Grid>

      {isOpen && (
        <Lightbox
          reactModalStyle={{
            content: {
              opacity: 1,
              backgroundColor: "#1C2138",
            },
          }}
          mainSrc={imagesArray[photoIndex].url}
          nextSrc={
            imagesArray[(photoIndex + 1) % imagesArray.length].url
          }
          prevSrc={
            imagesArray[
              (photoIndex + imagesArray.length - 1) % imagesArray.length
            ].url
          }
          onCloseRequest={() => {
            setIsOpen(false);
            dispatch(modalGallery("block"));
          }}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + imagesArray.length - 1) % imagesArray.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imagesArray.length)
          }
          style={{
            image: {
              borderRadius: "20333px",
            },
          }}
        />
      )}
    </Container>
  );
};

export default GameImageSlider;
