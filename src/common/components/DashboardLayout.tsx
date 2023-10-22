import { DashboardLayoutProps } from "@/types/interface";
import Header from "./Header";
import Footer from "./Footer";

interface DashboardLayoutProps {
  value: boolean;
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  value,
  children,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">{children}</main>
      {value ? null : <Footer />}
    </div>
  );
};

export default DashboardLayout;
