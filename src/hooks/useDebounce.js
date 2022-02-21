import { useState } from "react";

const useDebounce = () => {
  const [typingTimeout, setTypingTimeout] = useState("");

  const debounce = (func, waitingTime) => {
    clearTimeout(typingTimeout);
    const timeOut = setTimeout(() => {
      func();
    }, waitingTime);
    setTypingTimeout(timeOut);
  };
  return debounce;
};

export default useDebounce;
