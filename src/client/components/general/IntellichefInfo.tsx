import { Button } from '../ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

function IntellichefIntro() {
  return (
    <Card className="p-4 max-lg:mt-12 mb-4">
      <CardHeader className="p-4 pb-8 w-full flex flex-row justify-between">
        <img
          className="max-h-24 max-w-24 transition-transform transform hover:scale-[101%] hover:shadow-sm"
          src="/chef hat guy3.png"
          alt="re:Gear logo"
        />
      </CardHeader>
      <CardTitle>IntelliChef</CardTitle>
      <CardDescription className="mt-4 w-full">
        <p>
          An OpenAi API powered recipe generator web app. Initially created @
          DevAcademy with Suwon Jeong & Ben Velasco and rearchitected/designed
          by me.
        </p>
        <p className="pt-4">
          <i>Currently updating for recent OpenAI API changes.</i>
        </p>
      </CardDescription>
      <CardDescription className="mt-2 w-full"></CardDescription>
      <div className="mt-8 flex justify-between">
        <Button variant="ghost">coming soon...&nbsp;</Button>
        <Button variant="ghost">(currently updating)</Button>
      </div>
    </Card>
  );
}

export default IntellichefIntro;
