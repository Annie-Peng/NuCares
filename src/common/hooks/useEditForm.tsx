import { FC, Fragment, useState, Dispatch, SetStateAction } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { ComponentType } from "@/types/interface";
import Input from "../components/Input";
import Select from "../components/Select";
import Textarea from "../components/Textarea";
import InputImage from "../components/InputImage";
import InputSwitch from "../components/InputSwitch";
import InputButtonGroup from "../components/InputButtonGroup";

export interface InitialStateType {
  [key: string]: string | string[] | boolean;
}

interface useEditFormProps {
  initialState: InitialStateType;
  formData: ComponentType[];
  putApi: any;
  putApiData: string | Record<string, string | number> | string;
}

interface JSXEditFormProps {
  initialState: InitialStateType;
  formData: ComponentType[];
  putApi: any;
  putApiData: string | Record<string, string | number>;
  setEdit: Dispatch<SetStateAction<boolean>>;
}

const JSXEditForm: FC<JSXEditFormProps> = ({
  setEdit,
  initialState,
  putApi,
  putApiData,
  formData,
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
      setEdit(false);
    } catch (error) {
      console.log(error);
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
      <div className="text-center mt-[60px] flex flex-col gap-10 justify-center items-center lg:flex-row">
        <button
          type="button"
          className="btn-cusWritePrimary !py-8 w-full lg:w-[278px] order-2 lg:order-1"
          onClick={() => setEdit(false)}
        >
          放棄變更
        </button>
        <button
          type="submit"
          className="btn-cusWriteSecondary !py-8 w-full lg:w-[278px] order-1 lg:order-2"
        >
          儲存
        </button>
      </div>
    </form>
  );
};

const useEditForm = ({
  initialState,
  formData,
  putApi,
  putApiData,
}: useEditFormProps) => {
  const [edit, setEdit] = useState<boolean>(false);

  const renderEditForm = (
    <JSXEditForm
      setEdit={setEdit}
      initialState={initialState}
      putApi={putApi}
      putApiData={putApiData}
      formData={formData}
    />
  );

  return { edit, setEdit, renderEditForm };
};

export default useEditForm;
