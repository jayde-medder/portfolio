import React from 'react'

interface ThumbProps {
  index: number
  selected: boolean
  onClick: () => void
  image?: string
  isVideo?: boolean
}

export const Thumb: React.FC<ThumbProps> = ({
  index,
  selected,
  onClick,
  image,
  isVideo = false,
}) => {
  return (
    <div
      className={`thumb cursor-pointer w-20 mx-2 h-20 overflow-hidden flex items-start justify-center rounded-lg ${
        selected
          ? 'border-2 border-primary-foreground'
          : 'border-2 border-transparent'
      }`}
      onClick={onClick}
      aria-label={`Thumbnail ${index}`}
    >
      {isVideo ? (
        <video src={image} className="-full h-auto object-cover rounded-lg" />
      ) : (
        <img
          src={image}
          alt={`Thumbnail ${index}`}
          className="-full h-auto object-cover rounded-lg"
        />
      )}
    </div>
  )
}
