import React from 'react';
import {BrowserRouter,Link,Route, Routes} from 'react-router-dom';
import {header_logo,default_dp} from './assets';
import {Home, Letchworth, Profile, Social} from './pages'
import PageSelect from './components/PageSelect';
import LoginButton from "./components/LoginButton.jsx";
import LogoutButton from "./components/LogoutButton.jsx";



function App() {
  
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center
       sm:px-8 px-4 py-4 shadow-lg border-b rounded-b rounded-lg">

        <Link to="/">
          <div class="font-extrabold text-4xl text-shadow">TerraVista</div>
        </Link>

        <PageSelect/>

        <div className="rounded-full object-fill flex items-center cursor-pointer 
        hover:shadow-lg hover:transform hover:translate-y-[-2px] transition duration-300 ease-in-out hover:border border-black">
          <img src={default_dp} alt="Default DP" className="w-12 h-12 rounded-full object-fill" />
        </div>
        <div>
          <LoginButton/>
          <LogoutButton/>
            <Profile/>
        </div>
        <div></div>
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
