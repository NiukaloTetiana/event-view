import { FieldErrors, FormState } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  eventAdvertisementSource: string;
}

export const inputClass = (
  errors: FieldErrors<FormData>,
  dirtyFields: FormState<FormData>["dirtyFields"],
  fieldName: keyof FormData
): string => {
  const baseClass =
    "w-full h-[47px] bg-transparent border rounded-[12px] px-[18px] py-[14px] lg:py-[16px] font-normal text-[14px] lg:text-[16px] leading-[1.25] text-textColor placeholder:text-textColor hover:shadow-sm hover:border-accentColor focus:border-accentColor transition duration-300";
  const errorClass =
    "border-red-700 hover:border-red-700 focus:border-red-700 transition duration-300";
  const successClass =
    "border-green-700 hover:border-green-700 focus:border-green-700 transition duration-300";

  if (errors[fieldName]?.message && dirtyFields[fieldName]) {
    return `${baseClass} ${errorClass}`;
  }
  if (!errors[fieldName]?.message && dirtyFields[fieldName]) {
    return `${baseClass} ${successClass}`;
  }
  return baseClass;
};

export const renderMessage = (
  errors: FieldErrors<FormData>,
  dirtyFields: FormState<FormData>["dirtyFields"],
  fieldName: keyof FormData
) => {
  if (errors[fieldName] && dirtyFields[fieldName]) {
    return (
      <p className="text-red-700 text-message">{errors[fieldName]?.message}</p>
    );
  }
  if (!errors[fieldName] && dirtyFields[fieldName]) {
    return (
      <p className="text-green-700 text-message">
        {`${fieldName.charAt(0).toUpperCase()}${fieldName.slice(
          1
        )} is entered correctly`}
      </p>
    );
  }
  return null;
};
