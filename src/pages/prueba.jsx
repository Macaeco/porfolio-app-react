import CV from '../assets/images/cv.jpg';
import Image from 'react-bootstrap/Image'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";

//iameges
import down from '../assets/icon/download.png'
// librerias
import { useTranslation } from "react-i18next";
import { jsPDF } from "jspdf";




function ExportPDF() {
    const [t, i18n] = useTranslation('global');

    const createPDF = async () => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = await document.querySelector("#pdf");
        pdf.html(data).then(() => {
            pdf.save("CV_MACARENA.pdf");
        });
        
        console.log(data)
    };



    return (
        <Container className='cv__container'>
            <Row className='d-flex justify-content-center aling-items-center'>
                <Col className='ms-5 ps-5'>
                    <Button variant="dark" className='m-5 '><Link as={Link} to="/" className="link">
                    {t("cv.b")}</Link></Button>
             
                    <Button variant="dark" className='m-5 'onClick={createPDF} > {t("cv.a")}<Image className='ms-2' src={down} style={{maxWidth:'1.5rem'}}></Image></Button>
                </Col>

            </Row>
            <Row>
                <Col col={12} className="m-5">
                    <Image src={CV} id="pdf" width={'595px'} height={'842px'}></Image>
                </Col>

            </Row>
        </Container>

    )
}
export default ExportPDF;