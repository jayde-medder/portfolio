import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { GoArrowUpRight, GoArrowRight } from 'react-icons/go';

function ReGearIntro() {
  return (
    <Card className="p-4 max-lg:mt-12 mb-4">
      <CardHeader className="p-4 pb-8 w-full flex flex-row justify-between">
        <Link to="/about-regear">
          <img
            className="max-h-24 max-w-24 rounded-full transition-transform transform hover:scale-[101%] hover:shadow-sm"
            src="/regear-logo.png"
            alt="re:Gear logo"
          />
        </Link>
        <a href="https://regear.org.nz/" target="blank">
          <GoArrowUpRight />
        </a>
      </CardHeader>
      <CardTitle>Re:Gear</CardTitle>
      <CardDescription className="mt-4 w-full">
        An e-waste minimisation initiative based in Ōtepoti, dedicated to
        fostering an inclusive, sustainable, and innovative community where
        resources are repaired and shared instead of discarded.
      </CardDescription>
      <CardDescription className="mt-2 w-full">
        My role within the team has been to facilitate the development of our
        inventory management platform.
      </CardDescription>
      <div className="mt-8 flex justify-between">
        <Link to="/about-regear">
          <Button variant="ghost">
            LEARN MORE&nbsp;
            <GoArrowRight />
          </Button>
        </Link>
        <a href="https://regear.org.nz/" target="blank">
          <Button variant="outline">
            regear.org.nz&nbsp;
            <GoArrowUpRight />
          </Button>
        </a>
      </div>
    </Card>
  );
}

export default ReGearIntro;
