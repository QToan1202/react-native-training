import { StatusBar } from "expo-status-bar";
import { Alert, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { MyButton } from "./components";

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

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <MyButton title="Press here" onPress={handlePress} />
      <Image style={styles.img} source={require('./assets/image.jpg')} />
      <FlatList
        data={myList}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 300,
    height: 400,
  }
});
