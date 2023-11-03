import Image from "next/image";

const CourseBigCard = () => {
  return (
    <div className="courseBigCard p-20 bg-white rounded-10 border border-black-200 flex gap-[47px]">
      <table className="flex gap-x-20 after:content-[''] after:top-0 after:bottom-0 after:block after:bg-black-200 after:w-[1px]">
        <tr className="flex flex-col gap-16 text-right">
          <th className="whitespace-nowrap">排列順序</th>
          <th>課程名稱</th>
          <th>週數</th>
          <th>價格</th>
          <th>標籤</th>
          <th>課程說明</th>
        </tr>
        <tbody>
          <tr className="flex flex-col gap-16 text-left">
            <td>1</td>
            <td>體驗 - 1週飲食建議</td>
            <td>1</td>
            <td>NT$ 1,500</td>
            <td>體驗價</td>
            <td>
              課程說明
              課程提供專業的健康評估和指導，包括體重、BMI、飲食習慣等多項健康指標的詳盡分析。我們將幫助您了解自身健康狀況，並提供量身定制的改善方案，助您走向更健康的生活。
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-wrap content-center gap-16 p-12">
        <button type="button">
          <Image
            src="/images/dashboard/nutritionist/course/clipPath.svg"
            width={28}
            height={28}
            alt="edit"
          />
        </button>
        <button type="button">
          <Image
            src="/images/dashboard/nutritionist/course/trashcan.svg"
            width={28}
            height={28}
            alt="delete"
          />
        </button>
      </div>
    </div>
  );
};
{
}

export default CourseBigCard;
