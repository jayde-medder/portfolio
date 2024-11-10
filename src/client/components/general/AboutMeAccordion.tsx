import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import Education from './Education';
import { Technologies } from './Technologies';

export function AboutMeAccordion() {
  return (
    <Accordion
      type="multiple"
      defaultValue={['item-1', 'item-2', 'item-3']}
      className="w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Languages & Frameworks</AccordionTrigger>
        <AccordionContent>
          <Technologies />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Education</AccordionTrigger>
        <AccordionContent>
          <Education />
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
