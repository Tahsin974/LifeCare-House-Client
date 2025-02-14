import { useContext } from "react";
import { DateContext } from "../Provider/DateProvider/DateProvider";

const useDateContext = () => {
  return useContext(DateContext);
};

export default useDateContext;
