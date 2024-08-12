import Banner from "./components/Banner"
import Footer from "./components/Footer"
// import Carousel from "./components/Carousel"
import Header from "./components/Header"
import NewAndTrending from "./components/NewAndTrending"
import SubBanner from "./components/SubBanner"
import SubFooter from "./components/SubFooter"
import SubHeader from "./components/SubHeader"

const img1 = "https://ichef.bbci.co.uk/images/ic/464x261/p0jg5tzg.jpg"
const img2 = "https://ichef.bbci.co.uk/images/ic/464x696/p0flnjk4.jpg"

function App() {


  return (
    < div className="bg-black">
     <Header/>
     <SubHeader/>
     <Banner isCarousel={true}/>
     <div className="relative mt-4">
      <div className="left-fade absolute h-full z-10"></div>
      <div className="left-fade absolute right-0 h-full z-10"></div>
      <NewAndTrending title={"New & Trending"} image={img1}/>
      <SubBanner/>
      <NewAndTrending title={"Stream Every Episode"} image={img2}/>
      <NewAndTrending title={"Most Popular"} image={img1}/>
      <NewAndTrending title={"BBC News"} image={img1}/>
      <SubBanner/>
      <NewAndTrending title={"Drama"} image={img1}/>
      <NewAndTrending title={"Comedy"} image={img1}/>
      <SubFooter/>
     </div>
      <Footer/>
    </div>
  )
}

export default App
