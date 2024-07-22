import React from 'react'

interface ThumbProps {
  index: number
  selected: boolean
  onClick: () => void
  image: string
}

export const Thumb: React.FC<ThumbProps> = ({
  index,
  selected,
  onClick,
  image,
}) => {
  return (
    <div
      className={`thumb cursor-pointer w-20 mx-2 h-20 overflow-hidden flex items-start justify-center rounded-lg ${
        selected
          ? 'border-2 border-primary-foreground'
          : 'border-2 border-transparent'
      }`}
      onClick={onClick}
    >
      <img
        src={image}
        alt={`Thumbnail ${index}`}
        className="thumbnail-image w-full h-auto object-cover rounded-lg"
      />
    </div>
  )
}
