import {
  ReactEventHandler,
  ReactNode,
  FocusEventHandler,
  forwardRef,
} from "react";
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

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
    },
    ref
  ) => {
    const valueFormat =
      type === "number" && typeof value === "string" && value.includes(",")
        ? (value = Number(value.replace(/,/g, "")))
        : (value as string);

    const autoComplete = type === "password" ? "off" : "on";

    return (
      <>
        <label htmlFor={name} className={`${labelClass} mt-20 block`}>
          <h4 className="formHead">{hMsg}</h4>
          <p className="formContent">{pMsg}</p>
          {children}
          <input
            ref={ref}
            type={type}
            name={name}
            className={`${inputClass} mt-12 py-8 ${
              error && "focus:ring-secondary-500"
            }`}
            value={valueFormat}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            disabled={disabled}
            onBlur={onBlur}
            autoComplete={autoComplete}
          />
        </label>
        {error && <p className={errClass}>{error.message}</p>}
      </>
    );
  }
);

export default Input;
