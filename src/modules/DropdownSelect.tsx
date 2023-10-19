import NutritionistDropdown from "./NutritionistDropdown";
import StudentDropdown from "./StudentDropdown";

const DropdownSelect = () => {
  return (
    <>
      <div className="absolute right-0 top-[94px] rounded-10 bg-white border ">
        <NutritionistDropdown />
        {/* <StudentDropdown /> */}
      </div>
    </>
  );
};

export default DropdownSelect;
