import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "./item.slice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});