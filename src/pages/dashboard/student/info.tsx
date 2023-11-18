import { useProfileGetApiQuery } from "@/common/redux/service/profile";
import wrapper from "@/common/redux/store";
import StudentInfoForm from "@/modules/dashboard/student/info/StudentInfoForm";
import { getCookies } from "cookies-next";
import { FC } from "react";

interface InfoPageProps {
  [key: string]: any;
}

const InfoPage: FC<InfoPageProps> = ({ auth }) => {
  const Token = auth.Token;
  const { data, isLoading, error } = useProfileGetApiQuery({ Token });

  if (isLoading || !data) {
    return <p>Info is Loading</p>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="py-20 container lg:py-0">
      <h2 className="cusPrimaryTitle">會員資料</h2>
      <StudentInfoForm Token={Token} renderData={data.Data} />
    </div>
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
