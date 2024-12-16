import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const TransferScreen = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.appBar}>
        <Text style={styles.tittle}>Transfer</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "#19918F",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <Text style={(styles.label, { color: "white", fontWeight: "bold" })}>
          To :
        </Text>
        <TextInput
          placeholder="Enter Account Number"
          style={{ color: "white", fontSize: 20 }}
          keyboardType="numeric"
          value={accountNumber}
          placeholderTextColor={"white"}
          onChangeText={(text) => setAccountNumber(text)}
        ></TextInput>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Amount</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              borderBottomWidth: 1,
              alignItems: "flex-start",
              borderColor: "lightgrey",
            }}
          >
            <Text style={{ fontSize: 16, marginTop: 10 }}>IDR</Text>
            <TextInput
              style={styles.input}
              placeholder="100.000"
              keyboardType="numeric"
              value={amount}
              onChangeText={(text) => setAmount(text)}
            ></TextInput>
          </View>
          <View
            style={{
              paddingHorizontal: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>Balance</Text>
            <Text style={{ color: "#19918F" }}>Rp 10.000.000.000</Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 40,

            borderColor: "lightgrey",
            borderBottomWidth: 1,
          }}
        >
          <Text style={styles.label}>Note</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Type your notes here"
            value={notes}
            onChangeText={(text) => setNotes(text)}
          ></TextInput>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Text style={styles.button}>Transfer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
    gap: 20,
    marginTop: 40,
  },
  appBar: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 4,
  },
  tittle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 5,
    fontSize: 28,
    fontWeight: "bold",
    color: "black",
  },
  inputText: {
    borderRadius: 5,
    fontSize: 16,
    color: "black",
  },
  label: {
    fontSize: 16,
    color: "black",
  },
  button: {
    backgroundColor: "#19918f",
    padding: 12,
    borderRadius: 12,
    marginBottom: 20,
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    padding: 20,
  },
});

export default TransferScreen;
