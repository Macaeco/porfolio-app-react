import Carousel from 'react-bootstrap/Carousel';
import picture1 from "../assets/images/code3.jpg"
import picture2 from "../assets/images/code9.jpg"
import picture3 from "../assets/images/code5.jpg"
import picture4 from "../assets/images/code4.jpg"








function CarouselCV() {
  return (
    <Carousel className='carousel_container'>
      <Carousel.Item>
        <img 
          className=" w-100 carrousel__image"
          src={picture1}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100 carrousel__image"
          src={picture2}
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100 carrousel__image"
          src={picture3}
          alt="Third slide"
        />

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100 carrousel__image"
          src={picture4}
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselCV;