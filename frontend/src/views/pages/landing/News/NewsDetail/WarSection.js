import { Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../../../../../assets/images/landing/NewsAndPermotion/img1.png";
import MainImage from "../../../../../assets/images/landing/NewsAndPermotion/MainImage2.png";
import { boxStyle } from "../../../../../ui-component/landing/constants/style";
import { useSelector } from "react-redux";
import Skelton from "../../../../../ui-component/landing/Components/Skelton";
import {
  warSectiontext1,
  warSectiontext2,
  warSectionfeatureTxt,
  warSectionpad,
  warSectionendCard,
  warSectionCardImg,
  warSectionMainImg,
  warSectioncardBtn,
  warSectioncardTxt1,
  warSectioncardTxt2,
  warSectioncardTxt3,
  warSectioncardTxt4,
  warSectioncardWrap,
  warSectionSinglecard,
} from "../../../../../ui-component/landing/constants/NewsSx";

const WarSection = () => {
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);
  return skeltonStatus ? (
    <Card
      sx={{
        ...boxStyle,
        pl: { lg: 4, md: 2, sm: 6, xs: 2 },
        pr: { lg: 7, md: 5, sm: 10, xs: 2 },
        pt: { sm: 4, xs: 3 },
        pb: { sm: 4, xs: 3 },
      }}
    >
      <Typography sx={{ ...warSectionfeatureTxt, pt: 0 }}>
        God of War
      </Typography>
      <Typography sx={{ ...warSectiontext2, pt: 2 }}>
        Вы знаете, что это значит: повальное увлечение покупками в gits! Однако
        не бойтесь. Мы здесь, чтобы помочь вам выбрать лучшие подарки, которые,
        как мы знаем, вы уже ищете. Выберите несколько новинок, которые доведут
        ваше игровое оборудование до предела, или несколько старых игр, которые
        и по сей день остаются потрясающими. Ищете подарок в последнюю минуту?
        Никаких проблем: мгновенная доставка цифровых продуктов гарантирована.
      </Typography>
      <Grid sx={{ pt: 4 }}>
        <CardMedia
          component="img"
          image={MainImage}
          alt="not"
          sx={{
            ...warSectionMainImg,
          }}
        />
      </Grid>
      <Typography
        sx={{
          ...warSectioncardTxt4,
        }}
      >
        Starfield lets you customize your character and then explore the galaxy,
        land on planets, moons, and space stations, build bases, recruit crew
        members, pilot your own spaceship, complete with space battles. There’s
        so much to do in there. So, if you feel like playing a science fiction
        RPG, Starfield is one of the best picks right now.
      </Typography>
      <Typography sx={{ ...warSectionfeatureTxt }}>Key features</Typography>
      <ul style={{ padding: "0px 18px" }}>
        <li style={{ ...warSectionpad }}>
          Различные обновления игрового процесса, которые делают продолжение еще
          более увлекательным, чем оригинал
        </li>
        <li style={{ ...warSectionpad, paddingTop: 17 }}>
          Джедаи Звездных войн: Выживший
        </li>
        <li style={{ ...warSectionpad, paddingTop: 17 }}>Подробнее</li>
        <li style={{ ...warSectionpad, paddingTop: 17 }}>God of War</li>
      </ul>
      <Grid container sx={{ ...warSectionendCard }}>
        {[1, 2].map((data, index) => (
          <Grid
            item
            sm={6}
            xs={12}
            sx={{
              ...warSectioncardWrap,
            }}
          >
            <CardMedia
              component="img"
              image={img1}
              alt="not"
              sx={{
                ...warSectionCardImg,
              }}
            />
            <Grid
              sx={{
                ...warSectionSinglecard,
              }}
            >
              <Grid>
                <Typography sx={{ ...warSectioncardTxt1 }}>
                  Star Wars Jedi: Survivor
                </Typography>
                <Typography sx={{ ...warSectioncardTxt2 }}>
                  10 990 KZT
                </Typography>
                <Typography sx={{ ...warSectioncardTxt3 }}>
                  25 990 KZT
                </Typography>
              </Grid>
              <Button sx={{ ...warSectioncardBtn }}>Подробнее</Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Typography sx={{ ...warSectiontext1, pt: 4 }}>
        Звучит как перезагрузка, не так ли? God of War продолжает историю
        Кратоса, но меняет древнюю Грецию на не менее древнюю Скандинавию и ее
        мифы. Пришло время убить нескольких скандинавских богов.
      </Typography>
      <Typography sx={{ ...warSectiontext2 }}>
        Однако изменения на этом не заканчиваются. Разработчики полностью
        переосмыслили серию и перестроили игровой процесс, внедрив множество
        новых для франшизы элементов. Один из них сын Кратоса, Атрей, который
        помогает вам во время квеста своими способностями. Клинки с двойной
        цепью? Забудьте о них, могучий боевой топор с магической силой - вот где
        он!
      </Typography>
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

export default WarSection;
