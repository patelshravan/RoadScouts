import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import ModalDropdown from "react-native-modal-dropdown";

const options = ["Swaroopganj", "Aburoad", "Sirohi", "Pindwara"];
const { width, height } = Dimensions.get("window");

const Home = ({ route, navigation }) => {
  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <ScrollView>
        <View>
          <Text
            style={{
              paddingTop: 20,
              fontFamily: "regular",
              alignSelf: "center",
              fontSize: 18,
              paddingBottom: 10,
            }}
          >
            Please Select Your City.
          </Text>
          <ModalDropdown
            options={options}
            defaultValue="Select Your City..."
            dropdownStyle={{ width: 250, height: 100 }}
            dropdownTextStyle={{
              fontFamily: "regular2",
              fontSize: 16,
            }}
            dropdownTextHighlightStyle={{ color: "#32cd32" }}
            textStyle={{
              fontFamily: "regular",
              fontSize: 16,
              marginLeft: 10,
            }}
            style={{
              borderWidth: 1,
              width: 250,
              borderRadius: 10,
              alignSelf: "center",
              height: 30,
              backgroundColor: "#d3d3d3",
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <Text style={styles.mainHeader}>Please Select a Category below:</Text>
        <View style={{ marginBottom: 40 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DriverList");
            }}
            style={[styles.buttonStyle]}
          >
            <Text
              style={[
                styles.buttonText,
                { padding: 8, marginLeft: 10, fontFamily: "semiBold" },
              ]}
            >
              Short Distance
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.buttonText,
                  {
                    padding: 8,
                    marginLeft: 10,
                    fontFamily: "bold",
                    color: "#32cd32",
                  },
                ]}
              >
                ₹ 20 / km
              </Text>
              <Icon
                style={{ marginLeft: 150 }}
                name="arrow-right"
                size={25}
                color="#2c9dd1"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 40 }}>
          <TouchableOpacity
            style={[styles.buttonStyle]}
            onPress={() => {
              navigation.navigate("DriverList");
            }}
          >
            <Text
              style={[
                styles.buttonText,
                { padding: 8, marginLeft: 10, fontFamily: "semiBold" },
              ]}
            >
              Long Distance
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.buttonText,
                  {
                    padding: 8,
                    marginLeft: 10,
                    fontFamily: "bold",
                    color: "#32cd32",
                  },
                ]}
              >
                ₹ 50 / km
              </Text>
              <Icon
                style={{ marginLeft: 150 }}
                name="arrow-right"
                size={25}
                color="#2c9dd1"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 40 }}>
          <TouchableOpacity
            style={[styles.buttonStyle]}
            onPress={() => {
              navigation.navigate("DriverList");
            }}
          >
            <Text
              style={[
                styles.buttonText,
                { padding: 8, marginLeft: 10, fontFamily: "semiBold" },
              ]}
            >
              Loading
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={[
                  styles.buttonText,
                  {
                    padding: 9,
                    marginLeft: 10,
                    fontFamily: "bold",
                    color: "#32cd32",
                  },
                ]}
              >
                ₹ 80 / km
              </Text>
              <Icon
                style={{ marginLeft: 150 }}
                name="arrow-right"
                size={25}
                color="#2c9dd1"
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeader: {
    fontSize: 23,
    fontFamily: "regular",
    color: "#123e44",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 30,
    textTransform: "capitalize",
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
  },
  buttonStyle: {
    borderRadius: 30,
    borderColor: "#2c9dd1",
    borderWidth: 2,
    height: 85,
    alignSelf: "center",
    width: 320,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
