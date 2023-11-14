import { LayoutProps } from "@/types/interface";
import Footer from "./Footer";
import Header from "./Header";

const layoutBgClass = {
  login: "bg-primaryGradient",
  register: "bg-primaryGradient",
  "reset-password": "bg-primaryGradient",
  "nutritionist-list": "bg-[#ECF5F5]",
  payment: "bg-[#ECF5F5]",
};

const Layout = ({ children, router }: LayoutProps) => {
  const currentPath = router.pathname;

  let showLayoutBgClass = "bg-white";
  Object.entries(layoutBgClass).map(([key, value]) => {
    if (currentPath.includes(key)) {
      showLayoutBgClass = value;
    }
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main
        className={`grow py-[40px] lg:min-h-[1056px] ${showLayoutBgClass} lg:pt-[75px] lg:pb-0`}
      >
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
