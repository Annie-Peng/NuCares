import { FC, ReactEventHandler, ReactNode, FocusEventHandler } from "react";

export interface InputImageProps {
  name: string;
  type: "file";
  hMsg?: string;
  pMsg?: string;
  children?: ReactNode;
  placeholder?: string;
  value?: string | number;
  id?: string;
  accept?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: ReactEventHandler;
  labelClass?: string;
  inputClass?: string;
  errClass?: string;
  errMsg?: string;
  onBlur?: FocusEventHandler;
  error?: boolean;
}

const InputImage: FC<InputImageProps> = ({
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
      {error && <p className={errClass}>{errMsg}</p>}
    </>
  );
};

export default InputImage;
