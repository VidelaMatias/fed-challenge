'use client'
import React, { FC } from "react";
import Card from "../Card/card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "./leftArrow";
import RightArrow from "./rightArrow";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface Props {
  items: any[]
}

const MultipleItems: FC<Props> = ({ items }) => {

  const totalPages = Math.round(items.length / 3);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const ButtonGroup = ({ next, previous, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="flex flex-row justify-center mt-7 absolute laptop:relative">
        <span> <span className={currentSlide == 0 ? 'text-[#E0E0E0]' : 'text-primaryGray'}>{currentSlide}</span> <span className="text-primaryBlue"> / </span> <span className={currentSlide == totalPages ? 'text-[#E0E0E0]' : 'text-primaryGray'}>{totalPages}</span></span>
        <div className="laptop:ml-6 ml-11">
          <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} aria-label="Previous"> <LeftArrow color={currentSlide == 0 ? '#E0E0E0' : '#0451DD'} /> </button>
          <button onClick={() => next()} aria-label="Next" className="ml-4"> <RightArrow color={currentSlide == totalPages ? '#E0E0E0' : '#0451DD'} /> </button>
        </div>

      </div>

    );
  };


  return (
    <div className="w-full laptop:w-3/4 p-3">
      <Carousel
        swipeable={false}
        customButtonGroup={<ButtonGroup next={undefined} previous={undefined} />}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} 
        infinite={false}
        autoPlay={false}
        renderButtonGroupOutside={true}
        arrows={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {
          items?.map((item: any) => (
            <Card key={item.id} image={item.image} title={item.title} actionURL={item.actionURL} description={item.body}></Card>
          ))
        }
      </Carousel>

    </div>
  );
}

export default MultipleItems;