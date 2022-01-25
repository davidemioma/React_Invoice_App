import { configureStore } from "@reduxjs/toolkit";
import invoiceSlice from "./invoice-slice";
import themeSlice from "./theme-slice";

const store = configureStore({
  reducer: { allInvoice: invoiceSlice.reducer, appTheme: themeSlice.reducer },
});

export const invoiceActions = invoiceSlice.actions;

export const themeActions = themeSlice.actions;

export default store;
