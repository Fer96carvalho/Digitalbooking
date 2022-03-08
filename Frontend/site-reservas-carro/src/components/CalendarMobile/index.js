import React, {useState}from "react";
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  pt  from  'date-fns/locale/pt-BR' ; 
registerLocale ( 'pt' ,  pt );


function MobileCalendar() {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <DatePicker
        locale="pt"
        // showTimeSelect
        // timeFormat="HH:mm"
        // timeIntervals={15}
        placeholderText="Data de retirada e devolução"
        minDate={new Date()}
        selectsRange={true}
        startDate={startDate}
        monthsShown={1}
        endDate={endDate}
        dateFormat="dd/MM/yyyy"
        onChange={update => {setDateRange(update) }}
        isClearable

    />
  );
}

export default MobileCalendar;