import { Button } from '../../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '../../components/ui/card';
import ThumbsCarousel from '../../components/general/ThumbsCarousel';
import PlatformNeeds from './PlatformNeeds';
import { reGearDemoData } from './data';

function AboutReGear() {
  return (
    <div className="w-full h-full p-8 lg:overflow-y-scroll lg:scrollbar-thin lg:scrollbar-thumb-primary-foreground scrollbar-track-background scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <div className="w-full flex pb-10">
        <img
          className="max-h-24 max-w-24 sm:max-w-28 sm:max-h-28 rounded-full"
          src="/regear-logo.png"
          alt="re:Gear logo"
        />
      </div>
      <h1>
        Re:Gear is an Ōtepoti based e-waste recirculation initiative that
        encourages the mahi of repair
      </h1>
      <Card className="my-8">
        <CardHeader className="tracking-normal">
          In 2023, Re:Gear began with a small group of friends fixing up
          hardware junk at a community space in North East Valley. News caught
          on, and the e-waste started to pile up. We needed a way to keep track
          of everything we acquired, what state of repair it was in, and get it
          back out into the community.
        </CardHeader>
        <CardFooter className="font-semibold">
          After looking into various ways of storing our inventory, we realised
          we had a unique problem on our hands.
        </CardFooter>
      </Card>
      <section>
        <PlatformNeeds />
      </section>
      <section className="flex items-center flex-col w-full max-w-full py-8">
        <h2>Where we're at:</h2>
        <ThumbsCarousel demos={reGearDemoData} />
      </section>
      <div className="lg:flex gap-8">
        <Card className="flex-1">
          <CardHeader className="px-8 py-4">
            <h2 className="">My Role</h2>
          </CardHeader>
          <CardContent className="px-4">
            <CardDescription className="mb-8">
              While researching inventory solutions, I realised we had the
              opportunity to build something unique to meet our needs.
              Initially, I was the sole developer on the team, but I soon sought
              the help of collaborators interested in honing similar skills.
              Although one collaborator joined for a while before moving away
              for work, I have continued to develop the app largely on my own.
            </CardDescription>
            <CardDescription className="font-semibold mb-8 pb-8">
              I'm actively looking for full-stack developers who are keen to
              donate their time to an important and fun local initiative while
              also building their skills. Please get in touch if you're
              interested developing or consulting.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader className="px-8 py-4">
            <h2 className="">The Team</h2>
          </CardHeader>
          <CardContent className="px-4">
            <CardDescription className="mb-8">
              Lee Nicolson{' '}
              <a
                className="underline"
                href="https://www.lwave.nz/about.html"
                target="blank"
              >
                (AKA Lightning Wave)
              </a>{' '}
              is the founder and resident hoarder of all things electronic. So
              far he's been responsible for acquring funding and delivering
              workshops.
            </CardDescription>
            <CardDescription className="mb-8 pb-8">
              Julie Dunn & Richard Ley-Hamilton co-founded{' '}
              <a
                className="underline"
                href="https://www.traceuntracerecords.com/"
                target="blank"
              >
                trace-untrace records
              </a>{' '}
              and have been helping to turn Lee's ideas into reality by
              planning, fixing things & writing content.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <Card className="mt-8">
        <CardHeader className="text-xl text-center">
          Join our community
        </CardHeader>
        <CardDescription className="text-center">
          We're growing a community of makers in Dunedin! Tinkerers of any skill
          level welcome!
        </CardDescription>
        <div className="p-8 flex justify-center">
          <a href="https://discord.gg/3fRb7rC7Qj">
            <Button variant="secondary" className="h-fit p-3 text-wrap">
              <div className="m-3">
                <img src="/discord-mark-white.png" className="max-h-4 w-auto" />
              </div>
              JOIN THE MAKE STUFF DUNEDIN DISCORD
              <div className="m-3">
                <img src="/discord-mark-white.png" className="max-h-4 w-auto" />
              </div>
            </Button>
          </a>
        </div>
      </Card>
    </div>
  );
}

export default AboutReGear;
