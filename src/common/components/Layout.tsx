import { LayoutProps } from "@/types/interface";
import Footer from "./Footer";
import Header from "./Header";
import { useSelector } from "react-redux";
import { selectShowModal } from "../redux/features/showModal";
import MiniModal from "./MiniModal";

const Layout = ({ children }: LayoutProps) => {
  const { showMessageModal } = useSelector(selectShowModal);
  return (
    <>
      {showMessageModal.showModal && (
        <MiniModal modal="showMessageModal">{showMessageModal.data}</MiniModal>
      )}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow py-[40px] bg-primaryGradient lg:min-h-[1056px] lg:pt-[75px] lg:pb-0">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
