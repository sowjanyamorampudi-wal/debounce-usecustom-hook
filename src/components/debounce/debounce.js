import { useState } from "react";
import useDebounce from "../../hooks/useDebounce";
const Debounce = () => {
  const [value, setValue] = useState("");
  const [secValue, setSecValue] = useState("");
  const [debounceValue, setDebounceValue] = useState("");
  const [secDebounceValue, setSecDebounceValue] = useState("");
  const debounce = useDebounce();

  const changeHandler = (e) => {
    const text = e.target.value;
    setValue(text);
    debounce(() => setDebounceValue(text), 1000);
  };
  const changeHandlerSec = (e) => {
    const secText = e.target.value;
    setSecValue(secText);
    debounce(() => setSecDebounceValue(secText), 5000);
  };
  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} />
      <br />
      <input type="text" value={secValue} onChange={changeHandlerSec} />
      <h1>normal value: {value}</h1>
      <h1>debouncing value: {debounceValue}</h1>
      <p>secValue:{secValue}</p>
      <p>secDebounceValue:{secDebounceValue}</p>
    </div>
  );
};

export default Debounce;
