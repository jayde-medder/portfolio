import { Button } from '../../components/ui/button'
import { Card, CardDescription, CardHeader } from '../../components/ui/card'
import ThumbsCarousel from '../../components/general/ThumbsCarousel'
import PlatformNeeds from './PlatformNeeds'
import { reGearDemoData } from './data'
import { Separator } from '../../components/ui/separator'

function AboutReGear() {
  return (
    <div className="w-full h-full sm:px-10">
      <div className="w-full flex justify-center lg:pb-10">
        <img
          className="max-h-32 max-w-32 rounded-full"
          src="/regear-logo.png"
          alt="re:Gear logo"
        />
      </div>
      <div className="lg:grid grid-cols-5 justify-center items-center space-x-4 min-h-max">
        <section className="items-center col-span-2">
          <p className="my-8 text-center lg:text-base">
            In 2023 <b>Re:Gear</b> began with a small group of friends fixing up
            hardware junk at a community space in North East Valley. News caught
            on, and the junk started to pile up. We needed a way to keep track
            of everything we acquired, what state of repair it was in, and get
            it back out into the community.
          </p>
          <p className="mb-8 text-center lg:text-base">
            After looking into various ways of storing our inventory, we
            realised we had a unique problem on our hands.
          </p>
        </section>
        <section className="flex justify-center h-3/4">
          <Separator orientation="vertical" className="hidden lg:block" />
        </section>
        <section className="items-center col-span-2">
          <PlatformNeeds />
        </section>
      </div>
      <section className="flex flex-col items-center w-full max-w-full py-8">
        <h2>Where we're at:</h2>
        <ThumbsCarousel demos={reGearDemoData} />
      </section>
      <div className="lg:flex gap-8">
        <section className="flex-1">
          <h2>My Role</h2>
          <hr></hr>
          <p className="mb-8">
            While researching inventory solutions, I realised we had the
            opportunity to build something unique to meet our needs. Initially,
            I was the sole developer on the team, but I soon sought the help of
            collaborators interested in honing similar skills. Although one
            collaborator joined for a while before moving away for work, I have
            continued to develop the app largely on my own.
          </p>
          <p className="font-semibold mb-8">
            I'm actively looking for full-stack developers who are keen to
            donate their time to an important and fun local initiative while
            also building their skills. Please get in touch if you're interested
            developing or consulting.
          </p>
        </section>
        <section className="flex-1">
          <h2>The Team</h2>
          <hr></hr>
          <p className="mb-8">
            Lee Nicolson{' '}
            <a className="underline" href="https://www.lwave.nz/about.html">
              (AKA Lightning Wave)
            </a>{' '}
            is the founder and resident hoarder of all things electronic. So far
            he's been responsible for acquring funding and delivering workshops.
          </p>
          <p className="mb-8">
            Julie Dunn & Richard Ley-Hamilton co-founded{' '}
            <a
              className="underline"
              href="https://www.traceuntracerecords.com/"
            >
              trace-untrace records
            </a>{' '}
            and have been helping to turn Lee's ideas into reality by planning,
            fixing things & writing content.
          </p>
        </section>
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
  )
}

export default AboutReGear
