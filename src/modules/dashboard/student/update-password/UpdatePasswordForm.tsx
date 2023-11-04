import Image from "next/image";
import { ComponentType } from "@/types/interface";
import Input from "@/common/components/Input";
import { useState } from "react";

const updatePasswordData: ComponentType[] = [
  {
    component: "input",
    name: "OldPassword",
    type: "password",
    required: true,
    hMsg: "舊密碼*",
    inputClass: "w-[360px]",
  },
  {
    component: "input",
    name: "NewPassword",
    type: "password",
    required: true,
    hMsg: "新密碼*",
    pMsg: "請輸入6-12字元英數組合",
    inputClass: "w-[360px]",
  },
  {
    component: "input",
    name: "RePassword",
    type: "password",
    required: true,
    hMsg: "舊密碼*",
    pMsg: "請輸入6-12字元英數組合",
    inputClass: "w-[360px]",
  },
];

const UpdatePasswordForm = () => {
  // const [showPassword, setShowPassword] = useState({
  //   OldPassword: false,
  //   NewPassword: false,
  //   RePassword: false,
  // });

  return (
    <form className="text-left flex flex-col cusDashboardInnerContainer">
      <ul>
        {updatePasswordData.map((data, index) => (
          <li key={index}>
            {data.component === "input" && (
              <Input
                name={data.name}
                type={data.type || "text"}
                labelClass={data.labelClass}
                inputClass={data.inputClass}
                required={data.required}
                hMsg={data.hMsg}
                pMsg={data.pMsg}
                id={data.id}
                accept={data.accept}
                disabled={data.disabled}
              >
                {data.children}
              </Input>
            )}
          </li>
        ))}
      </ul>
      <div className="text-center mt-[60px]">
        <button type="button" className="btn-cusWritePrimary !py-8 w-[278px]">
          放棄變更
        </button>
        <button
          type="submit"
          className="btn-cusWriteSecondary !py-8 w-[278px] ml-10"
        >
          儲存
        </button>
      </div>
    </form>
  );
};

export default UpdatePasswordForm;
