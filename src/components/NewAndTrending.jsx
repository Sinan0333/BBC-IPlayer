import React, { useLayoutEffect, useRef } from 'react'
import List from './List';

function NewAndTrending({title,image}) {
    const carouselRef = useRef(null);

    useLayoutEffect(() => {
        if (carouselRef.current) {
            const firstDiv = carouselRef.current.querySelector('#one')
            console.log(firstDiv.getBoundingClientRect());
        }
    },[])

    const scrollLeft = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      }
    };
  
    const scrollRight = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    };
  
    return (
      <div className="relative mb-8">
        <h2 className="text-white text-2xl font-bold mb-4 xl:ml-30">{title}</h2>
        <List carouselRef={carouselRef} image={image}/>
        <button
          onClick={scrollLeft}
          className="absolute right-44 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 px-4 text-white" style={{fontSize: '30px'}}>&lt;
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-30 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 px-4 text-white " style={{fontSize: '30px'}}>&gt;
        </button>
      </div>
    );
}

export default NewAndTrending
