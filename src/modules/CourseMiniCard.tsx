const CourseMiniCard = () => {
  return (
    <div className="border border-primary-200 p-20 rounded-15 relative">
      <h4>題驗 - 1週飲食建議</h4>
      <p className="text-14 mt-4">共1週</p>
      <h5 className="text-22 font-normal mt-12">NT$ 1,500</h5>
      <div className="absolute top-18 -right-8 px-8 py-4 bg-tertiary-400 text-white font-bold text-12">
        入門首選
      </div>
    </div>
  );
};

export default CourseMiniCard;
