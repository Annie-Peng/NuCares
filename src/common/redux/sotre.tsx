import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./features/registerPhases";
import authReducer from "./features/auth";

import { register } from "./service/register";
import { login } from "./service/login";
import { course } from "./service/course";
import { testCourse } from "./service/test/testCourse";

const store = configureStore({
  reducer: {
    auth: authReducer,
    registerPhases: registerReducer,
    [register.reducerPath]: register.reducer,
    [login.reducerPath]: login.reducer,
    [course.reducerPath]: course.reducer,

    [testCourse.reducerPath]: testCourse.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(register.middleware)
      .concat(login.middleware)
      .concat(course.middleware)

      .concat(testCourse.middleware),
});

export default store;
