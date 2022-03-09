import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
// import { registerLocale } from  "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.css';
// import  pt  from  'date-fns/locale/pt-BR' ; 
// import { setDate } from "rsuite/esm/utils/dateUtils";
// registerLocale ( 'pt' ,  pt );


function DoubleCalendar() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  
    let sizeScreen = 0;

    if (window.screen.availWidth < 768) {
      sizeScreen = 1;
    } else{
      sizeScreen = 2;
    }

  return (
    <DatePicker
        locale="pt"
        // showTimeSelect
        // timeFormat="HH:mm"
        // timeIntervals={15}
        placeholderText="Data do checkin | Checkout "
        minDate={new Date()}
        selectsRange={true}
        startDate={startDate}
        // monthsShown={sizeScreen}
        endDate={endDate}
        dateFormat="dd/MM/yyyy"
        onChange={update => {setDateRange(update)}}
        className="form-control form-control-sm"
        isClearable

    />
  );
}

export default DoubleCalendar;