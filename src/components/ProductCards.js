import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { productData } from './productData';


// arrows

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }



// cards
const ProductCards = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        //nextArrow: SampleNextArrow,
        //prevArrow: SamplePrevArrow,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    
 
         <div className='App shadow-md m-5'>
            <h3 className=' text-blue-500 text-justify'> Our Products</h3>
            <Slider {...settings}>
            {productData.map((item)=>(
                <div className='card  '>
                    <div className='max-w-[400px] h-[200px] w-full m-auto py-5 px-4 relative group rounded-4xl'>
                       <img src={item.product_img} alt={item.id} /> 
                       <h3>{item.description}</h3>
                    </div>
                </div>
            ))}
            <div className=''></div>
            </Slider>
           
         </div>
  
  )
}

export default ProductCards