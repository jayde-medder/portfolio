import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Card } from '../ui/card';

function PortfolioIntro() {
  return (
    <Card className="lg:p-12 max-lg:pt-12 mb-4">
      <div className="w-full flex justify-center ">
        <Link to="/gallery">
          <img
            className="max-h-36 max-w-36 rounded-full transition-transform transform hover:scale-[102%] hover:shadow-md"
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
    </Card>
  );
}

export default PortfolioIntro;
