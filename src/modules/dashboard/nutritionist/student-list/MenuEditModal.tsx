import foodMenu from "@/common/lib/dashboard/dietary-record/foodMenu";
import MealEditForm from "./MealEditForm";
import TitleModal from "@/common/components/TitleModal";
import { FC } from "react";

interface MenuEditModalProps {
  data: string;
}

const MenuEditModal: FC<MenuEditModalProps> = ({ data }) => {
  return (
    <TitleModal title="學員攝取份量" width="820px" modal="showMenuEditModal">
      <form className="mt-32">
        <div className="text-center flex flex-wrap justify-between gap-y-32">
          <MealEditForm title="早餐" food={foodMenu.Breakfast} />
          <MealEditForm title="午餐" food={foodMenu.Lunch} />
          <MealEditForm title="晚餐" food={foodMenu.Dinner} />
          <MealEditForm title="其他" food={foodMenu.Others} />
          <button className="btn-cusSecondary p-6 w-[300px] mx-auto mt-4">
            儲存
          </button>
        </div>
      </form>
    </TitleModal>
  );
};

export default MenuEditModal;
