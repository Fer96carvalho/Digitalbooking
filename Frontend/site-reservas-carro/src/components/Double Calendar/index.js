import React, {useState}from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function DoubleCalendar() {
    const [dateRange, setDateRange] = useState([null,null]);
    const [startDate,endDate] = dateRange;

    return (
          <DatePicker
            placeholderText="Retirada e devolução"
            minDate={new Date()}
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            numberOfMonths={2}
            dateFormat="dd-MM-yyy"
            onChange={(update) => setDateRange(update)}
          />
        );
      };

export default DoubleCalendar;