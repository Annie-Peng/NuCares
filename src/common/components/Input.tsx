import { FC, ReactEventHandler, ReactNode } from "react";

interface InputProps {
  name: string;
  type: "text" | "number" | "checkbox" | "password" | "email" | "file";
  hMsg?: string;
  pMsg?: string;
  children?: ReactNode;
  placeholder?: string;
  value?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: ReactEventHandler;
  labelClass?: string;
  inputClass?: string;
  errClass?: string;
  errMsg?: string;
  accept?: string;
}

const Input: FC<InputProps> = ({
  name,
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
  errMsg,
  accept,
}) => {
  return (
    <label htmlFor={name} className={labelClass}>
      <h4 className="font-normal font-weight">{hMsg}</h4>
      <p className="text-14 font-normal text-black-400">{pMsg}</p>
      {children}
      <input
        type={type}
        name={name}
        className={inputClass}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        disabled={disabled}
        accept={accept}
      />
      <p className={errClass}>{errMsg}</p>
    </label>
  );
};

export default Input;
