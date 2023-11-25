import Image from "next/legacy/image";
import { FC, ReactEventHandler, ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface SelectProps {
  name: string;
  hMsg?: string;
  pMsg?: string;
  disabledOption: string;
  options: Array<{ option: string; value: string }>;
  children?: ReactNode;
  required?: boolean;
  onChange?: ReactEventHandler;
  labelClass?: string;
  selectClass?: string;
  errClass?: string;
  errMsg?: string;
  imageClass?: string;
  error?: FieldError;
  value?: string[] | string;
}

const Select: FC<SelectProps> = ({
  name,
  labelClass,
  selectClass,
  required,
  children,
  hMsg,
  pMsg,
  onChange,
  errClass,
  errMsg,
  disabledOption,
  options,
  imageClass,
  error,
  value,
}) => {
  return (
    <>
      <label htmlFor={name} className={`${labelClass} mt-20 block relative`}>
        <h4 className="formHead">{hMsg}</h4>
        <p className="formContent">{pMsg}</p>
        {children}
        <select
          className={`formSelect ${selectClass} mt-12 py-8 relative ${
            error && "focus:ring-secondary-500"
          }`}
          name={name}
          onChange={onChange}
          required={required}
          value={value}
        >
          <option value="" disabled selected>
            {disabledOption}
          </option>
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.option}
              </option>
            );
          })}
        </select>
        <div className={`${imageClass} absolute w-[20px] h-[20px]`}>
          <Image
            src="/images/dashboard/nutritionist/course/dropdown.svg"
            layout="fixed"
            width={20}
            height={20}
            alt="arrow"
          />
        </div>
      </label>
      {error && <p className={errClass}>{error.message}</p>}
    </>
  );
};

export default Select;
