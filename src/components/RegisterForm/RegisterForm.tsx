import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { format } from "date-fns";

import { ParticipantRegisterSchema } from "../../schemas";

interface IFormData {
  name: string;
  email: string;
  date: Date;
  eventAdvertisementSource: string;
}

export const RegisterForm = () => {
  const [isDateFocused, setIsDateFocused] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(ParticipantRegisterSchema),
    defaultValues: { eventAdvertisementSource: "Social media" },
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  const inputClass = (fieldName: keyof typeof dirtyFields) => {
    const baseClass =
      "w-full h-[47px] bg-transparent border rounded-[12px] px-[18px] py-[14px] lg:py-[16px] font-normal text-[14px] lg:text-[16px] leading-[1.25] text-darkColor placeholder:text-textColor hover:shadow hover:border-accentColor focus:border-accentColor transition duration-300";
    const errorClass =
      "border-red-700 hover:border-red-700 hover:shadow focus:border-red-700 transition duration-300";
    const successClass =
      "border-green-700 hover:border-green-700 hover:shadow focus:border-green-700 transition duration-300";

    if (errors[fieldName] && dirtyFields[fieldName]) {
      return `${baseClass} ${errorClass}`;
    }
    if (!errors[fieldName] && dirtyFields[fieldName]) {
      return `${baseClass} ${successClass}`;
    }
    return baseClass;
  };

  const renderMessage = (fieldName: keyof typeof dirtyFields) => {
    if (errors[fieldName] && dirtyFields[fieldName]) {
      return (
        <p className="text-red-700 text-[12px] font-normal absolute bottom-[-6px] left-[4px] px-[4px] bg-bgFirstLigtColor">
          {errors[fieldName]?.message}
        </p>
      );
    }
    if (!errors[fieldName] && dirtyFields[fieldName]) {
      return (
        <p className="text-green-700 text-[12px] font-normal absolute bottom-[-6px] left-[4px] px-[4px] bg-bgFirstLigtColor">
          {`${fieldName.charAt(0).toUpperCase()}${fieldName.slice(
            1
          )} is entered correctly`}
        </p>
      );
    }
    return null;
  };

  return (
    <form
      className="bg-bgFirstLigtColor rounded-[30px] py-12 px-8 md:p-12 flex flex-col md:flex-row md:flex-wrap gap-x-[8px] w-full md:w-[472px] mx-auto shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="w-full md:w-[350px] lg:w-[450px] font-medium text-[30px] leading-[1.2] tracking-[-0.02em] text-darkColor mb-[20px] md:mb-[40px] sm-max:text-[25px] lg:text-[40px]">
        Event Registration
      </h2>

      <div className="relative w-full mb-[8px] md:mb-[16px]">
        <input
          {...register("name")}
          type="text"
          autoComplete="name"
          placeholder="Full name"
          className={inputClass("name")}
        />
        {renderMessage("name")}
      </div>

      <div className="relative w-full mb-[8px] md:mb-[16px]">
        <input
          {...register("email")}
          type="email"
          autoComplete="email"
          placeholder="Email"
          className={inputClass("email")}
        />
        {renderMessage("email")}
      </div>

      <div className="relative w-full mb-[8px] md:mb-[16px]">
        <input
          {...register("date")}
          type={isDateFocused ? "date" : "text"}
          max={format(new Date(), "yyyy-MM-dd")}
          autoComplete="bday-day webauthn"
          placeholder="Date of birth"
          onFocus={() => setIsDateFocused(true)}
          onBlur={() => setIsDateFocused(false)}
          className={inputClass("date")}
        />
        {renderMessage("date")}
      </div>

      <div className="mb-6 md:mb-10">
        <p className="mb-[8px] text-[16px] md:text-[18px] text-textColor leading-[1.25]">
          Where did you hear about this event?
        </p>
        <div className="flex items-center justify-center gap-[8px]">
          <label className="label">
            <input
              {...register("eventAdvertisementSource")}
              className="real-radio"
              type="radio"
              value="Social media"
            />
            <span className="custom-radio"></span>
            Social media
          </label>
          <label className="label">
            <input
              {...register("eventAdvertisementSource")}
              className="real-radio"
              type="radio"
              value="Friends"
            />
            <span className="custom-radio"></span>
            Friends
          </label>
          <label className="label">
            <input
              {...register("eventAdvertisementSource")}
              className="real-radio"
              type="radio"
              value="Found myself"
            />
            <span className="custom-radio"></span>
            Found myself
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="border-none rounded-[30px] px-[18px] py-[14px] lg:py-[16px] w-full bg-accentColor font-medium text-[14px] lg:text-[16px] leading-[1.25] tracking-[-0.01em] text-bgFirstLigtColor primary-btn-hover"
      >
        Register
      </button>
    </form>
  );
};
