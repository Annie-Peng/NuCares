import wrapper from "@/common/redux/store";
import PaymentFormSecondPhase from "@/modules/payment/PaymentFormSecondPhase";
import PaymentForm from "@/modules/payment/PaymentForm";
import { getCookies } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import PaymentFormForthPhase from "@/modules/payment/PaymentFormForthPhase";
import { usePaymentGetApiQuery } from "@/common/redux/service/payment";
import { Auth } from "@/types/interface";

interface PaymentPageProps {
  auth: Auth;
}

const PaymentPage: FC<PaymentPageProps> = ({ auth }) => {
  const router = useRouter();
  const { planId } = router.query;
  const [currentPhase, setCurrentPhase] = useState<number>(1);

  const {
    data: renderData,
    isLoading,
    error,
  } = usePaymentGetApiQuery({ Token: auth.Token, planId });

  if (isLoading || !renderData) {
    return <p>Payment is Loading</p>;
  }

  console.log(renderData);

  return (
    <div className="container text-center grid cusGrid">
      <div className=" col-span-4 lg:col-start-2 lg:col-span-10 ">
        <Link
          href={`/nutritionist-list/${planId}`}
          className="text-left block border-b border-black-950 w-fit"
        >
          {"<"} 返回營養師專頁
        </Link>
        <h2 className="text-24 font-bold mt-16">結帳</h2>
        {currentPhase === 1 && (
          <PaymentForm
            auth={auth}
            renderData={renderData.Data}
            setCurrentPhase={setCurrentPhase}
          />
        )}
        {currentPhase === 2 && (
          <PaymentFormSecondPhase
            auth={auth}
            setCurrentPhase={setCurrentPhase}
            renderData={renderData.Data}
          />
        )}
        {currentPhase === 4 && <PaymentFormForthPhase />}
      </div>
    </div>
  );
};

export default PaymentPage;

export const getServerSideProps = wrapper.getServerSideProps(
  () =>
    async ({ req, res }) => {
      const auth = getCookies({ req, res });
      if (!auth.Token) {
        res.writeHead(400, { Location: "/login" });
        res.end();
      }
      return {
        props: {
          auth,
        },
      };
    }
);
