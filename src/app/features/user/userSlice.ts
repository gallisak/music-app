import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
  password: string;
  email: string;
  name: string;
}

interface UserState {
  isPro: boolean;
  isSignIn: boolean;
  user: User | null;
}

const savedIsPro = localStorage.getItem("isPro");
const savedUserJSON = localStorage.getItem("currentUser");

const savedUser: User | null = savedUserJSON ? JSON.parse(savedUserJSON) : null;

const initialState: UserState = {
  isPro: savedIsPro === "true",
  isSignIn: !!savedUser,
  user: savedUser,
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

    signIn: (state, action: PayloadAction<User>) => {
      state.isSignIn = true;
      state.user = action.payload;
      state.isPro = localStorage.getItem("isPro") === "true";
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },

    logOut: (state) => {
      state.isSignIn = false;
      state.user = null;
      state.isPro = false;
      localStorage.removeItem("currentUser");
    },
  },
});

export const { upgradeToPro, downgradeToFree, signIn, logOut } =
  userSlice.actions;
export default userSlice.reducer;
