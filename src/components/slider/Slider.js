import classes from "./Slider.module.css";
import { sliderData } from "./SliderData";

const Slider = () => {
  return (
    <div className={classes.slider}>
      {sliderData.map((slide, index) => {
        return (
          <div className={classes.slide} key={index}>
            <img src={slide.image} alt="slide" />
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
