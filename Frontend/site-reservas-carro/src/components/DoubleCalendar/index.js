import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.css';
import  pt  from  'date-fns/locale/pt-BR' ; 
// import { setDate } from "rsuite/esm/utils/dateUtils";
registerLocale ( 'pt' ,  pt );


function DoubleCalendar() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [windowWidth, setWindowWidth] = useState("desktop");

  let sizeScreen;

  window.addEventListener("load", () => {
    if(window.screen.availWidth < 768 && windowWidth === "desktop"){
      setWindowWidth("mobile");
    }

    if(window.screen.availWidth >= 768 && windowWidth === "mobile"){
      setWindowWidth("desktop");
    }
  });

  window.addEventListener("resize", () => {
    if(window.screen.availWidth < 768 && windowWidth === "desktop"){
      setWindowWidth("mobile");
    }

    if(window.screen.availWidth >= 768 && windowWidth === "mobile"){
      setWindowWidth("desktop");
    }
  });

    if (windowWidth === "desktop") {
      (sizeScreen = 2)
    } else{
      (
        sizeScreen = 1)
    };


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
        monthsShown={sizeScreen}
        endDate={endDate}
        dateFormat="dd/MM/yyyy"
        onChange={update => {setDateRange(update)}}
        className="form-control form-control-sm"
        isClearable
    />
  );
}

export default DoubleCalendar;