import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import registerReducer from "./features/registerPhases";
import authReducer from "./features/auth";
import showModalReducer from "./features/showModal";
import changeIDReducer from "./features/changeID";
import bodyRateReducer from "./features/dietary-record/bodyRate";

import { register } from "./service/register";
import { login } from "./service/login";
import { course } from "./service/course";
import { courseRecord } from "./service/courseRecord";

const store = configureStore({
  reducer: {
    auth: authReducer,
    registerPhases: registerReducer,
    showModal: showModalReducer,
    // changeID: changeIDReducer,
    bodyRate: bodyRateReducer,

    [register.reducerPath]: register.reducer,
    [login.reducerPath]: login.reducer,
    [course.reducerPath]: course.reducer,
    [courseRecord.reducerPath]: courseRecord.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(register.middleware)
      .concat(login.middleware)
      .concat(course.middleware)
      .concat(courseRecord.middleware),
});

const wrapper = createWrapper(() => store, { debug: false });
export default wrapper;
