import {Container} from 'react-bootstrap';

export function Descricao() {
  return(
    <Container fluid className="px-2 bg-light">
      <Container fluid className="max-width-1180 px-1 my-3">
        <h2 className="fs-4 font-600 pt-3 pb-1">Descrição do produto</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
          architecto beatae vitae dicta sunt explicabo. 
        </p>
      </Container>
    </Container>
  )
}
