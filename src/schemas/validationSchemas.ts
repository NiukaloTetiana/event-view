import * as yup from "yup";

import { emailRegExp } from "../constants/emailRegExp";

export const ParticipantRegisterSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Min length must be more than 2 chars")
    .max(32, "Max length must be less than 32 chars"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter a valid email")
    .matches(emailRegExp, "Enter a valid email")
    .max(64, "Max length must be less than 64 chars"),
  date: yup.date().required("Date of birth is required"),
  eventAdvertisementSource: yup.string().required("Event source is required"),
});
