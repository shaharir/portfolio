import { configureStore } from "@reduxjs/toolkit";
import { apiService } from "./services/apiServic";

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
});
