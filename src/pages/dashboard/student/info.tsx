import MetaData from "@/common/components/MetaData";
import { showLoading } from "@/common/redux/features/loading";
import { useProfileGetApiQuery } from "@/common/redux/service/profile";
import wrapper from "@/common/redux/store";
import StudentInfoForm from "@/modules/dashboard/student/info/StudentInfoForm";
import { AuthType } from "@/types/interface";
import { getCookies } from "cookies-next";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

interface InfoPageProps {
  auth: AuthType;
}

const InfoPage: FC<InfoPageProps> = ({ auth }) => {
  const Token = auth.Token;
  const { data, isLoading, error } = useProfileGetApiQuery({ Token });
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(showLoading(true));
      return;
    }
    if (error) {
      console.log(error);
    }
    if (data) {
      dispatch(showLoading(false));
    }
  }, [data, isLoading, error, dispatch]);

  if (!data) return;

  return (
    <>
      <MetaData title="會員資料" />
      <div className="py-20 container lg:py-0">
        <h2 className="cusPrimaryTitle">會員資料</h2>
        <div className="px-20 lg:px-0">
          <StudentInfoForm Token={Token} studentInfoData={data.Data} />
        </div>
      </div>
    </>
  );
};

export default InfoPage;

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
