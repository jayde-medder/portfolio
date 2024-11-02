import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { Technologies } from './Technologies';

export function AboutMeAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Languages & Frameworks</AccordionTrigger>
        <AccordionContent>
          <Technologies />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Education</AccordionTrigger>
        <AccordionContent>
          <p>
            <b>Bachelor of Arts </b>-{' '}
            <i>(Computer Science Major, Music Technology Minor)</i>
          </p>
          <p className="mt-2">
            University Of Otago
            <br />
            2018
          </p>
          <p className="mt-6">
            <b>New Zealand Certificate in Applied Software Development</b>
          </p>
          <p className="mt-2">
            Dev Academy Aotearoa
            <br />
            2023
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Community Projects</AccordionTrigger>
        <AccordionContent>
          <p>
            <b>Re:Gear Hardware Library </b>- managing the creation of a web app
            that facilitates the recirculation of e-waste in Dunedin.{' '}
          </p>
          <p className="mt-6">
            <b>Amped Music Project </b>- co-facilitator & deliverer of workshops
            for high school age musicians to learn about the New Zealand music
            industry.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
