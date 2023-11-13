import { FC, ReactEventHandler, ReactNode, FocusEventHandler } from "react";

interface TextareaProps {
  name: string;
  hMsg?: string;
  pMsg?: string;
  children?: ReactNode;
  placeholder?: string;
  value?: string | string[] | boolean | number;
  required?: boolean;
  disabled?: boolean;
  onChange?: ReactEventHandler;
  labelClass?: string;
  textareaClass?: string;
  errClass?: string;
  errMsg?: string;
  onBlur?: FocusEventHandler;
  error?: boolean;
}

const Textarea: FC<TextareaProps> = ({
  name,
  labelClass,
  textareaClass,
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
        <textarea
          name={name}
          className={`${textareaClass} mt-12 py-8 ${
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
      {error && <p className={errClass}>{errMsg}</p>}
    </>
  );
};

export default Textarea;
