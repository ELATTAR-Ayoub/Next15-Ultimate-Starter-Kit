// store.ts
import { configureStore } from "@reduxjs/toolkit";
import UIConfig from "./UIConfig"; // This should match your actual export

export const makeStore = () => {
  return configureStore({
    reducer: {
      UIConfig: UIConfig, // This reducer is applied to the UIConfig slice
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
