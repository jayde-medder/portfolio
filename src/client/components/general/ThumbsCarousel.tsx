import { useState, useEffect, useCallback } from 'react'
import { Card, CardFooter, CardHeader } from '../ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselPrevious,
  CarouselNext,
} from '../ui/carousel'
import { Thumb } from './Thumb'
import { ThumbsCarouselItems } from '@/models/thumbCarouselItems'

function ThumbsCarousel({ demos }: ThumbsCarouselItems) {
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onThumbClick = useCallback(
    (index: number) => {
      if (!api) return
      api.scrollTo(index)
    },
    [api]
  )

  useEffect(() => {
    if (!api) return

    const updateSelectedIndex = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    api.on('select', updateSelectedIndex)

    updateSelectedIndex() // Set initial selected index

    return () => {
      api.off('select', updateSelectedIndex)
    }
  }, [api])

  return (
    <div className="max-w-full -mr-32">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {demos.map((demo, index) => (
            <CarouselItem key={index} className="">
              <Card className="border-none p-2">
                <CardHeader className="h-[350px] p-3">
                  <img
                    src={demo.image}
                    alt={demo.header}
                    className="h-full object-scale-down"
                  />
                </CardHeader>
                <CardFooter className="bg-secondary flex flex-col items-center h-[150px] rounded-md p-3">
                  <h3 className="text-xl font-bold tracking-wide m-2">
                    {demo.header}
                  </h3>
                  <p className="text-center m-2 text-background">
                    {demo.description}
                  </p>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4">
          <div className="overflow-hidden">
            <div className="flex w-full justify-center">
              <CarouselPrevious />
              {demos.map((demo, index) => (
                <Thumb
                  key={index}
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  image={demo.image}
                />
              ))}
              <CarouselNext />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default ThumbsCarousel
