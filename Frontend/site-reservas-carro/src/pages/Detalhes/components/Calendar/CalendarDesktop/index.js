import { useEffect, useState } from 'react';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import ptBr from 'date-fns/locale/pt-BR';

import styled from "./styles.module.scss";

export const CalendarDesktop = ({selected, setStartDate, setEndDate, startDate, endDate}) => {
  
  const [windowWidth, setWindowWidth] = useState("desktop");

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };


 function calendarView(){
  
    if(window.innerWidth < 670 && windowWidth === "desktop"){
      return (
      setWindowWidth("mobile"),
      console.log('if 1'))
    }

    if(window.innerWidth > 670 && windowWidth === "mobile"){
      return (
      setWindowWidth("desktop"),
      console.log('if 2'))

    }

}

useEffect(()=>{
  calendarView()
},[])

  window.addEventListener("resize", (e) => {
    if(e.currentTarget.innerWidth < 670 && windowWidth === "desktop"){
      setWindowWidth("mobile");
      console.log('if 3')

    }
      
    if(e.currentTarget.innerWidth > 670 && windowWidth === "mobile"){
      setWindowWidth("desktop");
      console.log('if 4')

    }
  });

  if(windowWidth === "desktop") {
    return (
      <DatePicker
        renderCustomHeader={({
          monthDate,
          customHeaderCount,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div>
            <button
              aria-label="Previous Month"
              className={
                "details_previous react-datepicker__navigation react-datepicker__navigation--previous"
              }
              style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
              onClick={decreaseMonth}
            >
              <MdOutlineArrowBackIosNew size={16} color="#ffffff"/>
            </button>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString("pt-BR", {
                month: "long",
              })}
            </span>
            <button
              aria-label="Next Month"
              className={
                "details_next react-datepicker__navigation react-datepicker__navigation--next"
              }
              style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
              onClick={increaseMonth}
            >
            <MdOutlineArrowForwardIos size={16} color="#ffffff"/>
            </button>
          </div>
        )}
        calendarClassName={styled.calendar}
        startDate={(selected === true ? startDate : null )}
        endDate={(selected === true ? endDate : null )}
        locale={ptBr}
        monthsShown={2}
        minDate={new Date()}
        onChange={onChange}
        formatWeekDay={nameOfDay => nameOfDay.substring(0,1)} 
        dateFormat="dd/MM/yyyy"
        disabledKeyboardNavigation
        // shouldCloseOnSelect={false}
        selectsRange
        selected={startDate}
        inline
        excludeDateIntervals={[{start: new Date('2022-04-20'), end: new Date('2022-04-22') }]}
      />
    );
  } else {
    return (
      <DatePicker
        calendarClassName={styled.calendar_mobile}
        startDate={(selected === true ? startDate : null )}
        endDate={(selected === true ? endDate : null )}
        monthsShown={1}
        minDate={new Date()}
        locale={ptBr}
        onChange={onChange}
        formatWeekDay={nameOfDay => nameOfDay.substring(0,1)} 
        dateFormatCalendar="LLLL"
        selectsRange
        selected={false}
        inline
        excludeDateIntervals={[{start: new Date('2022-04-20'), end: new Date('2022-04-22') }]}
        disabledKeyboardNavigation // impedi q a data selecioanda fique selecionada nos outros meses
        // shouldCloseOnSelect={false} impedi o fechamento do calendario quando as datas são selecionadas
      />
    );
  }  
};
