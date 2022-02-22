import { useState } from "react";

const useDebounce = (waitingTime) => {
  const [typingTimeout, setTypingTimeout] = useState("");

  const debounce = (func) => {
    clearTimeout(typingTimeout);
    const timeOut = setTimeout(() => {
      func();
    }, waitingTime);
    setTypingTimeout(timeOut);
  };
  return debounce;
};

export default useDebounce;
