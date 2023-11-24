import RegisterForm from "@/modules/register/RegisterForm";
import RegisterFormSecondPhase from "@/modules/register/RegisterFormSecondPhase";
import RegisterFormThirdPhase from "@/modules/register/RegisterFormThirdPhase";
import { useState } from "react";

export interface RegisterFormProps {
  setCurrentPhase: (currentPhase: number) => void;
}
const RegisterPage = () => {
  const [currentPhase, setCurrentPhase] = useState<number>(1);

  return (
    <div className="container text-center cusGrid py-40 lg:py-[105px]">
      {currentPhase === 1 && <RegisterForm setCurrentPhase={setCurrentPhase} />}
      {currentPhase === 2 && (
        <RegisterFormSecondPhase setCurrentPhase={setCurrentPhase} />
      )}
      {currentPhase === 3 && <RegisterFormThirdPhase />}
    </div>
  );
};

export default RegisterPage;
