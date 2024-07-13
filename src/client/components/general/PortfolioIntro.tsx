import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function PortfolioIntro() {
  return (
    <section className="w-full mt-16 row-start-3 row-span-2">
      <div className="w-full flex justify-center ">
        <Link to="/gallery">
          <img
            className="max-h-52 max-w-52 rounded-full transition-transform transform hover:scale-[102%] hover:shadow-md"
            src="/portfolio.png"
            alt="A portfolio icon"
          />
        </Link>
      </div>
      <p className="mt-8 w-full text-center">
        <b>View</b> other projects I have worked on
      </p>
      <div className="p-8 flex justify-center">
        <Link to="/gallery">
          <Button variant="secondary">GO TO GALLERY</Button>
        </Link>
      </div>
    </section>
  )
}

export default PortfolioIntro
