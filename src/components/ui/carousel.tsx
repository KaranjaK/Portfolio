import useEmblaCarousel from 'embla-carousel-react'
import * as React from 'react'
import { cn } from '../../lib/utils'

type CarouselPlugin = Parameters<typeof useEmblaCarousel>[1][]
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
} & React.ComponentPropsWithoutRef<'div'>

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ orientation = "horizontal", opts, plugins, setApi, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
      plugins
    )

    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api])
    const scrollNext = React.useCallback(() => api?.scrollNext(), [api])

    React.useEffect(() => {
      if (!api || !setApi) return
      setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
      if (!api) return
      onSelect(api)
      api.on("reInit", onSelect)
      api.on("select", onSelect)
      return () => api.off("select", onSelect)
    }, [api, onSelect])

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") scrollPrev()
        else if (event.key === "ArrowRight") scrollNext()
      },
      [scrollPrev, scrollNext]
    )

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          orientation,
          opts,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = "Carousel"
