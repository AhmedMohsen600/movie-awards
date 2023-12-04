import { createSlice } from '@reduxjs/toolkit';

const nomineesSlice = createSlice({
  name: 'nominees',
  initialState: {
    categories: [],
    nominees: {},
    selectedNominees: [],
  },
  reducers: {
    setBallotData: (state, action) => {
      const { categories, nominees } = action.payload;
      state.categories = categories;
      state.nominees = nominees;
    },
    selectNominee: (state, action) => {
      const { id, name } = action.payload;
      // Check if the nominee is already selected
      const isNomineeSelected = state.selectedNominees.some(
        (nominee) => nominee.id === id
      );

      if (!isNomineeSelected) state.selectedNominees.push({ id, name });
      else {
        // If already selected, remove the nominee from the array
        state.selectedNominees = state.selectedNominees.filter(
          (nominee) => nominee.id !== id
        );
      }
    },
  },
});

export const { setBallotData, selectNominee } = nomineesSlice.actions;
export default nomineesSlice.reducer;
