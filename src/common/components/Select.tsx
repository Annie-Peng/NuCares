import { FC, ReactEventHandler, ReactNode } from "react";

interface SelectProps {
  name: string;
  hMsg: string;
  pMsg: string;
  disabledOption: string;
  options: [{ option: string; value: string }];
  children?: ReactNode;
  id?: string;
  required?: boolean;
  onChange?: ReactEventHandler;
  labelClass?: string;
  selectClass?: string;
  errClass?: string;
  errMsg?: string;
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
}) => {
  return (
    <label htmlFor={name} className={labelClass}>
      <h4 className="formHead">{hMsg}</h4>
      <p className="fromContent">{pMsg}</p>
      {children}
      <select
        className={`formSelect ${selectClass}`}
        name={name}
        onChange={onChange}
        required={required}
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
      <p className={errClass}>{errMsg}</p>
    </label>
  );
};

export default Select;
