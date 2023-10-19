const CourseBigCard = () => {
  return (
    <div className="flex p-24 bg-white rounded-10">
      <div className="text-right whitespace-nowrap">
        <p>課程名稱</p>
        <p>週數</p>
        <p>堂數</p>
        <p>價格</p>
        <p>課程說明</p>
      </div>
      <div className="text-left ml-18">
        <p>體驗 - 1週飲食建議</p>
        <p>1週</p>
        <p>2堂</p>
        <p>NT$ 1,500</p>
        <p>
          課程說明
          課程提供專業的健康評估和指導，包括體重、BMI、飲食習慣等多項健康指標的詳盡分析。我們將幫助您了解自身健康狀況，並提供量身定制的改善方案，助您走向更健康的生活。
        </p>
      </div>
      <div className="flex gap-16 -mt-4">
        <img alt="edit" width="17" height="17" />
        <img alt="delete" width="17" height="17" />
      </div>
    </div>
  );
};

export default CourseBigCard;
