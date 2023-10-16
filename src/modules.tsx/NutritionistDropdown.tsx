import Link from "next/link";
import StudentDropdown from "./StudentDropdown";

const NutritionistDropdown = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-1/2">
        <StudentDropdown />
      </div>
      <div className="w-1/2 border-s py-24">
        <div className="px-[36px]">
          <span className="bg-primary-300 px-10 rounded-10">營養師</span>
          <span className="ms-10">陳瘦瘦</span>
        </div>
        <ul className="flex flex-col gap-28 px-[36px] pt-24 mt-24 border-t">
          <li>
            <span className="rounded-10 bg-black-500 w-20 h-20 inline-block"></span>
            <Link href="/dashboard/nutritionist/student-list" className="ms-6">
              我的學員
            </Link>
          </li>
          <li>
            <span className="rounded-10 bg-black-500 w-20 h-20 inline-block"></span>
            <Link href="/dashboard/nutritionist/workshop" className="ms-6">
              我的營養師專頁
            </Link>
          </li>
          <li>
            <span className="rounded-10 bg-black-500 w-20 h-20 inline-block"></span>
            <Link href="/dashboard/student/favorite" className="ms-6">
              帳戶
            </Link>
          </li>
        </ul>
      </div>
      <button className="py-24 border-t w-full">登出</button>
    </div>
  );
};

export default NutritionistDropdown;
