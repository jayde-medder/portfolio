import React from 'react'
import IconWrapper from './IconWrapper'
import { platformNeeds } from './data'

const PlatformNeeds: React.FC = () => (
  <div className="max-w-[650px]">
    <h2>Our platform needed to...</h2>
    <hr></hr>
    <ul>
      {platformNeeds.map(({ icon: Icon, text }, index) => (
        <li key={index} className="flex font-light p-2">
          <IconWrapper Icon={Icon} className="mr-5" />
          {text}
        </li>
      ))}
    </ul>
  </div>
)

export default PlatformNeeds
