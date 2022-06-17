import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import { DriverData } from "../DriverData";
import Icon from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const DriverList = ({ navigation }) => {
  const openDialScreen = ({ mobileNumber }) => {
    let number = "";
    if (Platform.OS === "ios") {
      number = `telprompt:${mobileNumber}`;
    } else {
      number = `tel:${mobileNumber}`;
    }
    Linking.openURL(number);
  };

  const openWhatsAppScreen = ({ mobileNumber }) => {
    let whatsAppMsg =
      "Hey, I have booked a service using RoadScouts, Please let me know the status.";
    let url =
      "whatsapp://send?text=" + whatsAppMsg + "&phone=91" + mobileNumber;
    Linking.openURL(url);
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: "regularBold",
            alignSelf: "center",
            paddingTop: 80,
          }}
        >
          These are the drivers details we found:
        </Text>
        <View>
          {DriverData.map((data, key) => {
            return (
              <View key={key} style={styles.data}>
                <Text style={{ fontFamily: "bold2" }}>Name: {data.name}</Text>
                <Text style={{ fontFamily: "semiBold" }}>
                  Mobile: {data.mobile}
                </Text>
                <Text style={{ fontFamily: "semiBold" }}>
                  Vehicle Name: {data.vehicleName}
                </Text>
                <Text style={{ fontFamily: "semiBold" }}>
                  Vehicle Number: {data.vehicleNumber}
                </Text>
                <Text style={styles.bottomLine} />
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 4,
                  }}
                >
                  <TouchableOpacity
                    style={{ marginRight: 240 }}
                    onPress={() => {
                      openDialScreen({ mobileNumber: data.mobile });
                    }}
                  >
                    <Icon name="phone" size={25} color="#32cd32" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      openWhatsAppScreen({ mobileNumber: data.mobile });
                    }}
                  >
                    <FontAwesome name="whatsapp" size={25} color="#128C7E" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            alignSelf: "flex-end",
            borderWidth: 1.5,
            borderRadius: 10,
            borderColor: "#32cd32",
            width: 100,
            height: 30,
            marginRight: 10,
            marginTop: 20,
            marginBottom: 20,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontFamily: "semiBold",
            }}
          >
            ᐊ Go Back
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default DriverList;

const styles = StyleSheet.create({
  bottomLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#696969",
    width: "100%",
    alignSelf: "center",
    marginTop: 0,
  },
  data: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 40,
    width: "80%",
    height: 130,
    alignItems: "center",
    alignSelf: "center",
  },
});
