import { ChangeEvent, FC, useState } from "react";
import Image from "next/image";
import { FoodType } from "@/common/lib/dashboard/dietary-record/foodMenu";

interface RenderDataType {
  Id: number;
  MenuDate: string;
  CourseId: number;
  Fruit: number;
  Water: number;
  Oil: number;
  Protein: string;
  Vegetable: string;
  Starch: string;
  [key: string]: string | number;
}

interface MealEditFormProps {
  title: string;
  food: FoodType[];
  renderData: RenderDataType;
}

interface InitialStateType {
  [key: string]: string | number | undefined;
}

const MealEditForm: FC<MealEditFormProps> = ({ title, food, renderData }) => {
  const foodInputNameArray = food.map((item) => {
    return `${title}${item.enName}`;
  });

  let newRenderData: (string | number | undefined)[] = food.map((item) => {
    if (typeof renderData[item.enName] === "string") {
      const array = (renderData[item.enName] as string).split(",");
      return tellMeal(title, array);
    } else {
      return renderData[item.enName];
    }
  });

  let initialState: InitialStateType = {};
  food.forEach((item, index) => {
    initialState[foodInputNameArray[index]] = newRenderData[index];
  });

  const [qty, setQty] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQty({
      ...qty,
      [e.target.name]: e.target.value,
    });
  };

  function tellMeal(title: string, foodArray: string[]) {
    switch (title) {
      case "早餐": {
        return foodArray[0];
      }
      case "午餐": {
        return foodArray[1];
      }
      case "晚餐": {
        return foodArray[2];
      }
    }
  }

  return (
    <div className="breakfastQuantity w-full lg:w-[42%]">
      <h5 className="text-white bg-primary-400 rounded-35">{title}</h5>
      <ul className="flex justify-center gap-[34px] mt-12 mx-[2px] lg:mx-0">
        {food.map((item, index) => {
          return (
            <li key={index}>
              <label htmlFor={foodInputNameArray[index]}>
                <Image
                  src={`/images/dashboard/dietary-record/foods/${item.foodIcon}`}
                  height={48}
                  width={48}
                  alt={item.enName}
                  className="mx-auto"
                />
                <p className="mt-8">{item.name}</p>
                <input
                  name={foodInputNameArray[index]}
                  placeholder="份數"
                  className="w-full text-center"
                  type="number"
                  value={qty[foodInputNameArray[index]]}
                  onChange={handleChange}
                />
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MealEditForm;
