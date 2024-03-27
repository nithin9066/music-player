import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentCountry: '',
  currentStationIndex: -1,
  countries: [],
  stations: []
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentCountry: (state, action) => {
      state.currentCountry = action.payload
    },
    setCountries: (state, action) => {
      state.countries = action.payload
    },
    setStations: (state, action) => {
      state.stations = action.payload
    },
    setStationIndex: (state, action) => {
      state.currentStationIndex = action.payload
    },
    setNextStation: (state) => {
      state.currentStationIndex += 1;
    },
    setPrevStation: (state) => {
      state.currentStationIndex -= 1;
    }

  },
});
// Export action creators
export const { setCurrentCountry, setCountries, setStations, setStationIndex, setPrevStation, setNextStation } = playerSlice.actions;

export default playerSlice.reducer;
