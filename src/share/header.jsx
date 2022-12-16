import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';



//css imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'


//images imports
import logo from "../assets/icon/m.png";
import logoRounded from "../assets/icon/m-rounded-white.png"
import globo from "../assets/icon/globo.png"

//librery
import { useTranslation } from "react-i18next";





function Header() {
    const [t, i18n] = useTranslation('global');

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" id='navbarg' variant="dark">
            <Container>

                <Navbar.Brand href="#home"><Nav.Link as={Link} to="/"><img src={logoRounded}  ></img></Nav.Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="navbar__text" as={Link} to="/about-me">{t("header.about")}</Nav.Link>
                        <Nav.Link className="navbar__text" as={Link} to="/experience">{t("header.expe")}</Nav.Link>
                        <Nav.Link className="navbar__text last_one" as={Link} to="/contact">{t("header.contact")}</Nav.Link>
                        <Image src={globo} className="img__mundo"></Image>
                        <NavDropdown title="" className="droop" id="collasible-nav-dropdown">
                            <NavDropdown.Item  >
                            <Button onClick={() => i18n.changeLanguage('en')} variant="dark" className="mx-2">EN</Button>
                            <Button onClick={() => i18n.changeLanguage('es')} variant="dark">ES</Button>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}
export default Header;