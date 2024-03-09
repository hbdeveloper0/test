import { Card, Container, Grid } from "@mui/material";
import { boxStyle } from "../../../../../ui-component/landing/constants/style";
import React, { useState } from "react";
import PaymentMethod from "../../../../../ui-component/landing/Components/PaymentMethod";
import { useSelector } from "react-redux";
import Skelton from "../../../../../ui-component/landing/Components/Skelton";
import Email from "../../../../../ui-component/landing/Components/Email";
import ChooseCurrency from "../../../../../ui-component/landing/Components/ChooseCurrency";
import Replenishment from "../../../../../ui-component/landing/Components/Replenishment";
import SteamPaymentDetail from "../../../../../ui-component/landing/Components/SteamPaymentDetail";
import { containerSpace } from "../../../../../ui-component/landing/constants/style";
import { PubgcurrancyArr } from "../../../../../ui-component/landing/Data/PubGPurchaseData";

const PubgPurchaseDetail = () => {
  const [stock, setstock] = useState(true);
  const { skeltonStatus } = useSelector((state) => state.changeSkelton);

  return (
    <Container
      maxWidth="xl"
      sx={{
        mt: { sm: 3, xs: 1 },
        ...containerSpace,
      }}
    >
      <Grid container spacing={1}>
        <Grid item lg={7.6} md={7.5} xs={12}>
          <Email
            stock={true}
            title="An activation code will be sent to the specified email address."
            labal="Сохранить e-mail для дальнейшего пополнения"
          />
          <Grid sx={{ pt: { sm: 3, xs: 2 } }}>
            <ChooseCurrency
              arr={PubgcurrancyArr}
              subtitle="UC PUBG Mobile Activation Code (Global) can be used for all servers"
              bg={true}
            />
          </Grid>
          <Grid sx={{ pt: { sm: 3, xs: 2 } }}>
            <PaymentMethod
              title="3. Payment Method"
              stock={stock}
              screen="steam_purchase"
            />
          </Grid>
          <Grid sx={{ pt: { sm: 3, xs: 2 } }}>
            {skeltonStatus ? (
              <Card
                sx={{
                  ...boxStyle,
                  // pt: { sm: 4, xs: 1.5 },
                }}
              >
                <Replenishment title="4. Replenishment instructions" />
              </Card>
            ) : (
              <Skelton
                style={{
                  width: "100%",
                  height: {
                    lg: "372px",
                    md: "429px",
                    sm: "426px",
                    xs: "428px",
                  },
                }}
              />
            )}
          </Grid>
        </Grid>
        <Grid item lg={0.5} md={0.2} xs={12} />
        <Grid
          item
          lg={3.9}
          md={4.3}
          xs={12}
          sx={{ display: { md: "block", xs: "none" } }}
        >
          <SteamPaymentDetail title="Replenishment of codes PUBG Mobile" />
          <Grid sx={{ pt: 2 }}>
            <Card
              sx={{ ...boxStyle, py: "370px !important", textAlign: "center" }}
            >
              ADS Frame
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PubgPurchaseDetail;
