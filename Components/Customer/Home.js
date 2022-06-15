import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import RadioButtonRN from "radio-buttons-react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Home = ({ route, navigation }) => {
  const data = [
    {
      label: "Short Distance",
    },
    {
      label: "Long Distance",
    },
    {
      label: "Loading",
    },
  ];

  const updateProfile = () => {
    navigation.navigate("CustomerProfile");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Please Select a Category below:</Text>
      <View>
        <Text style={{ marginTop: 50 }}>
          <RadioButtonRN
            data={data}
            activeColor="#32cd32"
            animationTypes={["zoomIn"]}
            icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
          />
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: "#32cd32",
              marginTop: 30,
            },
          ]}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              marginTop: 100,
            },
          ]}
          onPress={updateProfile}
        >
          <Icon name="user-o" size={25} color="#2c9dd1" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  mainHeader: {
    fontSize: 25,
    fontFamily: "regular",
    color: "#123e44",
    marginTop: 150,
    textTransform: "capitalize",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  buttonStyle: {
    borderRadius: 30,
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
