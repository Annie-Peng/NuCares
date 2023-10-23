import DashboardContainerLayout from "@/common/components/DashboardContainerLayout";
import DashboardLayout from "@/common/components/DashboardLayout";
import Layout from "@/common/components/Layout";
import store from "@/common/redux/sotre";
import useResize from "@/common/hooks/useResize";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps, router }: AppProps) {
  const isMobile = useResize();

  const isDashboardPath = router.pathname.startsWith("/dashboard");
  return (
    <Provider store={store}>
      {isDashboardPath ? (
        <DashboardLayout value={isMobile}>
          {isMobile ? (
            <Component {...pageProps} />
          ) : (
            <DashboardContainerLayout>
              <Component {...pageProps} />
            </DashboardContainerLayout>
          )}
        </DashboardLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
}
