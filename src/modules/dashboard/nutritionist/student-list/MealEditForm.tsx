import { FC } from "react";
import Image from "next/image";

interface MealEditFormProps {
  title: string;
  food: Record<string, string>[];
}
const MealEditForm: FC<MealEditFormProps> = ({ title, food }) => {
  console.log(food);
  return (
    <div className="breakfastQuantity w-full lg:w-[36%]">
      <h5 className="text-white bg-primary-400 rounded-35">{title}</h5>
      <ul className="flex justify-center gap-24 mt-12">
        {food.map((item, index) => (
          <li key={index}>
            <label htmlFor={`${title}${item.enName}`}>
              <Image
                src={`/images/dashboard/dietary-record/foods/${item.foodIcon}`}
                height={48}
                width={48}
                alt={item.enName}
                className="mx-auto"
              />
              <p className="mt-8">{item.name}</p>
              <input
                name={`${title}${item.enName}`}
                placeholder="份數"
                className="w-full text-center"
                type="number"
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealEditForm;
