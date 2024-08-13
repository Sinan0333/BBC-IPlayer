import React, { useEffect, useState } from 'react'
import Carousel from './Carousel';
import { getTrendingMovies } from '../api';

function Banner() {
  const [banner, setBanner] = useState({})
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(()=>{
    getTrendingMovies().then((data)=>{
      setTrendingMovies(data)
      setBanner(data[0])
    })
  },[])
  
  console.log(trendingMovies)
    return (
        <div className=" text-white flex flex-col items-center mx-auto max-w-[1280px]">
          <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="max-w-lg ml-4 md:mt-20 text-center md:text-left mb-4">
              <h1 className="text-3xl font-bold mb-4">{ banner.original_title || banner.original_name }</h1>
              <p className="mb-4 text-sm">{banner.overview}</p>
              <p className="font-semibold mb-4">{banner.release_date}</p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <button className="bg-white text-black font-bold text-l py-3 px-8 flex "><img src="/icons/watch-now.png" alt="watch-now" className='bg-transparent w-6 mr-2'/>Watch now</button>
                <button className="hidden trailer-button-color py-2 px-6 md:flex  items-center font-bold "><img src="/icons/trailer.png" alt="trailer" className='bg-transparent w-4 mr-2' /> Trailer</button>
              </div>
            </div>
            <div className="mt-8 md:mt-0 w-full banner-gradient">
                <img src={import.meta.env.VITE_IMAGE_URL+banner.backdrop_path} alt="The Jetty" className="w-full h-auto "/>
            </div>
          </div>
          <Carousel list={trendingMovies} setBanner={setBanner}/>
        </div>
      );
}

export default Banner
