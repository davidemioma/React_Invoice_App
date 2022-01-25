import { createSlice } from "@reduxjs/toolkit";
import invoices from "../data.json";

const invoiceSlice = createSlice({
  name: "invoices",
  initialState: {
    invoices: invoices,
    totalInvoices: invoices.length,
  },
  reducers: {
    addInvoice(state, action) {
      const newInvoice = action.payload;

      const existingInvoice = state.invoices.find(
        (invoice) => invoice.id === newInvoice.id
      );

      if (!existingInvoice) {
        state.invoices.push(newInvoice);
        state.totalInvoices++;
      }
    },

    deleteInvoice(state, action) {
      const id = action.payload;

      const existingInvoice = state.invoices.find(
        (invoice) => invoice.id === id
      );

      if (existingInvoice) {
        state.invoices = state.invoices.filter((invoice) => invoice.id !== id);
        state.totalInvoices--;
      }
    },

    markInvoiceAsPaid(state, action) {
      const id = action.payload;

      const existingInvoice = state.invoices.findIndex(
        (invoice) => invoice.id === id
      );

      if (state.invoices[existingInvoice]) {
        state.invoices[existingInvoice].status = "Paid";
      }
    },

    updateInvoice(state, action) {
      const updatedInvoice = action.payload;

      const existingInvoice = state.invoices.findIndex(
        (invoice) => invoice.id === updatedInvoice.id
      );

      if (state.invoices[existingInvoice]) {
        state.invoices[existingInvoice] = updatedInvoice;
      }
    },
  },
});

export default invoiceSlice;
