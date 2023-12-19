import { InitFileSrcFoodType } from "@/common/hooks/useUploadFile";
import { PaymentDataType } from "@/common/redux/features/paymentPhases";
import { ShowModalType } from "@/common/redux/features/showModal";
import { ReactNode } from "react";
import { NextRouter } from "next/router";
import { Validate } from "react-hook-form";
import { LoadingType } from "@/common/redux/features/loading";

// Common

export interface LayoutProps {
  children: ReactNode;
  router: NextRouter;
}

export interface DashboardLayoutProps {
  value?: boolean;
  children: ReactNode;
  router?: NextRouter;
}

export interface RootState {
  registerPhases?: RegisterData | undefined;
  paymentPhases: PaymentDataType;
  auth: AuthType;
  showModal: ShowModalType;
  bodyRate: BodyRateType[];
  dailyDietary: DailyDietaryType;
  goal: GoalType;
  loading: LoadingType;
  lifeSurvey: Record<string, string>;
}

export interface ErrorData {
  StatusCode: number;
  Status: "Error";
  Message: { [key: string]: string };
}

export interface Error {
  data: ErrorData;
  status: number;
}

export interface FetchError {
  error?: Error | unknown;
}

export interface TypeInput {
  [key: string]: {
    name: string;
    accept: string;
    type: InputType;
  }[];
}

export interface ComponentType {
  component:
    | "input"
    | "select"
    | "textarea"
    | "inputImage"
    | "inputSwitch"
    | "inputButtonGroup"
    | "inputDate";
  Token?: Token;
  initFileSrc?: InitFileSrcFoodType;
  chName?: string;
  name: string;
  type?: InputType | string;
  required?: boolean;
  hMsg?: string;
  pMsg?: string;
  errMsg?: Record<
    string,
    | string
    | Record<string, string | number | RegExp>
    | Validate<string, Record<string, string>>
  >;
  inputClass?: string;
  labelClass?: string;
  selectClass?: string;
  textareaClass?: string;
  imageClass?: string;
  errClass?: string;
  selectButtonClass?: string;
  unSelectButtonClass?: string;
  buttonOptions?: string[];
  ulClass?: string;
  liClass?: string;
  disabledOption?: string;
  children?: ReactNode;
  accept?: string;
  id?: string;
  options?: Array<{ option: string; value: string }>;
  disabled?: boolean;
}

export type InputType =
  | "text"
  | "number"
  | "checkbox"
  | "password"
  | "email"
  | "file"
  | "hidden"
  | "button";

export interface AuthType {
  Token: Token;
  UserName: string;
  Email: string;
  ImgUrl: string;
  IsNutritionist: boolean;
  UserCurrentStatus: string;
}

export interface BasicRegisterFormInput {
  Email: string;
  Password?: string;
}

export interface RegisterData extends BasicRegisterFormInput {
  UserName: string;
  Birthday: string;
  Gender: string;
  Phone: string;
}

export interface BasicCourseType {
  Title?: string;
  CourseName: string;
  OrderNumber: string;
}

export interface CourseType extends BasicCourseType {
  Id: string;
  UserName?: string;
  CourseTitle: string;
  CourseStartDate: string;
  CourseEndDate: string;
  CourseState: string;
  IsQuest: boolean;
  IsComment?: boolean;
}

export interface PaginationType {
  Current_page: number;
  Total_pages: number;
}

export interface GoalType {
  GoalWeight: string;
  GoalBodyFat: string;
  Weight: string;
  BodyFat: string;
  WeightCompletionRate: number;
  BodyFatCompletionRate: number;
}

export interface BodyRateType {
  Bmi: number;
  Bmr: number;
  BodyFat: number;
  Height: number;
  SMM: number;
  VisceralFat: number;
  Weight: number;
  CreateDate?: string;
  [key: string]: string | number | undefined;
}

export interface MealType {
  Id: string;
  DailyLogId: string;
  MealTime: string;
  MealDescription: string;
  Image: string;
  Starch: string;
  Protein: string;
  Vegetable: string;
  StarchAchieved: boolean;
  ProteinAchieved: boolean;
  VegetableAchieved: boolean;
}

export interface DailyDietaryType {
  [key: string]: string | boolean | MealType;
  Id: string;
  InsertDate: string;
  StarchSum: string;
  ProteinSum: string;
  VegetableSum: string;
  OilSum: string;
  FruitSum: string;
  WaterSum: string;
  StarchSumAchieved: boolean;
  ProteinSumAchieved: boolean;
  VegetableSumAchieved: boolean;
  OilSumAchieved: boolean;
  FruitSumAchieved: boolean;
  WaterSumAchieved: boolean;
  Breakfast: MealType;
  Lunch: MealType;
  Dinner: MealType;
  Fruit: string;
  FruitDescription: string;
  FruitImgUrl: string;
  Oil: string;
  OilDescription: string;
  OilImgUrl: string;
  Water: string;
  WaterDescription: string;
  WaterImgUrl: string;
}

export interface NotificationType {
  NoticeId: number;
  NutritionistId?: number;
  CourseId?: number;
  CourseName: string;
  Message: "已評價" | "已購課" | "已完成生活問卷";
  Title: string;
  UserName: string;
  Date: string;
  IsRead: boolean;
}

// Student

export interface CommentType {
  UserName: string;
  Content: string;
  Rate: number;
  CreateDate: string;
}

export interface PaymentType {
  Title?: string;
  CourseName: string;
  CourseWeek: number;
  CoursePrice: number;
}

export interface PlanType extends PaymentType {
  Id: number;
  Rank: number;
  Tag: string;
  Detail?: string;
}

// Nutritionist

export interface NutritionistContactType {
  Option1: string;
  Option2: string;
  Option3: string;
}

export interface BasicNutritionistInfo {
  PortraitImage: string;
  Title: string;
  Expertise: string[];
}

export type NutritionistIntroDataType = BasicNutritionistInfo & {
  IsPublic?: boolean;
  City: string;
  Education: string;
  Experience: string;
  AboutMe: string;
  CourseIntro: string;
};

export interface NutritionistsType extends BasicNutritionistInfo {
  NutritionistId: number;
}

export interface NutritionistDataType extends BasicNutritionistInfo {
  Id: string;
  AboutMe: string;
  Favorite: Favorite;
}

export type Gender = string;
export type RateAVG = number;
export type Favorite = boolean;
export type Token = string;
