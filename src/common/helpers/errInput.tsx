import { FormInput } from "@/modules/register/RegisterForm";
import { UseFormSetError } from "react-hook-form";

import { RegisterApiErrMsgProps } from "../lib/dashboard/errMsg/registerApiErrMsg";
interface Inputs {
  name: string;
  message: string;
}
const errInput = (
  api: RegisterApiErrMsgProps,
  names: [string, string][],
  statusCode: number,
  setError: UseFormSetError<FormInput>
) => {
  let inputs: Inputs[] = [];
  names.forEach((name) => {
    inputs.push({
      name: name[0],
      message: api[name[0]]?.[statusCode][name[1]],
    });
  });

  inputs.forEach(({ name, message }) => {
    setError(name, { message });
  });
};

export default errInput;
