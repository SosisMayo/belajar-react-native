import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IonIcons from "react-native-vector-icons/Ionicons";
import FontistoIcons from "react-native-vector-icons/Fontisto";
import { format } from "date-fns";
import { useState } from "react";

import transactionData from "../../../transactionData";

const formatDate = (dateString) => {
  const [day, month, year] = dateString.split("/");
  const date = new Date(`${year}-${month}-${day}`);
  return format(date, "dd MMMM yyyy");
};

export default function DasboardScreen() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEye = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20, backgroundColor: "white" }}>
      <ScrollView>
        <View style={styles.appBar}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../../assets/pp.png")}
              style={{ width: 60, height: 60 }}
            ></Image>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Chelsea Immanuela
              </Text>
              <Text style={{ fontSize: 16 }}>Personal Account</Text>
            </View>
          </View>
          <Icon name="sun-o" size={30} color="orange" />
        </View>

        <View
          style={{
            marginTop: 32,
            alignItems: "center",
            paddingHorizontal: 20,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 2, gap: 12 }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Good Morning, Chelsea
            </Text>
            <Text style={{ fontSize: 20 }}>
              Check all your incoming and outgoing transactions here
            </Text>
          </View>
          <Image
            source={require("../../../assets/sun.png")}
            style={{ width: 72, height: 72 }}
          ></Image>
        </View>

        <View style={{ padding: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#19918F",
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderRadius: 18,
              display: "flex",
              flexDirection: "row",
              gap: 16,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "white", fontSize: 24 }}>Account No.</Text>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              1234567890
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // backgroundColor: "red",
          }}
        >
          <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20 }}>Balance</Text>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "row",
                gap: 12,
                // backgroundColor: "white",
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                {isOpen ? "Rp 2.000.000" : "*********"}
              </Text>
              <TouchableOpacity onPress={toggleEye}>
                <IonIcons name="eye-outline" size={30} color="lightgrey" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ padding: 20, gap: 12 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#19918F",
                padding: 8,
                borderRadius: 10,
                shadowColor: "#19918F",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.5,
                shadowRadius: 10,
                elevation: 10,
              }}
            >
              <FontistoIcons name="plus-a" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#19918F",
                padding: 8,
                borderRadius: 10,
                shadowColor: "#19918F",
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowOpacity: 0.5,
                shadowRadius: 10,
                elevation: 10,
              }}
            >
              <FontistoIcons name="paper-plane" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ padding: 20 }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "lightgrey",
              paddingBottom: 12,
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "bold", marginLeft: 20 }}>
              Transactions History
            </Text>
          </View>
          <View style={{ padding: 20 }}>
            <FlatList
              nestedScrollEnabled
              scrollEnabled={false}
              data={transactionData}
              renderItem={({ item }) => (
                <View
                  style={{
                    // backgroundColor: "red",
                    width: "100%",
                    marginVertical: 8,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 12,
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={item.pathPhoto}
                      style={{ width: 40, height: 40 }}
                    ></Image>
                    <View>
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {item.name}
                      </Text>
                      <Text style={{ fontSize: 16 }}>{item.type}</Text>
                      <Text style={{ fontSize: 16 }}>
                        {formatDate(item.date)}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      alignSelf: "center",
                      fontSize: 16,
                      fontWeight: "bold",
                      color: item.type === "Top Up" ? "#2DC071" : "#C02d00",
                    }}
                  >
                    {item.type === "Top Up" ? "+" : "-"} {item.nominal}
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
});
