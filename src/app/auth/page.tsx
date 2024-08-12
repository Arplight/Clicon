"use client";
import { useEffect, useState } from "react";
import AuthWrapper from "../layout/auth_wrapper/layout";
import AuthTab from "./components/authTab";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import { useSelector } from "react-redux";
import { RootState } from "@/src/lib/redux/store";
import { useRouter } from "next/navigation";

const Auth = () => {
  const [activeAuth, setActiveAuth] = useState<string>("signIn");
  const isAuthorized = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const router = useRouter();
  // auth handler
  useEffect(() => {
    if (isAuthorized) {
      router.push("/");
    }
  }, [isAuthorized, router]);
  return (
    <AuthWrapper>
      {!isAuthorized && (
        <section className="shadow-lg  w-full sm:w-[400px] border border-[#E4E7E9] rounded-[3px] bg-[#ffffff]">
          <AuthTab activeAuth={activeAuth} setActiveAuth={setActiveAuth} />
          {activeAuth === "signIn" ? (
            <SignIn />
          ) : (
            <SignUp setActiveAuth={setActiveAuth} />
          )}
        </section>
      )}
    </AuthWrapper>
  );
};

export default Auth;
