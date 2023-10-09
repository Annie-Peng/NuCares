import NutritionistDashboardLayout from "@/modules.tsx/dashboard/nutritionist/DashboardLayout";

const StudentListPage = () => {
  return (
    <NutritionistDashboardLayout>
      <h2>我的學員列表</h2>
      <table className="mx-auto w-full mt-24">
        <thead>
          <tr>
            <th>營養師</th>
            <th>課程名稱</th>
            <th>課程期間</th>
            <th>狀態</th>
            <th>飲食生活問券</th>
            <th>課程開始</th>
          </tr>
        </thead>
        <tbody className="border">
          <tr>
            <td className="font-bold">蛋黃哥</td>
            <td>進階 - 8週飲食建議</td>
            <td>-</td>
            <td>未開始</td>
            <td>
              <span className="px-10 py-4 bg-teal-300 rounded-5">未填寫</span>
            </td>
            <td>
              <span className="px-10 py-4 bg-teal-300 rounded-5">開始</span>
            </td>
          </tr>
          <tr>
            <td className="font-bold">P助</td>
            <td>小資 - 4週飲食建議</td>
            <td>2023.10.01-2023.11.25</td>
            <td>進行中</td>
            <td>
              <span className="px-10 py-4 bg-teal-300 rounded-5">已填寫</span>
            </td>
            <td>
              <span className="px-10 py-4 bg-teal-300 rounded-5">開始</span>
            </td>
          </tr>
        </tbody>
      </table>
    </NutritionistDashboardLayout>
  );
};

export default StudentListPage;
