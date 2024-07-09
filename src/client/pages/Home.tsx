import { AboutMeAccordion } from '../components/general/AboutMeAccordion'
import ReGearIntro from '../components/general/ReGearIntro'

function Home() {
  return (
    <div className="flex flex-wrap justify-between">
      <section className="sm:w-2/3 lg:w-[49%]">
        <div className="flex flex-col justify-center">
          <h1>
            I am an Ōtepoti Dunedin based fullstack developer, live sound
            engineer & co-hoarder of electronic gadgets @ re:Gear Hardware
            Library.
          </h1>
          <AboutMeAccordion />
        </div>
      </section>
      <ReGearIntro />
    </div>
  )
}

export default Home
