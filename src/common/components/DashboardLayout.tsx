import { DashboardLayoutProps } from "@/types/interface";
import Header from "./Header";
import Footer from "./Footer";
import { FC } from "react";

const DashboardLayout: FC<DashboardLayoutProps> = ({ value, children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">{children}</main>
      {value ? null : <Footer />}
    </div>
  );
};

export default DashboardLayout;
