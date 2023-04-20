import classes from "./Slider.module.css";
import { sliderData } from "./SliderData";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  function nextSlide() {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  }

  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(slideLength - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  const slideInterval = 2000;
  let slideEffect = "";
  let lisaLipps = true;

  function auto() {
    slideEffect = setInterval(nextSlide, slideInterval);
  };


  useEffect(() => {
    if (lisaLipps) {
      auto()
    }
    return () => {
      clearTimeout(slideEffect);
    };
  }, [currentSlide, slideInterval, lisaLipps]);

  
  return (
    <div className={classes.slider}>
      <AiOutlineArrowLeft
        onClick={prevSlide}
        className={`${classes.arr} ${classes.prev}`}
      />
      <AiOutlineArrowRight
        onClick={nextSlide}
        className={`${classes.arr} ${classes.next}`}
      />

      {sliderData.map((slide, index) => {
        return (
          <div className={classes.slide} key={index}>
            {index === currentSlide && <img src={slide.image} alt="slide" />}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
