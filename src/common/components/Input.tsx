import { FC, ReactEventHandler, ReactNode, FocusEventHandler } from "react";
import { InputType } from "@/types/interface";
import { FieldError } from "react-hook-form";

export interface InputProps {
  name: string;
  type: InputType | string;
  hMsg?: string;
  pMsg?: string;
  children?: ReactNode;
  placeholder?: string;
  value?: string | string[] | boolean | number;
  required?: boolean;
  disabled?: boolean;
  onChange?: ReactEventHandler;
  labelClass?: string;
  inputClass?: string;
  errClass?: string;
  onBlur?: FocusEventHandler;
  error?: FieldError;
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
  onBlur,
  error,
}) => {
  return (
    <>
      <label htmlFor={name} className={`${labelClass} mt-20 block`}>
        <h4 className="formHead">{hMsg}</h4>
        <p className="formContent">{pMsg}</p>
        {children}
        <input
          type={type}
          name={name}
          className={`${inputClass} mt-12 py-8 ${
            error && "focus:ring-secondary-500"
          }`}
          value={value as string}
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          disabled={disabled}
          onBlur={onBlur}
        />
      </label>
      {error && <p className={errClass}>{error.message}</p>}
    </>
  );
};

export default Input;
