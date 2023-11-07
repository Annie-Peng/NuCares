import CourseRecord from "@/common/components/dietary-record/CourseRecord";
import { storeBodyRate } from "@/common/redux/features/dietary-record/bodyRate";
import { storeGoal } from "@/common/redux/features/dietary-record/goal";
import {
  useBodyInfoGetApiQuery,
  useDailyDietaryGetApiQuery,
  useGoalGetApiQuery,
} from "@/common/redux/service/courseRecord";
import wrapper from "@/common/redux/store";
import { getCookies } from "cookies-next";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

interface StudentIdProps {
  Token: string;
  CourseId: string;
  UserCurrentStatus: string;
  [key: string]: any;
}

const StudentIdPage: FC<StudentIdProps> = ({ auth }) => {
  const router = useRouter();
  const courseId = router.query.studentId;
  const dispatch = useDispatch();

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
      // skip: router.isFallback,
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

  // useEffect(() => {
  //   if (BodyInfo) {
  //     dispatch(storeBodyRate(BodyInfo.Data));
  //   }
  // }, [BodyInfo, dispatch]);

  useEffect(() => {
    if (BodyInfo) {
      dispatch(storeBodyRate(BodyInfo.Data));
    }
    if (BodyInfoError) {
      console.log(BodyInfoError);
    }
    if (Goal) {
      dispatch(storeGoal(Goal.Data));
    }
    if (GoalError) {
      console.log(GoalError);
    }
  }, [BodyInfo, Goal]);

  return (
    <>
      <CourseRecord
        Token={auth.Token}
        UserCurrentStatus={auth.UserCurrentStatus}
        CourseId={courseId as string}
      />
    </>
  );
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
