import {
  SizeTokens,
  Stack,
  Text,
  createStyledContext,
  styled,
  withStaticProperties,
} from "tamagui";

const ButtonContext = createStyledContext({
  size: "$3" as SizeTokens,
});

const ButtonFrame = styled(Stack, {
  name: "Button",
  context: ButtonContext,
  alignItems: "center",
  flexDirection: "row",
  backgroundColor: "$background",
  pressStyle: {
    backgroundColor: "$backgroundPress",
  },
  variants: {
    size: {
      "...size": (name, { tokens }) => {
        return {
          height: tokens.size[name],
          borderRadius: tokens.radius[name],
          gap: tokens.space[name].val * 0.2,
        };
      },
    },
    unstyled: {
      false: {
        height: "$4",
        borderRadius: "$2",
        paddingHorizontal: "$5",
      },
    },
  } as const,

  defaultVariants: {
    unstyled: false,
  },
});

const ButtonText = styled(Text, {
  name: "ButtonText",
  context: ButtonContext,
  color: "$color.blue10Dark",
  fontFamily: "$body",
  fontSize: "$1",
  lineHeight: "$1",
  userSelect: "none",
  textTransform: "capitalize",
  variants: {
    size: {
      "...fontSize": (name, { font }) => ({
        fontSize: font?.size[name],
      }),
    },
  } as const,
});

const Button = withStaticProperties(ButtonFrame, {
  Text: ButtonText,
  Props: ButtonContext.Provider,
});

export default Button;
