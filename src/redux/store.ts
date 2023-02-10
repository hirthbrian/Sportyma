import { configureStore } from "@reduxjs/toolkit";
import participation from "./participationSlice";

export const store = configureStore({
  reducer: {
    participation,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
