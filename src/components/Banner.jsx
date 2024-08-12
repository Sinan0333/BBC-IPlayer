import React from 'react'

function Banner() {
    return (
        <section className="bg-black text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-12">
            {/* Text content */}
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold mb-4">The Jetty</h1>
              <p className="mb-4">What if the truth destroys you? Dark secrets spark shocking consequences in a sleepy town.</p>
              <p className="font-semibold mb-6">What if the truth destroys you?</p>
              <div className="flex space-x-4">
                <button className="bg-white text-black py-2 px-4 rounded">Watch now</button>
                <button className="bg-gray-700 py-2 px-4 rounded">Trailer</button>
              </div>
            </div>
            {/* Image */}
            <div className="mt-8 md:mt-0">
              <img src="https://ichef.bbci.co.uk/images/ic/1872x1053/p0j91dt3.jpg" alt="The Jetty" className="w-full h-auto object-cover"/>
            </div>
          </div>
        </section>
      );
}

export default Banner
