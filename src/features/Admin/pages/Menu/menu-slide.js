import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseAPI } from "../../../../utils/api-helper";
import { STATUS_TYPE } from "../../../../utils/constants";

export const fetchMenu = createAsyncThunk("menus/fetchAllMenu", async () => {
  const responese = await axios.get(`${baseAPI}/Menus`);
  return responese.data;
});

export const addMenu = createAsyncThunk(
  "menu/createMenu",
  async (menu, dispatch) => {
    const data = {
      ...menu,
      createdDate: new Date(),
      createdBy: "System",
    };
    const responese = await axios.post(`${baseAPI}/Menus`, data);
    const { status } = responese;
    if (status === 200) {
      dispatch?.dispatch(newMenu(menu));
    }
  }
);

const initMenus = {
  status: STATUS_TYPE.LOADING,
  items: [],
  menuType: [
    {
      value: 1,
      text: "Salad",
    },
    {
      value: 2,
      text: "Burger",
    },
    {
      value: 3,
      text: "Pizza",
    },
    {
      value: 4,
      text: "Drink",
    },
  ],
};

const menu = createSlice({
  name: "menus",
  initialState: initMenus,
  reducers: {
    newMenu: (state, action) => {
      state.items = [action.payload, ...state.items];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = STATUS_TYPE.SUCCESS;
        state.items = action.payload;
      })
      .addCase(fetchMenu.pending, (state, action) => {
        state.status = STATUS_TYPE.LOADING;
      });
  },
});

const { reducer, actions } = menu;
export const { newMenu } = actions;
export default reducer;
