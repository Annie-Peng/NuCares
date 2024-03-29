import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import registerReducer from "./features/registerPhases";
import paymentReducer from "./features/paymentPhases";
import authReducer from "./features/auth";
import showModalReducer from "./features/showModal";
import bodyRateReducer from "./features/dietary-record/bodyRate";
import dailyDietaryReducer from "./features/dietary-record/dailyDietary";
import goalReducer from "./features/dietary-record/goal";
import loadingReducer from "./features/loading";
import lifeSurveyReducer from "./features/lifeSurvey";

import { register } from "./service/register";
import { login } from "./service/login";
import { course } from "./service/course";
import { courseRecord } from "./service/courseRecord";
import { plan } from "./service/plan";
import { intro } from "./service/intro";
import { apply } from "./service/apply";
import { nutritionistList } from "./service/nutritionistList";
import { payment } from "./service/payment";
import { profile } from "./service/profile";
import { order } from "./service/order";
import { favorite } from "./service/favorite";
import { updatePassword } from "./service/updatePassword";
import { notification } from "./service/notification";

const store = configureStore({
  reducer: {
    auth: authReducer,
    registerPhases: registerReducer,
    showModal: showModalReducer,
    dailyDietary: dailyDietaryReducer,
    bodyRate: bodyRateReducer,
    goal: goalReducer,
    paymentPhases: paymentReducer,
    loading: loadingReducer,
    lifeSurvey: lifeSurveyReducer,

    [register.reducerPath]: register.reducer,
    [login.reducerPath]: login.reducer,
    [course.reducerPath]: course.reducer,
    [courseRecord.reducerPath]: courseRecord.reducer,
    [plan.reducerPath]: plan.reducer,
    [intro.reducerPath]: intro.reducer,
    [apply.reducerPath]: apply.reducer,
    [nutritionistList.reducerPath]: nutritionistList.reducer,
    [payment.reducerPath]: payment.reducer,
    [profile.reducerPath]: profile.reducer,
    [order.reducerPath]: order.reducer,
    [favorite.reducerPath]: favorite.reducer,
    [updatePassword.reducerPath]: updatePassword.reducer,
    [notification.reducerPath]: notification.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(register.middleware)
      .concat(login.middleware)
      .concat(course.middleware)
      .concat(courseRecord.middleware)
      .concat(plan.middleware)
      .concat(apply.middleware)
      .concat(intro.middleware)
      .concat(nutritionistList.middleware)
      .concat(payment.middleware)
      .concat(profile.middleware)
      .concat(order.middleware)
      .concat(favorite.middleware)
      .concat(updatePassword.middleware)
      .concat(notification.middleware),
});

const wrapper = createWrapper(() => store, { debug: false });
export default wrapper;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
