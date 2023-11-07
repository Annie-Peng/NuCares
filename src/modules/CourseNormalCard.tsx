const CourseNormalCard = () => {
  return (
    <div className="border border-primary-200 p-20 rounded-15 flex flex-col gap-12 relative">
      {/* <p className="leading-[261px] font-bold text-black-300 mx-auto">
        營養師尚未建立課程
      </p> */}
      <h4 className="text-20 font-bold">題驗 - 1週飲食建議</h4>
      <p className="text-14 -mt-4">課程期間：1週</p>
      <h5 className="text-[28px] font-bold">NT$ 1,500</h5>
      <p className="text-14">
        課程提供專業的健康評估和指導，包括體重、BMI、飲食習慣等多項健康指標的詳盡分析。我們將幫助您了解自身健康狀況，並提供量身定制的改善方案，助您走向更健康的生活。
      </p>
      <div className="absolute top-18 -right-8 px-8 py-4 bg-tertiary-400 text-white font-bold text-12">
        入門首選
      </div>
      <button type="button" className="btn-cusSecondary w-full py-8">
        購買
      </button>
    </div>
  );
};

export default CourseNormalCard;
