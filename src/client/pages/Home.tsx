import { AboutMeAccordion } from '../components/general/AboutMeAccordion'
import PortfolioIntro from '../components/general/PortfolioIntro'
import ReGearIntro from '../components/general/ReGearIntro'

function Home() {
  return (
    <div className="w-full lg:grid grid-cols-2 grid-rows-4 lg:h-[1200px]">
      <section className="sm:max-lg:w-2/3 row-start-1 row-span-2">
        <div className="flex flex-col">
          <h1>
            I am an Ōtepoti Dunedin based fullstack developer, live sound
            engineer & co-hoarder of electronic gadgets @ re:Gear Hardware
            Library.
          </h1>
          <AboutMeAccordion />
        </div>
      </section>
      <ReGearIntro />
      <PortfolioIntro />
    </div>
  )
}

export default Home
