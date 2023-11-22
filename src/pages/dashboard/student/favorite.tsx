import { showLoading } from "@/common/redux/features/loading";
import { useFavoriteGetApiQuery } from "@/common/redux/service/favorite";
import wrapper from "@/common/redux/store";
import FavoriteCard from "@/modules/dashboard/student/favorite/FavoriteCard";
import { getCookies } from "cookies-next";
import { FC } from "react";
import { useDispatch } from "react-redux";

interface FavoritePageProps {
  [key: string]: any;
}

export interface NutritionistDataType {
  Id: string;
  Title: string;
  AboutMe: string;
  PortraitImage: string;
  Expertise: string[];
  favorite: boolean;
}

const FavoritePage: FC<FavoritePageProps> = ({ auth }) => {
  const { data, isLoading, error } = useFavoriteGetApiQuery({
    Token: auth.Token,
  });

  const dispatch = useDispatch();

  if (isLoading) {
    dispatch(showLoading(true));
    return;
  }

  if (data) {
    dispatch(showLoading(false));
  }

  console.log(data);

  return (
    <div className="py-20 container lg:py-0">
      <h2 className="cusPrimaryTitle">收藏營養師</h2>
      <ul className="mt-32 flex flex-wrap gap-32 lg:gap-12 lg:mt-24">
        {data.Data.map((nutritionistData: NutritionistDataType) => (
          <li
            key={nutritionistData.Id}
            className="mx-24 lg:max-w-[456px] lg:mx-0"
          >
            <FavoriteCard
              Token={auth.Token}
              nutritionistData={nutritionistData}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritePage;

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
