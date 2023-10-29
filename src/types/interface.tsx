import auth, { Auth } from "@/common/redux/features/auth";
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
  auth: Auth;
  showModal: ShowModalType;
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
    type: "text" | "number" | "checkbox" | "password" | "email" | "file";
  }[];
}
