import {
  FC,
  ReactEventHandler,
  ReactNode,
  FocusEventHandler,
  useState,
  useEffect,
} from "react";
import useUploadFile, { InitFileSrcFoodType } from "../hooks/useUploadFile";
import Image from "next/image";
import {
  FieldError,
  UseFormClearErrors,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import { InitialStateType } from "../hooks/useEditForm";

export interface InputImageProps {
  chName: string;
  name: string;
  type: "file";
  hMsg?: string;
  pMsg?: string;
  children?: ReactNode;
  placeholder?: string;
  value?: string;
  id?: string;
  accept?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: ReactEventHandler;
  labelClass?: string;
  inputClass?: string;
  errClass?: string;
  onBlur?: FocusEventHandler;
  error?: FieldError;
  Token: string;
  initFileSrc?: InitFileSrcFoodType;
  setValue: UseFormSetValue<InitialStateType>;
  setError: UseFormSetError<InitialStateType>;
  clearErrors: UseFormClearErrors<InitialStateType>;
}

const InputImage: FC<InputImageProps> = ({
  chName,
  name,
  id,
  accept,
  labelClass,
  type,
  inputClass,
  value,
  required,
  disabled,
  placeholder,
  children,
  hMsg,
  pMsg,
  onChange,
  errClass,
  onBlur,
  error,
  Token,
  initFileSrc,
  setValue,
  setError,
  clearErrors,
}) => {
  const [fileSrc, setFileSrc, handleUploadFile, apiErr] = useUploadFile({
    data: { name: chName, enName: name },
    Token,
    initFileSrc,
  });

  const [apiPhoto, setApiPhoto] = useState(value);

  const updateApiPhoto = apiPhoto?.replaceAll(
    "https://nucares.top/upload/images/",
    ""
  );

  if (apiPhoto?.startsWith("http")) {
    setValue(name, updateApiPhoto as string);
  }

  const PutPhoto = fileSrc[name as keyof InitFileSrcFoodType]?.fetch;
  if (fileSrc[name as keyof InitFileSrcFoodType]?.fetch) {
    setValue(name, PutPhoto || "");
  }

  useEffect(() => {
    if (apiErr[name]) {
      setError(name, { message: apiErr[name] });
    } else {
      clearErrors(name);
    }
  }, [apiErr, clearErrors, name, setError]);

  return (
    <>
      <label htmlFor={name} className={`${labelClass} w-fit mt-20 block`}>
        <h4 className="formHead">{hMsg}</h4>
        <p className="formContent">{pMsg}</p>
        {children}
        <div className="w-[220px] h-[275px]">
          <Image
            src={
              fileSrc[name as keyof InitFileSrcFoodType]?.file ||
              (apiPhoto as string) ||
              "/images/uploadPhoto.svg"
            }
            fill
            objectFit="cover"
            alt={name}
            className="mt-12 rounded-5 !relative"
          />
        </div>
        <input
          type={type}
          name={name}
          className={`${inputClass} mt-12 py-8 ${
            error && "focus:ring-secondary-500"
          }`}
          placeholder={placeholder}
          onChange={(e) =>
            handleUploadFile({
              e: e,
              tab: { name: chName, enName: name },
              Token: Token,
            })
          }
          required={required}
          disabled={disabled}
          onBlur={onBlur}
          accept={accept}
          id={id}
        />
      </label>
      {error && <p className={errClass}>{error.message}</p>}
    </>
  );
};

export default InputImage;
