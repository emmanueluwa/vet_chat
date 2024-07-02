import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";

export default function App() {
  const [borderColor, setBorderColor] = useState<"lightgray" | "lightgreen">(
    "lightgray"
  );
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 30, fontWeight: "bold", fontSize: 32 }}>
        PetQuery
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "#333333",
          marginVertical: 5,
          fontSize: 12,
        }}
      >
        Press and hold this button to record your voice. Release the button to
        send the recording, you will then hear a response
      </Text>
      <Text style={{ marginVertical: 10, fontSize: 17 }}>Your message:</Text>
      <Pressable
        onPressIn={() => {
          setBorderColor("lightgreen");
        }}
        onPressOut={() => {
          setBorderColor("lightgray");
        }}
        style={{
          width: "90%",
          padding: 30,
          gap: 10,
          borderWidth: 3,
          alignItems: "center",
          borderRadius: 10,
          borderColor: borderColor,
        }}
      >
        <Text>Hold to speak</Text>
      </Pressable>
      <Button title="Replay last message" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
