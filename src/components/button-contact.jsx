import React from "react";

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
//imagenes
import github from "../assets/icon/github-color.png"
import linkedin from "../assets/icon/link-color-b.png"
import instagram from "../assets/icon/instagram-color.png"
import book from "../assets/icon/cole-book-black.png"


//librery
import { useTranslation } from "react-i18next";










function MyVerticallyCenteredModal(props) {
    const [t, i18n] = useTranslation('global');


    const handleOnSubmit = e => {
        e.preventDefault()
        console.log('gig')
        const user = {
            name: e.target.name.value,
            userName: e.target.userName.value,
            email: e.target.email.value,
            password: e.target.password.value
        }



    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h4 className="modal_title">{t("button.contacta")}</h4>            </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: 'rgb(198,198,198)' }}>
                <Row className="mx-5">
                    <Row  >
                        <p className="modal_body">
                        {t("button.puedes")}
                        </p>
                    </Row>
                    <Col >
                        <a href="https://github.com/Macaeco" target='_blank'>
                            <img className="icon_modal before" src={github} alt="" />
                        </a>
                    </Col>
                    <Col>
                        <a href="https://www.linkedin.com/in/macarena-sotomayor-fern%C3%A1ndez-ayuso-332564237/" target='_blank'>
                            <img className="icon_modal before" src={linkedin} alt="" />
                        </a>
                    </Col>

                    <Col>
                        <a href="https://www.instagram.com/macaeco/?hl=es" target='_blank'>
                            <img className="icon_modal before" src={instagram} alt="" />
                        </a>
                    </Col>
                </Row>
                <Row className="mx-5">
                    <Col>
                        <Row>
                            <Col >
                                <p className="modal_body">
                                {t("button.o")}
                                </p>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
                                <Form onSubmit={handleOnSubmit} >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label className="label__form">{t("button.email")}</Form.Label>
                                        <Form.Control required
                                            type="email"
                                            placeholder="name@example.com"
                                            autoFocus
                                        />

                                        <Form.Label className="label__form">{t("button.name")}</Form.Label>
                                        <Form.Control required
                                            type="text"
                                            placeholder="name"
                                            autoFocus
                                        />
                                        <Form.Label className="label__form">Movil</Form.Label>
                                        <Form.Control
                                            type="number" required
                                            placeholder="phone number"
                                            autoFocus
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label className="label__form">{t("button.msn")}</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <Modal.Footer>
                                        <div className="d-flex d-flex justify-content-center div__button">
                                            <Button  className="me-5 button_form respons" variant="secondary" type="submit" style={{ backgroundColor: 'rgb(33,37,41)' }}>{t("button.submit")}</Button >

                                            <Button className="me-5 button_form" variant="secondary" onClick={props.onHide} style={{ backgroundColor: 'rgb(84,24,34)' }}>{t("button.cancelar")}</Button >


                                        </div>
                                    </Modal.Footer>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

function ButtonContact() {
    const [t, i18n] = useTranslation('global');

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>

            <Button style={{ borderRadius: '48%' }} className="btn-flotante" variant="light" onClick={() => setModalShow(true)}><Image src={book} className="img__button_up" ></Image></Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}
export default ButtonContact;