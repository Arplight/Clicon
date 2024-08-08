import MainButton from "@/src/components/common/buttons/main_button/mainButton";
import InputField from "@/src/components/common/input_field/inputField";
import { Form, Formik } from "formik";
import { FaArrowRight } from "react-icons/fa6";
import { signUpSchema } from "../validationSchema";
import { useDispatch } from "react-redux";
import { signUp_API } from "@/src/lib/apiStore/apiStore";
import { toast } from "react-toastify";
import { FC } from "react";

interface ISignUpProps {
  setActiveAuth: (activeAuth: string) => void;
}
const SignUp: FC<ISignUpProps> = ({ setActiveAuth }) => {
  const dispatch = useDispatch<any>();
  return (
    <div className="p-2">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
        validationSchema={signUpSchema}
        onSubmit={(values: ISignUp, { resetForm }) => {
          dispatch(signUp_API(values)).then((response: { payload: object }) => {
            if (response.payload) {
              toast.success("User created successfully.");
              resetForm();
              setActiveAuth("signIn");
            }
          });
        }}
      >
        {({ isValid, dirty }) => (
          <Form className="flex flex-col gap-1.5">
            <InputField
              fieldLabel={"Username"}
              fieldName={"username"}
              fieldPlaceholder={"Please enter your username"}
              fieldType={"text"}
              fieldMaxLength={31}
              isRequired={true}
            />
            <InputField
              fieldLabel={"E-mail"}
              fieldName={"email"}
              fieldPlaceholder={"Please enter your email"}
              fieldType={"email"}
              fieldMaxLength={51}
              isRequired={true}
            />
            <InputField
              fieldLabel={"Password"}
              fieldName={"password"}
              fieldPlaceholder={"Please enter your password"}
              fieldType={"password"}
              fieldMaxLength={21}
              isRequired={true}
            />
            <InputField
              fieldLabel={"Confirm password"}
              fieldName={"password_confirmation"}
              fieldPlaceholder={"Please confirm your password"}
              fieldType={"password"}
              fieldMaxLength={21}
              isRequired={true}
            />
            <MainButton
              buttonLabel={"sign up"}
              buttonRole={"submit"}
              isHollow={false}
              isLarge={false}
              isLoading={false}
              isDisabled={!isValid || !dirty}
              buttonIcon={<FaArrowRight size={20} />}
              withStyle="mt-2"
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
