import foodMenu from "@/common/lib/dashboard/dietary-record/foodMenu";
import MealEditForm from "./MealEditForm";
import TitleModal from "@/common/components/modals/TitleModal";
import { FC, FormEvent } from "react";
import {
  useDailyDietaryGetMenuApiQuery,
  useDailyDietaryPutMenuApiMutation,
} from "@/common/redux/service/courseRecord";
import { useDispatch } from "react-redux";
import { closeModal } from "@/common/redux/features/showModal";

interface MenuEditModalProps {
  data: {
    Token: string;
    CourseId: number;
    DailyCourseMenuId: number;
  };
}

const MenuEditModal: FC<MenuEditModalProps> = ({ data }) => {
  const { Token, CourseId, DailyCourseMenuId } = data;
  const {
    data: renderData,
    isLoading,
    error,
  } = useDailyDietaryGetMenuApiQuery({ Token, CourseId, DailyCourseMenuId });

  const [dailyDietaryPutMenuApi] = useDailyDietaryPutMenuApiMutation();
  const dispatch = useDispatch();

  if (isLoading || !renderData) {
    return <p>Menu is Loading</p>;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      let obj: Record<string, FormDataEntryValue> = {};
      formData.forEach((value, key) => {
        obj[key] = value;
      });
      const Starch = `${obj["早餐Starch"]},${obj["午餐Starch"]},${obj["晚餐Starch"]}`;
      const Protein = `${obj["早餐Protein"]},${obj["午餐Protein"]},${obj["晚餐Protein"]}`;
      const Vegetable = `${obj["早餐Vegetable"]},${obj["午餐Vegetable"]},${obj["晚餐Vegetable"]}`;
      const Oil = obj["其他Oil"];
      const Water = obj["其他Water"];
      const Fruit = obj["其他Fruit"];

      const body = {
        Oil,
        Water,
        Fruit,
        Starch,
        Protein,
        Vegetable,
      };

      console.log(body);

      const result = await dailyDietaryPutMenuApi({
        Token,
        CourseId,
        DailyCourseMenuId,
        body,
      });

      console.log(result);
      dispatch(closeModal("showMenuEditModal"));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(foodMenu);

  return (
    <TitleModal title="學員攝取份量" modal="showMenuEditModal">
      <form className="mt-[36px]" onSubmit={handleSubmit}>
        <div className="text-center flex flex-wrap justify-center gap-y-[36px] lg:gap-y-32 lg:gap-x-[100px]">
          <MealEditForm
            title="早餐"
            food={foodMenu.Breakfast}
            renderData={renderData.Data}
          />
          <MealEditForm
            title="午餐"
            food={foodMenu.Lunch}
            renderData={renderData.Data}
          />
          <MealEditForm
            title="晚餐"
            food={foodMenu.Dinner}
            renderData={renderData.Data}
          />
          <MealEditForm
            title="其他"
            food={foodMenu.Others}
            renderData={renderData.Data}
          />
          <button
            type="submit"
            className="btn-cusSecondary p-8 w-[300px] mx-auto lg:mt-2"
          >
            儲存
          </button>
        </div>
      </form>
    </TitleModal>
  );
};

export default MenuEditModal;
