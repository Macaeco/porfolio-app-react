import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image'

import logo from '../assets/icon/cv.png'
//librery
import { useTranslation } from "react-i18next";



//librery


function Footer(){
    const [t, i18n] = useTranslation('global');

    return(

        <Row sticky="botton" >
        <Col className="footer__container d-flex flex-row justify-content-center  ">
            <h6 className="mt-4 me-2 text__footer">{t("footer.a")} </h6>
            {/* <Link to="/legalPages" ><img src={legal} className="mt-2 me-2"style={{width:'2rem', height:'2rem'}}></img></Link>  */}
            <Link to="/cv" as={Link}><Image src={logo} className="mt-3 image__footer" style={{maxWidth: '1.5rem'}}></Image></Link>
        </Col>
    </Row>
    )
}
export default Footer;

