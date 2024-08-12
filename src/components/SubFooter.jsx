import React from 'react'

function SubFooter() {
  return (
    <div className="bg-black text-white text-sm py-2 h-20 flex justify-between px-30 border-t">
      <div className="flex space-x-4">
        <div>
          <span className="text-gray-400">Change location: </span>
          <span className="font-bold">London</span>
          <span className="ml-1">▼</span>
        </div>
        <div>
          <span className="text-gray-400">Change language: </span>
          <span className="font-bold">English</span>
          <span className="ml-1">▼</span>
        </div>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="hover:underline">Parental Controls</a>
        <a href="#" className="hover:underline">Help & FAQ</a>
      </div>
    </div>
  )
}

export default SubFooter
