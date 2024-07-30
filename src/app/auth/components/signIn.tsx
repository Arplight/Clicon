import MainButton from "@/src/components/common/buttons/main_button/mainButton";
import InputField from "@/src/components/common/input_field/inputField";
import { Form, Formik } from "formik";
import { FaArrowRight } from "react-icons/fa6";
import { signInSchema } from "../validationSchema";
const SignIn = () => {
  return (
    <div className="p-2">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          password_confirmation: "",
        }}
        validationSchema={signInSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ isValid, dirty }) => (
          <Form className="flex flex-col gap-1.5">
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
            <MainButton
              buttonLabel={"sign in"}
              buttonRole={"button"}
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

export default SignIn;
