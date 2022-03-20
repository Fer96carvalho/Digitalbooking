import { Container } from 'react-bootstrap';

import styled from "./styles.module.scss";
import { CalendarDesktop } from './CalendarDesktop';

export const Calendar = () => {
  return (
    <Container as="section" fluid className="max-width-1180 py-4">
      <h2 className="fs-4 font-600 mb-3">Datas disponíveis</h2>
      <Container fluid className={`${styled.container} p-0`}>
        <div className={styled.box_calendar}>
          <CalendarDesktop/>
        </div>
        <div className={styled.box_info}>
          <div>
            <p className="font-500 my-3">Adicione suas datas de viagem para obter preços precisos.</p>
            <button className="font-500">Iniciar Reserva</button>
          </div>
        </div>
      </Container>
    </Container>
  );
};
