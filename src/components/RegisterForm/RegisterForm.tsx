import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { format } from "date-fns";
import { toast } from "react-toastify";

import { Loader } from "../../components";
import { ParticipantRegisterSchema } from "../../schemas";
import { inputClass, renderMessage } from "../../helpers";
import {
  addEventUser,
  addParticipant,
  getCurrentUser,
  getEventById,
} from "../../services";
import { IEvent, Source } from "../../types";

interface IFormData {
  name: string;
  email: string;
  dateOfBirth: Date;
  eventAdvertisementSource: Source;
}

export const RegisterForm = () => {
  const [event, setEvent] = useState<IEvent | null>(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    getCurrentUser()
      .then((data) => {
        setUser(data);
      })
      .catch((e) => {
        toast.error(e.response.data.message);
      });

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
          if (user) {
            addEventUser(id || "");
          }

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
            className={inputClass(errors, dirtyFields, "name")}
          />
          {renderMessage(errors, dirtyFields, "name")}
        </div>
        <div className="relative w-full mb-[8px] md:mb-[16px]">
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            placeholder="Email"
            className={inputClass(errors, dirtyFields, "email")}
          />
          {renderMessage(errors, dirtyFields, "email")}
        </div>
        <div className="relative w-full mb-[8px] md:mb-[16px]">
          <input
            {...register("dateOfBirth")}
            type="date"
            max={format(new Date(), "yyyy-MM-dd")}
            autoComplete="bday-day webauthn"
            placeholder="Date of birthday"
            className={inputClass(errors, dirtyFields, "dateOfBirth")}
          />
          {renderMessage(errors, dirtyFields, "dateOfBirth")}
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
