import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
  
  //? <<<<<<<<< Page Starts >>>>>>>>>>>
  return (
    <div className='max-w-7xl mx-auto'>
      <div className="flex flex-col items-center justify-center">
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          About Product
        </h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w [500px]'>
          Sub-text
        </p>
      </div>
    </div>
  )
}

export default Home
