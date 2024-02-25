import React from 'react'
import {useNavigate} from 'react-router-dom'
import {c3} from '../assets'




function Letchworth() {
  let title = "Letchworth State Park"
  let tags = ["Hiking", "nature trail", "camping", "swimming", "rafting", "hot air balloon"]
  let difficulty = "Easy"
  let description="Letchworth State Park, the 'Grand Canyon of the East,' is where a 17-mile stretch of the Genesee River roars through the park's scenic gorge with three major waterfalls and cliffs as high as 600 feet, surrounded by lush forests. Recently named Best State Park in the nation, Letchworth's new Humphrey Nature Center is a must-see. "
  let distance = "17.0 mi"
  let rating = "4.5"
  
  return (
    <div className='max-w-7xl mx-auto'>
      <div className="flex flex-col items-center justify-center">
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
         {title}
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w [500px]'>
          Terravista: Where Trails and Tales Collide - Hike, Review, Rejoice!
        </p>
        <div className="max-h-96 overflow-hidden bg-gray-200 rounded-lg my-10 shadow-md">
          <img 
            className="w-full h-auto max-h-full object-cover"
            src={c3}
            alt="Map Image"
          />
        </div>
      </div>

      <h1 className='font-extrabold text-[#222328] text-[32px] mb-2'>
         Adventures near Rochester
      </h1>
      
    </div>
  )
}

export default Letchworth
