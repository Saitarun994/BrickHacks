import React from 'react';
import { HikeB } from "../assets"; // Assuming HikeB is the path to your image asset

function Profile() {
  
  // Function to generate star ratings
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        // Render a filled star
        stars.push(<span key={i}>&#9733;</span>);
      } else {
        // Render an empty star
        stars.push(<span key={i}>&#9734;</span>);
      }
    }
    return stars;
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center"></div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          Hike Completed
        </h1>
        {/* First Profile */}
        <section className="mt-10 container-banner rounded border border-transparent hover:border-gray-300 bg-blue-200 hover:bg-blue-300">
          <div className="box-main flex items-center">
            <div className="mr-4">
              <img src={HikeB} alt="Hike B" className="w-20 h-20" /> {/* Image div */}
            </div>
            <div>
              <h1 className="text-big">Hike A</h1>
              <div>{generateStars(4)}</div> {/* Render star rating for Hike A */}
            </div>
          </div>
          <div className="p-4"> {/* Text div */}
            <p className="text-small">
              The trail consists of 3 main parts: 1) the 2,968 ft land-based trail that utilized an
              old railroad bed to transition from the top of the bank to the river’s edge, 
              2) a 3,572 ft-long bridge over the Genesee River Turning Basin, and 
              3) an all-new land-based trail, 3,406 feet in length, 
              through Turning Point Park North and adjacent to the Genesee Marina.    
              The park's trail continues on to connect to the Genesee Riverway Trail. 
              Take the trail and explore over 16 miles of Rochester by reaching Ontario Beach Park to the 
              north or downtown to the south.
            </p>
          </div>
        </section>

        {/* Second Profile */}
        <section className="mt-10 container-banner rounded border border-transparent hover:border-gray-300 bg-blue-200 hover:bg-blue-300">
          <div className="box-main flex items-center">
            <div className="mr-4">
              <img src={HikeB} alt="Hike B" className="w-20 h-20" /> {/* Image div */}
            </div>
            <div>
              <h1 className="text-big">Hike B</h1>
              <div>{generateStars(5)}</div> {/* Render star rating for Hike B */}
            </div>
          </div>
          <div className="p-4"> {/* Text div */}
            <p className="text-small">
              This is a popular trail for birding, hiking, and mountain biking, but you can still enjoy
              some solitude during quieter times of day. The best times to visit this trail are
              March through October. Dogs are welcome, but must be on a leash.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Profile;












