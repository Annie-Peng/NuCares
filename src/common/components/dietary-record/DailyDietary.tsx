import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Image from "next/image";
import { useState } from "react";

interface FoodIcon {
  PC: string;
  completed: string;
  mobile: string;
  name: string;
  enName: string;
  showTab: string[];
}

interface Tab {
  name: string;
  enName: string;
}

interface Event {
  start: string;
  tab: string;
  extendedProps: {
    [key: string]: any | string;
  };
}

const foodAPI = {
  Id: 1,
  InsertDate: "2023-10-20",
  StarchSum: "1, 3",
  ProteinSum: "2, 9",
  VegetableSum: "3, 6",
  OilSum: "1, 1",
  FruitSum: "2, 3",
  WaterSum: "3700, 2000",
  Breakfast: {
    Id: 1,
    DailyLogId: 1,
    MealTime: "早餐",
    MealDescription: "吐司...",
    Image: "/upload/images/...",
    Starch: "BStarch,2",
    Protein: "BProtein,2",
    Vegetable: "BVegetable,2",
  },
  Lunch: {
    // {
    Id: 2,
    DailyLogId: 1,
    MealTime: "午餐",
    MealDescription: "吐司...",
    Image: "/upload/images/...",
    Starch: "LStarch,2",
    Protein: "LProtein,2",
    Vegetable: "LVegetable,2",
  },
  Dinner: {
    Id: 3,
    DailyLogId: 1,
    MealTime: "晚餐",
    MealDescription: "吐司...",
    Image: "/upload/images/...",
    Starch: "DStarch,2",
    Protein: "DProtein,2",
    Vegetable: "Degetable,2",
  },
  Fruit: "Fruit,Fruit",
  FruitDescription: "",
  FruitImgUrl: "/upload/images/...",
  Oil: "Oil,Oil",
  OilDescription: "",
  OilImgUrl: "/upload/images/...",
  Water: "Water,Water",
  WaterDescription: "",
  WaterImgUrl: "/upload/images/...",
};

const weekDays: string[] = ["日", "一", "二", "三", "四", "五", "六"];

const tabs: Tab[] = [
  { name: "總覽", enName: "All" },
  { name: "早餐", enName: "Breakfast" },
  { name: "午餐", enName: "Lunch" },
  { name: "晚餐", enName: "Dinner" },
  { name: "油脂", enName: "Oil" },
  { name: "水果", enName: "Fruit" },
  { name: "飲水", enName: "Water" },
];

const foodIcons: FoodIcon[] = [
  {
    PC: "starch_PC.svg",
    completed: "starch-completed_PC.svg",
    mobile: "starch_mobile.svg",
    name: "澱粉",
    enName: "Starch",
    showTab: ["All", "Breakfast", "Lunch", "Dinner"],
  },
  {
    PC: "protein_PC.svg",
    completed: "protein-completed_PC.svg",
    mobile: "protein_mobile.svg",
    name: "蛋白質",
    enName: "Protein",
    showTab: ["All", "Breakfast", "Lunch", "Dinner"],
  },
  {
    PC: "vegetable_PC.svg",
    completed: "vegetable-completed_PC.svg",
    mobile: "vegetable_mobile.svg",
    name: "蔬菜",
    enName: "Vegetable",
    showTab: ["All", "Breakfast", "Lunch", "Dinner"],
  },
  {
    PC: "oil_PC.svg",
    completed: "oil-completed_PC.svg",
    mobile: "oil_mobile.svg",
    name: "油脂",
    enName: "Oil",
    showTab: ["All", "Oil"],
  },
  {
    PC: "fruit_PC.svg",
    completed: "fruit-completed_PC.svg",
    mobile: "fruit_mobile.svg",
    name: "水果",
    enName: "Fruit",
    showTab: ["All", "Fruit"],
  },
  {
    PC: "water_PC.svg",
    completed: "water-completed_PC.svg",
    mobile: "water_mobile.svg",
    name: "水",
    enName: "Water",
    showTab: ["All", "Water"],
  },
];

