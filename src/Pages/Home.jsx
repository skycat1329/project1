import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import './Home.css';
import image from '../Assets/images/image.png';
const Home = () => {
  return (
    <>

      <div className="home">

        <div className="left">
          
          <h1 className='text'> We’re here to Increase your <br />
            <Typewriter className='typewriter'
              words={[' Productivity', 'Efficiency', 'Success', 'Scalability']}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </div>
        <div className="right">
          <div className='Credit-card'>
            <div className='Circles'>
              <div className='Circle1'></div>
              <div className='Circle2'></div>
            </div>
            <div className='card_Text'>
              <span className='card_Name'>John Doe</span>
              <span className='card_Number'>**** **** **** 1234</span>
            </div>
            <div className='big-Circle1'></div>
            <div className='big-Circle2'>
              <div className='Chip'></div>
            </div>
          </div>
          <img src={image} alt="Home" />
        </div>


      </div>


    </>
  )
}

export default Home