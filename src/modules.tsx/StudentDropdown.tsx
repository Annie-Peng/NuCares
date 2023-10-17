import Link from "next/link";

const StudentDropdown = () => {
  return (
    <>
      <div className="px-[36px] py-24">
        <span className="bg-primary-300 px-10 rounded-10">一般會員</span>
        <span className="ms-10">陳晴天</span>
      </div>
      <ul className="flex flex-col gap-28 px-[36px] py-24 border-t">
        <li>
          <span className="rounded-10 bg-black-500 w-20 h-20 inline-block"></span>
          <Link href="/dashboard/student/course-list" className="ms-6">
            我的課程
          </Link>
        </li>
        <li>
          <span className="rounded-10 bg-black-500 w-20 h-20 inline-block"></span>
          <Link href="/dashboard/student/order" className="ms-6">
            訂單紀錄
          </Link>
        </li>
        <li>
          <span className="rounded-10 bg-black-500 w-20 h-20 inline-block"></span>
          <Link href="/dashboard/student/favorite" className="ms-6">
            收藏營養師
          </Link>
        </li>
        <li>
          <span className="rounded-10 bg-black-500 w-20 h-20 inline-block"></span>
          <Link href="/dashboard/student/information" className="ms-6">
            個人資料
          </Link>
        </li>
        <li>申請成為平台營養師</li>
      </ul>
      <button className="py-24 border-t w-full">登出</button>
    </>
  );
};

export default StudentDropdown;
