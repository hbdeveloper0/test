import React, { useState } from "react";

import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Typography, Grid, Skeleton, Button } from "@mui/material";
import { useSelector } from "react-redux";
import {
  mainSliderTitle,
  mainSliderBtn1,
  mainSliderBtn2,
  skeltonColor,
} from "../constants/style";

const CrousalSlider = ({
  slideToshow,
  bp,
  firstbp,
  secondbp,
  thirdbp,
  haveBtn,
  title,
  children,
}) => {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);

  const [sliderRef, setSliderRef] = useState(null);
  const optionalBp = bp ? bp : firstbp;

  const sliderSettings = {
    arrows: false,
    slidesToShow: slideToshow,
    slidesToScroll: 1,

    infinite: false,
    responsive: [
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: optionalBp,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: firstbp,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: secondbp,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: thirdbp,
        },
      },
    ],
  };
  return (
    <Grid className="content">
      {haveBtn ? (
        <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
          {skeltonStatus ? (
            <Typography
              sx={{
                ...mainSliderTitle,
              }}
            >
              {title}
            </Typography>
          ) : (
            <Skeleton width="30%" height={70} style={{ ...skeltonColor }} />
          )}

          <Grid sx={{ display: { sm: "flex", xs: "none" } }}>
            {skeltonStatus ? (
              <>
                <Grid>
                  <Button
                    onClick={sliderRef?.slickPrev}
                    type="button"
                    sx={{
                      ...mainSliderBtn1,
                    }}
                  >
                    <ArrowBackIosIcon
                      sx={{
                        fontSize: "18px",
                        color: "#FFFF",
                      }}
                    />
                  </Button>
                </Grid>
                <Grid sx={{ pr: { lg: 0.6, xs: 0 } }}>
                  <Button
                    onClick={sliderRef?.slickNext}
                    type="button"
                    sx={{
                      ...mainSliderBtn2,
                    }}
                  >
                    <ArrowForwardIosRoundedIcon
                      sx={{
                        fontSize: "18px",
                        color: "#FFFF",
                      }}
                    />
                  </Button>
                </Grid>
              </>
            ) : (
              " "
            )}
          </Grid>
        </Grid>
      ) : (
        " "
      )}

      <Grid>
        <Slider ref={setSliderRef} {...sliderSettings}>
          {children}
        </Slider>
      </Grid>
    </Grid>
  );
};

CrousalSlider.propTypes = {
  children: PropTypes.node,
};

export default CrousalSlider;
