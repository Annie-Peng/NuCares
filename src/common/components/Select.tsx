import Image from "next/image";
import { FC, ReactEventHandler, ReactNode, FocusEventHandler } from "react";

interface SelectProps {
  name: string;
  hMsg: string;
  pMsg?: string;
  disabledOption: string;
  options: Array<{ option: string; value: string }>;
  children?: ReactNode;
  id?: string;
  required?: boolean;
  onChange?: ReactEventHandler;
  labelClass?: string;
  selectClass?: string;
  errClass?: string;
  errMsg?: string;
  imageClass?: string;
  onBlur?: FocusEventHandler;
  error?: boolean;
  value?: string | number;
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
  onBlur,
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
          onBlur={onBlur}
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
        <Image
          src="/images/dashboard/nutritionist/course/dropdown.svg"
          width={20}
          height={20}
          alt="arrow"
          className={`${imageClass} absolute`}
        />
      </label>
      {error && <p className={errClass}>{errMsg}</p>}
    </>
  );
};

export default Select;
