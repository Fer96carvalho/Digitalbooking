import styled from "./styles.module.scss";
import { CalendarDesktop } from './CalendarDesktop';

export const Calendar = ({selected}) => {
  return (
        <div className={styled.box_calendar}>
          <CalendarDesktop selected={selected}/>
        </div>
  );
};
