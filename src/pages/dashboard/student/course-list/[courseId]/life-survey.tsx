import MetaData from "@/common/components/MetaData";
import { FC, useState } from "react";
import LifeSurveyForm from "@/modules/dashboard/student/course-list/lifeSurvey/LifeSurveyForm";
import LifeSurveyFormSecondPhase from "@/modules/dashboard/student/course-list/lifeSurvey/LifeSurveyFormSecondPhase";
import LifeSurveyFormThirdPhase from "@/modules/dashboard/student/course-list/lifeSurvey/LifeSurveyFormThirdPhase";
import wrapper from "@/common/redux/store";
import { getCookies } from "cookies-next";
import { AuthType } from "@/types/interface";
import { useRouter } from "next/router";

interface LifeSurveyPageProps {
  auth: AuthType;
}

const LifeSurveyPage: FC<LifeSurveyPageProps> = ({ auth }) => {
  const [currentPhase, setCurrentPhase] = useState(1);

  const router = useRouter();
  const courseId = router.query.courseId;

  return (
    <>
      <MetaData title="飲食生活問卷" />
      <div className="flex flex-col max-w-[856px] mx-auto p-24 rounded-20 cusBackgroundBackdrop !relative">
        <h2 className="cusPrimaryTitle">飲食生活問卷</h2>
        <p className="mt-16 mx-32">
          為了提供更好的飲食建議，請您填寫我們的飲食生活習慣問卷，這將有助於營養師更全面地了解您的需求和目標。
          我們將根據您的回答，制定最適合您的飲食計劃。
        </p>
        {currentPhase === 1 && (
          <LifeSurveyForm setCurrentPhase={setCurrentPhase} />
        )}
        {currentPhase === 2 && (
          <LifeSurveyFormSecondPhase setCurrentPhase={setCurrentPhase} />
        )}
        {currentPhase === 3 && (
          <LifeSurveyFormThirdPhase
            setCurrentPhase={setCurrentPhase}
            CourseId={courseId as string}
            Token={auth.Token}
          />
        )}
      </div>
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
