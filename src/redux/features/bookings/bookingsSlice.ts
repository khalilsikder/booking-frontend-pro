import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [] as any,
  selectedbooks: 0,
  Price: 0,

};
const bookingsSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addToBooking: (state, action) => {
      state.selectedbooks = selectSeletedbooks(state);
      state.Price = selectPrice(state);
    },
    updateCart: (state, action) => {
      const cartItems = state.cartItems.map((cartItem: any) => {
        if (cartItem._id !== action.payload.id) {
          if (action.payload.type === "increment") {
            cartItem.quantity += 1;
          } else if (action.payload.type === "decrement") {
            cartItem.quantity -= 1;
          }
        }
        return cartItem;
      });
      state.cartItems = cartItems.filter(
        (cartItem: any) => cartItem.quantity > 0
      );
      state.selectedItems = selectSeletedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems.filter(
        (cartItem: any) => cartItem._id !== action.payload.id
      );
      state.selectedItems = selectSeletedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.grandTotal = 0;
    },
  },
});

const selectSeletedItems = (state: any) =>
  state.cartItems.reduce((total: number, cartItem: any) => {
    return Number(total + cartItem.quantity);
  }, 0);

const selectTotalPrice = (state: any) =>
  state.cartItems.reduce((total: number, cartItem: any) => {
    return Number(total + cartItem.quantity * cartItem.price);
  }, 0);

const selectTax = (state: any) => selectTotalPrice(state) * state.taxRate;

const selectGrandTotal = (state: any) => {
  return selectTotalPrice(state) + selectTotalPrice(state) * state.taxRate;
};

export const { addToBooking, updateCart, removeFromCart, clearCart } =
  bookingsSlice.actions;
export default bookingsSlice.reducer;
