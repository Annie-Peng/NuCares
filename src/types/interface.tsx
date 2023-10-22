import { ReactNode } from "react";
export interface LayoutProps {
  children: ReactNode;
}

export interface DashboardLayoutProps {
  children: ReactNode;
}

export interface RegisterData {
  email: string;
  password: string;
  nickname: string;
}

export interface RootState {
  registerPhases?: RegisterData | undefined;
}
