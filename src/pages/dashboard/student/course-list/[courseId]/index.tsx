import MetaData from "@/common/components/MetaData";
import CourseRecord from "@/common/components/dietary-record/CourseRecord";
import { storeBodyRate } from "@/common/redux/features/dietary-record/bodyRate";
import { storeGoal } from "@/common/redux/features/dietary-record/goal";
import {
  useBodyInfoGetApiQuery,
  useGoalGetApiQuery,
} from "@/common/redux/service/courseRecord";
import wrapper from "@/common/redux/store";
import { AuthType } from "@/types/interface";
import { getCookies } from "cookies-next";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

interface CourseIdProps {
  auth: AuthType;
  CourseId: string;
}

const CourseIdPage: FC<CourseIdProps> = ({ auth }) => {
  const router = useRouter();
  const courseId = router.query.courseId;
  const dispatch = useDispatch();

  const bodyInfoResult = useBodyInfoGetApiQuery(
    {
      Token: auth.Token,
      CourseId: courseId,
    },
    {
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

  useEffect(() => {
    if (BodyInfo) {
      dispatch(storeBodyRate(BodyInfo.Data));
    }
    if (BodyInfoError) {
      return;
    }
    if (Goal) {
      dispatch(storeGoal(Goal.Data));
    }
    if (GoalError) {
      return;
    }
  }, [BodyInfo, Goal, BodyInfoError, GoalError]);

  const title = auth.UserCurrentStatus === "user" ? "我的紀錄" : "學員紀錄";

  return (
    <>
      <MetaData title={title} />
      <CourseRecord
        Token={auth.Token}
        CourseId={courseId as string}
        title={title}
        UserCurrentStatus={auth.UserCurrentStatus}
      />
    </>
  );
};

export default CourseIdPage;

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
