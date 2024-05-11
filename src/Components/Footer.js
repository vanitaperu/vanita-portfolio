import React from 'react';
import { GrGithub, GrLinkedinOption, GrMail, GrPhone } from 'react-icons/gr';

function Footer() {
  return (
    <div className='w-screen bg-black'>
      <div className='flex flex-row p-2 flex-wrap justify-around'>
        <a href='https://www.linkedin.com/in/vanitaperu/' target='_blank' className='text-lg flex flex-row text-violet-300'>
          <div className='h-30 w-30 rounded-full flex justify-center items-center bg-violet-400'>
            <GrLinkedinOption className='text-white' />
          </div>
          <span className='text-white ml-1 mt-[0.1rem]'>www.linkedin.com/in/vanitaperu</span>
        </a>

        <a href='mailto:vanitaperumandla@gmail.com' target='_blank' className='text-lg flex flex-row text-violet-300'>
          <div className='h-30 w-30 rounded-full flex justify-center items-center bg-violet-400'>
            <GrMail className='text-white' />
          </div>
          <span className='text-white ml-1 mt-[0.1rem]'>vanitaperumandla@gmail.com</span>
        </a>

        <a href='https://github.com/vanitaperu' target='_blank' className='text-lg flex flex-row text-violet-300'>
          <div className='h-30 w-30 rounded-full flex justify-center items-center bg-violet-400'>
            <GrGithub className='text-white' />
          </div>
          <span className='text-white ml-1 mt-[0.1rem]'>https://github.com/vanitaperu</span>
        </a>

        <div className='h-30 w-30 rounded-full flex justify-center items-center bg-violet-400'>
          <GrPhone className='text-white' />
        </div>
        <span className='text-white ml-1 mt-[0.1rem]'>647111111</span>
      </div>
    </div>
  );
}

export default Footer;
