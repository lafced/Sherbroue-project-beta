import React,{useState} from 'react';
import {News} from './carousel';
import {FaArrowRight,FaArrowLeft} from 'react-icons/fa';
import './carousel2.style.css';

const Carousel = ({slides}) => {
        const [current,setCurrent] = useState(0);
        const length = slides.length;
        if(!Array.isArray(slides) || slides.length <= 0) {
            return null;
        }
        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1)
        }
        const prevSlide = () => {
            setCurrent(current === 0 ? length-1 : current - 1)
        }
    return (
        <section className="slider">
            <FaArrowLeft className="left-arrow" onClick={prevSlide}/>
            <FaArrowRight className="right-arrow" onClick={nextSlide}/>
            {News.map((slide,index) => {
                return(
                    <div 
                    className={index === current ? 'slide active': 'slide'}
                    key={index}>
                    {index === current && (
                        <img src={slide.image} alt='images' className='image'/>
                    )}
                       
                    </div>
                )
               
                
            })}
        </section>
       
    )
}
export default Carousel;