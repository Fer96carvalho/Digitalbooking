import {Container} from 'react-bootstrap';

export function Descricao(props) {
  return(
    <Container fluid className="px-2 bg-light">
      <Container fluid className="max-width-1180 px-1 my-3">
        <h2 className="fs-4 font-600 pt-3 pb-1">Descrição do produto</h2>

        <p>
         {props.descricao}
        </p>
      </Container>
    </Container>
  )
}
