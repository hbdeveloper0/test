import { createSlice } from "@reduxjs/toolkit";
import flag1 from "../../../assets/images/landing/world.svg";
const mobileDropDownView = createSlice({
  name: "mobileDropDownView",
  initialState: {
    dropDownStatus: false,
    title: "",
    data: {},
    dropDownType: "",
    selectedCountryName: { name: "Global", flg: flag1 },
    selectCurrency: { name: "USD" },
  },
  reducers: {
    changeMobileDropDownView: (state, action) => {
      state.dropDownStatus = action.payload.status;
      state.title = action.payload.title;
      state.data = action.payload.data;
      state.dropDownType = action.payload.dropDownType;
    },
    selectCountry: (state, action) => {
      state.selectedCountryName.name = action.payload.name;
      state.selectedCountryName.flg = action.payload.flg;
    },
    selectCurrencyData: (state, action) => {
      state.selectCurrency.name = action.payload.name;
    },
  },
});
export const { changeMobileDropDownView, selectCountry, selectCurrencyData } =
  mobileDropDownView.actions;
export default mobileDropDownView.reducer;
