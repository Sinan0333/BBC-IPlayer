import React from 'react'

function Footer() {
  return (
    <div className="bg-white border-t border-gray-300 py-4 px-30 h-58">
      <div className="text-2xl text-gray-800 font-bold mb-2">Explore the BBC</div>
      <div className='flex mt-4 font-semibold text-sm'>
        <div className='w-1/6 flex flex-col border-r border-black'>
            <a href="#" className="hover:underline mb-3">Home</a>
            <a href="#" className="hover:underline mb-2">Travel</a>
        </div>
        <div className='w-1/6  ml-4 flex flex-col border-r border-black'>
            <a href="#" className="hover:underline mb-2">News</a>
            <a href="#" className="hover:underline mb-3">Earth</a>
        </div>
        <div className='w-1/6  ml-4 flex flex-col border-r border-black'>
            <a href="#" className="hover:underline mb-2">Sport</a>
            <a href="#" className="hover:underline mb-3">Video</a>
        </div>
        <div className='w-1/6  ml-4 flex flex-col border-r border-black'>
            <a href="#" className="hover:underline mb-2">Business</a>
            <a href="#" className="hover:underline mb-3">Live</a>
        </div>
        <div className='w-1/6  ml-4 flex flex-col border-r border-black'>
            <a href="#" className="hover:underline mb-2">Innovation</a>
        </div>
        <div className='w-1/6 h-16 ml-4 flex flex-col border-r border-black'>
            <a href="#" className="hover:underline mb-2">Culture</a>
        </div>
      </div>
      <div className="border-t mt-2 border-gray-300 pt-2 text-gray-600">
        <div className='mt-2 flex space-x-4 text-sm'>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">About the BBC</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">Accessibility Help</a>
            <a href="#" className="hover:underline">Parental Guidance</a>
            <a href="#" className="hover:underline">Contact the BBC</a>
            <a href="#" className="hover:underline">BBC emails for you</a>
            <a href="#" className="hover:underline">Advertise with us</a>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-600 ">
        <p><span className='font-semibold text-black'>Copyright © 2024 BBC.</span> The BBC is not responsible for the content of external sites.<span className="hover:underline font-semibold text-black">Read about our approach to external linking.</span></p>
      </div>
    </div>
  );
}

export default Footer
