import React from "react";
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


//imagenes
import github from "../assets/icon/github-color.png"
import linkedin from "../assets/icon/link-color-b.png"
import instagram from "../assets/icon/instagram-color.png"

//librery
import { useTranslation } from "react-i18next";

function FormContact() {
    const [t, i18n] = useTranslation('global');






    const handleOnSubmit = e => {
        e.preventDefault()
        const user = {
            name: e.target[0].value,
            email: e.target[1].value,
            number: e.target[2].value,
            mensaje: e.target[3].value
        }
        console.log(user)
    }

    const [show, setShow] = useState(true);

    return (
        <Container className="contact__container pb-5">
            <Row >
                <Col xs={12} md={8} >

                    <Row className="rows_form ">
                        <Row className='responsive m-3 pt-5'>
                            <p className="modal_body">
                            {t("button.puedes")}
                            </p>
                        </Row>
                        <Col >
                            <Row data-aos="fade-up" data-aos-delay="400">
                                <a href="https://github.com/Macaeco" target='_blank'>
                                    <img className="icon_contact before" src={github} alt="" />
                                </a>
                            </Row>
                        </Col>
                        <Col>
                            <Row data-aos="fade-up" data-aos-delay="400">
                                <a href="https://www.linkedin.com/in/macarena-sotomayor-fern%C3%A1ndez-ayuso-332564237/" target='_blank'>
                                    <img className="icon_contact before" src={linkedin} alt="" />
                                </a>
                            </Row>
                        </Col>

                        <Col>
                            <Row data-aos="fade-up" data-aos-delay="400">
                                <a href="https://www.instagram.com/macaeco/?hl=es" target='_blank'>
                                    <img className="icon_contact before" src={instagram} alt="" />
                                </a>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="mx-5 rows_form">
                        <Col>
                            <Row >
                                <p className=" col-xs-12 my-2 modal_body">
                                {t("button.o")}                                </p>

                            </Row>
                            <Row>
                                <Col>
                                    <Form data-aos="fade-up" data-aos-delay="200" onSubmit={handleOnSubmit} className="mb-3 form_c">
                                        <Form.Label className="label__form">{t("button.name")}</Form.Label>
                                        <Form.Control required
                                            type="text"
                                            placeholder="enter your name"
                                            autoFocus
                                            name='name'
                                        />
                                        <Form.Label className="label__form">{t("button.email")}</Form.Label>
                                        <Form.Control required
                                            type="email"
                                            placeholder="name@example.com"
                                            autoFocus
                                            name='email'
                                        />
                                        <Form.Label className="label__form">Movil</Form.Label>
                                        <Form.Control
                                            type="number" required
                                            placeholder=" enter your number"
                                            autoFocus
                                            name='number'
                                            min='9'
                                            max='9'
                                        />
                                        <Form.Label className="label__form">{t("button.msn")}</Form.Label>
                                        <Form.Control as="textarea" rows={3}
                                            name='mensage' />
                                        <div className="d-flex d-flex  mt-5 justify-content-center div__button">
                                            <Button className="me-5 button_form" variant="secondary"
                                                type="submit" style={{ backgroundColor: 'rgb(33,37,41)' }}>{t("button.submit")}</Button >
                                        </div>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default FormContact;











