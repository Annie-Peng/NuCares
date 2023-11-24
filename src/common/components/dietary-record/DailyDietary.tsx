import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Image from "next/legacy/image";
import { FC, useState, FormEvent, Fragment, useRef } from "react";
import dailyDietaryInput from "@/common/lib/dashboard/dailyDietaryInput";
import { showModal } from "@/common/redux/features/showModal";
import { useDispatch } from "react-redux";
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
import turnDateFormat, {
  turnDateDashFormat,
  turnDateFormatOneMoreDay,
} from "@/common/helpers/turnDateFormat";
import { commonErrMsgClass } from "@/common/lib/dashboard/errMsg/commonErrMsg";

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
  [key: string]: boolean;
}

interface HandleSubmitProps {
  event: FormEvent<HTMLFormElement>;
  tab: Tab;
  UserCurrentStatus: string;
}

interface ObjType {
  [key: string]: any;
}

// interface MealType {
//   MealImgUrl: string;
//   MealDescription: string;
//   Starch: number;
//   Protein: number;
//   Vegetable: number;
// }

// interface FormDataRefType {
//   Breakfast: MealType;
//   Lunch: MealType;
//   Dinner: MealType;
//   Oil: number;
//   OilDescription: string;
//   OilImgUrl: string;
//   Fruit: number;
//   FruitDescription: string;
//   FruitImgUrl: string;
//   Water: number;
//   WaterDescription: string;
//   WaterImgUrl: string;
// }

interface FormDataRefType {
  [key: string]: string | number | Record<string, string | number> | any;
}

