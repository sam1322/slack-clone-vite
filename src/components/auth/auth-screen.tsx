import { useState } from "react";
import SignInCard from "./sign-in-card";
import { SignInFlow } from "@/types/auth";

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");
  return (
    <div className="h-screen flex items-center justify-center bg-[#5C3B58]">
      <div className="md:h-auto md:w-[420px]">
        <SignInCard setState={setState} />
      </div>
      {/* <div>{JSON.stringify(getCookie("token"))}</div> */}
    </div>
  );
};

export default AuthScreen;
