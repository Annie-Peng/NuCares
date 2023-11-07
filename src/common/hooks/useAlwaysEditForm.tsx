import { FC, Fragment, useState, Dispatch, SetStateAction } from "react";
import { Controller, useForm } from "react-hook-form";
import { ComponentType } from "@/types/interface";
import Input from "../components/Input";
import Select from "../components/Select";
import Textarea from "../components/Textarea";

interface useAlwaysEditFormProps {
  initialState: Record<string, string | number>;
  formData: ComponentType[];
  putApi: any;
  putApiData: Record<string, string | number>;
}

interface JSXAlwaysEditFormProps {
  initialState: Record<string, string | number>;
  formData: ComponentType[];
  putApi: any;
  putApiData: Record<string, string | number>;
}

const JSXAlwaysEditForm: FC<JSXAlwaysEditFormProps> = ({
  initialState,
  putApi,
  putApiData,
  formData,
}) => {
  const { control, handleSubmit } = useForm({
    defaultValues: initialState,
    criteriaMode: "all",
  });

  const onSubmit = async (body: Record<string, string | number>) => {
    try {
      const formData = {
        putApiData,
        body,
      };
      // console.log(formData);
      const result = await putApi(formData).unwrap();
      console.log(result);
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
                    id={data.id}
                    accept={data.accept}
                  >
                    {data.children}
                  </Input>
                )}
                {data.component === "select" && (
                  <Select
                    {...field}
                    name={data.name}
                    required={data.required}
                    hMsg={data.hMsg}
                    pMsg={data.pMsg}
                    selectClass={data.selectClass}
                    disabledOption={data.disabledOption || "請選擇"}
                    options={data.options || []}
                    imageClass={data.imageClass}
                    error={invalid}
                    errClass={data.errClass}
                    errMsg={data.errMsg}
                    onChange={field.onChange}
                  />
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
              </>
            )}
          />
        </Fragment>
      ))}
      <div className="text-center mt-[60px] flex flex-col gap-10 justify-center items-center lg:flex-row">
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

const useAlwaysEditForm = ({
  initialState,
  formData,
  putApi,
  putApiData,
}: useAlwaysEditFormProps) => {
  // console.log(initialState, formData, putApi, putApiData);

  const renderAlwaysEditForm = (
    <JSXAlwaysEditForm
      initialState={initialState}
      putApi={putApi}
      putApiData={putApiData}
      formData={formData}
    />
  );

  return { renderAlwaysEditForm };
};

export default useAlwaysEditForm;
