const CourseListPage = () => {
  return (
    <>
      <h2>我的課程列表</h2>
      <table className="mx-auto w-full mt-24">
        <thead>
          <tr>
            <th>營養師</th>
            <th>課程名稱</th>
            <th>課程期間</th>
            <th>狀態</th>
            <th>飲食生活問券</th>
            <th>評價</th>
          </tr>
        </thead>
        <tbody className="border">
          <tr>
            <td className="font-bold">陳瘦瘦</td>
            <td>進階 - 8週飲食建議</td>
            <td>2023.10.01-2023.11.25</td>
            <td>進行中</td>
            <td>
              <span className="px-10 py-4 bg-teal-300 rounded-5">未填寫</span>
            </td>
            <td>
              <span className="px-10 py-4 bg-teal-300 rounded-5">評價</span>
            </td>
          </tr>
          <tr>
            <td className="font-bold">張圓圓</td>
            <td>1週飲食建議</td>
            <td>2023.08.03-2023.08.10</td>
            <td>已結束</td>
            <td>
              <span className="px-10 py-4 bg-teal-300 rounded-5">已填寫</span>
            </td>
            <td>
              <span className="px-10 py-4 bg-teal-300 rounded-5">評價</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CourseListPage;
