import DashboardContainer from "@/common/components/DashboardContainer";
import DashboardContainerLayout from "@/common/components/DashboardContainerLayout";
import DashboardLayout from "@/common/components/DashboardLayout";
import Layout from "@/common/components/Layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  const isDashboardPath = router.pathname.startsWith("/dashboard");
  return (
    <>
      {isDashboardPath ? (
        <DashboardLayout>
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
