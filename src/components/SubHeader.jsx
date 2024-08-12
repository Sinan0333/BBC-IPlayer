import React from 'react'

function SubHeader() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-pink-500 font-bold text-xl">
          iPLAYER
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="hover:text-gray-400">Channels</a>
          <a href="#" className="hover:text-gray-400">Categories</a>
          <a href="#" className="hover:text-gray-400">A-Z</a>
          <a href="#" className="hover:text-gray-400">TV Guide</a>
          <a href="#" className="hover:text-gray-400">Watchlist</a>
        </nav>
      </div>
    </header>
  )
}

export default SubHeader
