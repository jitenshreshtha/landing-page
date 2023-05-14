import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import Blockchain from './Blockchain.png';

function Content() {
  return (
    <div className=" h-screen font-jitu">
      <div className="bg-maincolor h-3/4 flex justify-evenly items-center">
        <div className="w-1/2 ">
          <h1 className="text-5xl font-bold text-white">
            Better Solutions For Your Business
          </h1>
          <p className="text-slate-300 font-jitu font-bold text-lg">
            We are team of talented designers maling websites with Tailwind
          </p>
          <div className="flex mt-8">
            <button className="text-white bg-sky-500 px-4 py-2 border-0 rounded-[15px]">
              Get Started
            </button>
            <div>
              <button className="flex items-center text-white px-4 py-2">
                <AiFillPlayCircle className="mr-1"/>
                Watch Video
              </button>
            </div>
          </div>
        </div>
        <div>
            <img src={Blockchain} alt="Blockchain" className="w-52 h-60" />
        </div>
      </div>
      
      <div className='font-jitu flex justify-center items-center'>
        <div className=' text-black font-jitu text-3xl font-extrabold'> About us</div>
    </div>
      </div>
    
  );
}

export default Content;
