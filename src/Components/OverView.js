import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Styles } from '../utils/Style'; // Corrected import
import { technologies, services } from '../Constants'; // Corrected import
import { motion } from "framer-motion";
import './style.css';

function OverView() {
  return (
    
    <div className="container mx-auto px-4 py-8">
      <div className='flex flex-col items-center' id='OverView'> 
        <span className={`${Styles.sectionHeadText} mb-2`}> 
          Introduction
        </span> 
        <hr className='w-[35%] mb-4'></hr> 
        <div className={Styles.sectionText}>
          I am a positive, enthusiastic Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee I will perform highly in this role. I have extensive experience working both alone and as part of a team on often time-sensitive, challenging web development projects that require outstanding creative and technical capabilities and the ability to ensure all work is optimized across a wide range of platforms. I take my work as a Web Developer seriously and this means I always ensure my skills are kept up to date within this rapidly changing industry. 
        </div>

        <div className='flex flex-wrap justify-center'>
          {services.map((service) => (
            <div key={service.title}> {/* Move the key attribute inside the div */}
              <Tilt
                className="parallax-effect-glare-scale"
                perspective={500} 
                glareColor="#fed7aa"
                glareEnable={true} 
                glareMaxOpacity={0.50}
                scale={1.02} 
                gyroscope={true}
              >
                <div className='p-3 m-3 flex flex-col justify-evenly items-center'>
                  <img className='h-[100px] w-[100px]' src={service.icon} alt={service.title}/>
                  <div className='m-5 text-violet-500'> {service.title} </div>
                </div>
              </Tilt>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center">
          {technologies.map((technology) => (
            <div key={technology.name} className='m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px] border-violet-400 hover:border-violet-400 hover:shadow-orange-300'>
              <img className='p-2' src={technology.icon} alt={technology.name} />
              <div className='text-violet-600 justify-center flex'>{technology.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OverView;
