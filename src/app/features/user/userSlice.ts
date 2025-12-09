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
  theme: "dark" | "light";
}

const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;

const savedUserJSON = localStorage.getItem("currentUser");
const savedUser: User | null = savedUserJSON ? JSON.parse(savedUserJSON) : null;

const proKey = savedUser ? `isPro_${savedUser.email}` : null;
const savedIsPro = proKey ? localStorage.getItem(proKey) === "true" : false;

const initialState: UserState = {
  isPro: savedIsPro,
  isSignIn: !!savedUser,
  user: savedUser,
  theme: savedTheme || "dark",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    upgradeToPro: (state) => {
      state.isPro = true;
      if (state.user) {
        const key = `isPro_${state.user.email}`;
        localStorage.setItem(key, "true");
      }
    },

    downgradeToFree: (state) => {
      state.isPro = false;
      if (state.user) {
        const key = `isPro_${state.user.email}`;
        localStorage.removeItem(key);
      }
    },

    signIn: (state, action: PayloadAction<User>) => {
      state.isSignIn = true;
      state.user = action.payload;

      localStorage.setItem("currentUser", JSON.stringify(action.payload));

      const key = `isPro_${action.payload.email}`;
      const hasPro = localStorage.getItem(key) === "true";

      state.isPro = hasPro;
    },

    logOut: (state) => {
      state.isSignIn = false;
      state.user = null;
      state.isPro = false;

      localStorage.removeItem("currentUser");
    },

    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { upgradeToPro, downgradeToFree, signIn, logOut, toggleTheme } =
  userSlice.actions;
export default userSlice.reducer;
