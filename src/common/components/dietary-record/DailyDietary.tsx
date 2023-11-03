import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Image from "next/image";
import { FC, useState, MouseEvent, Fragment, useEffect } from "react";
import Input from "../Input";
import dailyDietaryInput from "@/common/lib/dashboard/dailyDietaryInput";
import { showModal } from "@/common/redux/features/showModal";
import { useDispatch, useSelector } from "react-redux";
import {
  Tab,
  foodIcons,
  tabs,
  weekDays,
  Event,
} from "@/common/lib/dashboard/dietary-record/foodMenu";
import { interactionSettingsStore } from "@fullcalendar/core/internal.js";
import axios from "axios";
import useUploadFile, {
  HandleUploadFileProps,
  InitFileSrcFoodType,
  UseUploadFileProps,
} from "@/common/hooks/useUploadFile";
import {
  DailyDietaryType,
  selectDailyDietary,
} from "@/common/redux/features/dietary-record/dailyDietary";
import turnStringFormat from "@/common/helpers/turnStringFormat";
import {
  useDailyDietaryMealTimePutApiMutation,
  useDailyDietaryOtherPutApiMutation,
} from "@/common/redux/service/courseRecord";

interface DailyDietaryProps {
  isMobile: boolean;
  Token: string;
  CourseId: string;
  UserCurrentStatus: string;
}

interface EditType {
  Breakfast: boolean;
  Lunch: boolean;
  Dinner: boolean;
  Oil: boolean;
  Fruit: boolean;
  Water: boolean;
}

interface HandleEditClickProps {
  event: MouseEvent<HTMLButtonElement>;
  tab: Tab;
  fetchData: {
    [key: string]: any | string;
  };
  UserCurrentStatus: string;
}

