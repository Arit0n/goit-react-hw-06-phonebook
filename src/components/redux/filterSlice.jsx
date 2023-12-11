import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { updateFilter } = filterSlice.actions;

// export const filterReducer = (state = filterValues, action) => {
//   switch (action.type) {
//     case 'filter/update': {
//       return action.payload;
//     }
//     default:
//       return state;
//   }
// };
// export const updateFilter = values => {
//   return { type: 'filter/update', payload: values };
// };
