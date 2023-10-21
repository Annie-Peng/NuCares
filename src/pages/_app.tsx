import DashboardContainerLayout from "@/common/components/DashboardContainerLayout";
import DashboardLayout from "@/common/components/DashboardLayout";
import Layout from "@/common/components/Layout";
import useResize from "@/common/hooks/useResize";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  const isMobile = useResize();

  const isDashboardPath = router.pathname.startsWith("/dashboard");
  return (
    <>
      {isDashboardPath ? (
        <DashboardLayout value={isMobile}>
          <DashboardContainerLayout>
            <Component {...pageProps} />
          </DashboardContainerLayout>
        </DashboardLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
