import { FC } from "react";
import { Field, ErrorMessage } from "formik";
interface IInputField {
  fieldType: string;
  fieldLabel: string;
  fieldName: string;
  fieldPlaceholder: string;
  fieldStyle?: string;
  fieldMaxLength: number;
  isRequired: boolean;
}
const InputField: FC<IInputField> = ({
  fieldLabel,
  fieldName,
  fieldPlaceholder,
  fieldType,
  fieldStyle,
  fieldMaxLength,
  isRequired,
}) => {
  return (
    <fieldset className={`flex flex-col relative ${fieldStyle}`}>
      <label
        htmlFor={fieldName}
        className="font-large mb-1"
        style={{ fontSize: "16px" }}
      >
        {fieldLabel}
        {isRequired && (
          <span className="font-danger ml-0.5 text-[16px]">*</span>
        )}
      </label>
      <Field
        type={fieldType}
        placeholder={fieldPlaceholder}
        name={fieldName}
        id={fieldName}
        maxLength={fieldMaxLength}
        required={isRequired}
        aria-describedby={`${fieldName}-error`}
        className={"border-2 border-[#E4E7E9] p-1 font-small rounded-[3px]"}
        style={{ fontSize: "14px" }}
      />
      <ErrorMessage
        name={fieldName}
        id={`${fieldName}-error`}
        component="div"
        className="font-danger text-[12px] absolute bottom-[-16px] left-[0px]"
      />
    </fieldset>
  );
};

export default InputField;
