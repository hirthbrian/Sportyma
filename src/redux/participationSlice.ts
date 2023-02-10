import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

import trainig1 from "../../data/training_1.json";
import trainig2 from "../../data/training_2.json";

// Define a type for the slice state
interface ParticipationState {
  [key: number]: string | null;
}

// Define the initial state using that type
const initialState: ParticipationState = {
  1: trainig1.participation,
  2: trainig2.participation,
};

export const participationSlice = createSlice({
  name: "participation",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    approve: (state, action: PayloadAction<number>) => {
      state[action.payload] = "PRESENT";
    },
    refuse: (state, action: PayloadAction<number>) => {
      state[action.payload] = "ABSENT";
    },
  },
});

export const { approve, refuse } = participationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectParticipationStatus = (state: RootState) =>
  state.participation;

export default participationSlice.reducer;
