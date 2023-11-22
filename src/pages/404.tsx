import { useRouter } from "next/router";

const PageNotFound = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-primary-100 min-h-screen items-center text-primary-500 text-24 text-center">
      <div className="flex flex-col gap-16 grow lg:min-h-[1086px] my-[40px] lg:mt-[80px]">
        <p>Ooooooops!</p>
        <h1 className="text-[180px] flex items-center gap-8">
          <span className="text-white font-GenSenRounded-700 drop-shadow-textErrShadow">
            4
          </span>
          <div className="w-[140px] h-[140px] rounded-[125px] bg-white shadow-goBackOuter">
            <button
              className="m-8 bg-tertiary-500 rounded-[70px] w-[90%] h-[90%] text-20 flex items-center justify-center font-bold text-white shadow-goBack hover:bg-tertiary-600 active:shadow-goBackActive"
              onClick={() => router.back()}
            >
              GO Back
            </button>
          </div>
          <div className="text-white font-GenSenRounded-700 drop-shadow-textErrShadow">
            4
          </div>
        </h1>
        <p>此頁面不存在</p>
      </div>
    </div>
  );
};
export default PageNotFound;
