import { Separator } from 'tamagui'

const StepConnector = () => (
  <Separator
    position="absolute"
    top="24%"
    left="50%"
    right="-50%"
    zIndex="$stepConnector"
    borderColor="$primary"
    borderWidth={2}
  />
)

export default StepConnector
