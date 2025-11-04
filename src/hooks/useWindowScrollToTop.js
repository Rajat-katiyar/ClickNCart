import { useEffect } from "react";

const useWindowScrollToTop = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);
};

export default useWindowScrollToTop;
