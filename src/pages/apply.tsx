import MetaData from "@/common/components/MetaData";
import wrapper from "@/common/redux/store";
import ApplyForm from "@/modules/ApplyForm";
import { getCookies } from "cookies-next";
import { FC } from "react";

interface ApplyPageProps {
  [key: string]: any;
}

const ApplyPage: FC<ApplyPageProps> = ({ auth }) => {
  return (
    <>
      <MetaData title="申請成為營養師" />
      <div className="container py-20 lg:py-40">
        <ApplyForm Token={auth.Token} />
      </div>
    </>
  );
};

export default ApplyPage;

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
