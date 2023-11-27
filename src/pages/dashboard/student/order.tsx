import MetaData from "@/common/components/MetaData";
import wrapper from "@/common/redux/store";
import OrderForm from "@/modules/dashboard/student/order/OrderForm";
import { AuthType } from "@/types/interface";
import { getCookies } from "cookies-next";
import { FC } from "react";

interface OrderPageProps {
  auth: AuthType;
}

const OrderPage: FC<OrderPageProps> = ({ auth }) => {
  return (
    <>
      <MetaData title="訂單紀錄" />
      <OrderForm Token={auth.Token} />
    </>
  );
};

export default OrderPage;

export const getServerSideProps = wrapper.getServerSideProps(
  () =>
    async ({ req, res }) => {
      const auth = getCookies({ req, res });
      if (!auth.Token) {
        res.writeHead(302, { Location: "/login" });
        res.end();
      }
      return {
        props: {
          auth,
        },
      };
    }
);
