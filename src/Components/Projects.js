import React from 'react';
import { Styles } from '../utils/Style';
import { projects } from '../Constants';
import Tilt from 'react-parallax-tilt';
import { SiGithub } from 'react-icons/si';

function Projects() {
  return (
    <div>
      <div className='flex flex-row items-center pl-5 justify-center pt-3' id='Projects'>
        <span className={`${Styles.sectionHeadText} text-violet-600`}>Projects</span>
        <hr className='w-[35%]' />
        <div className={`${Styles.sectionText} text-violet-600`}>
          The following projects serve as vivid demonstrations of my skills and expertise, offering tangible examples of my abilities in real-world scenarios. Each project encapsulates a unique challenge and represents a culmination of my experience and dedication.
        </div>
      </div>

      <div className='flex flex-wrap p-7 justify-evenly items-center'>
        {projects.map((project, index) => (
          <Tilt key={index} className='w-[300px] h-[500px] flex flex-col justify-evenly shadow-2xl m-1 items-center hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl border-2 border-violet-900'>
            <div className='flex flex-col justify-center items-center mb-3'>
              <div className='flex justify-center items-center space-x-3'>
                
                <div className='h-[40px] w-[40px] bg-slate-50 rounded-full shadow-violet-500 flex justify-center items-center'>
                  <a href={project.source_code_link} target='_blank' rel='noopener noreferrer'>
                    <SiGithub className="text-3xl font-bold text-violet-600" />
                  </a>
                </div>
              </div>
              <img src={project.image} alt={project.name} className='h-[200px] w-[250px] self-center border-2 border-color-200 rounded-2xl' />
              <div className='text-2xl text-violet-600 font-extrabold'>{project.name}</div>
              <div className='text-center'>
                <span className='text-orange-500'>{project.description}</span>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Projects;
