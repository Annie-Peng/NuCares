import Image from "next/image";
import BodyRateChart from "./BodyRateChart";
import { useState } from "react";
import { showModal } from "@/common/redux/features/showModal";
import { useDispatch } from "react-redux";
import { bodyRateTabs } from "@/common/lib/dashboard/dietary-record/bodyRate";

const BodyRate = () => {
  const [tab, setTab] = useState<string>("Height");
  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        onClick={() => dispatch(showModal("BodyRateAddModal"))}
      >
        <Image
          src="/images/dashboard/dietary-record/edit.svg"
          width="28"
          height="28"
          alt="arrow"
          className="absolute top-20 right-16 lg:top-12"
        />
      </button>
      <div className="flex-col h-full gap-16 hidden lg:flex">
        <label htmlFor="BodyRateChart" className="w-[100px] mx-auto relative">
          <select
            name="BodyRateChart"
            className="border-primary-400 pr-32 bg-transparent relative z-10"
            onChange={(e) => setTab(e.target.value)}
          >
            {bodyRateTabs.map((item) => (
              <option value={item.enName}>{item.name}</option>
            ))}
          </select>
          <Image
            src="/images/dashboard/dietary-record/dropdown.svg"
            width="20"
            height="20"
            alt="arrow"
            className="absolute top-1/2 right-0 -translate-y-1/2"
          />
        </label>
        <div className="h-[214px]">
          <BodyRateChart tab={tab} />
        </div>
      </div>
      <ul className="flex flex-col gap-32 lg:hidden pb-[100px]">
        {bodyRateTabs.map((item) => (
          <li>
            <p className="rounded-35 border border-primary-500 text-primary-500 w-80 text-center text-14 mx-auto">
              {item.name}
            </p>
            <div className="h-[130px] mt-20">
              <BodyRateChart tab={tab} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BodyRate;
