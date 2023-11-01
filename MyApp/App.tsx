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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, TamaguiProvider, XStack, YStack } from "tamagui";
import config from "./tamagui.config";
import { useFonts } from "expo-font";

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
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  const handlePress = () => Alert.alert("Oke");
  const handleHideKeyboard = () => Keyboard.dismiss();
  const [keyboardStatus, setKeyboardStatus] = useState<string>("");
  const getTodos = useCallback(() => {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => AsyncStorage.setItem("@todo", JSON.stringify(json)))
      .catch((error) => error instanceof Error && console.log(error.message));
  }, []);
  const shouldGetTodos = useCallback(async () => {
    try {
      const storeTodo = await AsyncStorage.getItem("@todo");

      if (storeTodo === null) {
        console.log("Store empty: Get new todo");
        getTodos();
        return;
      }

      console.log("Store data:", storeTodo);
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  useEffect(() => {
    const showKeyboardEvent = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });

    const hideKeyboardEvent = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });

    shouldGetTodos();

    return () => {
      showKeyboardEvent.remove();
      hideKeyboardEvent.remove();
    };
  }, []);

  return (
    <TamaguiProvider config={config}>
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
        <YStack space>
          <Button size={"$5"}>Tamagui Button</Button>
          <Button size={"$5"}>Tamagui Button</Button>
          <Button size={"$5"}>Tamagui Button</Button>
        </YStack>
        <XStack space>
          <Text>Tamagui</Text>
          <Text>Tamagui</Text>
          <Text>Tamagui</Text>
        </XStack>
      </KeyboardAvoidingView>
    </TamaguiProvider>
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
