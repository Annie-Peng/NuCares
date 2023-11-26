import CourseForm from "@/common/components/course/CourseForm";
import wrapper from "@/common/redux/store";
import { AuthType } from "@/types/interface";
import { getCookies } from "cookies-next";
import { FC } from "react";

interface StudentListPageProps {
  auth: AuthType;
}

const StudentListPage: FC<StudentListPageProps> = ({ auth }) => {
  return <CourseForm auth={auth} />;
};

export default StudentListPage;

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
