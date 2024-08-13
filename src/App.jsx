import { animation, comedy, documentary, drama, mostPopular, popular, streamEveryDay, subBanner1, subBanner2, TVMovies, upcoming } from "./api"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Header from "./components/Header"
import List from "./components/List"
import SubBanner from "./components/SubBanner"
import SubFooter from "./components/SubFooter"
import SubHeader from "./components/SubHeader"


function App() {


  return (
  <div className="w-full bg-black">
     <Header/>
     <SubHeader/>
     <Banner/>
     <div className="relative mt-4 mx-auto max-xl:px-4">
      <div className="hidden xl:block fade absolute h-full z-10"></div>
      <div className="hidden xl:block fade absolute right-0 h-full z-10"></div>
      <List title={"Popular"} getData={popular}/>
      <SubBanner getData={subBanner1}/>
      <List title={"Stream Every Episode"} getData={streamEveryDay} poster={true}/>
      <List title={"Most Popular"} getData={mostPopular }/>
      <List title={"Upcoming"} getData={upcoming}/>
      <SubBanner getData={subBanner2}/>
      <List title={"Documentary"} getData={documentary}/>
      <List title={"Drama"} getData={drama}/>
      <List title={"Comedy"} getData={comedy}/>
      <List title={"Animation"} getData={animation}/>
      <List title={"TV Movies"} getData={TVMovies}/>
      <SubFooter/>
     </div>
      <Footer/>
  </div>
  )
}

export default App
