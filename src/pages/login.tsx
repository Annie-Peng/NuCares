import MetaData from "@/common/components/MetaData";
import LoginForm from "@/modules/LoginForm";

const LoginPage = () => {
  return (
    <>
      <MetaData title="登入" />
      <div className="container text-center cusGrid py-40 lg:py-[105px]">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
