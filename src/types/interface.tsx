import { InputType } from "@/common/components/Input";
import auth from "@/common/redux/features/auth";
import { changeIDType } from "@/common/redux/features/changeID";
import { BodyRateType } from "@/common/redux/features/dietary-record/bodyRate";
import { GoalType } from "@/common/redux/features/dietary-record/goal";
import { PaymentDataType } from "@/common/redux/features/paymentPhases";
import { ShowModalType } from "@/common/redux/features/showModal";
import { ReactNode } from "react";
export interface LayoutProps {
  children: ReactNode;
}

export interface DashboardLayoutProps {
  value?: boolean;
  children: ReactNode;
}

export interface CourseProps {
  OrderNumber: string;
  UserName: string;
  CourseTitle: string;
  CourseStartDate: string;
  CourseEndDate: string;
  CourseState: string;
  IsQuest: boolean;
}

export interface RegisterData {
  Email: string;
  Password: string;
  RePassword: string;
}

export interface RootState {
  registerPhases?: RegisterData | undefined;
  paymentPhases: PaymentDataType;
  auth: Auth;
  showModal: ShowModalType;
  changeID: changeIDType;
  bodyRate: BodyRateType;
  goal: GoalType;
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
    type: InputType;
  }[];
}

export interface ComponentType {
  component: "input" | "select" | "textarea";
  name: string;
  type?: InputType;
  required?: boolean;
  hMsg: string;
  pMsg?: string;
  errMsg?: string;
  inputClass?: string;
  labelClass?: string;
  selectClass?: string;
  textareaClass?: string;
  imageClass?: string;
  errClass?: string;
  disabledOption?: string;
  children?: ReactNode;
  accept?: string;
  id?: string;
  options?: Array<{ option: string; value: string }>;
  disabled?: boolean;
}

export interface PlanType {
  Title: string;
  CourseName: string;
  CourseWeek: string;
  CoursePrice: string;
}

export interface Auth {
  Token: string;
  UserName: string;
  Email: string;
  ImgUrl: string;
  IsNutritionist: boolean;
  UserCurrentStatus: string;
}
