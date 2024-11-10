import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import { FaGraduationCap, FaAward } from 'react-icons/fa';

export default function Education() {
  return (
    <div className="flex flex-col gap-2">
      <Card className="flex items-center py-8 px-4">
        <div className="p-2">
          <FaGraduationCap size={40} />
        </div>
        <CardContent>
          <CardTitle>
            Bachelor of Arts - Computer Science Major, Music Technology Minor
          </CardTitle>
          <CardDescription className="font-semibold">
            University Of Otago
          </CardDescription>
          <CardDescription>2018</CardDescription>
        </CardContent>
      </Card>
      <Card className="flex items-center py-8 px-4">
        <div className="p-2">
          <FaAward size={40} />
        </div>
        <CardContent>
          <CardTitle>
            New Zealand Certificate in Applied Software Development
          </CardTitle>
          <CardDescription className="font-semibold">
            Dev Academy Aotearoa
          </CardDescription>
          <CardDescription>2023</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}
