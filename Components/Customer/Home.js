import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Home = ({ route, navigation }) => {
  const updateProfile = () => {
    navigation.navigate("CustomerProfile");
  };
  const { Email } = route.params;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Welcome Customer</Text>
      <Text style={styles.mainHeader}>{Email}</Text>
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: "#32cd32",
          },
        ]}
        onPress={updateProfile}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </View>
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
    color: "#fff",
    fontSize: 20,
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "600",
  },
  buttonStyle: {
    borderRadius: 40,
    height: 50,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
