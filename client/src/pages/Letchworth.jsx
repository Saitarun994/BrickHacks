import React from 'react'
import {useNavigate} from 'react-router-dom'
import {c3,hmap} from '../assets'


function Letchworth() {
  let title = "Letchworth State Park"
  let tags = ["Hiking", "nature trail", "camping", "swimming", "rafting", "hot air balloon"]
  let difficulty = "Easy"
  let description="Letchworth State Park, the 'Grand Canyon of the East,' is where a 17-mile stretch of the Genesee River roars through the park's scenic gorge with three major waterfalls and cliffs as high as 600 feet, surrounded by lush forests. Recently named Best State Park in the nation, Letchworth's new Humphrey Nature Center is a must-see. "
  let distance = "17.0 mi"
  let rating = "4.5"
  let location = "150 Letchworth Park"
  
  return (
    <div className='flex-row'>
    <div className='max-w-7xl mx-auto'>
            <div className="max-h-96 overflow-hidden bg-gray-200 rounded-lg my-10 shadow-md relative  relative">
                <img 
                className="w-full h-auto max-h-full object-cover"
                src={c3}
                alt="Image"
                />
                <div className="absolute bottom-0 left-0 p-4 text-left text-white shadow-lg bg-black bg-opacity-30 w-full">
                    <h1 className='font-extrabold text-2xl'>
                        {title}
                    </h1>
                    <p className='mt-1 text-sm max-w-[500px]'>
                        ⚲ {location}
                    </p>
                    <p className="mt-1 text-xs">{rating}/5★ {distance} {difficulty}</p>
                </div>
            </div>
        </div>
        <div className='max-w-7xl mx-auto'>
            <h1 className='font-extrabold text-[#222328] text-[24px] mb-2 px-2'>
            {description}
            </h1>
        </div>
        <div className='max-w-5xl mx-auto'>
        <div className="flex items-center justify-center bg-gray-200 p-4 space-x-4 rounded-lg">
            <img
                src={hmap}  // Replace with your actual image source
                alt="Small Image"
                className="w-48 rounded-md mr-4"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Book Now
            </button>
            </div>
        </div>
    </div>
    
  )
}

export default Letchworth
