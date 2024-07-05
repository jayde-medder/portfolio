import { AboutMeAccordion } from '../components/general/AboutMeAccordion'

function Home() {
  return (
    <section className="">
      <div className="flex flex-col justify-center">
        <p className="font-medium text-3xl">
          I am an Ōtepoti Dunedin based fullstack developer, live sound engineer
          & co-hoarder of electronic gadgets @ re:Gear Hardware Library.
        </p>
        <AboutMeAccordion />
      </div>
    </section>
  )
}

export default Home
