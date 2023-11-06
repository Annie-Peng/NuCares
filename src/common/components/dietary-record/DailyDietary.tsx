import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Image from "next/image";
import { FC, useState, MouseEvent, Fragment, useEffect } from "react";
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
import useUploadFile, {
  HandleUploadFileProps,
  InitFileSrcFoodType,
} from "@/common/hooks/useUploadFile";
import { DailyDietaryType } from "@/common/redux/features/dietary-record/dailyDietary";
import turnStringFormat from "@/common/helpers/turnStringFormat";
import {
  useDailyDietaryGetApiQuery,
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

interface HandleSubmitProps {
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
  const [currentDate, setCurrentDate] = useState("");
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

  const { isLoading, error, data } = useDailyDietaryGetApiQuery({
    Token: Token,
    CourseId: CourseId,
    Date: currentDate,
  });

  const [dailyDietaryMealTimePutApi] = useDailyDietaryMealTimePutApiMutation();
  const [dailyDietaryOtherPutApi] = useDailyDietaryOtherPutApiMutation();

  if (isLoading || !data) {
    return <p>Data is Loading</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  const dailyDietaryData = data.Data;

  console.log(dailyDietaryData);

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

  const handleSubmit = async ({
    event,
    tab,
    UserCurrentStatus,
  }: HandleSubmitProps): Promise<void> => {
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

      if (edit[tab.enName]) {
        try {
          const formData = new FormData(event.target);

          const body = tellMeal(tab.enName, formData);

          if (["Breakfast", "Lunch", "Dinner"].includes(tab.enName)) {
            const result = await dailyDietaryMealTimePutApi({
              Token,
              CourseId,
              DailyLogId: events[0].extendedProps[tab.enName].DailyLogId,
              MealTime: events[0].tab,
              DailyMealTimeId:
                events[0].extendedProps[tab.enName].DailyMealTimeId,
              body,
            }).unwrap();

            console.log(result);
          } else {
            const result = await dailyDietaryOtherPutApi({
              Token,
              CourseId,
              DailyLogId: dailyDietaryData.DailyLogId,
              body,
            }).unwrap();

            console.log(result);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const tellMeal = (tab, formData) => {
    let obj = {};
    for (let [key, value] of formData.entries()) {
      if (key === "MealImgUrl" || key === `${tab}ImgUrl`) {
        obj[key] = fileSrc[tab].fetch;
      } else {
        obj[key] = value;
      }
    }
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
        validRange={{
          start: "2023-11-06",
          end: "2023-11-08",
        }}
        datesSet={(dateInfo) => {
          const today = new Date(dateInfo.start);
          const todayString = toYMD(today);
          setCurrentDate(todayString);
          // // 计算前一天的日期
          // const prevDate = new Date(dateInfo.start);
          // prevDate.setDate(prevDate.getDate() - 1);
          // const prevDateString = toYMD(prevDate);
          // // 计算后一天的日期
          // const nextDate = new Date(dateInfo.start);
          // nextDate.setDate(nextDate.getDate() + 1);
          // const nextDateString = toYMD(nextDate);
          // console.log(prevDateString); // 显示前一天的日期，格式为YYYY/MM/DD
          // console.log(nextDateString); // 显示后一天的日期，格式为YYYY/MM/DD
          // setNearDates({ prev: prevDateString, next: nextDateString });
        }}
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
              const otherTabDes = `${[tab.enName]}Description`;
              const otherTabImg = `${[tab.enName]}ImgUrl`;

              return (
                <Fragment key={index}>
                  <label
                    htmlFor={item.name}
                    className="h-[150px] w-[220px] relative"
                  >
                    <Image
                      src={
                        fetchData[tab.enName].MealImgUrl ||
                        dailyDietaryData[otherTabImg] ||
                        fileSrc[tab.enName as keyof InitFileSrcFoodType].file ||
                        "/images/dashboard/dietary-record/upload-photo.svg"
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
                    />
                  ) : (
                    <p>
                      {fetchData[tab.enName].MealDescription ||
                        dailyDietaryData[otherTabDes]}
                    </p>
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

function toYMD(date) {
  const year = date.getFullYear();
  // 由于getMonth()返回0-11，表示1-12月，所以需要+1
  // 然后用`String.prototype.padStart()`确保月和日都是两位数字
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}/${month}/${day}`;
}