const DailyDietary: FC<DailyDietaryProps> = ({
  isMobile,
  Token,
  CourseId,
  UserCurrentStatus,
}) => {
  const today = turnDateDashFormat(new Date());

  const dispatch = useDispatch();
  const [currentDate, setCurrentDate] = useState(today);
  const [tab, setTab] = useState<Tab>(tabs[0]);
  const [edit, setEdit] = useState<EditType>({
    Breakfast: false,
    Lunch: false,
    Dinner: false,
    Oil: false,
    Fruit: false,
    Water: false,
  });

  const formDataRef = useRef<FormDataRefType>({
    Breakfast: {
      MealImgUrl: "",
      MealDescription: "",
      Starch: 0,
      Protein: 0,
      Vegetable: 0,
    },
    Lunch: {
      MealImgUrl: "",
      MealDescription: "",
      Starch: 0,
      Protein: 0,
      Vegetable: 0,
    },
    Dinner: {
      MealImgUrl: "",
      MealDescription: "",
      Starch: 0,
      Protein: 0,
      Vegetable: 0,
    },
    Oil: 0,
    OilDescription: "",
    OilImgUrl: "",
    Fruit: 0,
    FruitDescription: "",
    FruitImgUrl: "",
    Water: 0,
    WaterDescription: "",
    WaterImgUrl: "",
  });

  const initFileSrc = {
    Breakfast: { fetch: "", file: "" },
    Lunch: { fetch: "", file: "" },
    Dinner: { fetch: "", file: "" },
    Oil: { fetch: "", file: "" },
    Fruit: { fetch: "", file: "" },
    Water: { fetch: "", file: "" },
  };

  const [fileSrc, setFileSrc, handleUploadFile, apiErr] = useUploadFile({
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

  const currentTab = tab.enName;

  const events: Event[] = [
    {
      start: String(dailyDietaryData.MenuDate).replaceAll("/", "-"),
      tab: currentTab,
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
      dispatch(
        showModal([
          "showMenuEditModal",
          {
            Token,
            CourseId: dailyDietaryData.CourseId,
            DailyCourseMenuId: dailyDietaryData.DailyCourseMenuId,
          },
        ])
      );
      return;
    }

    if (currentTab === "All") {
      return;
    } else {
      setEdit({
        ...edit,
        [currentTab]: !edit[currentTab as keyof EditType],
      });

      if (edit[currentTab as keyof EditType]) {
        try {
          const formData = new FormData(event.target as HTMLFormElement);

          const body = tellMeal(currentTab, formData);

          if (["Breakfast", "Lunch", "Dinner"].includes(currentTab)) {
            const result = await dailyDietaryMealTimePutApi({
              Token,
              CourseId,
              DailyLogId: events[0].extendedProps[currentTab].DailyLogId,
              MealTime: events[0].tab,
              DailyMealTimeId:
                events[0].extendedProps[currentTab].DailyMealTimeId,
              body,
            }).unwrap();
          } else {
            const result = await dailyDietaryOtherPutApi({
              Token,
              CourseId,
              DailyLogId: dailyDietaryData.DailyLogId,
              body,
            }).unwrap();
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const tellMeal = (tab: string, formData: FormData) => {
    let obj: ObjType = {};

    formData.forEach((value, key) => {
      if (key === "MealImgUrl" || key === `${tab}ImgUrl`) {
        obj[key] = fileSrc[tab as keyof InitFileSrcFoodType]?.fetch;
      } else {
        obj[key] = value;
      }
    });
    return obj;
  };

  return (
    <form onSubmit={(e) => handleSubmit({ event: e, tab, UserCurrentStatus })}>
      <button
        type="submit"
        className="hidden lg:block absolute -top-[40px] right-16 w-[28px] h-[28px]"
      >
        {edit[currentTab] ? (
          <Image
            src="/images/dashboard/dietary-record/save.svg"
            layout="fixed"
            width={28}
            height={28}
            alt="save"
          />
        ) : (
          <Image
            src="/images/dashboard/dietary-record/edit.svg"
            layout="fixed"
            width={28}
            height={28}
            alt="edit"
          />
        )}
      </button>
      <button
        type="button"
        className="hidden absolute -top-[40px] left-16 w-[28px] h-[28px] lg:block"
      >
        <Image
          src="/images/dashboard/dietary-record/hint.svg"
          layout="fixed"
          width={28}
          height={28}
          alt="hint"
          onClick={() =>
            dispatch(showModal(["showFoodDetailModal", foodIcons]))
          }
        />
      </button>
      <button
        type="button"
        onClick={() => dispatch(showModal(["showFoodDetailModal", foodIcons]))}
        className="block absolute right-30 -top-[52px] w-[36px] h-[36px] lg:hidden"
      >
        <Image
          src="/images/dashboard/dietary-record/hint-primary.svg"
          layout="fixed"
          width={36}
          height={36}
          alt="hint-primary.svg"
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
            currentTab,
            UserCurrentStatus,
            Token,
            edit,
            fileSrc,
            setFileSrc,
            handleUploadFile,
            dailyDietaryData,
            isMobile,
            formDataRef,
            apiErr
          )
        }
        validRange={{
          start: dailyDietaryData.CourseStartDate.replaceAll("/", "-"),
          end: turnDateFormatOneMoreDay(
            dailyDietaryData.CourseEndDate.replaceAll("/", "-")
          ),
        }}
        datesSet={(dateInfo) => {
          const today = new Date(dateInfo.start);
          const todayString = turnDateFormat(today);
          setCurrentDate(todayString);
        }}
        headerToolbar={{
          start: "prev",
          center: "title",
          end: "next",
        }}
        height="auto"
      />
    </form>
  );
};

export default DailyDietary;

function renderEventContent(
  event: Event,
  tab: Tab,
  setTab: (tab: Tab) => void,
  currentTab: string,
  UserCurrentStatus: string,
  Token: string,
  edit: EditType,
  fileSrc: InitFileSrcFoodType,
  setFileSrc: (fileSrc: InitFileSrcFoodType) => void,
  handleUploadFile: (onChange: HandleUploadFileProps) => void,
  dailyDietaryData: DailyDietaryType,
  isMobile: boolean,
  formDataRef: FormDataRefType,
  apiErr: Record<string, string>
) {
  function changeTab(tab: Tab) {
    setTab(tab);
  }

  const filterFoodIcons = foodIcons.filter((foodIcon) =>
    foodIcon.showTab.includes(currentTab)
  );

  const fetchData = event.extendedProps;

  const newEdit = edit[currentTab as keyof EditType];

  return (
    <>
      {/* {event.tab} */}
      <ul className="overflow-x-auto no-scrollbar whitespace-nowrap bg-primary-100 text-14 gap-28 flex text-primary-500 lg:text-16 lg:gap-32 lg:bg-white lg:justify-center">
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

      <div
        className={`mb-[100px] flex flex-col min-h-[154px] mt-28 mx-20 p-20 items-center lg:flex-row lg:border-none lg:p-0 lg:mb-8 ${
          currentTab !== "All" && "border border-primary-400 rounded-15"
        }`}
      >
        {currentTab !== "All" && (
          <div
            className={`w-full self-stretch  flex flex-wrap gap-8 lg:mr-12 lg:w-[65%] lg:py-8 lg:pl-8 ${
              edit[currentTab as keyof EditType] &&
              !isMobile &&
              'after:content-[""] after:top-0 after:bottom-0 after:ml-12 after:block after:bg-blue-300 lg:after:w-[1px]'
            }`}
          >
            {dailyDietaryInput[currentTab].map((item, index) => {
              const otherTabDes = `${[currentTab]}Description`;
              const otherTabImg = `${[currentTab]}ImgUrl`;
              let showImgErrMsg = apiErr[currentTab];

              return (
                <Fragment key={index}>
                  <label
                    htmlFor={item.name}
                    className="h-[227px] w-full relative lg:w-[220px] lg:h-full"
                  >
                    <Image
                      src={
                        fileSrc[currentTab as keyof InitFileSrcFoodType]
                          ?.file ||
                        fetchData[currentTab].MealImgUrl ||
                        dailyDietaryData[otherTabImg] ||
                        "/images/dashboard/dietary-record/upload-photo.svg"
                      }
                      layout="fill"
                      alt={item.name}
                      className="rounded-5 object-cover"
                    />
                    {newEdit && (
                      <input
                        id={item.name}
                        name={item.name}
                        type="file"
                        accept={item.accept}
                        className="hidden"
                        onChange={(e) =>
                          handleUploadFile({
                            e: e,
                            tab: currentTab,
                            Token: Token,
                          })
                        }
                      />
                    )}
                    {showImgErrMsg && (
                      <p
                        className={`!mt-0 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-white bg-opacity-80 ${commonErrMsgClass}`}
                      >
                        {apiErr[currentTab]}
                      </p>
                    )}
                  </label>
                  {newEdit ? (
                    <textarea
                      name={item.description}
                      className="h-[117px] w-[270px] overflow-y-scroll lg:h-full"
                      placeholder="今天吃了什麼食物？"
                      defaultValue={
                        fetchData[currentTab].MealDescription ||
                        dailyDietaryData[otherTabDes]
                      }
                    />
                  ) : (
                    <p className="min-h-[117px] w-[270px] px-12 py-10 lg:h-full">
                      {fetchData[currentTab].MealDescription ||
                        dailyDietaryData[otherTabDes]}
                    </p>
                  )}
                </Fragment>
              );
            })}
          </div>
        )}
        <ul
          className={`mx-auto flex justify-center text-black-950 gap-y-20 lg:flex-nowrap ${
            currentTab === "All"
              ? "flex-wrap lg:gap-x-[45px]"
              : "flex-nowrap gap-x-26 lg:gap-x-8"
          }`}
        >
          {filterFoodIcons.map((filterFoodIcon, index) => {
            //飲食達成icon切換
            const sumAchieved = `${[filterFoodIcon.enName]}SumAchieved`;
            const achieved = `${[filterFoodIcon.enName]}Achieved`;
            let showFoodIcon = filterFoodIcon.PC;

            if (currentTab !== "All") {
              dailyDietaryData[achieved] &&
                (showFoodIcon = filterFoodIcon.completed);
              (dailyDietaryData[currentTab] as any)[achieved] &&
                (showFoodIcon = filterFoodIcon.completed);
            } else {
              dailyDietaryData[sumAchieved] &&
                (showFoodIcon = filterFoodIcon.completed);
            }

            let userInputMeal = "";
            if (fetchData[filterFoodIcon.enName]) {
              userInputMeal = fetchData[filterFoodIcon.enName]?.split(" ");
            } else {
              userInputMeal =
                fetchData[currentTab][filterFoodIcon.enName]?.split(" ");
            }

            return (
              <li
                key={index}
                className={`text-center ${
                  currentTab === "All" && "w-1/2"
                } mt-8 lg:w-auto lg:mt-0`}
              >
                <Image
                  src={`/images/dashboard/dietary-record/foods/${showFoodIcon}`}
                  alt={filterFoodIcon.PC}
                  layout="fixed"
                  width={currentTab === "All" ? "75" : "48"}
                  height={currentTab === "All" ? "75" : "48"}
                  className="mx-auto"
                />
                <p className="mt-6">{filterFoodIcon.name}</p>
                <p className="mt-8 w-[70px] h-[42px] mx-auto lg:w-[78px]">
                  {newEdit ? (
                    <input
                      name={filterFoodIcon.enName}
                      placeholder="份數"
                      className="w-full text-center"
                      type="number"
                      defaultValue={userInputMeal[0]}
                    />
                  ) : // 顯示 "紀錄/菜單"
                  fetchData[filterFoodIcon.enName] ? (
                    fetchData[filterFoodIcon.enName]
                  ) : fetchData[currentTab][filterFoodIcon.enName] ? (
                    fetchData[currentTab][filterFoodIcon.enName]
                  ) : (
                    fetchData[currentTab][`${filterFoodIcon.enName}Sum`]
                  )}
                </p>
              </li>
            );
          })}
        </ul>
        {UserCurrentStatus === "nu" && currentTab === "All" && (
          <button
            type="submit"
            className="btn-cusEditPrimary py-8 w-[240px] block mx-auto mt-32 lg:hidden"
          >
            <Image
              src="/images/dashboard/dietary-record/clip.svg"
              layout="fixed"
              width={20}
              height={20}
              alt="edit"
              className="mx-auto"
            />
          </button>
        )}
        {UserCurrentStatus === "user" &&
          currentTab !== "All" &&
          (newEdit ? (
            <button
              type="submit"
              className="btn-cusSecondary py-8 w-[240px] block mx-auto mt-32 lg:hidden"
            >
              儲存
            </button>
          ) : (
            <button
              type="submit"
              className="btn-cusEditPrimary py-8 w-[240px] block mx-auto mt-32 lg:hidden"
            >
              <Image
                src="/images/dashboard/dietary-record/clip.svg"
                layout="fixed"
                width={20}
                height={20}
                alt="edit"
                className="mx-auto"
              />
            </button>
          ))}
      </div>
    </>
  );
}
