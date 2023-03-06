import React from 'react'
import Image from 'next/image'
import useEmblaCarousel, {
  EmblaOptionsType,
} from 'embla-carousel-react'

import { CarModel } from '~/types';
import { Block, Button, Text, Flex, Spacer } from 'vcc-ui';
import { ChevronCircled, ChevronSmall } from '~/components/icons'
import { rootCertificates } from 'tls';
// import { ChevronBack, ChevronForward } from '~/icons'

const options: EmblaOptionsType = {
  loop: false,
  draggable: true,
  speed: 10,
  align: 'start',
};


interface CarsSlideshowProps {
  cars?: CarModel[]
}

const CarsSlideshow: React.FC<CarsSlideshowProps> = (props) => {
  const { cars } = props

  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi, setSelectedIndex]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);



  const slides = cars?.map((car) => (
    <Block
      extend={{
        position: 'relative',
        flexShrink: 0,
        width: "300",
        marginRight: '1rem',
      }}
      key={car?.id}>

      <Block extend={{ marginBottom: "0.5rem" }}>
        <Text fg="foreground.secondary">{car?.bodyType}</Text>
        <Text subStyle="emphasis">{car?.modelName}</Text>
        <Text fg="foreground.secondary">{car?.modelType}</Text>
        <Spacer />
      </Block>
      <Image src={car.imageUrl} width={300} height={225} alt={car.modelName} />
    </Block >
  ));

  return (
    <Block>

      <Block
        ref={emblaRef}
        extend={{
          overflow: 'hidden',
        }}
      >
        <Block extend={{
          display: 'flex',
          marginLeft: '1rem',
        }}>
          {slides}
        </Block>
      </Block >
      <Flex extend={{
        justifyContent: "flex-end",
        marginTop: "2rem",
        marginRight: "0.5rem"
      }}>


        <button
          onClick={scrollPrev}
          style={{
            cursor: "pointer",
            width: "30px",
            height: "30px",
            backgroundColor: "transparent",
            border: "none",
            padding: 0,
            margin: 0,
            transform: "rotate(180deg)",
          }}
        >
          <ChevronCircled aria-hidden="true" />
          <span className="sr-only">Previous Slide</span>
        </button>
        {/*
        <Block
          onClick={scrollPrev}
          extend={{
            cursor: 'pointer',
            width: "30px",
            height: "30px",
            transform: "rotate(180deg)"
          }}>
          <ChevronCircled />
        </Block> */}
        <Spacer />
        <Block
          onClick={scrollNext}
          extend={{ cursor: 'pointer', width: "30px", height: "30px", }}>
          <ChevronCircled />
        </Block>

      </Flex>
    </Block>

  )
}

export default CarsSlideshow

/*
Todo:
      1. add buttons to scroll left and right
      2. add dots to show which slide is selected (mobile)
      3. add link buttons

*/
