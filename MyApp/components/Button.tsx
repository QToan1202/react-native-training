import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

export interface MyButtonProps extends PressableProps {
  title: string;
  onPress: () => void;
}

const MyButton = ({ title, onPress, ...rest }: MyButtonProps) => {
  return (
    <Pressable style={styles.btn} onPress={onPress} hitSlop={1000} pressRetentionOffset={1000} {...rest}>
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderColor: "blue",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default MyButton;
