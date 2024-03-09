import { CardMedia, Container, Grid, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import Skelton from "../../../../../ui-component/landing/Components/Slider";
import { useSelector, useDispatch } from "react-redux";
import img0 from "../../../../../assets/images/landing/headerImg.png";
import img1 from "../../../../../assets/images/landing/homePageStatus/img1.svg";
import img2 from "../../../../../assets/images/landing/homePageStatus/img2.svg";
import img3 from "../../../../../assets/images/landing/homePageStatus/img3.svg";
import img4 from "../../../../../assets/images/landing/homePageStatus/img4.svg";
import img5 from "../../../../../assets/images/landing/homePageStatus/img5.svg";
import img6 from "../../../../../assets/images/landing/homePageStatus/img6.svg";
import img7 from "../../../../../assets/images/landing/homePageStatus/img7.svg";
import img8 from "../../../../../assets/images/landing/homePageStatus/img8.svg";
import img9 from "../../../../../assets/images/landing/homePageStatus/img9.svg";
import imge from "../../../../../assets/images/landing/headerImg.png";
import CrousalSlider from "../../../../../ui-component/landing/Components/Slider";
import { showGameStatus } from "../../../../../store/slices/landing/showStatus";
import { containerSpace } from "../../../../../ui-component/landing/constants/style";

const statusImg = {
  objectFit: "fill",
  height: { lg: "108px", md: "110px", xs: "auto" },
  width: { lg: "108px", md: "110px", xs: "inherit" },
  borderRadius: { sm: 4, xs: 3 },
  p: { sm: 0.5, xs: 0.4 },
  cursor: "pointer",
};

const skeltonSx = {
  backgroundColor: "#1B2037",
  height: { sm: "104px", xs: "64px" },
  width: { sm: "104px", xs: "100%" },
};

const HomeStatus = () => {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const disptach = useDispatch();

  const statusCoverImage = [
    { image: img1, status: false },
    { image: img8, status: true },
    { image: img7, status: true },
    { image: img6, status: false },
    { image: img4, status: false },
    { image: img3, status: true },
    { image: img2, status: true },
    { image: img0, status: true },
    { image: img0, status: false },
    { image: img9, status: true },
    { image: img9, status: true },
  ];
  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: { md: 15.5, sm: 23, xs: 10.4 },
        ...containerSpace,
      }}
    >
      <CrousalSlider
        slideToshow={9.2}
        bp={8.2}
        firstbp={7.1}
        secondbp={6.2}
        thirdbp={4.7}
        title="Popular services"
        haveBtn={false}
      >
        {skeltonStatus
          ? statusCoverImage.map((data, index) => (
              <Grid key={index} sx={{ pr: { sm: 1.2, xs: 0.5 } }}>
                <CardMedia
                  onClick={() => {
                    disptach(showGameStatus(true));
                  }}
                  component="img"
                  image={data.image}
                  alt="not"
                  sx={{
                    ...statusImg,
                    border: data.status
                      ? { sm: "2px solid #3CCA5B", xs: "2px solid #3CCA5B" }
                      : "",
                  }}
                />
              </Grid>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((data, index) => (
              <Grid key={index} sx={{ pr: { sm: 2, xs: 0.7 } }}>
                <Skelton
                  style={{
                    ...skeltonSx,
                  }}
                />
              </Grid>
            ))}
      </CrousalSlider>
    </Container>
  );
};

export default HomeStatus;
