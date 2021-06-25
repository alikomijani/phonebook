
import { useState } from 'react'
import { Container, Row, Col, } from 'react-bootstrap';
import { ContactItem, Footer, SearchBar } from '../../components'
import './style.scss'
const contacts = [
    { first_name: 'Ali', last_name: 'Komijani', subtitle: 'My Card', imgSrc: '' },
    { first_name: 'Hassan', last_name: 'Haddai', subtitle: 'Father', imgSrc: '' },
    { first_name: 'Seyed', last_name: 'Ali', subtitle: 'Friend', imgSrc: '' },
]
function Contacts() {
    const [filter, setFilter] = useState('')
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} >
                        <h1>{'Contacts'}</h1>
                    </Col>
                    <Col xs={12}>
                        <SearchBar filter={filter} setFilter={setFilter} />
                    </Col>
                </Row>
            </Container >
            <section >
                <Container className='contacts-item-container'>
                    <Row>
                        <Col xs={12}>
                            {
                                contacts.filter(item=>item.first_name.toLowerCase().includes(filter.toLowerCase())||item.last_name.toLowerCase().includes(filter.toLowerCase()) ).map((contact, index) => (
                                    <ContactItem
                                        key={index}
                                        title={`${contact.first_name} ${contact.last_name}`}
                                        subtitle={contact.subtitle}
                                        imgSrc={contact.imgSrc}
                                    />
                                ))
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    )
}

export default Contacts
