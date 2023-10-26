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
}
