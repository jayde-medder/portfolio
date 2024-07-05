import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Languages & Frameworks</AccordionTrigger>
        <AccordionContent>
          React. TypeScript. Tailwind. ShadCn. HTML. Css. Git. Node.js. C. Java.
          C#. SQlite. Knex. Express. JavaScript. Auth0. Vite. Rest API's.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Education</AccordionTrigger>
        <AccordionContent>
          <p className="mb-4">
            <b>Bachelor of Arts</b> - <i>University Of Otago</i>
            <br />
            2018
          </p>
          <p className="mb-4">
            <b>New Zealand Certificate in Applied Software Development</b> -{' '}
            <i>Dev Academy Aotearoa</i>
            <br />
            2023
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Community Projects</AccordionTrigger>
        <AccordionContent>
          re:Gear Hardware Library - managing the creation of a web app that
          facilitates the recirculation of e-waste in Dunedin.
        </AccordionContent>
        <AccordionContent>
          Amped Music Project - co-facilitator & deliverer of workshops for high
          school age musicians to learn about the New Zealand music industry.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
