import { SizableText, styled } from "tamagui";

const Text = styled(SizableText, {
  name: "CustomText",
  variants: {
    unstyled: {
      false: {
        size: "$2",
        color: "#f21",
      },
    },
  } as const,
  defaultVariants: {
    unstyled: false,
  },
});

export default Text;
