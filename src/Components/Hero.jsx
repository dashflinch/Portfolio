import React from 'react'
import hero from '../assets/image/hero.png';

const Hero = () => {
    return (
        <div className="px-5">
            <img className="w-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer " src={hero} alt="hero img" />
        </div>
    )
}

export default Hero
