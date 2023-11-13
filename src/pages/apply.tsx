import wrapper from "@/common/redux/store";
import ApplyForm from "@/modules/ApplyForm";
import { getCookies } from "cookies-next";
import { FC } from "react";

interface ApplyPageProps {
  [key: string]: any;
}

const ApplyPage: FC<ApplyPageProps> = ({ auth }) => {
  return (
    <div className="container">
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
