import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2 className="text-24">Dashboard</h2>
      <p className="text-20">營養師</p>
      <ul className="nutritionist">
        <li>
          <Link href="/dashboard/nutritionist/student-list">我的學員</Link>
        </li>
        <li>
          <Link href="/dashboard/nutritionist/student-list/1">
            - 單一學員飲食日記
          </Link>
        </li>
        <li>
          <Link href="/dashboard/nutritionist/workshop">我的營養師專頁面</Link>
        </li>
        <li>
          <Link href="/dashboard/nutritionist/workshop/introduction">
            - 關於我
          </Link>
        </li>
        <li>
          <Link href="/dashboard/nutritionist/workshop/courses">
            - 課程方案
          </Link>
        </li>
        <li>
          <Link href="/dashboard/nutritionist/student-list">個人資料</Link>
        </li>
      </ul>
      <hr className="my-20" />
      <p className="text-20">學員</p>
      <ul className="student">
        <li>
          <Link href="/dashboard/student/course-list">我的課程</Link>
        </li>
        <li>
          <Link href="#">訂單紀錄</Link>
        </li>
        <li>
          <Link href="#">收藏營養師</Link>
        </li>
        <li>
          <Link href="#">個人資料</Link>
        </li>
      </ul>
      <hr className="my-20" />
      <h2 className="text-24">frontend</h2>
      <ul className="frontend">
        <li>
          <Link href="/nutritionist-list">搜尋營養師</Link>
        </li>
        <li>
          <Link href="/nutritionist-list/1">搜尋單一營養師</Link>
        </li>
        <li>
          <Link href="/payment">結帳</Link>
        </li>
        <li>
          <Link href="/payment/check-order">結帳確認詳細訂單</Link>
        </li>
        <li>
          <Link href="/register">註冊</Link>
        </li>
        <li>
          <Link href="/login">登入</Link>
        </li>
      </ul>
    </>
  );
}
