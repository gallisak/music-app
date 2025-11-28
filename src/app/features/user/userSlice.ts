import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isPro: boolean;
}

const savedIsPro = localStorage.getItem("isPro");

const initialState: UserState = {
  isPro: savedIsPro === "true",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    upgradeToPro: (state) => {
      state.isPro = true;
      localStorage.setItem("isPro", "true");
    },
    downgradeToFree: (state) => {
      state.isPro = false;
      localStorage.removeItem("isPro");
    },
  },
});

export const { upgradeToPro, downgradeToFree } = userSlice.actions;
export default userSlice.reducer;
