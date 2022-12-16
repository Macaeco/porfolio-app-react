import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from 'react-bootstrap/Image'



//components
import GraphicCelon from "../graphics/graphic-celon";
import GraphicBiyiud from "../graphics/graphic-biyiud";
import GraphicNeoland from "../graphics/graphic-neoland";
import GraphicMe from "../graphics/graphics-me";



//librery
import { useTranslation } from "react-i18next";
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
// import Barcode from "./barcode.png";



//images
import github from "../assets/icon/github.png"
import ButtonContact from "../components/button-contact";
import ButtonScroll from "../components/button-scroll";
import CV from '../assets/images/cv.jpg';








function Experience() {


    const createPDF = async () => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = await document.querySelector("#pdf");
        pdf.html(data).then(() => {
            pdf.save("CV_MACARENA.pdf");
        });
        
        console.log(data)
    };
    const [t, i18n] = useTranslation('global');

    return (
        <Container className="experience__container" >

            <button onClick={createPDF} type="button">Download</button>
            
           
 

         
            <Row className="p-5">
                <Col className="container_neo">
                    <GraphicCelon></GraphicCelon>
                </Col>
                <Col >
                    <Row >
                        <Col data-aos="fade-up" className="title justiff my-4 d-flex "> Celon Media </Col>
                        <Row>
                            <Col data-aos="fade-up"
                                data-aos-duration="300" className="subtitle__ " >
                                <input type="checkbox" class="read-more-state" id="celon" /><p class="read-more-wrap ">  {t("ex.celon")}
                                    <span class="read-more-target">       <br />
                                        {t("ex.celon2")}</span></p>
                                <label for="celon" className=" read-more-trigger button__readmore"></label></Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
            <Row className="p-5">
                <Col className="container_neo">
                    <GraphicBiyiud></GraphicBiyiud>
                </Col>
                <Col>
                    <Row>
                        <Col data-aos="fade-up" className="title justiff my-4 d-flex "> Biyiud </Col>
                        <Row>
                            <Col data-aos="fade-up"
                                data-aos-duration="300" className="subtitle__ " >
                                <input type="checkbox" class="read-more-state" id="buyiud" /><p class="read-more-wrap "> {t("ex.biy")}
                                    <span class="read-more-target">       <br />
                                        {t("ex.biy2")}</span></p>
                                <label for="buyiud" className=" read-more-trigger button__readmore"></label></Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
            <Row className="p-5">
                <Col className="container_neo">
                    <GraphicNeoland></GraphicNeoland>
                </Col>
                <Col>
                    <Row>
                        <Col data-aos="fade-up" className="title justiff my-4 d-flex "> Neoland</Col>
                        <Row>
                            <Col data-aos="fade-up"
                                data-aos-duration="300" className="subtitle__ " >
                                <input type="checkbox" class="read-more-state" id="neoland" /><p class="read-more-wrap "> {t("ex.neo")}
                                    <span class="read-more-target">       <br />
                                        {t("ex.neo2")}</span></p>
                                <label for="neoland" className=" read-more-trigger button__readmore"></label></Col>
                        </Row>
                    </Row>
                </Col>
            </Row>

            <Row className="p-5">
                <Col className="container_neo">
                    <GraphicMe></GraphicMe>
                </Col>
                <Col>
                    <Row>
                        <Col data-aos="fade-up"
                            className="title justiff my-4 d-flex ">Por mi misma </Col>
                        <Row>
                            <Col data-aos="fade-up"
                                data-aos-duration="300" className="subtitle__ " >
                                <input type="checkbox" class="read-more-state" id="me" /><p class="read-more-wrap "> {t("ex.me")}
                                    <span class="read-more-target">       <br />
                                        {t("ex.me2")}</span></p>
                                <label for="me" className="read-more-trigger button__readmore"></label></Col>
                        </Row>
                    </Row>
                </Col>
            </Row>


            <ButtonContact></ButtonContact>
            <ButtonScroll></ButtonScroll>


        </Container>

    )
}
export default Experience;