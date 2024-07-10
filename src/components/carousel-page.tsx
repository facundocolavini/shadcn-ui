import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const CarouselPage = () => {
  return (
    <div className="container mx-auto p-4 w-full flex justify-center">
    <Carousel
     autoplay={2000}
    //  plugins={[
    //   Autoplay({
    //     delay: 2000,
    //   }),
    // ]}
      opts={{
        align: "start",
        // dragFree: true,
        loop: true,
        
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden  sm:flex sm:justify-center sm:items-center' />
      <CarouselNext className='hidden sm:flex sm:justify-center sm:items-center'/>
    </Carousel>
  </div>
  )
}

export default CarouselPage