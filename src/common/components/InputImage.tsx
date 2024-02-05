import {
  ReactEventHandler,
  ReactNode,
  FocusEventHandler,
  useState,
  useEffect,
  forwardRef,
} from "react";
import useUploadFile, { InitFileSrcFoodType } from "../hooks/useUploadFile";
import Image from "next/legacy/image";
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

const InputImage = forwardRef<HTMLInputElement, InputImageProps>(
  (
    {
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
    },
    ref
  ) => {
    const [fileSrc, setFileSrc, handleUploadFile, apiErr] = useUploadFile({
      data: { name: chName, enName: name },
      Token,
      initFileSrc,
    });

    const [apiPhoto, setApiPhoto] = useState(value);

    const updateApiPhoto = apiPhoto?.replaceAll(
      `${process.env.NEXT_PUBLIC_API_URL}/upload/images/`,
      ""
    );

    const PutPhoto = fileSrc[name as keyof InitFileSrcFoodType]?.fetch;

    useEffect(() => {
      if (apiPhoto?.startsWith("http")) {
        setValue(name, updateApiPhoto as string);
      }
      if (fileSrc[name as keyof InitFileSrcFoodType]?.fetch) {
        setValue(name, PutPhoto || "");
      }
      if (apiErr[name]) {
        setError(name, { message: apiErr[name] });
      } else {
        clearErrors(name);
      }
    }, [apiErr, clearErrors, name, setError, PutPhoto]);

    return (
      <>
        <label htmlFor={name} className={`${labelClass} w-fit mt-20 block`}>
          <h4 className="formHead">{hMsg}</h4>
          <p className="formContent">{pMsg}</p>
          {children}
          <div className="relative w-[220px] h-[275px]">
            <Image
              src={
                fileSrc[name as keyof InitFileSrcFoodType]?.file ||
                (apiPhoto as string) ||
                "/images/uploadPhoto.svg"
              }
              layout="fill"
              alt={name}
              className="mt-12 rounded-5 !relative object-cover"
              priority={true}
            />
          </div>
          <input
            ref={ref}
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
  }
);

export default InputImage;
