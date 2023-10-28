import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Image from "next/image";
import { useState } from "react";
import Input from "../Input";
import dailyDietaryInput from "@/common/lib/dashboard/dailyDietaryInput";

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

interface Meal {
  Id: string;
  DailyLogId: string;
  MealTime: string;
  MealDescription: string;
  Image: string;
  Starch: string;
  Protein: string;
  Vegetable: string;
  StarchAchieved: boolean;
  ProteinAchieved: boolean;
  VegetableAchieved: boolean;
}

interface FoodApi {
  [key: string]: string | boolean | Meal;
  Id: string;
  InsertDate: string;
  StarchSum: string;
  ProteinSum: string;
  VegetableSum: string;
  OilSum: string;
  FruitSum: string;
  WaterSum: string;
  StarchSumAchieved: boolean;
  ProteinSumAchieved: boolean;
  VegetableSumAchieved: boolean;
  OilSumAchieved: boolean;
  FruitSumAchieved: boolean;
  WaterSumAchieved: boolean;
  Breakfast: Meal;
  Lunch: Meal;
  Dinner: Meal;
  Fruit: string;
  FruitDescription: string;
  FruitImgUrl: string;
  Oil: string;
  OilDescription: string;
  OilImgUrl: string;
  Water: string;
  WaterDescription: string;
  WaterImgUrl: string;
}

const foodAPI: FoodApi = {
  Id: "1",
  InsertDate: "2023-10-27",
  StarchSum: "1, 3",
  ProteinSum: "2, 9",
  VegetableSum: "3, 6",
  OilSum: "1, 1",
  FruitSum: "2, 3",
  WaterSum: "3700, 2000",
  StarchSumAchieved: false,
  ProteinSumAchieved: false,
  VegetableSumAchieved: false,
  OilSumAchieved: true,
  FruitSumAchieved: true,
  WaterSumAchieved: false,
  Breakfast: {
    Id: "1",
    DailyLogId: "1",
    MealTime: "早餐",
    MealDescription: "吐司...",
    Image: "/upload/images/...",
    Starch: "BStarch,2",
    Protein: "BProtein,2",
    Vegetable: "BVegetable,2",
    StarchAchieved: false,
    ProteinAchieved: true,
    VegetableAchieved: true,
  },
  Lunch: {
    // {
    Id: "2",
    DailyLogId: "1",
    MealTime: "午餐",
    MealDescription: "吐司...",
    Image: "/upload/images/...",
    Starch: "LStarch,2",
    Protein: "LProtein,2",
    Vegetable: "LVegetable,2",
    StarchAchieved: true,
    ProteinAchieved: false,
    VegetableAchieved: true,
  },
  Dinner: {
    Id: "3",
    DailyLogId: "1",
    MealTime: "晚餐",
    MealDescription: "吐司...",
    Image: "/upload/images/...",
    Starch: "DStarch,2",
    Protein: "DProtein,2",
    Vegetable: "Degetable,2",
    StarchAchieved: true,
    ProteinAchieved: true,
    VegetableAchieved: false,
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
    completed: "starch-completed_PC.png",
    mobile: "starch_mobile.svg",
    name: "澱粉",
    enName: "Starch",
    showTab: ["All", "Breakfast", "Lunch", "Dinner"],
  },
  {
    PC: "protein_PC.svg",
    completed: "protein-completed_PC.png",
    mobile: "protein_mobile.svg",
    name: "蛋白質",
    enName: "Protein",
    showTab: ["All", "Breakfast", "Lunch", "Dinner"],
  },
  {
    PC: "vegetable_PC.svg",
    completed: "vegetable-completed_PC.png",
    mobile: "vegetable_mobile.svg",
    name: "蔬菜",
    enName: "Vegetable",
    showTab: ["All", "Breakfast", "Lunch", "Dinner"],
  },
  {
    PC: "oil_PC.svg",
    completed: "oil-completed_PC.png",
    mobile: "oil_mobile.svg",
    name: "油脂",
    enName: "Oil",
    showTab: ["All", "Oil"],
  },
  {
    PC: "fruit_PC.svg",
    completed: "fruit-completed_PC.png",
    mobile: "fruit_mobile.svg",
    name: "水果",
    enName: "Fruit",
    showTab: ["All", "Fruit"],
  },
  {
    PC: "water_PC.svg",
    completed: "water-completed_PC.png",
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
      height="285px"
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

  // console.log(filterFoodIcons);

  return (
    <>
      {/* {event.tab} */}
      <ul className="w-full flex justify-center gap-32 text-primary-500">
        {tabs.map((title, index) => {
          return (
            <li key={index}>
              <button
                type="button"
                onClick={() => changeTab(title)}
                className={`p-12 ${
                  title.name === tab.name &&
                  "pb-10 px-12 border-b-2 border-secondary-400 text-secondary-400"
                } `}
              >
                {title.name}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex min-h-[154px] mt-28 items-center">
        {tab.enName !== "All" && (
          <div className="w-[60%] self-stretch p-8 border border-primary-300 flex gap-8">
            {dailyDietaryInput[tab.enName].map((item) => (
              <>
                <Input name={item.name} type={item.type} />
                <textarea name="MealDescription"></textarea>
              </>
            ))}
          </div>
        )}
        <ul className="mx-auto flex justify-center gap-[45px] text-black-950">
          {filterFoodIcons.map((filterFoodIcon, index) => {
            //飲食達成icon切換
            const sumAchieved = `${[filterFoodIcon.enName]}SumAchieved`;
            const achieved = `${[filterFoodIcon.enName]}Achieved`;
            let showFoodIcon = filterFoodIcon.PC;

            if (foodAPI[sumAchieved]) {
              showFoodIcon = filterFoodIcon.completed;
            } else if (
              foodAPI[tab.enName] &&
              (foodAPI[tab.enName] as any)[achieved]
            ) {
              showFoodIcon = filterFoodIcon.completed;
            }

            return (
              <li key={index} className="text-center">
                <Image
                  src={`/images/dashboard/dietary-record/foods/${showFoodIcon}`}
                  alt={filterFoodIcon.PC}
                  width={75}
                  height={75}
                />
                <p className="mt-6">{filterFoodIcon.name}</p>
                <p className="mt-8">
                  {/* 顯示 "紀錄/菜單" */}
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
    </>
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
