import RegisterForm, {
  RegisterFormSecondPhase,
  RegisterFormThirdPhase,
} from "@/modules/RegisterForm";
import { useState } from "react";

const RegisterPage = () => {
  const [currentPhase, setCurrentPhase] = useState<number>(1);
  return (
    <div className="container text-center cusGrid">
      {currentPhase === 1 && <RegisterForm setCurrentPhase={setCurrentPhase} />}
      {currentPhase === 2 && (
        <RegisterFormSecondPhase setCurrentPhase={setCurrentPhase} />
      )}
      {currentPhase === 3 && <RegisterFormThirdPhase />}
    </div>
  );
};

export default RegisterPage;
