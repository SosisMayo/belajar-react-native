import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/walled.png")}
        style={{ width: 233, height: 57 }}
      ></Image>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Dashboard");
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <Text style={styles.link} onPress={() => navigation.navigate("SignUp")}>
          Don't have an account?
          <Text style={{ color: "#19918f" }}> Register Here</Text>
        </Text>
      </View>
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
