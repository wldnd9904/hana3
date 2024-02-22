import { useState } from "react";

const useToggle = (defaultFlag: boolean = false): [boolean, () => void] => {
  const [flag, setFlag] = useState<boolean>(defaultFlag);
  const makeToggle = () => setFlag((e) => !e);
  return [flag, makeToggle];
};
export default useToggle;
