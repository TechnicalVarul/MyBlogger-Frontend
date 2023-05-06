import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getAllCat } from '../Services/CatService';

const CustomCrousel = ()=> {

  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:'500px'}}
          src="..\img-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Welcome to My Blogging Website</h5>
          <p>A Site where you can find bloges related to all fields.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:'500px'}}
          src="../img-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div style={{color:'white'}}>
            <h5>Welcome to My Blogging Website</h5>
            <p>A Site where you can find bloges related to all fields.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:'500px'}}
          src="../img-3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Welcome to My Blogging Website</h5>
          <p>A Site where you can find bloges related to all fields.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCrousel;