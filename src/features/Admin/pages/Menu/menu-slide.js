import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseAPI } from "../../../../utils/api-helper";
import { STATUS_TYPE } from "../../../../utils/constants";

export const fetchMenu = createAsyncThunk("menus/fetchAllMenu", async () => {
  const responese = await axios.get(`${baseAPI}/Menus`);
  return responese.data;
});

export const addMenu = createAsyncThunk("menu/createMenu", async (menu, cb) => {
  const data = {
    createdDate: new Date(),
    createdBy: "System",
    ...menu,
  };
  if (!data?.id) {
    const responese = await axios.post(`${baseAPI}/Menus`, data);
    const { status } = responese;

    status === 200 && cb?.dispatch(newMenu(responese.data));
  } else {
    const responese = await axios.patch(`${baseAPI}/Menus/${data.id}`, data);
    const { status } = responese;

    status === 200 && cb?.dispatch(updateMenu(data));
  }
});

export const onDeleteMenu = createAsyncThunk(
  "menu/deleteMenu",
  async (id, cb) => {
    const response = await axios.delete(`${baseAPI}/Menus/${id}`);
    const { status } = response;

    status === 200 && cb.dispatch(deleteMenu(id));
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
    updateMenu: (state, action) => {
      const itemIndex = state.items.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.items[itemIndex] = { ...action.payload };
    },
    deleteMenu: (state, action) => {
      const newState = state.items.filter((item) => item.id !== action.payload);
      state.items = [...newState];
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
export const { newMenu, updateMenu, deleteMenu } = actions;
export default reducer;
