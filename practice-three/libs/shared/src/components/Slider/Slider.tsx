import { Slider, SliderProps as TSliderProps, styled } from 'tamagui'

export type SliderProps = TSliderProps

const Thumb = styled(Slider.Thumb, {
  circular: true,
  elevate: true,
  size: '$1',
  backgroundColor: '$white',
  borderColor: '$gray_100',
  borderWidth: 1,
})

const SimpleSlider = (props: SliderProps) => (
  <Slider min={0} max={100} step={1} {...props}>
    <Slider.Track backgroundColor="$gray_50">
      <Slider.TrackActive backgroundColor="$blue_50" />
    </Slider.Track>
    <Thumb index={0} />
    <Thumb index={1} />
  </Slider>
)

export default SimpleSlider
