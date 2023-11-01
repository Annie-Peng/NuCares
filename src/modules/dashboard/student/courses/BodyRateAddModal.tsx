import TitleModal from "@/common/components/TitleModal";
import { bodyRateAdd } from "@/common/lib/dashboard/dietary-record/bodyRate";
import { FC } from "react";

interface BodyRateAddModalProps {
  data: string;
}

const BodyRateAddModal: FC<BodyRateAddModalProps> = ({ data }) => {
  return (
    <TitleModal title="今天身體數值" width="820px" modal="showBodyRateAddModal">
      <form>
        <ul className="flex gap-32 my-32">
          {bodyRateAdd.map((item, index) => (
            <li key={index}>
              <label htmlFor={item.enName} className="relative">
                <p className="bg-primary-400 text-white rounded-35">
                  {item.name}
                </p>
                <input
                  name={item.enName}
                  type="number"
                  className="w-full mt-8 pr-[42px]"
                />
                <p className="absolute right-12 top-[42px] text-black-400">
                  {item.unit}
                </p>
              </label>
            </li>
          ))}
        </ul>
        <button type="submit" className="btn-cusSecondary p-6 w-[270px]">
          新增
        </button>
      </form>
    </TitleModal>
  );
};

export default BodyRateAddModal;
