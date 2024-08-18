import { Slider, SliderProps as TSliderProps, styled } from 'tamagui'

export type SliderProps = TSliderProps

const Thumb = styled(Slider.Thumb, {
  circular: true,
  elevate: true,
  size: '$1',
  backgroundColor: '$white',
  borderColor: '$gray_100',
  borderWidth: 0,
  focusStyle: {
    outlineWidth: 0,
    backgroundColor: '$white',
  },
})

const SimpleSlider = (props: SliderProps) => (
  <Slider min={0} max={100} step={1} marginVertical={14} {...props}>
    <Slider.Track backgroundColor="$gray_50">
      <Slider.TrackActive backgroundColor="$blue_50" />
    </Slider.Track>
    <Thumb index={0} />
    <Thumb index={1} />
  </Slider>
)

export default SimpleSlider
