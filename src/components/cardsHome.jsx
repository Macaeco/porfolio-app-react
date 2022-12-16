import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import { Link, useNavigate } from "react-router-dom";

//mages
import perfil from "../assets/images/captura.PNG"



//librery
import { useTranslation } from "react-i18next";




function CardsHome() {
  const [t, i18n] = useTranslation('global');

  return (
    <Container className='container_card'>
      <Row className="card_home_container d-flex flex-row justify-content-around">
        <Col xs={4} md={4}>
          <Card style={{ width: '30vw' }}>
            <Image className="m-2 mt-2" src={perfil}></Image>
            <Card.Body>
              <Card.Title className="m-2">Card Title</Card.Title>
              <Card.Text>
                He hecho estos ejemplos de Cards e intentado introducirlas de varias formas , pero no me gustaba como quedaba.
              </Card.Text>
              <Button variant="dark"><Link as={Link} to="/" className="link">

                Volver a la home</Link></Button> 
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container >

  );
}

export default CardsHome;