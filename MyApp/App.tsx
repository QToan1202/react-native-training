import { StatusBar } from "expo-status-bar";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { MyButton } from "./components";
import { useCallback, useEffect, useState } from "react";

const myList = [
  {
    id: 1,
    title: "item 1",
  },
  {
    id: 2,
    title: "item 2",
  },
  {
    id: 3,
    title: "item 3",
  },
];

export default function App() {
  const handlePress = () => Alert.alert("Oke");
  const handleHideKeyboard = () => Keyboard.dismiss();
  const [keyboardStatus, setKeyboardStatus] = useState<string>("");
  const getTodos = useCallback(() => {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  useEffect(() => {
    const showKeyboardEvent = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });

    const hideKeyboardEvent = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });

    getTodos();

    return () => {
      showKeyboardEvent.remove();
      hideKeyboardEvent.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <MyButton title="Press here" onPress={handlePress} />
      <Image style={styles.img} source={require("./assets/image.jpg")} />
      <TextInput style={styles.input} placeholder="Type in here" />
      <Text>Current keyboard status: {keyboardStatus}</Text>
      <MyButton title="Hide keyboard" onPress={handleHideKeyboard} />
      {/* <FlatList
          data={myList}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        /> */}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 5,
  },
  img: {
    width: 300,
    height: 400,
  },
  input: {
    width: "90%",
    padding: 8,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
  },
});
