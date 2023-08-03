import { Pressable, PressableProps, StyleSheet, Text } from "react-native";

export interface MyButtonProps extends PressableProps {
  title: string;
  onPress: () => void;
}

const MyButton = ({ title, onPress, ...rest }: MyButtonProps) => {
  return (
    <Pressable style={styles.btn} onPress={onPress} {...rest}>
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
