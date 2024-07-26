import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { toast } from "react-toastify";

import {
  registrationSchema,
  logInSchema,
} from "../../schemas/validationSchemas";
import { inputClass, renderMessage } from "../../helpers";
import { loginUser, registerUser } from "../../services";

interface FormData {
  name?: string;
  email: string;
  password: string;
}

interface AuthFormProps {
  registration: boolean;
  onClick: (value: boolean) => void;
  toggleModal: () => void;
  handleUserSession?: (name: string) => void;
}

export const AuthForm = ({
  registration,
  toggleModal,
  handleUserSession,
  onClick,
}: AuthFormProps) => {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(registration ? registrationSchema : logInSchema),
  });

  const handleSpanClick = (value: boolean) => {
    onClick(value);
    reset();
  };

  const onSubmit: SubmitHandler<FormData> = async ({
    name,
    email,
    password,
  }) => {
    try {
      if (registration) {
        await registerUser({ name, email, password }).then((res) => {
          toggleModal();
          toast.success(
            `Yohoo! ${res.user.name}, you are successfully registered!`
          );
        });
      } else {
        await loginUser({ email, password }).then((res) => {
          handleUserSession && handleUserSession(res.user.name);
          toggleModal();
          toast.success(`Welcome back, ${res.user.name}!`);
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h2 className="font-medium text-[30px] leading-[1.2] tracking-[-0.02em] text-textColor mb-[20px] sm-max:text-[25px] sm-max:mb-[15px] lg:text-[40px]">
        {registration ? "Registration" : "Log In"}
      </h2>
      <p className="font-normal text-[14px] leading-[1.25] text-secondTextColor mb-[20px] w-[267px] sm-max:w-[230px] md:w-[300px] lg:w-[438px] sm-max:text-[12px] sm-max:mb-[15px] lg:text-[16px] lg:mb-[40px]">
        {registration
          ? "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information."
          : "Welcome back! Please enter your credentials to access your account and continue your events search."}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col pb-[10px]"
      >
        {registration && (
          <div className="relative mb-[12px] lg:mb-[18px]">
            <input
              type="text"
              placeholder="Name"
              className={inputClass(errors, dirtyFields, "name")}
              {...register("name")}
            />
            {!errors.name?.message && dirtyFields.name && (
              <AiOutlineCheckCircle size="16" className="fill-green-700 icon" />
            )}
            {errors.name?.message && dirtyFields.name && (
              <BiErrorCircle size="16" className="fill-red-700 icon" />
            )}
            {renderMessage(errors, dirtyFields, "name")}
          </div>
        )}

        <div className="relative mb-[12px] lg:mb-[18px]">
          <input
            type="text"
            placeholder="Email"
            className={inputClass(errors, dirtyFields, "email")}
            {...register("email")}
          />
          {!errors.email?.message && dirtyFields.email && (
            <AiOutlineCheckCircle size="16" className="fill-green-700 icon" />
          )}
          {errors.email?.message && dirtyFields.email && (
            <BiErrorCircle size="16" className="fill-red-700 icon" />
          )}
          {renderMessage(errors, dirtyFields, "email")}
        </div>
        <div>
          <div className="relative mb-[20px] sm-max:mb-[15px] lg:mb-[40px]">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              className={inputClass(errors, dirtyFields, "password")}
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPass((prev) => !prev)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
            >
              {showPass ? (
                <VscEye
                  className="stroke-none fill-textColor lg:size-[20px]"
                  size="16"
                />
              ) : (
                <VscEyeClosed
                  className="stroke-none fill-textColor lg:size-[20px]"
                  size="16"
                />
              )}
            </button>
            {renderMessage(errors, dirtyFields, "password")}
          </div>
        </div>

        <button
          type="submit"
          className="border-none rounded-[30px] px-[18px] py-[14px] lg:py-[16px] w-full bg-accentColor font-medium text-bgFirstColor text-[14px] lg:text-[16px] leading-[1.25] tracking-[-0.01em] primary-btn-hover"
        >
          {registration ? "Sign Up" : "Log In"}
        </button>
      </form>

      <p className="w-full font-normal text-[14px] text-center leading-[1.25] text-secondTextColor sm-max:text-[12px] lg:text-[16px]">
        {registration ? "Already have an account?" : "Don't have an account?"}{" "}
        <span
          onClick={() => handleSpanClick(!registration)}
          className="text-textColor underline cursor-pointer active:text-accentColor focus:text-accentColor lg:hover:text-accentColor transition duration-300"
        >
          {registration ? "Log In" : "Registration"}
        </span>
      </p>
    </>
  );
};
