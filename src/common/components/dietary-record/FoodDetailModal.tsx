import foodDetail, {
  FoodDetailType,
} from "@/common/lib/dashboard/dietary-record/foodDetail";
import TitleModal from "../modals/TitleModal";
import FoodDetailForm from "./FoodDetailForm";
import { FC, useState } from "react";
import { FoodIcon } from "@/common/lib/dashboard/dietary-record/foodMenu";

interface FoodDetailModalType {
  data: FoodIcon[];
}

const FoodDetailModal: FC<FoodDetailModalType> = ({ data }) => {
  console.log(data);
  const [tab, setTab] = useState<string>("Protein");

  return (
    <TitleModal title="飲食份量說明" modal="showFoodDetailModal">
      <ul className="text-14 flex gap-16 text-primary-500 mt-[36px] justify-center lg:text-16 lg:gap-32 lg:mt-20">
        {data.map((item, index) => {
          if (index < 5) {
            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => setTab(item.enName)}
                  className={`pb-10 px-6 lg:px-20 ${
                    item.enName === tab &&
                    "border-b-2 border-secondary-400 text-secondary-400"
                  } `}
                >
                  {item.name}
                </button>
              </li>
            );
          } else {
            return;
          }
        })}
      </ul>
      <div className="text-left flex flex-col cusDashboardInnerContainer bg-transparent mt-20 py-32 px-20 lg:bg-white lg:px-[100px]">
        <FoodDetailForm data={foodDetail[tab as keyof FoodDetailType]} />
      </div>
    </TitleModal>
  );
};
export default FoodDetailModal;
