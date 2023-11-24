import { DashboardLayoutProps } from "@/types/interface";
import Header from "./Header";
import Footer from "./Footer";
import { FC } from "react";
import useShowModal from "../hooks/useShowModal";
import { useSelector } from "react-redux";
import { selectLoading } from "../redux/features/loading";
import Loading from "./Loading";

const DashboardLayout: FC<DashboardLayoutProps> = ({ value, children }) => {
  const renderModal = useShowModal();
  const { loading } = useSelector(selectLoading);

  return (
    <>
      {loading && <Loading />}
      {renderModal}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow lg:py-[100px]">{children}</main>
        {value ? null : <Footer />}
      </div>
    </>
  );
};

export default DashboardLayout;
