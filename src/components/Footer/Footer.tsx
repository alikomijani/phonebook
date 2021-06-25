
import { Container, Row, Col } from 'react-bootstrap'
import { MdContacts } from "react-icons/md"
import CustomButton from '../CustomButton/CustomButton'
import './Footer.style.scss'
function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className='footer-container'>
                            <div className='footer-items'>
                                <CustomButton
                                    to={'/phone'}
                                    text={'Phone'}
                                    icon={<MdContacts size={24}
                                    />} />
                            </div>
                            <div className='footer-items'>
                                <CustomButton
                                    to={'/contacts'}
                                    text={'Contacts'}
                                    icon={<MdContacts size={24}
                                    />} />
                            </div>
                            <div className='footer-items'>
                                <CustomButton
                                    to={'/favorites'}
                                    text={'Favorite'}
                                    icon={<MdContacts size={24}
                                    />} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
