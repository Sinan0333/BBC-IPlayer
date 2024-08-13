import React, { useEffect, useState } from 'react'

function SubBanner({getData}) {
  const [data,setData] = useState({})

  useEffect(()=>{
    getData().then((data)=>{
      setData(data)
    })
  })
  return (
    <section className=" text-white flex flex-col items-center max-w-[1280px] mx-auto ">
          <div className="mx-auto flex flex-col-reverse md:flex-row md:items-center justify-between">
            <div className="max-w-lg ml-4 md:mt-20 mb-8">
              <h1 className="text-3xl font-bold mb-4">{ data.original_title || data.original_name }</h1>
              <p className="mb-4 text-sm">{data.overview}</p>
              <p className="font-semibold mb-4">{data.release_date}</p>
              <div className="flex space-x-4">
                <button className="bg-white text-black font-bold text-l py-3 px-8 flex "><img src="/icons/watch-now.png" alt="watch-now" className='bg-transparent w-6 mr-2'/>Watch now</button>
                <button className="trailer-button-color py-2 px-6 flex items-center font-bold "><img src="/icons/trailer.png" alt="trailer" className='bg-transparent w-4 mr-2' /> Trailer</button>
              </div>
            </div>
            <div className="mt-8 md:mt-0 w-full banner-gradient">
                <img src={import.meta.env.VITE_IMAGE_URL+data.backdrop_path} alt="The Jetty" className="w-full h-auto "/>
            </div>
          </div>
    </section>
  )
}

export default SubBanner
