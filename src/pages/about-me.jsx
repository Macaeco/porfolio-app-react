import React from "react";
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from "react-bootstrap";
//images
import photoProfile from "../assets/images/profile.jpg"
import separador from "../assets/icon/zigzag.png"
//componetns
import Details from "../components/details";
import ButtonContact from "../components/button-contact";
import ButtonScroll from "../components/button-scroll";
//librerias
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";









function AboutMe() {
    const [t, i18n] = useTranslation('global');
    return (
        // col-12 col-sm-4 col-md-3 col-lg-12 col-xl-12


        <Container className="container__about " id='inicio'>
            <Row  ><h3 className="title_about pb-5 col-8 ">{t("about.hello")} </h3></Row>
            <Row>
                <Col  xs={12} sm={4} className="mt-5">
                    <Card data-aos="fade-right" data-aos-delay="400" className="container__card "  >
                        <div className="relative__div ">
                            <Card.Img variant="top" src={photoProfile} className="profile__img" />
                            <div className="marco__img" ></div>
                        </div>
                    </Card>
                </Col>
                <Col  xs={12} sm={7} className=" p-5  col-8 div__about_text me-5" data-aos="fade-left" data-aos-delay="400">
                        <input type="checkbox" className="read-more-state" id="post-1" />
                        <h3 className="subtitle pb-2">{t("about.dev-ab")}</h3>
                        <p className="read-more-wrap">
                        {t("about.present")}
                            <span className="read-more-target">       <br />
                            {t("about.more-present")}</span></p>
                        <label for="post-1" className=" read-more-trigger"></label>
                </Col>
            </Row>
            <Details></Details>
            <ButtonContact></ButtonContact>
            <ButtonScroll></ButtonScroll>
        </Container>
    )
}
export default AboutMe;