const DailyDietary: FC<DailyDietaryProps> = ({
  isMobile,
  Token,
  CourseId,
  UserCurrentStatus,
}) => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState<Tab>(tabs[0]);
  const [edit, setEdit] = useState<EditType>({
    Breakfast: false,
    Lunch: false,
    Dinner: false,
    Oil: false,
    Fruit: false,
    Water: false,
  });

  const initFileSrc = {
    Breakfast: { fetch: "", file: "" },
    Lunch: { fetch: "", file: "" },
    Dinner: { fetch: "", file: "" },
    Oil: { fetch: "", file: "" },
    Fruit: { fetch: "", file: "" },
    Water: { fetch: "", file: "" },
  };

  const [fileSrc, setFileSrc, handleUploadFile] = useUploadFile({
    data: tab,
    Token,
    initFileSrc,
  });

  const [dailyDietaryMealTimePutApi] = useDailyDietaryMealTimePutApiMutation();
  const [dailyDietaryOtherPutApi] = useDailyDietaryOtherPutApiMutation();

  const dailyDietaryData = useSelector(selectDailyDietary);

  const events: Event[] = [
    {
      start: String(dailyDietaryData.MenuDate).replaceAll("/", "-"),
      tab: tab.enName,
      extendedProps: {
        All: turnStringFormat(dailyDietaryData, "mealSlashFormat"),
        Breakfast: turnStringFormat(
          dailyDietaryData.Breakfast,
          "mealSlashFormat"
        ),
        Lunch: turnStringFormat(dailyDietaryData.Lunch, "mealSlashFormat"),
        Dinner: turnStringFormat(dailyDietaryData.Dinner, "mealSlashFormat"),
        Oil: turnStringFormat(dailyDietaryData.Oil, "otherSlashFormat"),
        Fruit: turnStringFormat(dailyDietaryData.Fruit, "otherSlashFormat"),
        Water: turnStringFormat(dailyDietaryData.Water, "otherSlashFormat"),
      },
    },
  ];

  // const handleEditClick = async ({
  //   event,
  //   tab,
  //   UserCurrentStatus,
  // }: HandleEditClickProps): void => {
  //   event.preventDefault();
  //   if (UserCurrentStatus === "nu") {
  //     dispatch(showModal(["showMenuEditModal", 0]));
  //     return;
  //   }

  //   if (tab.enName === "All") {
  //     return;
  //   } else {
  //     try {
  //       setEdit({
  //         ...edit,
  //         [tab.enName]: !edit[tab.enName as keyof EditType],
  //       });
  //     } catch (error) {}
  //   }
  // };

  const handleSubmit = async ({
    event,
    tab,
    UserCurrentStatus,
  }: HandleEditClickProps): void => {
    event.preventDefault();

    if (UserCurrentStatus === "nu") {
      dispatch(showModal(["showMenuEditModal", 0]));
      return;
    }

    if (tab.enName === "All") {
      return;
    } else {
      setEdit({
        ...edit,
        [tab.enName]: !edit[tab.enName as keyof EditType],
      });
      const formData = new FormData(event.target);

      const body = tellMeal(tab.enName, formData);
      console.log(body);
    }

    //   if (edit[tab.enName]) {
    //     try {
    //       const formData = new FormData(event.target);

    //       const body = tellMeal(tab.enName, formData);

    //       if (["Breakfast", "Lunch", "Dinner"].includes(tab.enName)) {
    //         const result = await dailyDietaryMealTimePutApi({
    //           Token,
    //           CourseId,
    //           DailyLogId: events[tab.enName].DailyLogId,
    //           MealTime: events[tab.enName].MealTime,
    //           DailyMealTimeId: events[tab.enName].DailyMealTimeId,
    //           body,
    //         });

    //         console.log(result);
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    // }
  };

  console.log(fileSrc);

  const tellMeal = (tab, formData) => {
    let obj = {};
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
      if (obj.ImgUrl || obj[`${tab.enName}ImgUrl`]) {
        console.log(fileSrc);
        //   return (obj.ImgUrl = fileSrc[tab.enName].fetch);
      }
      // obj[key] = value;
    }

    console.log(obj);

    return obj;
  };

  return (
    <form onSubmit={(e) => handleSubmit({ event: e, tab, UserCurrentStatus })}>
      <button
        type="submit"
        // onClick={(e) => handleEditClick({ event: e, tab, UserCurrentStatus })}
        className="hidden lg:block"
      >
        <Image
          src="/images/dashboard/dietary-record/edit.svg"
          width="28"
          height="28"
          alt="arrow"
          className="absolute top-12 right-16"
        />
      </button>
      <button type="button" className="hidden lg:block">
        <Image
          src="/images/dashboard/dietary-record/hint.svg"
          width="28"
          height="28"
          alt="arrow"
          className="absolute top-12 left-16 hidden lg:block"
        />
      </button>
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
        eventContent={() =>
          renderEventContent(
            events[0],
            tab,
            setTab,
            UserCurrentStatus,
            Token,
            edit,
            fileSrc,
            setFileSrc,
            handleUploadFile,
            dailyDietaryData
          )
        }
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "next",
        }}
        height={isMobile ? "550px" : "285px"}
      />
    </form>
  );
};

export default DailyDietary;

