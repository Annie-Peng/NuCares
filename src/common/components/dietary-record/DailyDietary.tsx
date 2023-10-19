import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Image from "next/image";

const weekDay = ["日", "一", "二", "三", "四", "五", "六"];

const tabs = ["總覽", "早餐", "午餐", "晚餐", "油脂", "水果", "飲水"];

const foodIcons = [
  {
    PC: "starch_PC.svg",
    completed: "starch-completed_PC.svg",
    mobile: "starch_mobile.svg",
    name: "澱粉",
    tab: [0, 1, 2, 3],
  },
  {
    PC: "protein_PC.svg",
    completed: "protein-completed_PC.svg",
    mobile: "protein_mobile.svg",
    name: "蛋白質",
    tab: [0, 1, 2, 3],
  },
  {
    PC: "vegetable_PC.svg",
    completed: "vegetable-completed_PC.svg",
    mobile: "vegetable_mobile.svg",
    name: "蔬菜",
    tab: [0, 1, 2, 3],
  },
  {
    PC: "oil_PC.svg",
    completed: "oil-completed_PC.svg",
    mobile: "oil_mobile.svg",
    name: "油脂",
    tab: [0, 4],
  },
  {
    PC: "fruit_PC.svg",
    completed: "fruit-completed_PC.svg",
    mobile: "fruit_mobile.svg",
    name: "水果",
    tab: [0, 5],
  },
  {
    PC: "water_PC.svg",
    completed: "water-completed_PC.svg",
    mobile: "water_mobile.svg",
    name: "水",
    tab: [0, 6],
  },
];

const events = [
  {
    title: "水果",
    start: new Date(),
    extendedProps: {
      targetQty: "5",
      fuilfillQty: "3",
    },
  },
];

const DailyDietary = () => {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridDay"
        events={events}
        views={{
          dayGrid: {
            titleFormat: (date) => {
              const getWeekDay = date.date.marker.getDay();
              return `${date.date.month + 1}月${date.date.day}日(${
                weekDay[getWeekDay]
              })`;
            },
          },
        }}
        dayHeaders={false}
        eventContent={renderEventContent}
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "next",
        }}
        height="100%"
      />
    </>
  );
};

export default DailyDietary;

// a custom render function
function renderEventContent(eventInfo) {
  // console.log(eventInfo);
  // const img = eventInfo.event.extendedProps.picture;
  // console.log(eventInfo.event.start);

  return (
    <div>
      <ul className="flex justify-center gap-12 mt-12">
        {tabs.map((tab, index) => {
          return <li key={index}>{tab}</li>;
        })}
      </ul>
      <ul className="flex gap-[90px] text-black-950">
        {foodIcons.map((foodIcon, index) => {
          return (
            <li key={index}>
              <Image
                src={`/images/dashboard/dietary-record/foods/${foodIcon.PC}`}
                alt={foodIcons.PC}
                width={75}
                height={75}
              />
              <p className="text-center mt-6">{foodIcon.name}</p>
            </li>
          );
        })}
      </ul>
      {/* <b>{eventInfo.timeText}</b> */}
      {/* <i>{eventInfo.event.title}</i> */}

      {/* <i>
            {eventInfo.event.title} {eventInfo.event.extendedProps.fuilfillQty}/
            {eventInfo.event.extendedProps.targetQty}
          </i> */}
    </div>
  );
}

// const foodEventList = [
//   {
//     type: "早餐",
//     foodType: {
//       meat: 2,
//       fruit: 3,
//       rice: 4,
//     },
//   },
//   {
//     type: "午餐",
//     foodType: {
//       meat: 1,
//       fruit: 1,
//       rice: 1,
//     },
//   },
//   {
//     type: "晚餐",
//     foodType: {
//       meat: 2,
//       fruit: 2,
//       rice: 2,
//     },
//   },
// ];
