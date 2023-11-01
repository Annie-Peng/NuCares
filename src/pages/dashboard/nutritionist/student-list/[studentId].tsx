import CourseRecord from "@/common/components/dietary-record/CourseRecord";
import {
  useBodyInfoGetApiQuery,
  useDailyDietaryGetApiQuery,
  useGoalGetApiQuery,
} from "@/common/redux/service/courseRecord";
import wrapper from "@/common/redux/store";
import { getCookies } from "cookies-next";
import { useRouter } from "next/router";
import { FC } from "react";

interface StudentListPageProps {
  UserCurrentStatus: string;
  Token: string;
  [key: string]: any;
}

const StudentIdPage: FC<StudentListPageProps> = ({ auth }) => {
  const router = useRouter();

  const courseId = router.query.studentId;

  console.log(auth);

  // const dailyDietaryResult = useDailyDietaryGetApiQuery({
  //   Token: auth.Token,
  //   CourseId: courseId,
  // },
  // {
  //   skip: router.isFallback,
  // });

  const bodyInfoResult = useBodyInfoGetApiQuery(
    {
      Token: auth.Token,
      CourseId: courseId,
    },
    {
      // If the page is not yet generated, router.isFallback will be true
      // initially until getStaticProps() finishes running
      skip: router.isFallback,
    }
  );
  const goalResult = useGoalGetApiQuery(
    {
      Token: auth.Token,
      CourseId: courseId,
    },
    {
      skip: router.isFallback,
    }
  );

  const {
    isLoading: isBodyInfoLoading,
    error: BodyInfoError,
    data: BodyInfo,
  } = bodyInfoResult;
  const { isLoading: isGoalLoading, error: GoalError, data: Goal } = goalResult;

  console.log(BodyInfo, Goal);

  return <>{/* <CourseRecord BodyInfo={BodyInfo} Goal={Goal} /> */}</>;
};

export default StudentIdPage;

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
