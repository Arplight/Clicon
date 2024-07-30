import { FC } from "react";

interface IAuthTab {
  activeAuth: string;
  setActiveAuth: (currentAuth: string) => void;
}
const AuthTab: FC<IAuthTab> = ({ activeAuth, setActiveAuth }) => {
  return (
    <div
      className={`flex border-b auth-tab ${
        activeAuth === "signIn" ? "active-auth-in" : "active-auth-up"
      }`}
    >
      <button
        className="small-heading w-1/2 py-2 font-gray-700"
        id="in-active"
        onClick={() => setActiveAuth("signIn")}
        aria-label="sign in"
      >
        Sign-In
      </button>
      <button
        className="small-heading w-1/2 py-2 font-gray-700"
        id="up-active"
        onClick={() => setActiveAuth("signUp")}
        aria-label="sign up"
      >
        Sign-Up
      </button>
    </div>
  );
};

export default AuthTab;
