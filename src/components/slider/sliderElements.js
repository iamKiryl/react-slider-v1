import styled from 'styled-components';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'


export const SliderSection = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SliderImage = styled.img`
    width: 100%;
    max-width: 1000px;
    max-height: 600px;
    border-radius: 10px;
    overflow: hidden;
`;

export const ArrowRight = styled(FaArrowAltCircleRight)`
    position: absolute;
    top: 50%;
    right: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`;

export const ArrowLeft = styled(FaArrowAltCircleLeft)`
    position: absolute;
    top: 50%;
    left: 32px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`;

export const SliderWrapper = styled.div`
    opacity: ${({active}) => (active ? '1' : '0')};
    transition: all 1s ease;
    transform: ${({active}) => (active ? 'scale(1.0);' : 'none')};
`;
