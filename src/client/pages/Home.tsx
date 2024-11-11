import { AboutMeAccordion } from '../components/general/AboutMeAccordion';
import IntellichefIntro from '../components/general/IntellichefInfo';
import ReGearIntro from '../components/general/ReGearIntro';

function Home() {
  return (
    <div className="w-full h-full p-8 lg:flex items-start">
      <section className="sm:max-lg:w-2/3 lg:w-1/2 lg:h-full lg:pr-8 lg:overflow-y-scroll lg:scrollbar-thin lg:scrollbar-thumb-primary-foreground scrollbar-track-background scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <div className="flex flex-col pb-16 lg:pb-4">
          <h1>
            I am an Ōtepoti Dunedin based full-stack developer, live sound
            engineer & co-hoarder of electronic gadgets @ re:Gear Hardware
            Library.
          </h1>
          <AboutMeAccordion />
        </div>
      </section>
      <section className="sm:max-lg:pb-8 lg:w-1/2 lg:h-full lg:px-8 lg:overflow-y-scroll lg:scrollbar-thin lg:scrollbar-thumb-primary-foreground scrollbar-track-background scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <h3 className="text-xl font-medium mt-0">Dev Projects</h3>
        <ReGearIntro />
        <IntellichefIntro />
      </section>
    </div>
  );
}

export default Home;
