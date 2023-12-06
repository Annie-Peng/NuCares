import DashboardContainerLayout from "@/common/components/DashboardContainerLayout";
import DashboardLayout from "@/common/components/DashboardLayout";
import Layout from "@/common/components/Layout";
import useResize from "@/common/hooks/useResize";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import wrapper from "@/common/redux/store";

export default function App({
  Component,
  pageProps,
  router,
  ...reset
}: AppProps) {
  const isMobile = useResize();
  const { store, props } = wrapper.useWrappedStore(reset);

  const isDashboardPath = router.pathname.startsWith("/dashboard");
  return (
    <Provider store={store}>
      {isDashboardPath ? (
        <DashboardLayout value={isMobile}>
          {isMobile ? (
            <Component {...pageProps} />
          ) : (
            <DashboardContainerLayout router={router}>
              <Component {...pageProps} />
            </DashboardContainerLayout>
          )}
        </DashboardLayout>
      ) : (
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
}
