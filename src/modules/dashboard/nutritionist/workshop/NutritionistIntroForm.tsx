import Image from "next/image";
import emptyPhoto from "public/images/emptyPhoto.svg";

const NutritionistIntroForm = () => {
  return (
    <form className="text-left flex flex-col gap-32">
      <h4 className="font-bold">公開您的介紹</h4>
      <p>
        在設定為公開狀態後，您才能開始接案。但即使處於未公開狀態，您仍然可為正在進行中的學員提供飲食建議。
      </p>
      <div className="flex relative">
        <label
          htmlFor="openIntro"
          className="block border rounded-l-50 rounded-r-50 w-[41px] h-[22px] cusSwitch relative"
        ></label>
        <input type="checkbox" id="openIntro" className="hidden" />
        <span>公開</span>
      </div>
      <label htmlFor="photo">
        <h4 className="font-bold">形象照*</h4>
        <p>圖片需小於 3mb</p>
        <Image src={emptyPhoto} width="220" height="302" alt="emptyPhoto" />
      </label>
      <label htmlFor="userName">
        <h4 className="font-bold">顯示名稱*</h4>
        <p>您可使用真實姓名或希望學員如何稱呼您的名字</p>
        <input type="text" className="cusInput" name="userName" />
      </label>
      <label htmlFor="location">
        <h4 className="font-bold">所在縣市*</h4>
        <p>您所在的位置</p>
        <select name="location">
          <option>高雄市</option>
        </select>
      </label>
      <label htmlFor="strength">
        <h4 className="font-bold">專長主題*</h4>
        <p>您擅長的飲食建議之主題，點選主題按鈕進行設定</p>
        <ul className="flex gap-10">
          <li>
            <input
              type="button"
              name="strength"
              value="體重控制"
              className="cusActiveTags"
            />
          </li>
          <li>
            <input
              type="button"
              name="strength"
              value="上班族營養"
              className="cusActiveTags"
            />
          </li>
          <li>
            <input
              type="button"
              name="strength"
              value="孕期營養"
              className="cusActiveTags"
            />
          </li>
          <li>
            <input
              type="button"
              name="strength"
              value="樂齡營養與保健"
              className="cusActiveTags"
            />
          </li>
        </ul>
      </label>
      <label htmlFor="education">
        <h4 className="font-bold">學歷*</h4>
        <p>您的營養師相關學歷</p>
        <input type="text" className="cusInput" name="education" />
      </label>
      <label htmlFor="experience">
        <h4 className="font-bold">經歷</h4>
        <p>您的營養師相關經歷</p>
        <textarea className="cusTextarea" name="experience"></textarea>
      </label>
      <label htmlFor="about">
        <h4 className="font-bold">關於我</h4>
        <p>介紹您自己，讓人更了解你</p>
        <textarea className="cusTextarea" name="about"></textarea>
      </label>
      <label htmlFor="courseIntro">
        <h4 className="font-bold">課程介紹</h4>
        <p>更多詳細的課程說明</p>
        <textarea className="cusTextarea" name="courseIntro"></textarea>
      </label>
      <div className="mx-auto">
        <button className="btn-cusSecondary w-[250px] py-8">放棄變更</button>
        <button className="btn-cusSecondary w-[250px] ml-24 py-8">儲存</button>
      </div>
    </form>
  );
};

export default NutritionistIntroForm;
