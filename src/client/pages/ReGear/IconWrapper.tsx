import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconWrapperProps {
  Icon: LucideIcon;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ Icon, className }) => (
  <div
    className={`flex items-center justify-center text-primary-foreground p-1 w-7 h-7 ${className}`}
  >
    <Icon />
  </div>
);

export default IconWrapper;
