import dietaryRecordTabs from "@/common/lib/dashboard/dietary-record/dietaryRecordTabs";
import Image from "next/legacy/image";

interface MobileSidebarProps {
  showTab: number;
  setShowTab: (showTab: number) => void;
}

const MobileSidebar = ({ showTab, setShowTab }: MobileSidebarProps) => {
  return (
    <div className="bg-primary-400 fixed bottom-0 left-0 right-0 flex z-10 ">
      <ul className="h-[65px] flex justify-between items-center px-[25px] bg-primary-400 container lg:hidden">
        {dietaryRecordTabs.map((tab, index) => {
          return showTab === index + 1 ? (
            <li key={index}>
              <button
                type="button"
                className="text-center flex flex-col justify-center items-center relative cusMobileSidebarShadow rounded-[38px] w-[70px] h-[70px] -mt-[5px]"
                onClick={() => setShowTab(index + 1)}
              >
                <Image
                  src={`${tab.iconURL}-choose.svg`}
                  layout="fixed"
                  width={30}
                  height={30}
                  alt={tab.iconName}
                />
                <h4 className="text-14 text-primary-600">{tab.tab}</h4>
              </button>
            </li>
          ) : (
            <li key={index}>
              <button
                type="button"
                className="text-center flex flex-col justify-center items-center w-[70px] h-[70px]"
                onClick={() => setShowTab(index + 1)}
              >
                <Image
                  src={`${tab.iconURL}.svg`}
                  layout="fixed"
                  width={30}
                  height={30}
                  alt={tab.iconName}
                />
                <h4 className="text-14 text-white">{tab.tab}</h4>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileSidebar;
