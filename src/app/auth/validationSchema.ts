import * as Yup from "yup";

const passwordValidation: Yup.StringSchema<string | undefined> = Yup.string()
  .min(6, "Password must be at least 6 characters")
  .max(20, "Password must be 20 characters or less")
  .required("Password is required")
  .trim();

const usernameValidation: Yup.StringSchema<string | undefined> = Yup.string()
  .max(30, "username must be 30 characters or less")
  .required("username is required")
  .trim();

export const signUpSchema: Yup.ObjectSchema<{
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  password_confirmation: string | undefined;
}> = Yup.object({
  username: usernameValidation,
  email: Yup.string().email().required("Email is required").trim(),
  password: passwordValidation,
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Password confirmation is required")
    .trim(),
});

export const signInSchema: Yup.ObjectSchema<{
  username: string | undefined;
  password: string | undefined;
}> = Yup.object({
  username: usernameValidation,
  password: passwordValidation,
});
