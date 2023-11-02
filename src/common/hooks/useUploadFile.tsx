import axios from "axios";
import { FC, useState, ChangeEvent } from "react";
import { Tab } from "../lib/dashboard/dietary-record/foodMenu";

interface InitFileSrcFoodType {
  Breakfast: string;
  Lunch: string;
  Dinner: string;
  Oil: string;
  Fruit: string;
  Water: string;
}

interface UseUploadFile {
  data: Tab;
  Token: string;
  initFileSrc: InitFileSrcFoodType;
}

const useUploadFile: FC<UseUploadFile> = ({ data, Token, initFileSrc }) => {
  const [fileSrc, setFileSrc] = useState(initFileSrc);

  const handleUploadFile = async (
    e: ChangeEvent<HTMLInputElement>,
    tab: Tab,
    Token: string
  ): void => {
    console.log(Token);
    try {
      let reader;
      const file = e.target.files ? e.target.files[0] : null;
      if (!file) return;

      previewFile(file);

      const formData = new FormData();
      formData.append("upFile", file, file.name);

      const result = await axios(
        `${process.env.NEXT_PUBLIC_API_URL}/upload/image`,
        {
          method: "POST",
          headers: {
            Authorization: `${Token}`,
          },
          data: formData,
        }
      );
      console.log(result.data.Data.ImageUrl);
    } catch (error) {
      console.log(error);
    }
  };

  function previewFile(file) {
    let reader;
    if (file) {
      reader = new FileReader();
      reader.readAsDataURL(file);
    }
    reader.onload = function (event) {
      const result = event.target?.result;
      if (result) {
        setFileSrc((prevState) => ({
          ...prevState,
          [data.enName]: result,
        }));
      }
    };
  }
  return [fileSrc, setFileSrc, handleUploadFile];
};

export default useUploadFile;
