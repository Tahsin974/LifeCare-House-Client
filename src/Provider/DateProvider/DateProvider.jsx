import moment from "moment";
import { createContext, useState } from "react";

export const DateContext = createContext(null);
const DateProvider = ({ children }) => {
  const formattedDate = (date) => moment(date).format("MMM DD, YYYY");
  const [startDate, setStartDate] = useState(formattedDate(new Date()));
  const dateContent = [startDate, setStartDate, formattedDate];
  return (
    <DateContext.Provider value={dateContent}>{children}</DateContext.Provider>
  );
};

export default DateProvider;
