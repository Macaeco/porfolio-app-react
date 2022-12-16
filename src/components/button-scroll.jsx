import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

//librerias
import { FaArrowCircleUp } from 'react-icons/fa';
//images
import icono from '../assets/icon/up-white.png'

const ButtonScroll = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        }); 
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button onClick={scrollToTop} className='button__scroll' style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
            <Image src={icono}></Image>UP
        </Button>
    );
}

export default ButtonScroll;
