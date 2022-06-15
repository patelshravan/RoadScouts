import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import React, { useState, useEffect } from "react";
import { DriverData } from "../DriverData";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const DriverList = ({ navigation }) => {
  const openDialScreen = () => {
    let number = "";
    if (Platform.OS === "ios") {
      number = "telprompt:${7742026070}";
    } else {
      number = "tel:${7742026070}";
    }
    Linking.openURL(number);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {DriverData.map((data, key) => {
            return (
              <View
                key={key}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 40,
                  width: "80%",
                  height: 110,
                  alignItems: "center",
                  alignSelf: "center",
                }}
              >
                <Text>Name: {data.name}</Text>
                <Text>Mobile: {data.mobile}</Text>
                <Text>Vehicle Name: {data.vehicleName}</Text>
                <Text>Vehicle Number: {data.vehicleNumber}</Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity
                    style={{ marginRight: 240 }}
                    onPress={openDialScreen}
                  >
                    <Icon name="phone" size={25} color="#32cd32" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Whatsapp");
                    }}
                  >
                    <FontAwesome name="whatsapp" size={25} color="#128C7E" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DriverList;
