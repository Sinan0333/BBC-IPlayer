import React from 'react'

function Header() {
    return (
        <header className="bg-black text-white py-2 px-30">
          <div className="container mx-auto flex justify-between items-center px-4">

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="text-[26px] font-bold bg-white text-black w-8 h-8 flex items-center justify-center">B</div>
                <div className="text-[26px] font-bold bg-white text-black w-8 h-8 flex items-center justify-center">B</div>
                <div className="text-[26px] font-bold bg-white text-black w-8 h-8 flex items-center justify-center">C</div>
              </div>
              <div className="flex items-center  cursor-pointer">
                <img src="/icons/person.png" alt="person" className='w-9 mb-2' />
                <button className="text-white font-bold text-xs">Sign in</button>
              </div>
            </div>
    
            <nav className="hidden md:flex space-x-12 ml-28 text-sm font-semibold">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">News</a>
              <a href="#" className="hover:underline">Sport</a>
              <a href="#" className="hover:underline">Business</a>
              <a href="#" className="hover:underline">Innovation</a>
              <a href="#" className="hover:underline">Culture</a>
              <a href="#" className="hover:underline">Travel</a>
              <a href="#" className="hover:underline" style={{fontSize: '6px'}}><span className='ml-1'>&#9632;</span><span className='ml-1'>&#9632;</span><span className='ml-1'>&#9632;</span></a>
            </nav>
    
            <div className="flex items-center bg-[#212224] max-h-10 w-[224px">
                <img src="/icons/search.png"  alt="search icon" className='w-5 h-5 bg-[#212224] ml-2' />
              <input
                type="text"
                placeholder="Search iPlayer"
                className="bg-[#212224] font-semibold  py-2 px-4 rounded w-48"
              />
            </div>
          </div>
        </header>
      );
}

export default Header
