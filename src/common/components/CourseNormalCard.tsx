const CourseNormalCard = () => {
  return (
    <div className="border p-24 rounded-15 text20">
      <h4>題驗 - 1週飲食建議</h4>
      <p className="text-12">課程期間:1週</p>
      <p className="text-12">共2堂</p>
      <h5 className="text-22 font-normal">NT$ 1,500</h5>
      <p>
        課程提供專業的健康評估和指導，包括體重、BMI、飲食習慣等多項健康指標的詳盡分析。我們將幫助您了解自身健康狀況，並提供量身定制的改善方案，助您走向更健康的生活。
      </p>
      <button type="button" className="btn-cusSecondary w-full py-14">
        購買
      </button>
    </div>
  );
};

export default CourseNormalCard;
