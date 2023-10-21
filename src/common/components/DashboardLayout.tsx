import { DashboardLayoutProps } from "@/types/interface";
import Header from "./Header";

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">{children}</main>
    </div>
  );
};

export default DashboardLayout;
