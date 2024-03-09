import {
  Container,
  Grid,
  Typography,
  Skeleton,
  CardMedia,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import headerImg from "../../../../assets/images/landing/GamePurchase/GameHeader.svg";
import img1 from "../../../../assets/images/landing/GamePurchase/GameImage.svg";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BannerContSpace, skeltonColor } from "../../../../ui-component/landing/constants/style";
import { Gameproperties } from "../../../../ui-component/landing/Data/gamePurchaseData";
import {
  gamePurchaseBanner,
  gamePurchaseBannerTxt,
  gamePurchaseBannerDesc,
  gamePurchaseDetailIcon,
  gamePurchaseDetailSx,
  gamePurchaseBannerIcon,
  gamePurchaseBannerIconWrap,
  gamePurchaseBannerDet,
  gamePurchaseBannerDetTxt,
  gamePurchaseGradient,
} from "../../../../ui-component/landing/constants/GamePurchaseSX";
import defaultImage from '../../../../assets/images/landing/default-noImage.jpg'
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import DescriptionLength from '../../../../ui-component/landing/Components/DescriptionLength'
//for now
import {
  faSteam,
  faXbox,
  faPlaystation,
  faBattleNet,
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
export const BannerDetaial = () => {
  const { productDetail } = useSelector((state) => state.productDetail);
  return ( productDetail &&
    <>
      {/* {Gameproperties.map((data, index) => (
        <Box
          // item
          // xs={2}
          sx={{
            display: "flex",
            // borderRight: {
            //   sm: index === 2 ? " " : "2px solid rgba(255, 255, 255, 0.3)",
            //   xs: "none",
            // },
            pr: { sm: 2, xs: 0 },
            // pl: index === 0 ? 0 : { sm: 1, xs: 0 },
            // pt:{sm:0,xs:2}
          }}
        >
          <Grid
            sx={{
              ...gamePurchaseBannerDet,
            }}
          >
            <FontAwesomeIcon
              icon={data.icon}
              style={{
                color: "rgba(209, 212, 219, 1)",
                width: "24px",
                height: "24px",
              }}
              className="gameePurchasefont"
            />
          </Grid>
          <Typography
            sx={{
              ...gamePurchaseBannerDetTxt,
            }}
          >
            {data.desc}
          </Typography>
        </Box>
      ))} */}
      <Box
        // item
        // xs={2}
        sx={{
          display: "flex",
          // borderRight: {
          //   sm: index === 2 ? " " : "2px solid rgba(255, 255, 255, 0.3)",
          //   xs: "none",
          // },
          pr: { sm: 1, xs: 0 },
          // pl: index === 0 ? 0 : { sm: 1, xs: 0 },
          // pt:{sm:0,xs:2}
        }}
      >
        <Grid
          sx={{
            ...gamePurchaseBannerDet,
          }}
        >
          <FontAwesomeIcon
            icon={productDetail.platform === 'PlayStation 4' || productDetail.platform === 'PlayStation 5' ? faPlaystation : (productDetail.platform === 'XBOX ONE' ? faXbox : (productDetail.platform === 'Steam' ? faSteam : faDesktop ))}
            style={{
              color: "rgba(209, 212, 219, 1)",
              width: "24px",
              height: "24px",
            }}
            className="gameePurchasefont"
          />
        </Grid>
        <Typography
          sx={{
            ...gamePurchaseBannerDetTxt,
          }}
        >
          {productDetail.platform}
        </Typography>
      </Box>
      <Box
        // item
        // xs={2}
        sx={{
          display: "flex",
          // borderRight: {
          //   sm: index === 2 ? " " : "2px solid rgba(255, 255, 255, 0.3)",
          //   xs: "none",
          // },
          pr: { sm: 1, xs: 0 },
          // pl: index === 0 ? 0 : { sm: 1, xs: 0 },
          // pt:{sm:0,xs:2}
        }}
      >
        <Grid
          sx={{
            ...gamePurchaseBannerDet,
          }}
        >
          <FontAwesomeIcon
            icon={faEarthAmericas}
            style={{
              color: "rgba(209, 212, 219, 1)",
              width: "24px",
              height: "24px",
            }}
            className="gameePurchasefont"
          />
        </Grid>
        <Typography
          sx={{
            ...gamePurchaseBannerDetTxt,
          }}
        >
          {productDetail.regionalLimitations === 'Region free' ? 'Global' : productDetail.regionalLimitations}
        </Typography>
      </Box>

      <Box
        // item
        // xs={2}
        sx={{
          display: "flex",
          pr: { sm: 2, xs: 1 },
          // pl: { sm: 1, xs: 1 },
          // pt:{sm:0,xs:2}
        }}
      >
        <Grid
          sx={{
            background: "#FFFF",
            px: { sm: 0.8, xs: 0.6 },
            pt: { sm: 0.3, xs: 0.3 },
            borderRadius: { sm: 1.8, xs: 1 },
            display: "flex",
            alignItems: { sm: "center", xs: "baseline" },
          }}
        >
          <Typography
            sx={{
              color: "#000000",
              // width: "24px",
              // height: "24px",
              fontWeight: "bolder",
            }}
            className="gameePurchasefont"
          >
            18
          </Typography>
        </Grid>
        <Typography
          sx={{
            display: "flex",
            ...gamePurchaseBannerDetTxt,
          }}
        >
          <Box sx={{ display: { sm: "flex", xs: "none" } }}>Рекомендованно</Box>{" "}
          от 18 лет
        </Typography>
      </Box>
    </>
  );
};

const BannerImg = () => {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const { productDetail } = useSelector((state) => state.productDetail);
  const [productDescriptionCharacters, setProductDescriptionCharacters] = useState(250)
  let [headingName, name] = ''
  if (productDetail) {
    [headingName, name] = productDetail.name.split(':');
  }


  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: { md: 15.5, sm: 23, xs: 8.5 },
        ...BannerContSpace,
      }}
    >
      {skeltonStatus && productDetail ? (
        <>
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
                background: `url(${productDetail.screenshots && productDetail.screenshots[0] && productDetail.screenshots[0].url ? productDetail.screenshots[0].url_original : (productDetail.images && productDetail.images.screenshots && productDetail.images.screenshots[0] && productDetail.images.screenshots[0].url ? productDetail.images.screenshots[0].url : (productDetail.images && productDetail.images.cover && productDetail.images.cover.url ? productDetail.images.cover.url : defaultImage))})`,
                
                ...gamePurchaseBanner,
              }}
            >
              <Grid
                sx={{
                  ...gamePurchaseGradient,
                }}
              ></Grid>

              <Grid
                container
                sx={{
                  ...gamePurchaseBannerIconWrap,
                }}
              >
                <Grid
                  item
                  xl={2}
                  lg={2.5}
                  md={3}
                  sm={2.5}
                  xs={3.5}
                  sx={{ pt: 1.5, display: "flex" }}
                >
                  <CardMedia
                    component="img"
                    // image={productDetail.images && productDetail.images.cover && productDetail.images.cover.thumbnail ? productDetail.images.cover.thumbnail : (productDetail.images && productDetail.images.cover && productDetail.images.cover.url ? productDetail.images.cover.url : (productDetail.coverImageOriginal ? productDetail.coverImageOriginal : (productDetail.coverImage ? productDetail.coverImage : (productDetail.screenshots && productDetail.screenshots[0] ? productDetail.screenshots[0].url : (productDetail.images && productDetail.images.screenshots && productDetail.images.screenshots[0] ? productDetail.images.screenshots[0].url : (productDetail.screenshots && productDetail.screenshots[0] ? productDetail.screenshots[0].url : defaultImage))))))}
                    image={productDetail.coverImageOriginal ? productDetail.coverImageOriginal : (productDetail.coverImage ? productDetail.coverImage : defaultImage)}
                    alt="not"
                    sx={{
                      ...gamePurchaseBannerIcon,
                    }}
                  />
                </Grid>
                <Grid item xl={10} lg={9} md={9} sm={9} xs={8.5} sx={{}}>
                  {name ?
                    (
                      <Typography
                        sx={{
                          ...gamePurchaseBannerTxt,
                        }}
                      >
                        {headingName}: <br />
                        {name}
                      </Typography>
                    )
                    :
                    (
                      <Typography
                        sx={{
                          ...gamePurchaseBannerTxt,
                        }}
                      >
                        {productDetail.name}
                      </Typography>
                    )
                  }

                  {/* <Typography sx={{ ...gamePurchaseBannerDesc }}>
                    «Призрачная свобода» — это сюжетное дополнение, привносящее
                    элементы шпионского триллера в игру Cyberpunk 2077
                  </Typography> */}
                  <Typography sx={{ ...gamePurchaseBannerDesc }}>
                    {/* {productDetail.description && productDetail.description.length > productDescriptionCharacters ? productDetail.description.substring(0, productDescriptionCharacters) + "..." : productDetail.description ? productDetail.description
                      : '«Призрачная свобода» — это сюжетное дополнение, привносящее элементы шпионского триллера в игру Cyberpunk 2077'
                    } */}
                    <DescriptionLength title={productDetail.description ? productDetail.description 
                      : '«Призрачная свобода» — это сюжетное дополнение, привносящее элементы шпионского триллера в игру Cyberpunk 2077'} />
                  </Typography>
                  
                  <Grid
                    container
                    sx={{
                      ...gamePurchaseDetailIcon,
                    }}
                  >
                    <BannerDetaial />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              ...gamePurchaseDetailSx,
            }}
          >
            <BannerDetaial />
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

export default BannerImg;
