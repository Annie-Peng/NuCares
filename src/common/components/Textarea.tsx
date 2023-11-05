import { FC, ReactEventHandler, ReactNode } from "react";

interface TextareaProps {
  name: string;
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
  textareaClass?: string;
  errClass?: string;
  errMsg?: string;
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
}) => {
  return (
    <label htmlFor={name} className={`${labelClass} mt-20 block`}>
      <h4 className="formHead">{hMsg}</h4>
      <p className="formContent">{pMsg}</p>
      {children}
      <textarea
        name={name}
        className={`${textareaClass} mt-12 py-8`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
      <p className={errClass}>{errMsg}</p>
    </label>
  );
};

export default Textarea;
