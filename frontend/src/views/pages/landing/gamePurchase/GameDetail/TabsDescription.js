import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { boxStyle, charTitle } from "../../../../../ui-component/landing/constants/style";
import { Card, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Skelton from "../../../../../ui-component/landing/Components/Skelton";
import { GamePurTabsData } from "../../../../../ui-component/landing/Data/gamePurchaseData";
import {
  gamePurDetTab,
  gamePurDetTabTxt,
} from "../../../../../ui-component/landing/constants/GamePurchaseSX";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(1);
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  const { productDetail } = useSelector((state) => state.productDetail);
  const [productDescriptionCharacters, setProductDescriptionCharacters] = React.useState(250)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return skeltonStatus && productDetail ? (
    <Card sx={{ ...boxStyle }}>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "rgba(255, 255, 255, 0.1)" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              sx={{
                ...gamePurDetTab,
              }}
              label="Description"
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                ...gamePurDetTab,
              }}
              label="Characteristics"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Typography variant="h5">This is Description Page</Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Grid sx={{}}>
            {/* <Typography sx={{ ...charTitle }}>Характерстики игры</Typography> */}
            <Typography sx={{ ...charTitle }}>Game characteristics</Typography>

            <Grid container sx={{ pt: { sm: 1.5, xs: 3.5 } }}>
              <Grid item sm={4.5} xs={4} sx={{...gamePurDetTabTxt}}> Platform </Grid>
              <Grid item sm={7.5} xs={8} sx={{ ...gamePurDetTabTxt }}> {productDetail.platform ? productDetail.platform : 'N/A'}</Grid>
            </Grid>

            <Grid container sx={{ pt: { sm: 1.5, xs: 3.5 } }}>
              <Grid item sm={4.5} xs={4} sx={{...gamePurDetTabTxt}}> genres </Grid>
              <Grid item sm={7.5} xs={8} sx={{ ...gamePurDetTabTxt }}> {productDetail.genres && productDetail.genres.length > 0 ? productDetail.genres.map((genre, index) => (index !== productDetail.genres.length - 1 ? genre + ', ' : genre)) : 'N/A'}</Grid>
            </Grid>

            <Grid container sx={{ pt: { sm: 1.5, xs: 3.5 } }}>
              <Grid item sm={4.5} xs={4} sx={{...gamePurDetTabTxt}}> Description </Grid>
              <Grid item sm={7.5} xs={8} sx={{ ...gamePurDetTabTxt }}> {productDetail.description && productDetail.description.length > productDescriptionCharacters ? productDetail.description.substring(0, productDescriptionCharacters) + "..." : productDetail.description ? productDetail.description
                : '«Призрачная свобода» — это сюжетное дополнение, привносящее элементы шпионского триллера в игру Cyberpunk 2077'}
              </Grid>
            </Grid>

            <Grid container sx={{ pt: { sm: 1.5, xs: 3.5 } }}>
              <Grid item sm={4.5} xs={4} sx={{...gamePurDetTabTxt}}> Publisher </Grid>
              <Grid item sm={7.5} xs={8} sx={{ ...gamePurDetTabTxt }}> {productDetail.publishers && productDetail.publishers.length > 0 ? productDetail.publishers.map((publisher, index) => (index !== productDetail.publishers.length - 1 ? publisher + ', ' : publisher)) : 'N/A'}</Grid>
            </Grid>

            <Grid container sx={{ pt: { sm: 1.5, xs: 3.5 } }}>
              <Grid item sm={4.5} xs={4} sx={{...gamePurDetTabTxt}}> Release Date </Grid>
              <Grid item sm={7.5} xs={8} sx={{ ...gamePurDetTabTxt }}> {productDetail.releaseDate ? productDetail.releaseDate : 'N/A'}</Grid>
            </Grid>

            <Grid container sx={{ pt: { sm: 1.5, xs: 3.5 } }}>
              <Grid item sm={4.5} xs={4} sx={{...gamePurDetTabTxt}}> Language </Grid>
              <Grid item sm={7.5} xs={8} sx={{ ...gamePurDetTabTxt }}> {productDetail.languages && productDetail.languages.length > 0 ? productDetail.languages.map((language, index) => (index !== productDetail.languages.length - 1 ? language + ', ' : language)) : 'N/A'}</Grid>
            </Grid>

            <Grid container sx={{ pt: { sm: 1.5, xs: 3.5 } }}>
              <Grid item sm={4.5} xs={4} sx={{...gamePurDetTabTxt}}> Audio </Grid>
              <Grid item sm={7.5} xs={8} sx={{ ...gamePurDetTabTxt }}> {productDetail.Audio ? productDetail.Audio : 'N/A'}</Grid>
            </Grid>

            {/* {GamePurTabsData.map((data, index) => (
              <Grid container sx={{ pt: { sm: 1.5, xs: 3.5 } }}>
                <Grid
                  item
                  sm={4.5}
                  xs={4}
                  sx={{
                    ...gamePurDetTabTxt,
                  }}
                >
                  {data.title}
                </Grid>
                <Grid
                  item
                  sm={7.5}
                  xs={8}
                  sx={{
                    ...gamePurDetTabTxt,
                  }}
                >
                  {data.description}
                </Grid>
              </Grid>
            ))} */}
          </Grid>
        </CustomTabPanel>
      </Box>
    </Card>
  ) : (
    <Skelton
      style={{
        width: "100%",
        height: { lg: "561px", md: "657px", sm: "633px", xs: "861px" },
      }}
    />
  );
}
