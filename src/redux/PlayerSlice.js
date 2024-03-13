import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStation: '',
  currentCountry: '',
  countries: []
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentStation: (state, action) => {
      state.currentStation = action.payload; // Update currentStation
    },
    setCurrentCountry: (state, action) => {
      state.currentCountry = action.payload
    },
    setCountries : (state, action) => {
      state.countries = action.payload
    }
  },
});

// Export action creators
export const { setCurrentStation, setCurrentCountry, setCountries } = playerSlice.actions;

export default playerSlice.reducer;
