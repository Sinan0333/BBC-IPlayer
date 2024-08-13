import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

function List({title,getData,poster}) {
    const [data,setData] = useState([])
    const carouselRef = useRef(null);

    const scrollLeft = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: -900, behavior: 'smooth' });
      }
    };
  
    const scrollRight = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 900, behavior: 'smooth' });
      }
    };

    useEffect(()=>{
      getData().then((data)=>{
        setData(data)
      })
    },[])
  
    return (
      <div className="relative mb-8">
        <h2 className="text-white text-2xl font-bold mb-4 xl:ml-30">{title}</h2>
        <div className="overflow-x-hidden relative list-scroll  font-bold">
          <div ref={carouselRef} className="list-scroll flex space-x-4 overflow-x-scroll scroll-smooth xl:pl-30">
            {
              data.map((item,i)=>{
                const url = poster ? item.poster_path : item.backdrop_path
                return(
                  <div id='one'  className="snap-start w-58 lg:w-64 xl:w-72  flex-none bg-black text-white">
                    <img src={import.meta.env.VITE_IMAGE_URL+url} alt="Item 1" />
                    <p>{item.original_title || item.original_name}</p>
                  </div>
                )
              })
            }
            
          </div>
        </div>
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

export default List
