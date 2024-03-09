import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import PaymentDetail from "../../../views/pages/landing/gamePurchase/GameDetail/PaymentDetail";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import SteamPaymentDetail from "./SteamPaymentDetail";

export default function TemporaryDrawer({ open, close, children }) {
  const { activePayment } = useSelector((state) => state.paymentCompCheck);

  const drawerContent = (
    <Box
      sx={{ width: "auto", background: "rgba(44, 50, 77, 1)" }}
      role="presentation"
      // onClick={close}
      onKeyDown={close}
    >
      {/* {children} */}

      {activePayment === "game_purchase" && (
        <PaymentDetail stock={true} close={close} />
      )}
      {activePayment === "steam_purchase" && (
        <SteamPaymentDetail
          title="Topping up your Steam account"
          close={close}
        />
      )}
      {activePayment === "steam_gift_purchase" && (
        <SteamPaymentDetail title="Покупка Gift Card Steam" close={close} />
      )}
    </Box>
  );

  return (
    <Grid sx={{}}>
      <Drawer anchor="bottom" open={open} onClose={close}>
        {drawerContent}
      </Drawer>
    </Grid>
  );
}
