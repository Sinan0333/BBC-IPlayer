import React from 'react'

function Carousel() {
    return (
        <section className="bg-black py-8">
          <div className="container mx-auto">
            <div className="flex space-x-4 overflow-x-auto">
              <div className="w-48">
                <img src="path-to-image1.png" alt="Content 1" className="rounded"/>
                <p className="text-white mt-2">Celebrity MasterChef</p>
              </div>
              <div className="w-48">
                <img src="path-to-image2.png" alt="Content 2" className="rounded"/>
                <p className="text-white mt-2">The Jetty</p>
              </div>
              <div className="w-48">
                <img src="path-to-image3.png" alt="Content 3" className="rounded"/>
                <p className="text-white mt-2">Vienna Blood</p>
              </div>
              <div className="w-48">
                <img src="path-to-image4.png" alt="Content 4" className="rounded"/>
                <p className="text-white mt-2">Interview with the Vampire</p>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Carousel
