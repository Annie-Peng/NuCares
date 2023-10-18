import { LayoutProps } from "@/types/interface";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
