import { useFavoriteGetApiQuery } from "@/common/redux/service/favorite";
import wrapper from "@/common/redux/store";
import FavoriteCard from "@/modules/dashboard/student/favorite/FavoriteCard";
import { getCookies } from "cookies-next";
import { FC } from "react";

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

  if (isLoading || !data) {
    return <p>Favorite is Loading</p>;
  }

  console.log(data);

  return (
    <div className="py-20 container lg:py-0">
      <h2 className="cusPrimaryTitle">收藏營養師</h2>
      <ul className="mt-24 flex flex-wrap gap-12">
        {data.Data.map((nutritionistData: NutritionistDataType) => (
          <li key={nutritionistData.Id} className="max-w-[456px]">
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
