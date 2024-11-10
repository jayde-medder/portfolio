import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { GoArrowUpRight, GoArrowRight } from 'react-icons/go';

function IntellichefIntro() {
  return (
    <Card className="p-4 max-lg:mt-12 mb-4">
      <CardHeader className="p-4 pb-8 w-full flex flex-row justify-between">
        <Link to="/about-regear">
          <img
            className="max-h-24 max-w-24 transition-transform transform hover:scale-[101%] hover:shadow-sm"
            src="/chef hat guy3.png"
            alt="re:Gear logo"
          />
        </Link>
        <a href="https://regear.org.nz/" target="blank">
          <GoArrowUpRight />
        </a>
      </CardHeader>
      <CardTitle>IntelliChef</CardTitle>
      <CardDescription className="mt-4 w-full">
        An OpenAi API powered recipe generator web app. Initially created @ DevAcademy with Suwon Jeong & Ben Velasco and rearchitected/designed by me. 
      </CardDescription>
      <CardDescription className="mt-2 w-full">
        
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
            view app&nbsp;
            <GoArrowUpRight />
          </Button>
        </a>
      </div>
    </Card>
  );
}

export default IntellichefIntro;
