const BodyRate = () => {
  return (
    <div className="flex flex-col h-full justify-between pt-[65px]">
      <ul className="flex justify-between">
        <li>
          <p>身高</p>
          <p>175</p>
          <p>cm</p>
        </li>
        <li>
          <p>體重</p>
          <p>80</p>
          <p>kg</p>
        </li>
        <li>
          <p>體脂肪</p>
          <p>40.2</p>
          <p>%</p>
        </li>
        <li>
          <p>內臟脂肪</p>
          <p>14</p>
          <p>級</p>
        </li>
        <li>
          <p>骨骼肌率</p>
          <p>80</p>
          <p>kg</p>
        </li>
        <li>
          <p>BMI</p>
          <p>28.3</p>
        </li>
        <li className="">
          <p>BMR</p>
          <p>18.3</p>
        </li>
      </ul>
      <button className="btn-cusSecondary">查看更多身體指數</button>
    </div>
  );
};

export default BodyRate;
