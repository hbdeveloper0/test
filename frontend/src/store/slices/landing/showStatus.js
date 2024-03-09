import { createSlice } from "@reduxjs/toolkit";

const gameStatus = createSlice({
  name: "gameStatus",
  initialState: {
    gameStatus: false,
  },
  reducers: {
    showGameStatus: (state, action) => {
      state.gameStatus = action.payload;
    },
  },
});
export const { showGameStatus } = gameStatus.actions;
export default gameStatus.reducer;
