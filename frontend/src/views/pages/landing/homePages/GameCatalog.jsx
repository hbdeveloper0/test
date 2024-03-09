import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Games } from "../../../../ui-component/landing/Data/HomePageData";
import {
  Container,
  Typography,
  Grid,
  Button,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSteam,
  faXbox,
  faPlaystation,
  faBattleNet,
} from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import Skelton from "../../../../ui-component/landing/Components/Skelton";
import GameSlider from "./GameSlider";
import { useNavigate } from "react-router-dom";
import { containerSpace, skeltonColor } from "../../../../ui-component/landing/constants/style";
import {
  GamCattabSx,
  GamTitle,
  GamCatXsBtn,
  GamCatBecBtn,
  GamCatScrolBtn,
  GamCatBecBtnTxt,
  GamCatMoreBtn,
  GamCatbtnSx,
  GamCattabWrap,
} from "../../../../ui-component/landing/constants/homepageSx";

import pls4 from "../../../../assets/images/landing/Play4.svg";
import pls5 from "../../../../assets/images/landing/ps5.svg";
import xbox from "../../../../assets/images/landing/xbo.svg";
import steam from "../../../../assets/images/landing/steamHead.svg";
import nin from "../../../../assets/images/landing/Nintendo.svg";
import battlenet from "../../../../assets/images/landing/Battlenet.svg";
import pc from "../../../../assets/images/landing/steamHead.svg";

const icon = {
  fontSize: 20,
  paddingRight: "10px",
};

const tabArray = [
  { name: 'PlayStation 4', smName: 'PS 4', kinguinSearchName: 'PlayStation 4', icon: faPlaystation, headImage: pls4},
  { name: 'PlayStation 5', smName: 'PS 5', kinguinSearchName: 'PlayStation 5', icon: faPlaystation, headImage: pls5},
  { name: 'Xbox', smName: 'Xbox', kinguinSearchName: 'XBOX ONE', icon: faXbox, headImage: xbox},
  { name: 'Steam', smName: 'Steam', kinguinSearchName: 'Steam', icon: faSteam, headImage: steam},
  { name: 'Nintendo', smName: 'Nintendo', kinguinSearchName: 'Nintendo', icon: faDesktop, headImage: nin},
  { name: 'Others', smName: 'Others', kinguinSearchName: 'Other', icon: faDesktop, headImage: nin},
  // { name: 'Battle.net', smName: 'Battle.net', kinguinSearchName: 'Other', icon: faBattleNet, headImage: battlenet},
  // { name: 'PC', smName: 'PC', kinguinSearchName: 'GOG COM',icon: faDesktop, headImage: pc},
]

