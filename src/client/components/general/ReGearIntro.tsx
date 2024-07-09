import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function ReGearIntro() {
  return (
    <section className="mr-0 sm:ml-auto w-fit pt-16 lg:pl-8 lg:pt-52 lg:w-[49%]">
      <div className="w-full flex justify-center ">
        <Link to="/about-regear">
          <img
            className="max-h-52 max-w-52 rounded-full transition-transform transform hover:scale-[102%] hover:shadow-md"
            src="/regear-logo.png"
            alt="re:Gear logo"
          />
        </Link>
      </div>
      <p className="mt-8 w-full text-center">
        <b>Re:Gear</b> is an e-waste minimisation initiative based in Ōtepoti,
        dedicated to fostering an inclusive, sustainable, and innovative
        community where resources are repaired and shared instead of discarded.
      </p>
      <p className="mt-2 w-full text-center">
        My role within the team has been to facilitate the development of our
        inventory management platform.
      </p>
      <div className="p-8 flex justify-center">
        <Link to="/about-regear">
          <Button variant="secondary">LEARN MORE</Button>
        </Link>
      </div>
    </section>
  )
}

export default ReGearIntro
