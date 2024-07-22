import React from 'react'
import IconWrapper from './IconWrapper'
import { platformNeeds } from './data'

const PlatformNeeds: React.FC = () => (
  <>
    <h3>Our platform needed to...</h3>
    <ul>
      {platformNeeds.map(({ icon: Icon, text }, index) => (
        <li key={index} className="flex font-light p-2">
          <IconWrapper Icon={Icon} className="mr-5" />
          {text}
        </li>
      ))}
    </ul>
  </>
)

export default PlatformNeeds
