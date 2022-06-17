import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import {
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

const NewPassword = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  let [fontLoaded] = useFonts({
    regular: JosefinSans_400Regular,
    regular2: JosefinSans_500Medium,
    regularBold: JosefinSans_700Bold,
    Montserrat_400Regular,
    bold: Montserrat_500Medium,
    semiBold: Montserrat_600SemiBold,
    bold2: Montserrat_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  const onSubmitPressed = () => {
    console.warn("Password reset");
  };

  const onBackToLoginPress = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Reset Your Password</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Code </Text>
          <View style={styles.action}>
            <MaterialCommunityIcons
              name="message-text-lock-outline"
              color="#05375a"
              size={20}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Confirmation Code"
              keyboardType="number-pad"
              value={code}
              onChangeText={(value) => setCode(value)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> New Password </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your New Password"
              keyboardType="name-phone-pad"
              value={newPassword}
              onChangeText={(value) => setNewPassword(value)}
            />
          </View>
        </View>

        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: "#32cd32",
            },
          ]}
          onPress={onSubmitPressed}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingVertical: 20,
          }}
        >
          <TouchableOpacity onPress={onBackToLoginPress}>
            <Text
              style={{ fontSize: 18, fontFamily: "regular2", color: "gray" }}
            >
              Back To Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1.5,
    borderBottomColor: "#d3d3d3",
    paddingBottom: 5,
  },
  title: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    alignSelf: "center",
    fontFamily: "regular2",
    paddingTop: 50,
    paddingBottom: 30,
    textTransform: "capitalize",
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "regular",
  },
  textInput: {
    marginTop: Platform.OS === "android" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    flex: 1,
    fontFamily: "regular",
  },
  buttonStyle: {
    borderRadius: 15,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    justifyContent: "center",
    alignContent: "center",
    fontFamily: "bold",
  },
});
