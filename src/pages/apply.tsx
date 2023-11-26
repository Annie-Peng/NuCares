import wrapper from "@/common/redux/store";
import ApplyForm from "@/modules/ApplyForm";
import { AuthType } from "@/types/interface";
import { getCookies } from "cookies-next";
import { FC } from "react";

interface ApplyPageProps {
  auth: AuthType;
}

const ApplyPage: FC<ApplyPageProps> = ({ auth }) => {
  return (
    <div className="container py-20 lg:py-40">
      <ApplyForm Token={auth.Token} />
    </div>
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
