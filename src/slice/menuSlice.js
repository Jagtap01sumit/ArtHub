import { createSlice } from "@reduxjs/toolkit";

const { MENU_ITEMS } = require("@/constants");

const initialState = {
  activeMenuItem: MENU_ITEMS.PENCIL,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    menuItemClick: (state, action) => {
      state.activeMenuItem = action.payload;
    },
    actionItemClick: (state, action) => {
      state.activeMenuItem = action.payload;
    },
  },
});

export const { menuItemClick } = menuSlice.actions;
export const { actionItemClick } = menuSlice.actions;
export default menuSlice.reducer;