export default function GamesCatelog() {
  const [sliderRef, setSliderRef] = useState(null);
  const [arrayShow, setArrayShow] = useState([]);
  const [newArray, setNewArray] = useState([]);
  const [headImagesAarray, setHeadImagesArray] = useState([]);
  const [value, setValue] = useState(0);
  const [check, setCheck] = useState(false);


  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    // console.log(newValue, "newValue");
    setValue(newValue);
  };

  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const allProducts = useSelector((state) => state.changeSkelton.products);


  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,

    };
  }

  const arrayChanged = (Datas) => {
    const GamesCatalog = [];
    const chunkSize = 2;
    for (let i = 0; i < Datas.length; i += chunkSize) {
      const slicedArray = Datas.slice(i, i + chunkSize);
      GamesCatalog.push({ games: slicedArray });
    }

    setArrayShow((prev) => [...prev, GamesCatalog]);
  };

  useEffect(() => {
    const getTabArray = (platformName, image) => {
      let playStation4Array = []
      if(platformName === 'Other'){
        playStation4Array = allProducts.filter((product) => product.platform !== 'PlayStation 4' && product.platform !== 'PlayStation 5' && product.platform !== 'XBOX ONE' && product.platform !== 'Steam' && product.platform !== 'Nintendo')
      }else{
        playStation4Array = allProducts.filter((product) => product.platform == platformName)
      }
      setNewArray((prev) => [...prev, playStation4Array])
      setHeadImagesArray((prev) => [...prev, image])
    }
    if (skeltonStatus) {
      tabArray.map((tabArr) => {
        getTabArray(tabArr.kinguinSearchName, tabArr.headImage)
      })
      setCheck(true)
    }

  }, [skeltonStatus])

  useEffect(() => {
    if (check) {
      newArray.forEach((item) => arrayChanged(item));
    }
  }, [check, newArray]);

  // useEffect(() => {
  //   console.log('asas')
  //   setSliderRef(null)
  // }, [value])

  return (
    <Container maxWidth="xl" sx={{ ...containerSpace }}>
      <Grid sx={{ pt: { md: 2, xs: 0 } }}>
        <Grid>
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            {skeltonStatus ? (
              <Typography
                sx={{
                  ...GamTitle,
                }}
              >
                Game catalog
              </Typography>
            ) : (
              <Skelton
                width="30%"
                height={40}
                style={{ marginBottom: "24px" }}
              />
            )}
            {skeltonStatus ? (
              <Button
                sx={{
                  ...GamCatXsBtn,
                }}
              >
                <ChevronRightIcon />
              </Button>
            ) : (
              <Skelton
                width="30%"
                height={40}
                style={{ marginBottom: "24px" }}
              />
            )}
          </Grid>
          <Grid
            container
            sx={{
              ...GamCattabWrap,
            }}
          >
            <Grid
              sx={{
                maxWidth: { xl: "100%", lg: "78.5%", md: "75%", xs: "100%" },
                display: "flex",
              }}
            >
              {skeltonStatus ? (
                <Tabs
                  TabIndicatorProps={{
                    sx: {
                      display: "none",
                    },
                  }}
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons={false}
                  aria-label="basic tabs example"
                >
                  {tabArray.map((tabArr, index) => (
                    <Tab
                      key={index}
                      sx={{ ...GamCattabSx }}
                      label={
                        <Grid
                          sx={{
                            ...GamCatbtnSx,

                            background:
                              value === index
                                ? "rgba(0, 238, 52, 0.15)"
                                : "rgba(131, 151, 195, 0.1)",
                            color: value === index ? "#00EE34" : "#8C95AD",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={tabArr.icon}
                            style={{ ...icon }}
                          />
                          <Box sx={{ display: { sm: "flex", xs: "none" } }}>
                            {tabArr.name}
                          </Box>
                          <Box sx={{ display: { sm: "none", xs: "flex" } }}>
                            {tabArr.smName}
                          </Box>
                        </Grid>
                      }
                      {...a11yProps(index)}
                    />
                  ))}
                  {/* <Tab
                    sx={{ ...GamCattabSx }}
                    label={
                      <Grid
                        sx={{
                          ...GamCatbtnSx,
                          background:
                            value === 0
                              ? "rgba(0, 238, 52, 0.15)"
                              : "rgba(131, 151, 195, 0.1)",
                          color: value === 0 ? "#00EE34" : "#8C95AD",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faPlaystation}
                          style={{ ...icon }}
                        />
                        <Box sx={{ display: { sm: "flex", xs: "none" } }}>
                          Playstation 4
                        </Box>
                        <Box sx={{ display: { sm: "none", xs: "flex" } }}>
                          PS 4
                        </Box>
                      </Grid>
                    }
                    {...a11yProps(0)}
                  />
                  <Tab
                    sx={{ ...GamCattabSx }}
                    label={
                      <Grid
                        sx={{
                          ...GamCatbtnSx,
                          background:
                            value === 1
                              ? "rgba(0, 238, 52, 0.15)"
                              : "rgba(131, 151, 195, 0.1)",
                          color: value === 1 ? "#00EE34" : "#8C95AD",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faPlaystation}
                          style={{ ...icon }}
                        />
                        <Box sx={{ display: { sm: "flex", xs: "none" } }}>
                          Playstation 5
                        </Box>
                        <Box sx={{ display: { sm: "none", xs: "flex" } }}>
                          PS 5
                        </Box>
                      </Grid>
                    }
                    {...a11yProps(1)}
                  />
                  <Tab
                    sx={{ ...GamCattabSx }}
                    label={
                      <Grid
                        sx={{
                          ...GamCatbtnSx,
                          background:
                            value === 2
                              ? "rgba(0, 238, 52, 0.15)"
                              : "rgba(131, 151, 195, 0.1)",
                          color: value === 2 ? "#00EE34" : "#8C95AD",
                        }}
                      >
                        <FontAwesomeIcon icon={faXbox} style={{ ...icon }} />{" "}
                        Xbox
                      </Grid>
                    }
                    {...a11yProps(2)}
                  />
                  <Tab
                    sx={{ ...GamCattabSx }}
                    label={
                      <Grid
                        sx={{
                          ...GamCatbtnSx,
                          background:
                            value === 3
                              ? "rgba(0, 238, 52, 0.15)"
                              : "rgba(131, 151, 195, 0.1)",
                          color: value === 3 ? "#00EE34" : "#8C95AD",
                        }}
                      >
                        <FontAwesomeIcon icon={faSteam} style={{ ...icon }} />
                        Steam
                      </Grid>
                    }
                    {...a11yProps(3)}
                  />
                  <Tab
                    sx={{ ...GamCattabSx }}
                    label={
                      <Grid
                        sx={{
                          ...GamCatbtnSx,
                          background:
                            value === 4
                              ? "rgba(0, 238, 52, 0.15)"
                              : "rgba(131, 151, 195, 0.1)",
                          color: value === 4 ? "#00EE34" : "#8C95AD",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faDesktop}
                          style={{
                            fontSize: 18,
                            paddingRight: "10px",
                          }}
                        />{" "}
                        Nintendo
                      </Grid>
                    }
                    {...a11yProps(4)}
                  />
                  <Tab
                    sx={{ ...GamCattabSx }}
                    label={
                      <Grid
                        sx={{
                          ...GamCatbtnSx,
                          background:
                            value === 5
                              ? "rgba(0, 238, 52, 0.15)"
                              : "rgba(131, 151, 195, 0.1)",
                          color: value === 5 ? "#00EE34" : "#8C95AD",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faBattleNet}
                          style={{
                            fontSize: 18,
                            paddingRight: "10px",
                          }}
                        />{" "}
                        Battle.net
                      </Grid>
                    }
                    {...a11yProps(5)}
                  />
                  <Tab
                    sx={{ ...GamCattabSx }}
                    label={
                      <Grid
                        sx={{
                          ...GamCatbtnSx,
                          background:
                            value === 6
                              ? "rgba(0, 238, 52, 0.15)"
                              : "rgba(131, 151, 195, 0.1)",
                          color: value === 6 ? "#00EE34" : "#8C95AD",
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faDesktop}
                          style={{
                            fontSize: 18,
                            paddingRight: "10px",
                          }}
                        />{" "}
                        PC
                      </Grid>
                    }
                    {...a11yProps(6)}
                  /> */}
                </Tabs>
              ) : (
                <>
                  {tabArray.map((index) => (
                    <Skelton
                      key={index}
                      width={index === 1 || index === 3 ? "146px" : "100px"}
                      height={40}
                      style={{
                        borderRadius: 10,
                        marginRight: "12px",
                      }}
                    />
                  ))}
                </>
              )}
            </Grid>
            <Grid
              sx={{
                display: { md: "flex", xs: "none" },
                justifyContent: "end",
                alignItems: "center",
                pt: { md: 1, sm: 2 },
              }}
            >
              {skeltonStatus ? (
                <>
                  <Grid sx={{ pr: 2 }}>
                    <Button
                      sx={{
                        ...GamCatBecBtn,
                      }}
                    >
                      <Typography
                        sx={{
                          ...GamCatBecBtnTxt,
                        }}
                      >
                        Bec
                      </Typography>{" "}
                      <ChevronRightIcon />
                    </Button>
                  </Grid>

                  {arrayShow ? (
                    <>
                      <Grid>
                        <Button
                          onClick={sliderRef?.slickPrev}
                          type="button"
                          sx={{
                            ...GamCatScrolBtn,
                            marginRight: "15px",
                            // pl: 1.4,
                            // py: 1.4,
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
                      <Grid>
                        <Button
                          onClick={sliderRef?.slickNext}
                          type="button"
                          sx={{
                            ...GamCatScrolBtn,
                            marginRight: "6px",
                            // padding: 1.4,
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
                </>
              ) : (
                <>
                  <Skelton
                    width={"100px"}
                    height={30}
                    style={{
                      borderRadius: 10,
                      marginRight: "12px",
                    }}
                  />
                  <Skeleton
                    variant="circular"
                    width={40}
                    height={40}
                    sx={{ ...skeltonColor, mr: 1 }}
                  />
                  <Skeleton
                    variant="circular"
                    width={40}
                    height={40}
                    sx={{ ...skeltonColor }}
                  />
                </>
              )}
            </Grid>
          </Grid>

          {arrayShow.length > 0 && check ? (
            arrayShow[value].length > 0 ?
              <GameSlider
                setSliderRef={setSliderRef}
                arrayShow={arrayShow[value]}
                headImage={headImagesAarray[value]}
              />

            : 
            (
            <Typography sx={{color: 'white', textAlign: 'center', mb: 2}}>There is no any product.</Typography>
            )

          ): (<GameSlider
            setSliderRef={setSliderRef}
            arrayShow={[]}
            headImage={null}
          />)}
          
          <Grid
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 1,
            }}
          >
            {skeltonStatus ? (
              <Button
                onClick={() => navigate("/game-catalog")}
                sx={{
                  ...GamCatMoreBtn,
                }}
              >
                Загрузить еще
              </Button>
            ) : (
              " "
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
