import { useEffect, useState } from "react";

const useResize = () => {
  const [isMobile, setIsMobile] = useState(false);

  console.log(isMobile);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    if (window.innerWidth < "992") {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  return isMobile;
};

export default useResize;
