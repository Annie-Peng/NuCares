import { showLoading } from "@/common/redux/features/loading";
import { useIntroGetApiQuery } from "@/common/redux/service/intro";
import wrapper from "@/common/redux/store";
import NutritionistIntroForm from "@/modules/dashboard/nutritionist/workshop/NutritionistIntroForm";
import { getCookies } from "cookies-next";
import { FC } from "react";
import { useDispatch } from "react-redux";

interface StudentListPageProps {
  [key: string]: any;
}

const NutritionistIntroPage: FC<StudentListPageProps> = ({ auth }) => {
  const Token = auth.Token;
  const { data, isLoading, error } = useIntroGetApiQuery({ Token });

  const dispatch = useDispatch();

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

  return (
    <div className="py-20 container lg:py-0">
      <h2 className="cusPrimaryTitle">關於我</h2>
      <NutritionistIntroForm Token={auth.Token} renderData={data.Data} />
    </div>
  );
};

export default NutritionistIntroPage;

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
