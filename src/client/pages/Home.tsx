import { AccordionDemo } from '../components/general/AccordionDemo'

function Home() {
  return (
    <section className="">
      <div className="flex flex-col justify-center">
        <p className="font-medium">
          I am an Ōtepoti Dunedin based fullstack developer, live sound engineer
          & co-hoarder of electronic gadgets @ re:Gear Hardware Library.
        </p>
        <AccordionDemo />
      </div>
    </section>
  )
}

export default Home
