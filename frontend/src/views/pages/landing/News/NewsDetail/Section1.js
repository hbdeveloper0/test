import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../../../../../assets/images/landing/NewsAndPermotion/img1.png";
import MainImage from "../../../../../assets/images/landing/NewsAndPermotion/Mainimage1.png";
import { boxStyle } from "../../../../../ui-component/landing/constants/style";
import { useSelector } from "react-redux";
import Skelton from "../../../../../ui-component/landing/Components/Skelton";
import {
  newsSectiontext1,
  newsSectiontext2,
  newsSectiontext2btn,
  newsSectionFeatureTxt,
  newsSectionpad,
  newsSectionendCard,
  newsSectionCardImg,
  newsSectionmainImg,
  newsSectioncardBtn,
  newsSectioncardWrap,
  newsSectioncardTxt,
  newsSectioncardPrice,
  newsSectioncardDisPrice,
} from "../../../../../ui-component/landing/constants/NewsSx";

const Section1 = () => {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);

  return skeltonStatus ? (
    <Card
      sx={{
        ...boxStyle,
        pl: { lg: 4, md: 2, sm: 6, xs: 2 },
        pr: { lg: 7, md: 3, sm: 10, xs: 2 },
        pt: { sm: 4, xs: 3 },
        pb: { sm: 4, xs: 3 },
      }}
    >
      <Typography sx={{ ...newsSectiontext1 }}>
        Декабрь снова на носу. Как обычно, вы, наверное, только что услышали
        песню Wham! “Last Christmas" и другие основные продукты, которые против
        своей воли уже знаете наизусть. Все эти шоколадные Санта-Клаусы,
        рождественские венки и другие рождественские украшения, вероятно, тоже
        повсюду.
      </Typography>
      <Typography sx={{ ...newsSectiontext2 }}>
        Вы знаете, что это значит: повальное увлечение покупками в gits! Однако
        не бойтесь. Мы здесь, чтобы помочь вам выбрать лучшие подарки, которые,
        как мы знаем, вы уже ищете. Выберите несколько новинок, которые доведут
        ваше игровое оборудование до предела, или несколько старых игр, которые
        и по сей день остаются потрясающими. Ищете подарок в последнюю минуту?
        Никаких проблем: мгновенная доставка цифровых продуктов гарантирована.
      </Typography>

      <Grid sx={{ pt: 4 }}>
        <Button fullWidth sx={{ ...newsSectiontext2btn }}>
          Upgrade your gaming library with discounted video games
        </Button>
      </Grid>
      <Grid sx={{ pt: 3.4 }}>
        <CardMedia
          component="img"
          image={MainImage}
          alt="not"
          sx={{
            ...newsSectionmainImg,
          }}
        />
      </Grid>
      <Typography sx={{ ...newsSectiontext2 }}>
        Вы знаете, что это значит: повальное увлечение покупками в gits! Однако
        не бойтесь. Мы здесь, чтобы помочь вам выбрать лучшие подарки, которые,
        как мы знаем, вы уже ищете. Выберите несколько новинок, которые доведут
        ваше игровое оборудование до предела, или несколько старых игр, которые
        и по сей день остаются потрясающими. Ищете подарок в последнюю минуту?
        Никаких проблем: мгновенная доставка цифровых продуктов гарантирована.
      </Typography>
      <Typography sx={{ ...newsSectionFeatureTxt }}>Key features</Typography>
      <ul style={{ padding: "0px 18px" }}>
        <li style={{ ...newsSectionpad }}>
          Различные обновления игрового процесса, которые делают продолжение еще
          более увлекательным, чем оригинал
        </li>
        <li style={{ ...newsSectionpad, paddingTop: 17 }}>
          Джедаи Звездных войн: Выживший
        </li>
        <li style={{ ...newsSectionpad, paddingTop: 17 }}>Подробнее</li>
        <li style={{ ...newsSectionpad, paddingTop: 17 }}>God of War</li>
      </ul>
      <Card sx={{ ...newsSectionendCard }}>
        <CardMedia
          component="img"
          image={img1}
          alt="not"
          sx={{
            ...newsSectionCardImg,
          }}
        />
        <Grid
          sx={{
            ...newsSectioncardWrap,
          }}
        >
          <Grid>
            <Typography
              sx={{
                ...newsSectioncardTxt,
              }}
            >
              Star Wars Jedi: Survivor
            </Typography>
            <Typography
              sx={{
                ...newsSectioncardPrice,
              }}
            >
              10 990 KZT
            </Typography>
            <Typography
              sx={{
                ...newsSectioncardDisPrice,
              }}
            >
              25 990 KZT
            </Typography>
          </Grid>
          <Button sx={{ ...newsSectioncardBtn }}>Подробнее</Button>
        </Grid>
      </Card>
    </Card>
  ) : (
    <Skelton
      style={{
        width: "100%",
        height: { lg: "1477px", md: "1580px", sm: "1552px", xs: "1680px" },
      }}
    />
  );
};

export default Section1;
