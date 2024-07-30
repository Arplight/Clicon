"use client";
import { useState } from "react";
import AuthWrapper from "../layout/auth_wrapper/layout";
import AuthTab from "./components/authTab";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";

const Auth = () => {
  const [activeAuth, setActiveAuth] = useState("signIn");
  return (
    <AuthWrapper>
      <section className="shadow-lg  w-full sm:w-[400px] border border-[#E4E7E9] rounded-[3px] bg-[#ffffff]">
        <AuthTab activeAuth={activeAuth} setActiveAuth={setActiveAuth} />
        {activeAuth === "signIn" ? <SignIn /> : <SignUp />}
      </section>
    </AuthWrapper>
  );
};

export default Auth;
