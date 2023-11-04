import { FC, ReactEventHandler, ReactNode } from "react";

export type InputType =
  | "text"
  | "number"
  | "checkbox"
  | "password"
  | "email"
  | "file";

export interface InputProps {
  name: string;
  type: InputType;
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
  errMsg?: string;
}

const Input: FC<InputProps> = ({
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
  errMsg,
}) => {
  return (
    <label htmlFor={name} className={`${labelClass} mt-20 block`}>
      <h4 className="formHead">{hMsg}</h4>
      <p className="formContent">{pMsg}</p>
      {children}
      <input
        type={type}
        name={name}
        className={`${inputClass} mt-12 py-8`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        disabled={disabled}
        accept={accept}
        id={id}
      />
      <p className={errClass}>{errMsg}</p>
    </label>
  );
};

export default Input;
