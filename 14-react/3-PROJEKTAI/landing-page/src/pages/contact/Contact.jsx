import { Row, Container, Col,Form } from "react-bootstrap";
import "./Contact.scss";

const Contact = ({ title, description, contactInfoTitle, form, socialIcons, contactInfoItems }) => {
return (
    <div className="contacts">
        <Container className="contact__title">
            <h1>{title}</h1>
            <p>{description}</p>
            <Row>
                <Col md={8}>
                {
                    form.map(item => (
                        <div>
                            <div >
                                { item.type === 'input' && <input placeholder={item.name}/>}
                                { item.type === 'textarea' && <textarea placeholder={item.name}/>}
                            </div>
                            <div>
                                { item.type === 'button' && <button>{item.name}</button>}
                            </div>
                        </div>
                    ))
                }
                </Col>
                <Col md={4} className="contacts__adress">
                    <h3>{contactInfoTitle}</h3>
                    {
                        contactInfoItems.map(item => (
                            <div>
                            {item.property}
                            {item.value}
                            
                            </div>
                        ))
                    }
                </Col>
            </Row>
        
        </Container>

    </div>
)
};
export default Contact;
