import React from 'react'

function SubHeader() {
  return (
    <header className="bg-black text-white p-4 border-t border-b border-gray-500">
      <div className="container mx-auto flex justify-between items-center px-30">
        <div className="text-pink-500 font-bold text-4xl">
          iPLAYER
        </div>
        <nav className="flex space-x-12">
          <a href="#" className="hover:text-gray-400">Channels <span style={{fontSize: '10px'}}>&#9660;</span></a>
          <a href="#" className="hover:text-gray-400">Categories  <span style={{fontSize: '10px'}}>&#9660;</span></a>
          <a href="#" className="hover:text-gray-400">A-Z</a>
          <a href="#" className="hover:text-gray-400">TV Guide</a>
          <a href="#" className="hover:text-gray-400">Watchlist</a>
        </nav>
      </div>
    </header>
  )
}

export default SubHeader
