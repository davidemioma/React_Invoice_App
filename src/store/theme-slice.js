import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "darkmode",
  },
  reducers: {
    toggleTheme(state, action) {
      state.theme = state.theme === "darkmode" ? "lightmode" : "darkmode";
    },
  },
});

export default themeSlice;
