import {
  ReactEventHandler,
  ReactNode,
  FocusEventHandler,
  useRef,
  forwardRef,
} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FieldError, UseFormSetValue } from "react-hook-form";
import { InitialStateType } from "../hooks/useEditForm";
import turnDateFormat from "../helpers/turnDateFormat";

export interface InputDateProps {
  name: string;
  type: "text";
  hMsg?: string;
  pMsg?: string;
  children?: ReactNode;
  placeholder?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: ReactEventHandler;
  labelClass?: string;
  inputClass?: string;
  errClass?: string;
  onBlur?: FocusEventHandler;
  error?: FieldError;
  setValue: UseFormSetValue<InitialStateType>;
}

const InputDate = forwardRef<DatePicker, InputDateProps>(
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
      setValue,
    },
    ref
  ) => {
    return (
      <>
        <label htmlFor={name} className={`${labelClass} relative mt-20 block`}>
          <h4 className="formHead">{hMsg}</h4>
          <p className="formContent">{pMsg}</p>
          {children}
          <div className="relative z-20">
            <DatePicker
              ref={ref}
              className={`${inputClass} ${error && "focus:ring-secondary-500"}`}
              name="Birthday"
              placeholderText="生日"
              value={value}
              dateFormat="yyyy/MM/dd"
              onChange={(date: Date) => {
                if (date instanceof Date) {
                  const newDate = turnDateFormat(date);
                  setValue(name, newDate);
                } else {
                  setValue(name, date);
                }
              }}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
            <div className="cusShowRightIcon left-[246px] bg-calendarIcon" />
          </div>
        </label>
        {error && <p className={errClass}>{error.message}</p>}
      </>
    );
  }
);

export default InputDate;
