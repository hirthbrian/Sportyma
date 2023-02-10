import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { loadEventData } from "../utils";

const data = loadEventData();

interface ParticipationState {
  [key: number]: string | null;
}

const initialState: ParticipationState = {
  1: data[0].participation,
  2: data[1].participation,
};

export const participationSlice = createSlice({
  name: "participation",
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

export default participationSlice.reducer;
