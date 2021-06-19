import React from 'react';
import Slider from '../slider';
import { GlobalStyle } from '../../globalStyle';
import { SliderData } from '../slider/sliderData';

const App = () =>{
  return (
    <> 
      <GlobalStyle />
      <Slider slides={SliderData}/>
    </>
  );
}

export default App;
