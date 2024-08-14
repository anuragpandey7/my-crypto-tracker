import { createSlice } from "@reduxjs/toolkit";

export const watchListSlice = createSlice({
  name: "watchList",
  initialState: [],
  reducers: {
    handleAddCoin: (state, action) => {
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    },
    handleRemoveCoin: (state, action) => {

      const getIndex = (element, array) =>
        array.findIndex(
          (obj) => JSON.stringify(obj) === JSON.stringify(element)
        );
      const indexOfRemoveingCoin = getIndex(action.payload, state);
      return [...state.slice(0, indexOfRemoveingCoin),...state.slice(indexOfRemoveingCoin + 1)];

     
    },
  },
});

export const { handleAddCoin, handleRemoveCoin } = watchListSlice.actions;
export default watchListSlice.reducer;
