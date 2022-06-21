import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("window");
const Home = ({ navigation }) => {
  const updateProfile = (event) => {
    event.preventDefault();
    navigation.navigate("DriverProfile");
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor="#32cd32" />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
            height: 60,
            width: width,
            backgroundColor: "#32cd32",
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontSize: 18,
              fontFamily: "regular",
              margin: 10,
            }}
          >
            Hello Shravan
          </Text>
          <TouchableOpacity onPress={updateProfile}>
            <ImageBackground
              source={require("../../assets/profileDriver.jpg")}
              style={{ width: 35, height: 35, margin: 10 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate("RequestPage");
            }}
          >
            <Text style={styles.buttonText}>Requests</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeader: {
    fontSize: 25,
    color: "#123e44",
    marginTop: 0,
    textTransform: "capitalize",
  },
  buttonText: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "semiBold",
  },
  buttonStyle: {
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#2c9dd1",
    height: 50,
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
