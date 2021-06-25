
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
function Contacts() {
    return (
        <Container>
            <Row>
                <Col xs={12} >
                    <h1>{'Contacts'}</h1>
                </Col>
                <Col xs={12}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Contacts
