import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import registerReducer from "./features/registerPhases";
import paymentReducer from "./features/paymentPhases";
import authReducer from "./features/auth";
import showModalReducer from "./features/showModal";
import changeIDReducer from "./features/changeID";
import bodyRateReducer from "./features/dietary-record/bodyRate";
import dailyDietaryReducer from "./features/dietary-record/dailyDietary";
import goalReducer from "./features/dietary-record/goal";

import { register } from "./service/register";
import { login } from "./service/login";
import { course } from "./service/course";
import { courseRecord } from "./service/courseRecord";
import { plan } from "./service/plan";
import { intro } from "./service/intro";
import { nutritionistList } from "./service/nutritionistList";
import { payment } from "./service/payment";

const store = configureStore({
  reducer: {
    auth: authReducer,
    registerPhases: registerReducer,
    showModal: showModalReducer,
    // changeID: changeIDReducer,
    dailyDietary: dailyDietaryReducer,
    bodyRate: bodyRateReducer,
    goal: goalReducer,
    paymentPhases: paymentReducer,

    [register.reducerPath]: register.reducer,
    [login.reducerPath]: login.reducer,
    [course.reducerPath]: course.reducer,
    [courseRecord.reducerPath]: courseRecord.reducer,
    [plan.reducerPath]: plan.reducer,
    [intro.reducerPath]: intro.reducer,
    [nutritionistList.reducerPath]: nutritionistList.reducer,
    [payment.reducerPath]: payment.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(register.middleware)
      .concat(login.middleware)
      .concat(course.middleware)
      .concat(courseRecord.middleware)
      .concat(plan.middleware)
      .concat(intro.middleware)
      .concat(nutritionistList.middleware)
      .concat(payment.middleware),
});

const wrapper = createWrapper(() => store, { debug: false });
export default wrapper;
