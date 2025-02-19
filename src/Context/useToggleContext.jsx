import { useContext } from "react";
import { ToggleContext } from "../Provider/ToggleProvider/ToggleProvider";

const useToggleContext = () => {
  return useContext(ToggleContext);
};

export default useToggleContext;
