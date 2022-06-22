import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("example@xyz.com")
    .required("Please enter email id"),
  password: Yup.string()
    .required("Please enter password.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

export const taskValidationSchema = Yup.object({
  name: Yup.string()
    .required("Please enter task name")
    .min(3, "Task name is too short - should be 3 chars minimum."),
  description: Yup.string()
    .required("Please enter description")
    .min(10, "Task description is too short - should be 3 chars minimum."),
});
