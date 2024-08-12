import React from 'react'

function Header() {
    return (
        <header className="bg-black text-white py-2">
          <div className="container mx-auto flex justify-between items-center px-4">
            {/* Left Section - Logo and Sign in */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold bg-white text-black px-1">B</div>
                <div className="text-2xl font-bold bg-white text-black px-1">B</div>
                <div className="text-2xl font-bold bg-white text-black px-1">C</div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-icons">person</span>
                <button className="text-white hover:underline">Sign in</button>
              </div>
            </div>
    
            {/* Middle Section - Navigation */}
            <nav className="hidden md:flex space-x-6 text-sm font-semibold">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">News</a>
              <a href="#" className="hover:underline">Sport</a>
              <a href="#" className="hover:underline">Business</a>
              <a href="#" className="hover:underline">Innovation</a>
              <a href="#" className="hover:underline">Culture</a>
              <a href="#" className="hover:underline">Travel</a>
              <a href="#" className="hover:underline">...</a>
            </nav>
    
            {/* Right Section - Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search iPlayer"
                className="bg-gray-800 text-white py-2 px-4 rounded w-48"
              />
            </div>
          </div>
        </header>
      );
}

export default Header
