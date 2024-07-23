import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { format } from "date-fns";
import { toast } from "react-toastify";

import { ParticipantRegisterSchema } from "../../schemas";
import { addParticipant, getEventById } from "../../services";
import { IEvent, Source } from "../../types";
import { Loader } from "../Loader/Loader";

interface IFormData {
  name: string;
  email: string;
  dateOfBirth: Date;
  eventAdvertisementSource: Source;
}

export const RegisterForm = () => {
  const [event, setEvent] = useState<IEvent | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  // const [dateValue, setDateValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    getEventById(id)
      .then((res) => {
        setEvent(res);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });
  }, [id]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm<IFormData>({
    mode: "onChange",
    resolver: yupResolver(ParticipantRegisterSchema),
    defaultValues: {
      eventAdvertisementSource: "Social media",
    },
  });

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    const dateOfRegistration = new Date();
    setIsLoading(true);
    id &&
      addParticipant({ ...data, dateOfRegistration, eventId: id })
        .then(() => {
          toast.success("You have been successfully registered for the event.");
          reset();
          setTimeout(() => {
            navigate(`/participants/${id}`);
          }, 1500);
        })
        .catch((e) => {
          toast.error(e.response.data.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
  };

  const inputClass = (fieldName: keyof typeof dirtyFields) => {
    const baseClass =
      "w-full h-[47px] bg-transparent border rounded-[12px] px-[18px] py-[14px] lg:py-[16px] font-normal text-[14px] lg:text-[16px] leading-[1.25] text-textColor placeholder:text-textColor hover:shadow hover:border-accentColor focus:border-accentColor transition duration-300";
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
        <p className="text-red-700 text-[10px] md:text-[12px] font-normal absolute bottom-[-6px] left-[4px] px-[4px] bg-bgFirstColor">
          {errors[fieldName]?.message}
        </p>
      );
    }
    if (!errors[fieldName] && dirtyFields[fieldName]) {
      return (
        <p className="text-green-700 text-[10px] md:text-[12px] font-normal absolute bottom-[-6px] left-[4px] px-[4px] bg-bgFirstColor">
          {`${fieldName.charAt(0).toUpperCase()}${fieldName.slice(
            1
          )} is entered correctly`}
        </p>
      );
    }
    return null;
  };

  return (
    <>
      <form
        className="bg-bgFirstColor rounded-[30px] py-12 px-8 md:p-12 sm-max:py-9 sm-max:px-6 flex flex-col md:flex-row md:flex-wrap gap-x-[8px] w-full md:w-[472px] mx-auto shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="title">Event Registration</h2>
        <p className="text-[14px] md:text-[16px] text-secondTextColor leading-[1.25] w-[260px] sm-max:w-[220px] md:w-[350px] lg:w-[450px] mb-5 lg:mb-10">
          Join us for an exciting event,{" "}
          <span className="font-semibold text-textColor">
            <br /> {event?.title}.<br />
          </span>{" "}
          Please fill out the form below to secure your spot. We look forward to
          seeing you there!
        </p>
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
            {...register("dateOfBirth")}
            type="date"
            max={format(new Date(), "yyyy-MM-dd")}
            autoComplete="bday-day webauthn"
            placeholder="Date of birthday"
            className={inputClass("dateOfBirth")}
            // value={dateValue}
            // onChange={(e) => setDateValue(e.target.value)}
          />
          {renderMessage("dateOfBirth")}
        </div>
        <div className="mb-6 md:mb-10">
          <p className="mb-[8px] text-[14px] sm-max:text-[12px] md:text-[18px] text-textColor leading-[1.25]">
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
          className="border-none rounded-[30px] px-[18px] py-[14px] lg:py-[16px] w-full bg-accentColor font-medium text-bgFirstColor text-[14px] lg:text-[16px] leading-[1.25] tracking-[-0.01em] text-bgFirstLigtColor primary-btn-hover"
        >
          Register
        </button>
      </form>
      {isLoading && <Loader />}
    </>
  );
};
