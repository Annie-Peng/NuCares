interface ErrInputProps {
  api: string;
  names: string[][];
  statusCode: number;
  setError: (name: string, error: { message: string }) => void;
}

interface Inputs {
  name: string;
  message: string;
}

const errInput = ({ api, names, statusCode, setError }: ErrInputProps) => {
  let inputs: Inputs[] = [];
  names.forEach((name) => {
    inputs.push({
      name: name[0],
      message: (api as any)[name[0]]?.[statusCode][name[1]],
    });
  });

  inputs.forEach(({ name, message }) => {
    setError(name, { message });
  });
};

export default errInput;
