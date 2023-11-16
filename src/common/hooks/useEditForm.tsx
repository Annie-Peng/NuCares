import {
  FC,
  Fragment,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { ComponentType } from "@/types/interface";
import Input from "../components/Input";
import Select from "../components/Select";
import Textarea from "../components/Textarea";
import InputImage from "../components/InputImage";
import InputSwitch from "../components/InputSwitch";
import InputButtonGroup from "../components/InputButtonGroup";

export interface InitialStateType {
  [key: string]: string | string[] | boolean | number;
}

interface useEditFormProps {
  initialState: InitialStateType;
  formData: ComponentType[];
  putApi: any;
  putApiData: string | Record<string, string | number> | string;
  buttonJSX: ReactNode;
}

interface JSXEditFormProps {
  initialState: InitialStateType;
  formData: ComponentType[];
  putApi: any;
  putApiData: string | Record<string, string | number>;
  setEdit: Dispatch<SetStateAction<boolean>>;
  setApiReq: Dispatch<SetStateAction<any>>;
  buttonJSX: ReactNode;
}

const JSXEditForm: FC<JSXEditFormProps> = ({
  setEdit,
  initialState,
  putApi,
  putApiData,
  formData,
  setApiReq,
  buttonJSX,
}) => {
  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: initialState,
    criteriaMode: "all",
  });

  const onSubmit: SubmitHandler<InitialStateType> = async (body) => {
    try {
      const formData = {
        putApiData,
        body,
      };
      // console.log(formData);
      const result = await putApi(formData).unwrap();
      console.log(result);
      setApiReq(result);
      setEdit(false);
    } catch (error: any) {
      console.log(error);
      setApiReq(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formData.map((data, index) => (
        <Fragment key={index}>
          <Controller
            control={control}
            name={data.name}
            rules={{
              required: data.errMsg,
            }}
            render={({ field, fieldState: { invalid, error } }) => (
              <>
                {data.component === "input" && (
                  <Input
                    {...field}
                    name={data.name}
                    type={data.type || "text"}
                    labelClass={data.labelClass}
                    inputClass={data.inputClass}
                    required={data.required}
                    hMsg={data.hMsg}
                    pMsg={data.pMsg}
                    error={invalid}
                    errClass={data.errClass}
                    errMsg={data.errMsg}
                    onChange={field.onChange}
                  >
                    {data.children}
                  </Input>
                )}
                {data.component === "select" && (
                  <Select
                    {...field}
                    name={data.name}
                    required={data.required}
                    hMsg={data.hMsg || "title"}
                    pMsg={data.pMsg}
                    selectClass={data.selectClass}
                    labelClass={data.labelClass}
                    disabledOption={data.disabledOption || "請選擇"}
                    options={data.options || []}
                    imageClass={data.imageClass}
                    error={invalid}
                    errClass={data.errClass}
                    errMsg={data.errMsg}
                    onChange={field.onChange}
                  >
                    {data.children}
                  </Select>
                )}
                {data.component === "textarea" && (
                  <Textarea
                    {...field}
                    name={data.name}
                    labelClass={data.labelClass}
                    textareaClass={data.textareaClass}
                    required={data.required}
                    hMsg={data.hMsg}
                    pMsg={data.pMsg}
                    error={invalid}
                    errClass={data.errClass}
                    errMsg={data.errMsg}
                    onChange={field.onChange}
                  />
                )}
                {data.component === "inputImage" && (
                  <InputImage
                    chName={data.chName as string}
                    name={data.name}
                    type="file"
                    labelClass={data.labelClass}
                    inputClass={data.inputClass}
                    required={data.required}
                    hMsg={data.hMsg}
                    pMsg={data.pMsg}
                    id={data.id}
                    accept={data.accept}
                    Token={data.Token as string}
                    initFileSrc={data.initFileSrc}
                    setValue={setValue}
                    value={field.value as string}
                    error={invalid}
                    errMsg={data.errMsg}
                    errClass={data.errClass}
                  >
                    {data.children}
                  </InputImage>
                )}
                {data.component === "inputSwitch" && (
                  <InputSwitch
                    {...field}
                    name={data.name}
                    type="checkbox"
                    labelClass={data.labelClass}
                    inputClass={data.inputClass}
                    required={data.required}
                    hMsg={data.hMsg}
                    pMsg={data.pMsg}
                    error={invalid}
                    errClass={data.errClass}
                    errMsg={data.errMsg}
                    value={field.value as string}
                    onChange={field.onChange}
                    id={data.id}
                    accept={data.accept}
                  >
                    {data.children}
                  </InputSwitch>
                )}
                {data.component === "inputButtonGroup" && (
                  <InputButtonGroup
                    {...field}
                    name={data.name}
                    type="button"
                    labelClass={data.labelClass}
                    hMsg={data.hMsg}
                    pMsg={data.pMsg}
                    error={invalid}
                    errClass={data.errClass}
                    errMsg={data.errMsg}
                    value={field.value as string[]}
                    // onChange={field.onChange}
                    setValue={setValue}
                    buttonOptions={data.buttonOptions || []}
                    selectButtonClass={data.selectButtonClass}
                    unSelectButtonClass={data.unSelectButtonClass}
                    ulClass={data.ulClass as string}
                    liClass={data.liClass as string}
                  >
                    {data.children}
                  </InputButtonGroup>
                )}
              </>
            )}
          />
        </Fragment>
      ))}
      {buttonJSX}
    </form>
  );
};

const useEditForm = ({
  initialState,
  formData,
  putApi,
  putApiData,
  buttonJSX,
}: useEditFormProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [apiReq, setApiReq] = useState<any>();

  const renderEditForm = (
    <JSXEditForm
      setEdit={setEdit}
      initialState={initialState}
      putApi={putApi}
      putApiData={putApiData}
      formData={formData}
      setApiReq={setApiReq}
      buttonJSX={buttonJSX}
    />
  );

  return { edit, setEdit, renderEditForm, apiReq };
};

export default useEditForm;
