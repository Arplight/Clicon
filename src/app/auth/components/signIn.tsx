import MainButton from "@/src/components/common/buttons/main_button/mainButton";
import InputField from "@/src/components/common/input_field/inputField";
import { Form, Formik } from "formik";
import { FaArrowRight } from "react-icons/fa6";
import { signInSchema } from "../validationSchema";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { signIn_API } from "@/src/lib/apiStore/apiStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SignIn = () => {
  const dispatch = useDispatch<any>();
  const router = useRouter();
  // Alert
  useEffect(() => {
    alert(
      "Use the following credentials for testing:  username: emilys , password: emilyspass"
    );
  }, []);
  return (
    <div className="p-2">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={signInSchema}
        onSubmit={(values: ISignIn, { resetForm }) => {
          dispatch(signIn_API(values)).then(
            (response: { payload: { username: string } }) => {
              if (response.payload.username) {
                resetForm();
                toast.success(`Welcome back ${response.payload?.username}`);
                router.push("/");
              }
            }
          );
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
              autocomplete="username"
            />
            <InputField
              fieldLabel={"Password"}
              fieldName={"password"}
              fieldPlaceholder={"Please enter your password"}
              fieldType={"password"}
              fieldMaxLength={21}
              isRequired={true}
              autocomplete="current-password"
            />
            <MainButton
              buttonLabel={"sign in"}
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

export default SignIn;
