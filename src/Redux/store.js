import { createSlice, configureStore } from "@reduxjs/toolkit";
//* slices -------------------------------------------------------------------------------------------
//& cart
const productsSlice = createSlice({
  name: "products",
  initialState: { value: [] },
  reducers: {
    update(state, action) {
      state.value = action.payload;
    },
  },
});
//& cart
const cartSlice = createSlice({
  name: "cart",
  initialState: { value: [] },
  reducers: {
    add(state, action) {
      state.value.push(action.payload.id);
    },
    remove(state, action) {
      const filteredArray = state.value.filter((id) => id != action.payload.id);
      state.value = filteredArray;
    },
  },
});
//& favorite
const favoriteSlice = createSlice({
  name: "favorite",
  initialState: { value: [] },
  reducers: {
    add(state, action) {
      state.value.push(action.payload.id);
    },
    remove(state, action) {
      const filteredArray = state.value.filter((id) => id != action.payload.id);
      state.value = filteredArray;
    },
  },
});

//* store configuration --------------------------------------------------------------------------------
export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    favorite: favoriteSlice.reducer,
  },
});

//* actions exports --------------------------------------------------------------------------------
export const productsActions = productsSlice.actions;
export const cartActions = cartSlice.actions;
export const favoriteActions = favoriteSlice.actions;

export default store;
