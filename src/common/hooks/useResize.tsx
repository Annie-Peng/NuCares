import { useEffect, useState } from "react";

const useResize = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  console.log(isMobile);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    if (window.innerWidth < 1296) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  return isMobile;
};

export default useResize;
