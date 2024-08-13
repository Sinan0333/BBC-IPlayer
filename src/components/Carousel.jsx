import React from 'react'

function Carousel({list,setBanner}) {
    return (
        <section className="bg-black hidden md:block">
          <div className="container mx-auto">
            <div className="flex space-x-4 overflow-x-auto">
              {
                list.map((movie,i)=>{
                  return(
                    <div key={movie.id} className="w-56" onClick={()=>setBanner(movie)}>
                      <img src={import.meta.env.VITE_IMAGE_URL+movie.backdrop_path} alt={movie.original_title || movie.original_name} className="rounded"/>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
      );
}

export default Carousel
