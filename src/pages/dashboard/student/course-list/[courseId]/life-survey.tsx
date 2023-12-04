import MetaData from "@/common/components/MetaData";
import { FC, useState } from "react";
import wrapper from "@/common/redux/store";
import { getCookies } from "cookies-next";
import { AuthType } from "@/types/interface";
import { useRouter } from "next/router";
import QuestionForm from "@/modules/dashboard/student/course-list/lifeSurvey/QuestionForm";
import FinishPhaseForm from "@/modules/dashboard/student/course-list/lifeSurvey/FinishPhaseForm";
import Image from "next/legacy/image";
import { lifeSurveyTabs } from "@/common/lib/dashboard/lifeSurveyData";
import lifeSurveyStep4SmProcess from "public/images/dashboard/student/life-survey/lifeSurveyStep4-sm-process.svg";
import lifeSurveyStep4SmText from "public/images/dashboard/student/life-survey/lifeSurveyStep4-sm-text.svg";

interface LifeSurveyPageProps {
  auth: AuthType;
}

const LifeSurveyPage: FC<LifeSurveyPageProps> = ({ auth }) => {
  const [currentPhase, setCurrentPhase] = useState(1);
  const [finishPhase, setFinishPhase] = useState(false);
  const { image } = lifeSurveyTabs[currentPhase - 1];
  const showProcessImg = finishPhase
    ? lifeSurveyStep4SmProcess
    : image.sm.process;
  const showTextImg = finishPhase ? lifeSurveyStep4SmText : image.sm.text;

  const router = useRouter();
  const courseId = router.query.courseId;

  return (
    <>
      <MetaData title="飲食生活問卷" />
      <div className="bg-primary-50 py-12 lg:hidden">
        <div className="h-20 relative">
          <Image src={showProcessImg} layout="fill" alt={showProcessImg} />
        </div>
        <div className="mt-4 h-[36px] relative">
          <Image src={showTextImg} layout="fill" alt={showTextImg} />
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col max-w-[856px] mx-auto p-24 rounded-20 cusBackgroundBackdrop !relative shadow-none lg:shadow-[2px_4px_10px_0_rgba(0,0,0,0.1)]">
          <h2 className="cusPrimaryTitle">飲食生活問卷</h2>
          <p className="mt-16 lg:mx-32">
            為了提供更好的飲食建議，請您填寫我們的飲食生活習慣問卷，這將有助於營養師更全面地了解您的需求和目標。
            我們將根據您的回答，制定最適合您的飲食計劃。
          </p>
          {finishPhase ? (
            <FinishPhaseForm />
          ) : (
            <QuestionForm
              currentPhase={currentPhase}
              setCurrentPhase={setCurrentPhase}
              CourseId={courseId as string}
              Token={auth.Token}
              setFinishPhase={setFinishPhase}
            />
          )}
        </div>
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
