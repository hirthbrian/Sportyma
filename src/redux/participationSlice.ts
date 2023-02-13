import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { loadEventData } from "../utils";
import { ParticipationEnum } from "../types";

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
      state[action.payload] = ParticipationEnum.Present;
    },
    refuse: (state, action: PayloadAction<number>) => {
      state[action.payload] = ParticipationEnum.Absent;
    },
  },
});

export const { approve, refuse } = participationSlice.actions;

export default participationSlice.reducer;
