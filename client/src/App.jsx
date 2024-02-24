import React from 'react';
import {BrowserRouter,Link,Route, Routes} from 'react-router-dom';
import {Home} from './pages'
function App() {
  
  return (
    <BrowserRouter>
      <header className="w-full flex justify-center items-center text-3xl font-bold
       bg-[#fff5dc] sm:px-8 px-4 py-4 shadow-lg border-b border-b-[#a8a8a8]">
        PRODUCT NAME
      </header>

      <main className="flex justify-center  sm:p-8 px-4 py-8 w-full bg-[#fffaeb] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home/>} />
          {
            //<Route path="/nextpage" element={<nextpage/>}/>
          }
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
