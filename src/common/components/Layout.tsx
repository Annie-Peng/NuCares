import { LayoutProps } from "@/types/interface";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow py-[40px] bg-primaryGradient lg:min-h-[1056px] lg:py-0 ">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
