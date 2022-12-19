import { Button, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


//images
import separador from "../assets/icon/zigzag.png"
//librery
import { useTranslation } from "react-i18next";


const UpdatingPopover = React.forwardRef(
    ({ popper, children, show: _, ...props }, ref) => {
        useEffect(() => {
            console.log('updating!');
            popper.scheduleUpdate();
        }, [children, popper]);

        return (
            <Popover ref={ref} body {...props}>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="..."
                        aria-label="..."
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="dark" id="button-addon2">
                        Recommend
                    </Button>
                </InputGroup>                {children}
            </Popover>
        );
    },
);

const longContent = `
  
  `;
const shortContent = '';







function Details() {
    const [t, i18n] = useTranslation('global');

    const [content, setContent] = useState(shortContent);

    useEffect(() => {
        const timerId = setInterval(() => {
            setContent(content === shortContent ? longContent : shortContent);
        }, 3000);

        return () => clearInterval(timerId);
    });



    return (
        <Container className="details_container ">
            <Row >
                <Col className="d-flex  justify-content-center align-items-center">
                    <Image src={separador} className="separador" ></Image>
                </Col>
            </Row>
            <Row className="d-flex  " data-aos="fade-up" data-aos-duration="700">
                <Col data-aos="fade-up"
                    data-aos-duration="700" xs={12} sm={10} >
                    <p className=" os_contare">{t("details.aficiones")}</p>
                </Col>
            </Row>


            <Row >
                <Col  xs={12} sm={1}  className=" d-flex flex-column align-items-center">
                   
                </Col>

                <Col data-aos="fade-up aficiones"
                    data-aos-duration="700" xs={12} sm={2}  className=" d-flex flex-column align-items-center ">
                    <input type="checkbox" className="read-more-state" id="rugby" />

                    <p className="subtitle read-more-wrap d-flex flex-column align-items-center">
                        {t("details.rugbuer")}
                        <span className="read-more-target">       <br />
                            {t("details.mmore-rugby")}</span></p>
                    <label htmlFor="rugby" className="read-more-trigger"></label>
                </Col>
                <Col data-aos="fade-up"
                    data-aos-duration="700" xs={12} sm={2}  className=" d-flex flex-column align-items-center">
                    <input type="checkbox" className="read-more-state" id="mx-rider" />

                    <p className="subtitle read-more-wrap d-flex flex-column align-items-center">
                        {t("details.mx")}
                        <span className="read-more-target">       <br />
                            {t("details.more-mx")}</span></p>
                    <label htmlFor="mx-rider" className="read-more-trigger"></label>
                </Col>
                <Col data-aos="fade-up"
                    data-aos-duration="700" xs={12} sm={2}  className=" d-flex flex-column align-items-center">
                    <input type="checkbox" className="read-more-state" id="artist" />

                    <p className="subtitle read-more-wrap d-flex flex-column align-items-center">
                        {t("details.artista")}
                        <span className="read-more-target">       <br />
                            {t("details.more-artist")}</span></p>
                    <label htmlFor="artist" className="read-more-trigger"></label>
                </Col>
                <Col data-aos="fade-up"
                    data-aos-duration="700" xs={12} sm={2}  className=" d-flex flex-column align-items-center">
                    <input type="checkbox" className="read-more-state" id="programadora" />

                    <p className="subtitle read-more-wrap d-flex flex-column align-items-center ">
                        {t("details.cocina")}
                        <span className="read-more-target">       <br />
                            {t("details.more-cocina")}</span></p>
                    <label htmlFor="programadora" className="read-more-trigger"></label>
                </Col>
                <Col data-aos="fade-up"
                    data-aos-duration="700" xs={12} sm={2}   className=" d-flex flex-column align-items-center">
                    <input type="checkbox" className="read-more-state" id="abogada" />
                    <p className="subtitle read-more-wrap d-flex flex-column align-items-center">
                        {t("details.cine")}
                        <span className="read-more-target">       <br />
                            {t("details.more-cine")}

                            <OverlayTrigger trigger="click" overlay={<UpdatingPopover id="popover-contained">{content}</UpdatingPopover>}>
                                <Button style={{ backgroundColor: 'transparent', borderColor: 'transparent', color: 'red' }} className="recomendacion">{t("details.recomendarme")} </Button>
                            </OverlayTrigger>
                            {t("details.encantaria")}
                        </span></p>
                    <label htmlFor="abogada" className="read-more-trigger"></label>
                </Col>
            </Row>
            <Row >
                <Col className="d-flex  justify-content-center align-items-center">
                    <Image src={separador} className="separador" ></Image>
                </Col>
            </Row>

            <Row className="d-flex" data-aos="fade-up" data-aos-duration="700">
                <Col xs={12} sm={10} >
                    <p className="formacion">{t("details.conocemos")}</p>
                </Col>
            </Row>

            <Row>
                <Col data-aos="fade-up"
                    data-aos-duration="700" xs={12} sm={4} className=" d-flex flex-column align-items-center">
                    <input type="checkbox" className="read-more-state" id="bootcamp" />

                    <p  className="subtitle read-more-wrap d-flex flex-column align-items-center">
                        BOOTCAMP FULLSTACK DEVELOPER
                        <span className="read-more-target">       <br />
                            {t("details.more-boot")}</span></p>
                    <label htmlFor="bootcamp" className="read-more-trigger"></label>
                </Col>
                <Col data-aos="fade-up"
                    data-aos-duration="700" xs={12} sm={4} className=" d-flex flex-column align-items-center">
                    <input type="checkbox" className="read-more-state" id="cursos" />
                    <p className="subtitle read-more-wrap d-flex flex-column align-items-center">
                        {t("details.cursos")}                        <span className="read-more-target">       <br />
                            {t("details.more-cursos")}
                            <br />  <br /> {t("details.more-angular")} <br />  <br /> {t("details.more-redux")} <br />  <br /> {t("details.more-node")} <br />  <br /> {t("details.more-type")}      <br />  <br />  {t("details.more-php")}
                        </span></p>
                    <label htmlFor="cursos" className=" read-more-trigger"></label>
                </Col>
                <Col data-aos="fade-up"
                    data-aos-duration="700" xs={12} sm={4} className=" d-flex flex-column align-items-center">
                    <input type="checkbox" className="read-more-state" id="derecho" />

                    <p className="subtitle read-more-wrap d-flex flex-column align-items-center">
                        {t("details.derecho")}                        <span className="read-more-target">       <br />
                            {t("details.more-derecho")}
                        </span></p>
                    <label htmlFor="derecho" className=" read-more-trigger"></label>
                </Col>
            </Row>

            <Row >
                <Col className="d-flex  justify-content-center align-items-center">
                    <Image src={separador} className="separador" ></Image>
                </Col>
            </Row>

            {/* <Row className="d-flex  col-8  ms-5" data-aos="fade-up" data-aos-duration="700">
                <p className="skills">Por último, estas son algunas de mis aptitudes:  </p>
            </Row> */}


        </Container>
    )
}
export default Details;