const DailyDietary = () => {
  const [tab, setTab] = useState<Tab>(tabs[0]);

  const events: Event[] = [
    {
      start: foodAPI.InsertDate,
      tab: tab.enName,
      extendedProps: {
        All: foodAPI,
        Breakfast: foodAPI.Breakfast,
        Lunch: foodAPI.Lunch,
        Dinner: foodAPI.Dinner,
        Oil: foodAPI.Oil,
        Fruit: foodAPI.Fruit,
        Water: foodAPI.Water,
      },
    },
  ];

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridDay"
      events={events}
      views={{
        dayGrid: {
          titleFormat: (date) => {
            const getWeekDay = date.date.marker.getDay();
            return `${date.date.month + 1}月${date.date.day}日(${
              weekDays[getWeekDay]
            })`;
          },
        },
      }}
      dayHeaders={false}
      eventContent={() => renderEventContent(events[0], tab, setTab)}
      headerToolbar={{
        start: "prev",
        center: "title",
        end: "next",
      }}
      height="100%"
    />
  );
};

export default DailyDietary;

function renderEventContent(
  event: Event,
  tab: Tab,
  setTab: (tab: Tab) => void
) {
  function changeTab(tab: Tab) {
    setTab(tab);
  }

  const filterFoodIcons = foodIcons.filter((foodIcon) =>
    foodIcon.showTab.includes(tab.enName)
  );

  const fetchData = event.extendedProps;

  return (
    <div>
      {/* {event.tab} */}
      <ul className="flex justify-center gap-12 mt-12">
        {tabs.map((tab, index) => {
          return (
            <li key={index}>
              <button type="button" onClick={() => changeTab(tab)}>
                {tab.name}
              </button>
            </li>
          );
        })}
      </ul>
      <ul className="flex gap-[90px] text-black-950">
        {filterFoodIcons.map((filterFoodIcon, index) => {
          return (
            <li key={index}>
              <Image
                src={`/images/dashboard/dietary-record/foods/${filterFoodIcon.PC}`}
                alt={filterFoodIcon.PC}
                width={75}
                height={75}
              />
              <p className="text-center mt-6">{filterFoodIcon.name}</p>

              <p>
                {fetchData[filterFoodIcon.enName]
                  ? fetchData[filterFoodIcon.enName]
                  : fetchData[tab.enName][filterFoodIcon.enName]
                  ? fetchData[tab.enName][filterFoodIcon.enName]
                  : fetchData[tab.enName][`${filterFoodIcon.enName}Sum`]}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// a custom render function

// const img = eventInfo.event.extendedProps.picture;
// console.log(eventInfo.event.start);
{
  /* <b>{eventInfo.timeText}</b> */
}
{
  /* <i>{eventInfo.event.title}</i> */
}

{
  /* <i>
            {eventInfo.event.title} {eventInfo.event.extendedProps.fuilfillQty}/
            {eventInfo.event.extendedProps.targetQty}
          </i> */
}

// <div>
//   {fetchData.tab}
//   <ul className="flex justify-center gap-12 mt-12">
//     {tabs.map((tab, index) => {
//       return (
//         <li key={index}>
//           <button type="button">{tab.name}</button>
//         </li>
//       );
//     })}
//   </ul>
//   <ul className="flex gap-[90px] text-black-950">
//     {foodIcons.map((foodIcon, index) => {
//       // if (fetchData[index].Breakfast !== undefined) {
//       //   console.log(fetchData[index].Breakfast.Protein);
//       // }
//       return (
//         <li key={index}>
//           <Image
//             src={`/images/dashboard/dietary-record/foods/${foodIcon.PC}`}
//             alt={foodIcons.PC}
//             width={75}
//             height={75}
//           />
//           <p className="text-center mt-6">{foodIcon.name}</p>

//           <p>
//             {fetchData[index + 1][foodIcon.enName]
//               ? fetchData[index + 1][foodIcon.enName]
//               : undefined}
//           </p>
//         </li>
//       );
//     })}
//   </ul>
// </div>
