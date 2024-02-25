import React, { useState } from 'react';
import {BrowserRouter,Link,Route, Routes} from 'react-router-dom';
import {header_logo,default_dp} from './assets';
import {Home, Letchworth, Profile, Social} from './pages'
import PageSelect from './components/PageSelect';



  

function App() {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center
       sm:px-8 px-4 py-4 shadow-lg border-b rounded-b rounded-lg">

        <Link to="/">
          <div class="font-extrabold text-4xl text-shadow">TerraVista</div>
        </Link>

        <PageSelect/>


        {
         //! Dropdown Menu Below
        }
        <div className="relative">
      <div
        className="rounded-full object-fill flex items-center cursor-pointer 
        hover:shadow-lg hover:transform hover:translate-y-[-2px] transition duration-300 ease-in-out hover:border border-black"
        onClick={toggleDropdown}
      >
        <img src={default_dp} alt="Default DP" className="w-12 h-12 rounded-full object-fill" />
      </div>

      {isDropdownOpen && (
        <div className="absolute top-0 right-0 mt-2 bg-white rounded-md shadow-lg px-4">
          <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:border hover:border-gray-400 w-full text-left transition duration-300 ease-in-out">
            Button 1
          </button>
          <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:border hover:border-gray-400 w-full text-left transition duration-300 ease-in-out">
            Button 2
          </button>
          <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 hover:border hover:border-gray-400 w-full text-left transition duration-300 ease-in-out">
            Button 3
          </button>
        </div>
      )}

      {isDropdownOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 cursor-pointer"
          onClick={closeDropdown}
        ></div>
      )}
    </div>

      </header>

      <main className="flex justify-center items-center sm:p-8 px-4 py-8 w-full bg-[##fff] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/social" element={<Social/>}/>
          <Route path="/Letchworth" element={<Letchworth/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
