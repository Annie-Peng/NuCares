import { forwardRef } from "react";
const CusDatePicker = forwardRef(({ value, onClick }, ref) => (
  <label htmlFor="birthday" className="relative">
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
  </label>
));

export default CusDatePicker;
