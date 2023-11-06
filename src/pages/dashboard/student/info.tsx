import StudentInfoForm from "@/modules/dashboard/student/info/StudentInfoForm";

const InfoPage = () => {
  return (
    <div className="py-20 container lg:py-0">
      <h2 className="cusPrimaryTitle">會員資料</h2>
      <StudentInfoForm />
    </div>
  );
};

export default InfoPage;
