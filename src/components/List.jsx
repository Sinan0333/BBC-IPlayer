import React from 'react'

function List({carouselRef,image}) {
  return (
    <div className="overflow-x-hidden relative list-scroll  font-bold">
          <div
            ref={carouselRef}
            className="list-scroll flex space-x-4 overflow-x-scroll scroll-smooth xl:pl-30"
          >
            <div id='one'  className="snap-start w-58 lg:w-64 xl:w-72  flex-none bg-black text-white">
              <img src={image} alt="Item 1" />
              <p>Ghosts US</p>
            </div>
            <div className="snap-start w-58 lg:w-64 xl:w-72 flex-none bg-black text-white">
              <img src={image} alt="Item 1" />
              <p>Ghosts US</p>
            </div>
            <div className="snap-start w-58 lg:w-64 xl:w-72 flex-none bg-black text-white">
              <img src={image} alt="Item 1" />
              <p>Ghosts US</p>
            </div>
            <div id='two' className="snap-start w-58 lg:w-64 xl:w-72 flex-none bg-black text-white">
              <img src={image} alt="Item 1" />
              <p>Ghosts US</p>
            </div>
            <div className="snap-start w-58 lg:w-64 xl:w-72 flex-none bg-black text-white">
              <img src={image} alt="Item 1" />
              <p>Ghosts US</p>
            </div>
            <div className="snap-start w-58 lg:w-64 xl:w-72 flex-none bg-black text-white">
              <img src={image} alt="Item 1" />
              <p>Ghosts US</p>
            </div>
            <div id='trhree' className="snap-start w-58 lg:w-64 xl:w-72 flex-none bg-black text-white">
              <img src={image} alt="Item 1" />
              <p>Ghosts US</p>
            </div>
            
          </div>
    </div>
  )
}

export default List
