import Image from "next/legacy/image";
import BodyRateChart from "./BodyRateChart";
import { FC, useState } from "react";
import { showModal } from "@/common/redux/features/showModal";
import { useDispatch, useSelector } from "react-redux";
import { bodyRateTabs } from "@/common/lib/dashboard/dietary-record/bodyRate";
import { selectBodyRate } from "@/common/redux/features/dietary-record/bodyRate";
import turnDateFormat from "@/common/helpers/turnDateFormat";
import { Token } from "@/types/interface";

interface BodyRateProps {
  Token: Token;
  CourseId: string;
  UserCurrentStatus: string;
}

const BodyRate: FC<BodyRateProps> = ({
  Token,
  CourseId,
  UserCurrentStatus,
}) => {
  const [tab, setTab] = useState<string>("Height");
  const dispatch = useDispatch();

  const BodyRate = useSelector(selectBodyRate);

  const currentDate = turnDateFormat(new Date());

  const hasTodayBodyRate = BodyRate.filter(
    (item) => item.CreateDate === currentDate
  );

  return (
    <>
      {hasTodayBodyRate.length === 0 && UserCurrentStatus === "user" && (
        <>
          <button
            type="button"
            onClick={() =>
              dispatch(
                showModal([
                  "showBodyRateAddModal",
                  { Token: Token, CourseId: CourseId },
                ])
              )
            }
            className="hidden absolute right-16 lg:-top-[40px] lg:block"
          >
            <Image
              src="/images/dashboard/dietary-record/edit.svg"
              width={28}
              height={28}
              alt="edit"
            />
          </button>
          <button
            type="button"
            onClick={() =>
              dispatch(
                showModal([
                  "showBodyRateAddModal",
                  { Token: Token, CourseId: CourseId },
                ])
              )
            }
            className="absolute -top-[52px] right-30 lg:hidden"
          >
            <Image
              src="/images/dashboard/dietary-record/edit-primary.svg"
              width={36}
              height={36}
              alt="edit"
            />
          </button>
        </>
      )}
      <div className="flex-col h-full gap-16 hidden lg:flex">
        <label htmlFor="BodyRateChart" className="w-[100px] mx-auto relative">
          <select
            name="BodyRateChart"
            className="border-primary-400 pr-32 bg-transparent relative z-10"
            onChange={(e) => setTab(e.target.value)}
          >
            {bodyRateTabs.map((item, index) => (
              <option key={index} value={item.enName}>
                {item.name}
              </option>
            ))}
          </select>
          <div className="absolute top-1/2 right-0 -translate-y-[50%] w-[20px] h-[20px]">
            <Image
              src="/images/dashboard/dietary-record/dropdown.svg"
              layout="fixed"
              width={20}
              height={20}
              alt="dropdown"
            />
          </div>
        </label>
        <div className="h-[214px]">
          <BodyRateChart tab={tab} BodyRate={BodyRate} />
        </div>
      </div>
      <ul className="flex flex-col gap-32 lg:hidden pb-[100px]">
        {bodyRateTabs.map((item, index) => (
          <li key={index}>
            <p className="rounded-35 border border-primary-500 text-primary-500 w-80 text-center text-14 mx-auto">
              {item.name}
            </p>
            <div className="h-[130px] mt-20">
              <BodyRateChart item={item.enName} tab={tab} BodyRate={BodyRate} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BodyRate;
