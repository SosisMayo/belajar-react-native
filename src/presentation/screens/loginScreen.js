import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Form from "../components/Form";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/walled.png")}
        style={{ width: 233, height: 57 }}
      ></Image>
      <Form state={"login"} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
    gap: 100,
    alignItems: "center",
    backgroundColor: "white",
  },
  form: { gap: 20, width: "100%" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: {
    backgroundColor: "#19918f",
    padding: 10,
    borderRadius: 12,
    marginTop: 24,
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 20,
  },
  link: { marginTop: 10, textAlign: "left", fontSize: 20 },
});

export default LoginScreen;
