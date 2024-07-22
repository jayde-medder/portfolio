import React from 'react'
import { LucideIcon } from 'lucide-react'

interface IconWrapperProps {
  Icon: LucideIcon
  className?: string
}

const IconWrapper: React.FC<IconWrapperProps> = ({ Icon, className }) => (
  <div className={`flex items-center justify-center w-6 h-6 ${className}`}>
    <Icon />
  </div>
)

export default IconWrapper
