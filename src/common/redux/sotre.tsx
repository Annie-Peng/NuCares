import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./features/registerPhases";

import { register } from "./service/register";

const store = configureStore({
  reducer: {
    registerPhases: registerReducer,
    [register.reducerPath]: register.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(register.middleware),
});

export default store;
