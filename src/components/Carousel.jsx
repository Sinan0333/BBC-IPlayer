import React from 'react'

function Carousel() {
    return (
        <section className="bg-black hidden md:block">
          <div className="container mx-auto">
            <div className="flex space-x-4 overflow-x-auto">
              <div className="w-56">
                <img src="	https://ichef.bbci.co.uk/images/ic/320x180/p0jfd4cd.jpg" alt="Content 1" className="rounded"/>
              </div>
              <div className="w-56">
                <img src="	https://ichef.bbci.co.uk/images/ic/320x180/p0jfd4cd.jpg" alt="Content 2" className="rounded"/>
              </div>
              <div className="w-56">
                <img src="	https://ichef.bbci.co.uk/images/ic/320x180/p0jfd4cd.jpg" alt="Content 3" className="rounded"/>
              </div>
              <div className="w-56">
                <img src="	https://ichef.bbci.co.uk/images/ic/320x180/p0jfd4cd.jpg" alt="Content 4" className="rounded"/>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Carousel
