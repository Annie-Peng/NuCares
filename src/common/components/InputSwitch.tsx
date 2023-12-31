import {
  ReactEventHandler,
  ReactNode,
  FocusEventHandler,
  forwardRef,
} from "react";
import { FieldError } from "react-hook-form";

export interface InputSwitchProps {
  name: string;
  type: "checkbox";
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
}

const InputSwitch = forwardRef<HTMLInputElement, InputSwitchProps>(
  (
    {
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
      hMsg,
      pMsg,
      onChange,
      errClass,
      onBlur,
      error,
    },
    ref
  ) => {
    return (
      <>
        <label htmlFor={name} className={`${labelClass} mt-20 block`}>
          <h4 className="formHead">{hMsg}</h4>
          <p className="formContent">{pMsg}</p>
          <span
            className={`mt-12 block border rounded-l-50 rounded-r-50 w-[41px] h-[22px] relative ${
              value
                ? "cusPublic border-primary-500"
                : "cusNoPublic border-black-300"
            }`}
          ></span>
          <span className="ms-[45px] -mt-[22px] block">
            {value ? "公開" : "不公開"}
          </span>
          <input
            ref={ref}
            type={type}
            name={name}
            className={`${inputClass} mt-12 py-8 ${
              error && "focus:ring-secondary-500"
            }`}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
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

export default InputSwitch;
