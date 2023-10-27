import auth, { Auth } from "@/common/redux/features/auth";
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
  email: string;
  password: string;
  nickname: string;
}

export interface RootState {
  registerPhases?: RegisterData | undefined;
  auth: Auth;
}
