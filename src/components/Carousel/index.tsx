// import { useState } from "react"

export type Slide = {
  id: number,
  imageUrl: string,
  title: string
}
export type CarouselProps = {
  slides: Slide[],
  parentWidth: number;
}
// export const Carousel = ({slides, parentWidth }:CarouselProps) => {
//   console.log(parentWidth)
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const containerStyles = {
//     height: '100%',
//     position: 'relative',
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     // background: 'red'
//   }

//   const getStyleWithBackground = (slide: Slide) => {
//       return {
//       backgroundImage: `url(${slide.imageUrl})`,
//       height: '100%',
//       backgroundPosition: 'center',
//       backgroundSize: 'cover',
//       borderRadius: '10px',
//       backgroundRepeat: 'no-repeat'
//       }
//   }
  
//   const slidesContainerOverflowStyle = () => ({
//     overflow: "hidden",
//     height: "100%",
//     // background: 'blue'
//   })
  
//   const slidesContainerStyles = {
//       display: 'flex',
//       height: '100%',
//       'transition': 'transform 0.1s ease',
      
//   }
//   const getContainerStyleWithWidth = () => ({
//     ...slidesContainerStyles,
//     width: slides.length * parentWidth,
//     transform: `translateX(${-(currentIndex * parentWidth)}px)`,
//     // background: 'yellow'
//   })
  
//   return (
//     <div style={containerStyles}>
//       <div style={slidesContainerOverflowStyle()}>

//         <div style={getContainerStyleWithWidth()}>
//           {slides.map((slide, index) => (
//             <div key={slide.id} style={getStyleWithBackground(slide)}></div>
//             ))}
//         </div>
//       </div>
//       <div style={{textAlign: 'center'}}>
//         {
//           slides.map((slide, index) => (
//           <span style={{fontSize: '6rem', cursor: 'pointer', marginRight: '10px'}} 
//           key={slide.id}
//           onClick={() => setCurrentIndex(index)}
//           >.</span>))
//         }

//       </div>

      
//     </div>
    
//   )
// }

import { useCallback, useRef, useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease 1s",
};

const slidesContainerOverflowStyles = {
  overflow: "hidden",
  height: "100%",
};

export const Carousel = ({ slides, parentWidth }: CarouselProps) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const getSlideStylesWithBackground = (slideIndex: number) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].imageUrl})`,
    width: `100%`,
  });
  
  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  // useEffect(() => {
  //   if (timerRef.current) {
  //     clearTimeout(timerRef.current);
  //   }
  //   timerRef.current = setTimeout(() => {
  //     goToNext();
  //   }, 2000);

  //   return () => clearTimeout(timerRef.current);
  // }, [goToNext]);

  return (
    <div style={sliderStyles}>
      {/* <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div> */}
      
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              style={getSlideStylesWithBackground(slideIndex)}
            >
              <div>
                <h1>{slides[slideIndex].title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

