import axios from "axios";
import { FC, useState, ChangeEvent } from "react";
import { Tab } from "../lib/dashboard/dietary-record/foodMenu";

export interface InitFileSrcFoodType {
  Breakfast: { fetch: string; file: string };
  Lunch: { fetch: string; file: string };
  Dinner: { fetch: string; file: string };
  Oil: { fetch: string; file: string };
  Fruit: { fetch: string; file: string };
  Water: { fetch: string; file: string };
}

export interface UseUploadFileProps {
  data: Tab;
  Token: string;
  initFileSrc: InitFileSrcFoodType;
}

export interface HandleUploadFileProps {
  e: ChangeEvent<HTMLInputElement>;
  tab: Tab;
  Token: string;
}

const useUploadFile = ({
  data,
  Token,
  initFileSrc,
}: UseUploadFileProps): [
  InitFileSrcFoodType,
  (fileSrc: InitFileSrcFoodType) => void,
  (onChange: HandleUploadFileProps) => void
] => {
  const [fileSrc, setFileSrc] = useState<InitFileSrcFoodType>(initFileSrc);

  const handleUploadFile = async ({
    e,
    tab,
    Token,
  }: HandleUploadFileProps): Promise<void> => {
    try {
      let reader;
      const file = e.target.files ? e.target.files[0] : null;
      if (!file) return;

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
      const fetchData = result.data.Data.ImageUrl;

      previewFile(file, fetchData);
    } catch (error) {
      console.log(error);
    }
  };

  function previewFile(file: File, fetchData: string) {
    let reader;
    if (file) {
      reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (event) {
        const result = event.target?.result;
        if (result) {
          setFileSrc((prevState) => ({
            ...prevState,
            [data.enName]: { fetch: fetchData, file: result },
          }));
        }
      };
    }
  }
  return [fileSrc, setFileSrc, handleUploadFile];
};

export default useUploadFile;