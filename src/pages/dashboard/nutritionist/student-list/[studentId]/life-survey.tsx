import MetaData from "@/common/components/MetaData";
import { showLoading } from "@/common/redux/features/loading";
import { useLifeSurveyGetApiQuery } from "@/common/redux/service/course";
import wrapper from "@/common/redux/store";
import LifeSurveyForm from "@/modules/dashboard/nutritionist/student-list/LifeSurveyForm";
import { AuthType } from "@/types/interface";
import { getCookies } from "cookies-next";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

interface LifeSurveyPageProps {
  auth: AuthType;
}

const LifeSurveyPage: FC<LifeSurveyPageProps> = ({ auth }) => {
  const router = useRouter();
  const courseId = router.query.studentId;
  const dispatch = useDispatch();
  const { data, isLoading, error } = useLifeSurveyGetApiQuery({
    Token: auth.Token,
    CourseId: courseId,
  });

  useEffect(() => {
    if (isLoading) {
      dispatch(showLoading(true));
      return;
    }
    if (error) {
      return;
    }

    if (data) {
      dispatch(showLoading(false));
    }
  }, [data, isLoading, error, dispatch]);

  if (!data) return;
  return (
    <>
      <MetaData title="學員飲食生活問卷" />
      <LifeSurveyForm
        UserCurrentStatus={auth.UserCurrentStatus}
        studentData={data.Data}
      />
    </>
  );
};

export default LifeSurveyPage;

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
