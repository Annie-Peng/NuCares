import CourseRecord from "@/common/components/dietary-record/CourseRecord";

const CourseIdPage = () => {
  return (
    <>
      <CourseRecord />
    </>
  );
};

export default CourseIdPage;

const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: { courseId: "1" },
      },
      {
        params: { courseId: "2" },
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
