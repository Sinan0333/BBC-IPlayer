import React from 'react'

function List({carouselRef,image}) {
  return (
    <div className="overflow-x-hidden relative list-scroll font-bold">
          <div
            ref={carouselRef}
            className="list-scroll flex space-x-4 overflow-x-scroll scroll-smooth snap-x ml-30"
          >
            <div id='one'  className="snap-start  max-w-72  flex-none bg-black text-white">
              <img src={image} alt="Item 1" />
              <p>Ghosts US</p>
            </div>
            <div className="snap-start  max-w-72 flex-none bg-black text-white">
              <img src={image} alt="Item 1" />
              <p>Ghosts US</p>
            </div>
            <div className="snap-start  max-w-72 flex-none bg-black text-white">
              <img src={image} alt="Item 1" />
              <p>Ghosts US</p>
            </div>
            <div id='two' className="snap-start  max-w-72 flex-none bg-black text-white">
              <img src={image} alt="Item 1" />
              <p>Ghosts US</p>
            </div>
            <div className="snap-start  max-w-72 flex-none bg-black text-white">
              <img src={image} alt="Item 1" />
              <p>Ghosts US</p>
            </div>
            <div className="snap-start  max-w-72 flex-none bg-black text-white">
              <img src={image} alt="Item 1" />
              <p>Ghosts US</p>
            </div>
            <div id='trhree' className="snap-start  max-w-72 flex-none bg-black text-white">
              <img src={image} alt="Item 1" />
              <p>Ghosts US</p>
            </div>
            
          </div>
    </div>
  )
}

export default List
