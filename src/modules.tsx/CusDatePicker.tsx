import { forwardRef } from "react";
interface CusDatePickerProps {
  value: string;
  onClick: () => void;
}
const CusDatePicker = forwardRef<HTMLInputElement, CusDatePickerProps>(
  ({ value, onClick }, ref) => (
    <>
      <input
        className="cusInputWithIcon"
        name="birthday"
        onClick={onClick}
        ref={ref}
        value={value}
        placeholder="生日"
      />
      <div className="cusShowLeftIcon bg-birthdayIcon" />
      <div className="cusShowRightIcon bg-calendarIcon" />
    </>
  )
);

export default CusDatePicker;
