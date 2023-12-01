
import {Row, Col, Container} from 'react-bootstrap'

const FormContainer = ({children}) => {
  return (
     <Container>
        <Row className='justify-content-md-center' />
        <Col xs={12} md={6}>
            { children }
        </Col>
     </Container>
  )
}

export default FormContainer