import { LayoutProps } from "@/types/interface";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-black">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
