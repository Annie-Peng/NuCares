import studentTabs from "@/common/lib/dashboard/studentTabs";
import Link from "next/link";
import Image from "next/image";
import logoutTab from "@/common/lib/dashboard/logoutTab";
import changeIdentity from "@/common/lib/dashboard/changeIdentity";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { FC } from "react";
import useResize from "@/common/hooks/useResize";

interface StudentDropdownProps {
  IsNutritionist?: string;
}

const StudentDropdown: FC<StudentDropdownProps> = ({ IsNutritionist }) => {
  const router = useRouter();

  function handleChangeID() {
    setCookie("UserCurrentStatus", "nu");
    router.push("/dashboard/nutritionist/student-list");
  }

  const isMobile = useResize();

  const newStudentTabs = studentTabs.map((studentTab, index) => {
    if (studentTab.tab === "收藏營養師" && isMobile) return;
    return studentTab;
  });

  console.log(newStudentTabs);

  return (
    <div className="cusDropdown">
      <div className="flex gap-4">
        <span className="cusSIdentity py-4 text-center w-full rounded-[45px]">
          一般會員
        </span>
        {IsNutritionist === "true" && (
          <button type="button" onClick={handleChangeID}>
            <Image
              src={`${changeIdentity.iconURL}.svg`}
              width={27}
              height={27}
              alt={changeIdentity.iconName}
            />
          </button>
        )}
      </div>
      <ul className="flex flex-col my-8 gap-16">
        {newStudentTabs.map((studentTab, index) => {
          if (!studentTab) return;
          return (
            <li key={index}>
              <Link href={studentTab.tabURL} className="block py-8">
                <div className="inline-block align-middle mr-6">
                  <Image
                    src={`${studentTab.iconURL}.svg`}
                    width={20}
                    height={20}
                    alt={studentTab.iconName}
                  />
                </div>
                <span className="align-middle">{studentTab.tab}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="pt-16 border-t w-full flex justify-center gap-6"
      >
        <Image
          src={`${logoutTab.iconURL}.svg`}
          width={20}
          height={20}
          alt={logoutTab.iconName}
        />
        <span className="align-middle">{logoutTab.tab}</span>
      </button>
    </div>
  );
};

export default StudentDropdown;
