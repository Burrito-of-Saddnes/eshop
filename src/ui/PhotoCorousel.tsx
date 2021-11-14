import React, { useState } from "react";

import "../scss//PhotoCarousel.scss";

export interface CarouselItemProps  { 
    children: React.ReactNode
 }

export const CarouselItem = ( props: CarouselItemProps ) => {
  return (
    <div className="carousel-item">
      {props.children}
    </div>
  );
};

const PhotoCarousel = ( props: CarouselItemProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex: React.SetStateAction<number>) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(props.children) - 1;
    } else if (newIndex >= React.Children.count(props.children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translateY(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(props.children, (child: any, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators">
        <div
          className="arrow_up"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </div>
        {React.Children.map(props.children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              <div className={`${index === 1 ? "pic2" : index === 2 ? "pic3" : "pic1"}`}/>
            </button>
          );
        })}
        <div 
          className="arrow" 
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}></div>
        <div
          className="arrow_down"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousel;