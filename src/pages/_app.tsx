import Layout from "@/common/components/Layout";
import store from "@/common/redux/sotre";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
