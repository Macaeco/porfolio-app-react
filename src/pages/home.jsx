import React from "react";

//components
import CardsHome from "../components/cardsHome";
import CarouselCV from "../components/carrousel";

//css imports
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from "react-bootstrap";

//images
import Image from 'react-bootstrap/Image'
import imgHome from "../assets/images/code4.jpg"
import github from "../assets/icon/github.png"
import linkedin from "../assets/icon/linkdn.png"
import instagram from "../assets/icon/instagram.png"
import ButtonContact from "../components/button-contact";

//librery
import { useTranslation } from "react-i18next";





function Home() {
    const [t, i18n] = useTranslation('global');
    return (
        <Container className="container__home  pt-4 " >
            <Row className="d-flex justify-content-around pt-5 ps-2">
                <Col xs={12} sm={7} className="text__home ">
                    <Container xs={12} sm={7} lg={9} data-aos="fade-right" data-aos-delay="400" className="">
                        <h2 className="macarena">MACARENA S.F-A</h2>
                    </Container>
                    <Container data-aos="fade-right" data-aos-delay="500" className=" pt-5">
                        <h4 className="macarena_">Fullstack developer </h4>
                        <hr />
                        <h4 className="macarena_">Law graduate</h4>
                    </Container>
                </Col>
                <Col xs={12} sm={4}>
                    <CarouselCV></CarouselCV>
                </Col>
            </Row>
            <Row>

                <Col data-aos="fade-right" data-aos-delay="400"xs={12} sm={4}  className="line__home__container d-flex  align-items-center pt-4">
                    <div className="line__home"></div>
                    <a href="https://github.com/Macaeco" target='_blank'>
                        <img className="icon__home" src={github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/macarena-sotomayor-fern%C3%A1ndez-ayuso-332564237/" target='_blank'>
                        <img className="icon__home" src={linkedin} alt="" />
                    </a>
                    <a href="https://www.instagram.com/macaeco/?hl=es" target='_blank'>
                        <img className="icon__home" src={instagram} alt="" />
                    </a>
                </Col>
            </Row>

        </Container>
    )
}
export default Home;