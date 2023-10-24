import Image from "next/image";

const CourseInfo = () => {
  return (
    <>
      <p className="text-primary-500 border border-primary-500 rounded-35 text-center">
        進階 - 8週飲食建議
      </p>
      <div className="flex flex-col gap-4 items-center justify-center mt-8">
        <div className="bg-secondary-400 p-4 rounded-50">
          <Image
            src="/images/dashboard/dietary-record/courseInfo/member-photo.svg"
            width="48"
            height="48"
            alt="member-photo"
          />
        </div>
        <p>陳瘦瘦</p>
      </div>
      <ul className="flex flex-col gap-8 text-left mt-24">
        <li>
          <Image
            src="/images/dashboard/dietary-record/courseInfo/email.svg"
            width="15"
            height="15"
            alt="email"
            className="inline mr-8"
          />
          iamthin@gmail.com
        </li>
        <li>
          <Image
            src="/images/dashboard/dietary-record/courseInfo/phone.svg"
            width="15"
            height="15"
            alt="phone"
            className="inline mr-8"
          />
          0922-333444
        </li>
        <li>
          <Image
            src="/images/dashboard/dietary-record/courseInfo/LINE.svg"
            width="15"
            height="15"
            alt="LINE"
            className="inline mr-8"
          />
          thinthingood
        </li>
      </ul>
    </>
  );
};

export default CourseInfo;
