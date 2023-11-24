const turnDateFormat = (date: Date) => {
  const formattedDate = `${date.getFullYear()}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}`; // 格式 YYYY/MM/DD
  return formattedDate;
};

export default turnDateFormat;

const turnDateFormatOneMoreDay = (date: string) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 1);
  const formattedDate = newDate.toISOString().split("T")[0]; // 格式 YYYY-MM-DD (用於FullCalendar)
  console.log(formattedDate);
  return formattedDate;
};
export { turnDateFormatOneMoreDay };

const turnDateDashFormat = (date: Date) => {
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`; // 格式 YYYY-MM-DD
  return formattedDate;
};
export { turnDateDashFormat };
