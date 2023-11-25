import { Path, UseFormSetError } from "react-hook-form";
interface Inputs {
  name: string;
  message: string;
}

interface ErrInputStatusCodeType {
  [statusCode: number]: Record<string, string>;
}

export interface ErrInputProps {
  [key: string]: ErrInputStatusCodeType;
}

const errInput = <T extends ErrInputProps, U extends Record<string, string>>(
  api: T,
  names: [string, string][],
  statusCode: number,
  setError: UseFormSetError<U>
) => {
  let inputs: Inputs[] = [];
  names.forEach((name) => {
    inputs.push({
      name: name[0],
      message: api[name[0]]?.[statusCode][name[1]] || name[1],
    });
  });

  inputs.forEach(({ name, message }) => {
    setError(name as Path<U>, { message });
  });
};

export default errInput;
