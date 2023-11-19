import { LayoutProps } from "@/types/interface";
import Footer from "./Footer";
import Header from "./Header";
import { useSelector } from "react-redux";
import { selectShowModal } from "../redux/features/showModal";
import MiniModal from "./MiniModal";

const layoutBgClass = {
  login: "bg-primaryGradient",
  register: "bg-primaryGradient",
  "reset-password": "bg-primaryGradient",
  "nutritionist-list": "bg-[#ECF5F5]",
  payment: "bg-[#ECF5F5]",
  apply: "bg-[#D6EBEE]",
};

const Layout = ({ children, router }: LayoutProps) => {
  const currentPath = router.pathname;
  const { showMessageModal } = useSelector(selectShowModal);

  let showLayoutBgClass = "bg-white";
  Object.entries(layoutBgClass).map(([key, value]) => {
    if (currentPath.includes(key)) {
      showLayoutBgClass = value;
    }
  });

  return (
    <>
      {showMessageModal.showModal && (
        <MiniModal modal="showMessageModal">{showMessageModal.data}</MiniModal>
      )}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main
          className={`grow lg:min-h-[1056px] ${showLayoutBgClass} ${
            showLayoutBgClass !== "bg-white" && "lg:pt-[75px] py-[40px]"
          } lg:pb-0`}
        >
          <div className={`${showLayoutBgClass !== "bg-white" && "container"}`}>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
