import { FormInput } from "@/modules/register/RegisterForm";
import { Path, UseFormSetError } from "react-hook-form";

import { RegisterApiErrMsgProps } from "../lib/dashboard/errMsg/registerApiErrMsg";
interface Inputs {
  name: string;
  message: string;
}

const errInput = <
  T extends RegisterApiErrMsgProps,
  U extends Record<string, string>
>(
  api: T,
  names: [string, string][],
  statusCode: number,
  setError: UseFormSetError<U>
) => {
  let inputs: Inputs[] = [];
  names.forEach((name) => {
    inputs.push({
      name: name[0],
      message: api[name[0]]?.[statusCode][name[1]],
    });
  });

  inputs.forEach(({ name, message }) => {
    setError(name as Path<U>, { message });
  });
};

export default errInput;
