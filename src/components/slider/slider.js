import React, {useState} from 'react'
import {SliderData} from './sliderData';
import {SliderSection, SliderImage, ArrowRight, ArrowLeft, SliderWrapper} from './sliderElements';

const Slider = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

  return (
    <SliderSection>
         <ArrowLeft onClick={prevSlide}/>
         <ArrowRight onClick={nextSlide}/>
      {
        SliderData.map((slide, index) => {
            return(
                <SliderWrapper active={index === current ? true : false} key={index}>
                    {index === current && (<SliderImage src={slide.image} alt='travel image'/>)}
                </SliderWrapper>
            );
        })
      }
    </SliderSection>
  )
}

export default Slider;
