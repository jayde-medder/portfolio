import React from 'react';
import IconWrapper from './IconWrapper';
import { platformNeeds } from './data';
import { Card } from '@/client/components/ui/card';

const PlatformNeeds: React.FC = () => (
  <div className="sm:px-10">
    <h2>Our platform needed to...</h2>
    <ul>
      {platformNeeds.map(({ icon: Icon, text }, index) => (
        <Card key={index} className="flex items-center my-2 pl-2 py-2 pr-6">
          <IconWrapper Icon={Icon} className="mr-4" />
          {text}
        </Card>
      ))}
    </ul>
  </div>
);

export default PlatformNeeds;
