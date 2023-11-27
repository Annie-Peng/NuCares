import { ReactNode, forwardRef } from "react";
import { InitialStateType } from "../hooks/useEditForm";
import { FieldError, UseFormSetValue } from "react-hook-form";

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
  error?: FieldError;
  buttonOptions: string[];
  ulClass: string;
  liClass: string;
  setValue: UseFormSetValue<InitialStateType>;
  children?: ReactNode;
}

const InputButtonGroup = forwardRef<HTMLInputElement, InputButtonGroupProps>(
  (
    {
      name,
      type,
      hMsg,
      pMsg,
      labelClass,
      selectButtonClass,
      unSelectButtonClass,
      value,
      errClass,
      error,
      buttonOptions,
      ulClass,
      liClass,
      setValue,
      children,
    },
    ref
  ) => {
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
                  ref={ref}
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
        {error && <p className={errClass}>{error.message}</p>}
      </>
    );
  }
);

export default InputButtonGroup;
