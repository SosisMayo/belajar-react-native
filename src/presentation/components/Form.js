import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { register } from "../../api/restApi";
import { login } from "../../api/restApi";
import AsyncStorage from "@react-native-async-storage/async-storage/";

const Form = ({ navigation, state }) => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [fullname, setFullname] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [isSelected, setSelection] = useState(false);

  const handleSubmit = () => {
    if (errors.email || errors.password || errors.fullname) {
      return alert("Please fill out all the fields correctly");
    }
    if (state === "register") {
      handleRegister();
    } else if (state === "login") {
      handleLogin();
    }
  };

  const handleRegister = async () => {
    try {
      const { data } = await register(
        fullname,
        email,
        password,
        phoneNumber,
        avatarUrl
      );
      navigation.navigate("Login");
    } catch (error) {
      return alert(error);
    }
  };

  const handleLogin = async () => {
    try {
      const { token } = await login(email, password);
      AsyncStorage.setItem("userToken", token);
      navigation.navigate("Dashboards");
    } catch (error) {
      return alert(error);
    }
  };

  const validateEmail = (text) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(text)) {
      setErrors({
        ...errors,
        email: "Please enter a valid email address",
      });
    } else {
      setErrors({
        ...errors,
        email: "",
      });
    }
  };

  const validatePassword = (text) => {
    if (text.length < 8) {
      setErrors({
        ...errors,
        password: "Password must be at least 8 characters",
      });
    } else {
      setErrors({
        ...errors,
        password: "",
      });
    }
  };

  const validateFullname = (text) => {
    if (text.length < 5) {
      setErrors({
        ...errors,
        fullname: "Fullname must be at least 5 characters",
      });
    } else {
      setErrors({
        ...errors,
        fullname: "",
      });
    }
  };

  return (
    <View style={{ width: "100%" }}>
      {state === "register" ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Fullname"
            value={fullname}
            onChangeText={(text) => {
              setFullname(text);
              validateFullname(text);
            }}
          />
          {errors.fullname && (
            <Text style={styles.error}>{errors.fullname}</Text>
          )}
        </>
      ) : (
        ""
      )}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          validateEmail(text);
        }}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => {
          validatePassword(text);
          setPassword(text);
        }}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}
      {state === "register" ? (
        <>
          <TextInput style={styles.input} placeholder="Avatar Url" />
          <TouchableOpacity
            style={styles.checkboxContainer}
            onPress={() => setSelection(!isSelected)}
          >
            <View
              style={[styles.checkbox, isSelected && styles.checkedCheckbox]}
            />
            <Text style={styles.label}>
              I agree to the
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text> Terms and Conditions</Text>
              </TouchableOpacity>
            </Text>
          </TouchableOpacity>
          <Modal
            onRequestClose={() => setModalVisible(false)}
            visible={isModalVisible}
            presentationStyle="pageSheet"
            animationType="slide"
            transparent={false}
          >
            <ScrollView style={styles.modal}>
              <Text style={styles.modalText}>Terms and Conditions</Text>
              {/* <Text style={styles.modalParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nec libero vitae odio aliquet laoreet non ut augue. Proin
                posuere dolor sed urna fringilla tempor. Sed id est at ligula
                sagittis cursus eu ac nulla. Pellentesque eleifend pellentesque
                risus, non mollis dui sagittis eu. Donec sit amet dapibus arcu.
                Integer vestibulum libero eget velit ultrices, vitae ultricies
                metus convallis. In vitae augue accumsan, venenatis quam ut,
                dignissim arcu. Cras nibh augue, condimentum in dui porttitor,
                ornare semper ante. Aliquam id neque quam. In sit amet
                condimentum mi. Donec rhoncus sapien nec magna hendrerit
                iaculis. Donec ullamcorper lectus sit amet enim vestibulum, nec
                bibendum nulla sodales.
              </Text> */}
              <Text style={styles.modalParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nec libero vitae odio aliquet laoreet non ut augue. Proin
                posuere dolor sed urna fringilla tempor. Sed id est at ligula
                sagittis cursus eu ac nulla. Pellentesque eleifend pellentesque
                risus, non mollis dui sagittis eu. Donec sit amet dapibus arcu.
                Integer vestibulum libero eget velit ultrices, vitae ultricies
                metus convallis. In vitae augue accumsan, venenatis quam ut,
                dignissim arcu. Cras nibh augue, condimentum in dui porttitor,
                ornare semper ante. Aliquam id neque quam. In sit amet
                condimentum mi. Donec rhoncus sapien nec magna hendrerit
                iaculis. Donec ullamcorper lectus sit amet enim vestibulum, nec
                bibendum nulla sodales.
              </Text>
              <Text style={styles.modalParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nec libero vitae odio aliquet laoreet non ut augue. Proin
                posuere dolor sed urna fringilla tempor. Sed id est at ligula
                sagittis cursus eu ac nulla. Pellentesque eleifend pellentesque
                risus, non mollis dui sagittis eu. Donec sit amet dapibus arcu.
                Integer vestibulum libero eget velit ultrices, vitae ultricies
                metus convallis. In vitae augue accumsan, venenatis quam ut,
                dignissim arcu. Cras nibh augue, condimentum in dui porttitor,
                ornare semper ante. Aliquam id neque quam. In sit amet
                condimentum mi. Donec rhoncus sapien nec magna hendrerit
                iaculis. Donec ullamcorper lectus sit amet enim vestibulum, nec
                bibendum nulla sodales.
              </Text>
              <Text style={styles.modalParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                nec libero vitae odio aliquet laoreet non ut augue. Proin
                posuere dolor sed urna fringilla tempor. Sed id est at ligula
                sagittis cursus eu ac nulla. Pellentesque eleifend pellentesque
                risus, non mollis dui sagittis eu. Donec sit amet dapibus arcu.
                Integer vestibulum libero eget velit ultrices, vitae ultricies
                metus convallis. In vitae augue accumsan, venenatis quam ut,
                dignissim arcu. Cras nibh augue, condimentum in dui porttitor,
                ornare semper ante. Aliquam id neque quam. In sit amet
                condimentum mi. Donec rhoncus sapien nec magna hendrerit
                iaculis. Donec ullamcorper lectus sit amet enim vestibulum, nec
                bibendum nulla sodales.
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.modalButton}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Close
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </Modal>
        </>
      ) : (
        ""
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleSubmit();
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
          {state === "register" ? "Submit" : "Login"}
        </Text>
      </TouchableOpacity>
      <Text
        style={styles.link}
        onPress={() => {
          state === "register"
            ? navigation.navigate("Login")
            : navigation.navigate("SignUp");
        }}
      >
        {state === "register"
          ? "Already have an account? "
          : "Don't have an account? "}
        <Text style={{ color: "#19918f" }}>
          {" "}
          {state === "register" ? "Login" : "Register"}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modalButton: {
    backgroundColor: "#19918f",
    padding: 10,
    borderRadius: 12,
  },
  modalParagraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },
  modal: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 40,
    paddingBottom: 100,
  },
  modalText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
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
  link: { marginTop: 24, textAlign: "left", fontSize: 20 },
  error: { color: "red", fontSize: 12, marginBottom: 10 },
  notesInput: {
    height: 200,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    height: 14,
    width: 14,
    borderRadius: "100%",
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 8,
  },
  checkedCheckbox: {
    backgroundColor: "#4CAF50",
  },
});

export default Form;
