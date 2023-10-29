import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./features/registerPhases";
import authReducer from "./features/auth";
import showModalReducer from "./features/showModal";

import { register } from "./service/register";
import { login } from "./service/login";

const store = configureStore({
  reducer: {
    auth: authReducer,
    registerPhases: registerReducer,
    showModal: showModalReducer,

    [register.reducerPath]: register.reducer,
    [login.reducerPath]: login.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(register.middleware).concat(login.middleware),
});

export default store;
