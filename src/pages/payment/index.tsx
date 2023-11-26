import wrapper from "@/common/redux/store";
import PaymentFormSecondPhase from "@/modules/payment/PaymentFormSecondPhase";
import PaymentForm from "@/modules/payment/PaymentForm";
import { getCookies } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { usePaymentGetApiQuery } from "@/common/redux/service/payment";
import { AuthType } from "@/types/interface";
import MetaData from "@/common/components/MetaData";

interface PaymentPageProps {
  auth: AuthType;
}

const PaymentPage: FC<PaymentPageProps> = ({ auth }) => {
  const router = useRouter();
  const { nutritionist, plan } = router.query;
  const [currentPhase, setCurrentPhase] = useState<number>(1);

  const {
    data: renderData,
    isLoading,
    error,
  } = usePaymentGetApiQuery({ Token: auth.Token, planId: plan });

  if (isLoading || !renderData) {
    return <p>Payment is Loading</p>;
  }

  return (
    <>
      <MetaData title="結帳" />
      <div className="container text-center grid cusGrid py-40 lg:py-[64px]">
        <div className=" col-span-4 lg:col-start-2 lg:col-span-10 ">
          <Link
            href={`/nutritionist-list/${nutritionist}`}
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
              planId={plan as string}
            />
          )}
          {currentPhase === 2 && (
            <PaymentFormSecondPhase
              setCurrentPhase={setCurrentPhase}
              renderData={renderData.Data}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentPage;

export const getServerSideProps = wrapper.getServerSideProps(
  () =>
    async ({ req, res }) => {
      const auth = getCookies({ req, res });
      if (!auth.Token) {
        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      }
      return {
        props: {
          auth,
        },
      };
    }
);
