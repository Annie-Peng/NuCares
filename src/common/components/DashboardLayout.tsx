import { DashboardLayoutProps } from "@/types/interface";
import Header from "./Header";
import Footer from "./Footer";
import { FC } from "react";
import useShowModal from "../hooks/useShowModal";

const DashboardLayout: FC<DashboardLayoutProps> = ({ value, children }) => {
  const renderModal = useShowModal();

  return (
    <>
      {renderModal}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow lg:py-[75px]">{children}</main>
        {value ? null : <Footer />}
      </div>
    </>
  );
};

export default DashboardLayout;
