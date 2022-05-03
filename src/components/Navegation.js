import React from 'react'
import { Link } from "react-router-dom";

//Images
import SunImageLink from "../images/sun.jpg"
import MercuryImageLink from "../images/mercury.jpg"
import VenusImageLink from "../images/venus.jpg"
import EarthImageLink from "../images/earth.jpg"
import MarsImageLink from "../images/mars.jpg"
import JupiterImageLink from "../images/jupiter.jpg"


const Navegation = () => {
  return (
    <div className='container mt-3 fatherContainer'>
        <Link to="/Sun" className='links text-white'>
            <figure>
                <img src={SunImageLink} alt="" className='size-img '/>
                <figcaption>Sun</figcaption>
            </figure>
        </Link>

        <Link to="/Mercury" className='links text-white'>
            <figure>
                <img src={MercuryImageLink} alt="" className='size-img'/>
                <figcaption>Mercury</figcaption>
            </figure>
        </Link>

        <Link to="/Venus" className='links text-white'>
            <figure>
                <img src={VenusImageLink} alt="" className='size-img'/>
                <figcaption>Venus</figcaption>
            </figure>
        </Link>

        <Link to="/Earth" className='links text-white'>
            <figure>
                <img src={EarthImageLink} alt="" className='size-img'/>
                <figcaption>Earth</figcaption>
            </figure>
        </Link>

        <Link to="/Mars" className='links text-white'>
            <figure>
                <img src={MarsImageLink} alt="" className='size-img'/>
                <figcaption>Mars</figcaption>
            </figure>
        </Link>

        <Link to="/Jupiter" className='links text-white'>
            <figure>
                <img src={JupiterImageLink} alt="" className='size-img'/>
                <figcaption>Jupiter</figcaption>
            </figure>
        </Link>
    </div>
  )
}

export default Navegation