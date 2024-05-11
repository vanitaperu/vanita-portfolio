import React from 'react'
import Profile from '../assests/va5.png'
import Resume from '../assests/vanitaperumandla1.pdf'
import {Styles} from "../utils/Style"
import { TiArrowDownOutline } from "react-icons/ti"
import '../App.css'
function About() {
  return (
    <div className='flex flex-wrap justify-center items-center mt-10 p-10' id='Home'>
      <div className='flex-1 py-4'>
        
        <span className={Styles.heroHeadText}>
          Hi,I'm <span className='text-orange-600'>Vanita
          </span>
          <br />
          <span className={Styles.heroSubText}>
            I am Full Stack Developer &
            <br />
            Web Designer
          </span>
        </span>
      
        <br />
       <div className='w-[14rem]'>
  <a href={Resume} download="Resume" target='_blank' rel="noreferrer">
     
            <div className='p-4 mt-2 w-[13rem] rounded-xl text-orange-500 flex justify-center border-4 border-orange-500 hover:border-violet-500 hover:shadow-pink-500'>
            <TiArrowDownOutline className='text-lg mr-3 mt-1 text-orange-500' />
              Resume
            </div>


            
          
          </a>

        </div>
             
      </div>
      <div className='flex flex-wrap'>
        <img src={Profile} alt='profile' className='element object-contain p-9'/>

      </div> 

    </div>
  )
}

export default About