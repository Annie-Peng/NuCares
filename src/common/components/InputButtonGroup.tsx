import { FC, ReactNode } from "react";
import { InitialStateType } from "../hooks/useEditForm";
import { UseFormSetValue } from "react-hook-form";

export interface InputButtonGroupProps {
  name: string;
  type: "button";
  hMsg?: string;
  pMsg?: string;
  value: string[];
  labelClass?: string;
  selectButtonClass?: string;
  unSelectButtonClass?: string;
  errClass?: string;
  errMsg?: string;
  error?: boolean;
  buttonOptions: string[];
  ulClass: string;
  liClass: string;
  setValue: UseFormSetValue<InitialStateType>;
  children?: ReactNode;
}

const InputButtonGroup: FC<InputButtonGroupProps> = ({
  name,
  type,
  hMsg,
  pMsg,
  labelClass,
  selectButtonClass,
  unSelectButtonClass,
  value,
  errClass,
  errMsg,
  error,
  buttonOptions,
  ulClass,
  liClass,
  setValue,
  children,
}) => {
  const handleClick = (index: number, option: string) => {
    if (value?.includes(option)) {
      let newValue = value.filter((item) => item !== option);
      setValue(name, newValue);
    } else {
      let newValue = [...value, option];
      setValue(name, newValue);
    }
  };

  return (
    <>
      <label htmlFor={name} className={`${labelClass} mt-20 block`}>
        <h4 className="formHead">{hMsg}</h4>
        <p className="formContent">{pMsg}</p>
        {children}
        <ul className={ulClass}>
          {buttonOptions.map((option, index) => (
            <li key={index} className={liClass}>
              <input
                key={option}
                type={type}
                value={option}
                className={
                  value?.includes(option)
                    ? selectButtonClass
                    : unSelectButtonClass
                }
                onClick={() => handleClick(index, option)}
              />
            </li>
          ))}
        </ul>
      </label>
      {error && <p className={errClass}>{errMsg}</p>}
    </>
  );
};

export default InputButtonGroup;
