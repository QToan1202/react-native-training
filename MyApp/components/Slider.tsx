import { Slider, SliderProps } from "tamagui";

const CustomSlider = (props: SliderProps) => (
  <Slider
    size={"$2"}
    width={"60%"}
    max={100}
    step={1}
    defaultValue={[0]}
    {...props}
  >
    <Slider.Track>
      <Slider.TrackActive />
    </Slider.Track>
    <Slider.Thumb circular index={0} />
  </Slider>
);

export default CustomSlider;