function renderEventContent(
  event: Event,
  tab: Tab,
  setTab: (tab: Tab) => void,
  UserCurrentStatus: string,
  Token: string,
  edit: EditType,
  fileSrc: InitFileSrcFoodType,
  setFileSrc: (fileSrc: InitFileSrcFoodType) => void,
  handleUploadFile: (onChange: HandleUploadFileProps) => void,
  dailyDietaryData: DailyDietaryType
) {
  function changeTab(tab: Tab) {
    setTab(tab);
  }

  const filterFoodIcons = foodIcons.filter((foodIcon) =>
    foodIcon.showTab.includes(tab.enName)
  );

  const fetchData = event.extendedProps;

  const newEdit = edit[tab.enName as keyof EditType];

  // const showImgUrl = `${tab.enName}ImgUrl`
  //   ? `${tab.enName}ImgUrl`
  //   : `${tab.enName[Image]}`;
  return (
    <>
      {/* {event.tab} */}
      <ul className="overflow-x-auto no-scrollbar bg-primary-100 text-14 gap-28 w-full flex justify-center text-primary-500 lg:text-16 lg:gap-32 lg:bg-white">
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

      <div className="flex min-h-[154px] mt-28 mb-8 mx-20 items-center">
        {UserCurrentStatus === "user" && tab.enName !== "All" && (
          <div className="w-[60%] self-stretch p-8 flex gap-8 mr-12">
            {dailyDietaryInput[tab.enName].map((item, index) => {
              // console.log(fileSrc);
              return (
                <Fragment key={index}>
                  <label
                    htmlFor={item.name}
                    className="h-[150px] w-[220px] relative"
                  >
                    <Image
                      // src={showImgUrl}
                      src={
                        `${
                          fileSrc[tab.enName as keyof InitFileSrcFoodType].file
                        }`
                          ? `${
                              fileSrc[tab.enName as keyof InitFileSrcFoodType]
                                .file
                            }`
                          : "/images/dashboard/dietary-record/upload-photo.svg"
                      }
                      fill
                      objectFit="cover"
                      alt={item.name}
                    />
                    {newEdit && (
                      <input
                        id={item.name}
                        name={item.name}
                        type="file"
                        accept={item.accept}
                        className="hidden"
                        onChange={(e) =>
                          handleUploadFile({ e: e, tab: tab, Token: Token })
                        }
                      />
                    )}
                  </label>
                  {newEdit ? (
                    <textarea
                      name={item.description}
                      className="w-[270px] h-full"
                      placeholder="今天吃了什麼食物？"
                    ></textarea>
                  ) : (
                    <p></p>
                  )}
                </Fragment>
              );
            })}
          </div>
        )}
        <ul
          className={`mx-auto flex flex-wrap justify-center text-black-950 gap-y-20 lg:flex-nowrap ${
            tab.enName === "All" ? "lg:gap-x-[45px]" : "lg:gap-x-8"
          }`}
        >
          {filterFoodIcons.map((filterFoodIcon, index) => {
            //飲食達成icon切換
            const sumAchieved = `${[filterFoodIcon.enName]}SumAchieved`;
            const achieved = `${[filterFoodIcon.enName]}Achieved`;
            let showFoodIcon = filterFoodIcon.PC;

            if (dailyDietaryData[sumAchieved]) {
              showFoodIcon = filterFoodIcon.completed;
            } else if (
              dailyDietaryData[tab.enName] &&
              (dailyDietaryData[tab.enName] as any)[achieved]
            ) {
              showFoodIcon = filterFoodIcon.completed;
            }

            return (
              <li key={index} className="text-center w-1/2 lg:w-auto">
                <Image
                  src={`/images/dashboard/dietary-record/foods/${showFoodIcon}`}
                  alt={filterFoodIcon.PC}
                  width={tab.enName === "All" ? "75" : "48"}
                  height={tab.enName === "All" ? "75" : "48"}
                  className="mx-auto"
                />
                <p className="mt-6">{filterFoodIcon.name}</p>
                <p className="mt-8 w-[78px] h-[42px]">
                  {newEdit ? (
                    <input
                      name={filterFoodIcon.enName}
                      placeholder="份數"
                      className="w-full text-center"
                      type="number"
                    />
                  ) : // 顯示 "紀錄/菜單"
                  fetchData[filterFoodIcon.enName] ? (
                    fetchData[filterFoodIcon.enName]
                  ) : fetchData[tab.enName][filterFoodIcon.enName] ? (
                    fetchData[tab.enName][filterFoodIcon.enName]
                  ) : (
                    fetchData[tab.enName][`${filterFoodIcon.enName}Sum`]
                  )}
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
