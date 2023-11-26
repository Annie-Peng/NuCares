import MetaData from "@/common/components/MetaData";
import wrapper from "@/common/redux/store";
import UpdatePasswordForm from "@/modules/dashboard/student/update-password/UpdatePasswordForm";
import { AuthType } from "@/types/interface";
import { getCookies } from "cookies-next";
import { FC } from "react";

interface UpdatePasswordPageProps {
  auth: AuthType;
}

const UpdatePasswordPage: FC<UpdatePasswordPageProps> = ({ auth }) => {
  return (
    <>
      <MetaData title="修改密碼" />
      <div className="container py-20 lg:py-0">
        <h2 className="cusPrimaryTitle">修改密碼</h2>
        <div className="px-20 lg:px-0">
          <UpdatePasswordForm Token={auth.Token} />
        </div>
      </div>
    </>
  );
};

export default UpdatePasswordPage;

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
