import CourseRecord from "@/common/components/dietary-record/CourseRecord";

const StudentIdPage = () => {
  return (
    <>
      <CourseRecord />
    </>
  );
};

export default StudentIdPage;

const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { studentId: "1" },
      },
      {
        params: { studentId: "2" },
      },
    ],
    fallback: false,
  };
};
export { getStaticPaths };

const getStaticProps = async () => {
  return {
    props: {},
  };
};
export { getStaticProps };
