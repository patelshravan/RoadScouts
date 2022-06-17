import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  RefreshControl,
  Switch,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { Checkbox } from "react-native-paper";
import {
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Login = ({ navigation }) => {
  const [agree, setAgree] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
    setAgree("");
    setName("");
    setEmail("");
    setMobile("");
    setPassword("");
    setConfirmPassword("");
    setCity("");
    setPin("");
    setIsEnabled(false);
  }, []);

  let [fontLoaded, error] = useFonts({
    regular: JosefinSans_400Regular,
    regular2: JosefinSans_500Medium,
    Montserrat_400Regular,
    bold: Montserrat_500Medium,
    bold2: Montserrat_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  const handleSubmit = () => {
    navigation.navigate("ConfirmEmail");
  };

  const handleLoginSubmit = () => {
    navigation.navigate("Login");
  };

  const onTCPressed = () => {
    navigation.navigate("TermsAndConditions");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={styles.title}>Create an account</Text>
        <View style={styles.switch}>
          <Text style={{ fontSize: 20, fontFamily: "bold" }}>As a Driver?</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#32cd32" }}
            thumbColor={isEnabled ? "#2c9dd1" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Name </Text>
          <View style={styles.action}>
            <Feather name="user" color="#05375a" size={20} />
            <TextInput
              style={styles.textInput}
              autoCapitalize="words"
              value={name}
              onChangeText={(value) => setName(value)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Email </Text>
          <View style={styles.action}>
            <Feather name="mail" color="#05375a" size={20} />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Mobile Number </Text>
          <View style={styles.action}>
            <Feather name="phone" color="#05375a" size={20} />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              maxLength={10}
              keyboardType="number-pad"
              value={mobile}
              onChangeText={(value) => setMobile(value)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Password </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="name-phone-pad"
              value={password}
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Confirm Password </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="name-phone-pad"
              value={confirmPassword}
              secureTextEntry={true}
              onChangeText={(value) => setConfirmPassword(value)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> City </Text>
          <View style={styles.action}>
            <MaterialCommunityIcons
              name="city-variant-outline"
              color="#05375a"
              size={20}
            />
            <TextInput
              style={styles.textInput}
              autoCapitalize="words"
              value={city}
              onChangeText={(value) => setCity(value)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> PinCode </Text>
          <View style={styles.action}>
            <Feather name="map-pin" color="#05375a" size={20} />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="number-pad"
              value={pin}
              maxLength={6}
              onChangeText={(value) => setPin(value)}
            />
          </View>
        </View>

        <View style={styles.wrapper}>
          <Checkbox
            color="#2c9dd1"
            status={agree ? "checked" : "unchecked"}
            onPress={() => {
              setAgree(!agree);
            }}
          />
          <Text style={styles.wrapperText}>
            {" "}
            I have read and agreed with the{" "}
            <Text
              onPress={onTCPressed}
              style={([styles.wrapperText], { color: "#fdb075" })}
            >
              T&C
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: agree ? "#32cd32" : "grey",
            },
          ]}
          disabled={!agree}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.bottomText1} />
          <Text style={styles.bottomText2}>
            {" "}
            Already have an account?{" "}
            <Text
              style={{ fontWeight: "bold", color: "#32cd32" }}
              onPress={handleLoginSubmit}
            >
              Login
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  switch: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    color: "#051C60",
    alignSelf: "center",
    fontFamily: "semiBold",
    margin: 10,
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: "regular",
  },
  inputContainer: {
    marginTop: 10,
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
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: "regular",
    fontSize: 18,
  },
  wrapper: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  wrapperText: {
    fontFamily: "regular",
  },
  bottomText1: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    width: "100%",
    fontFamily: "regular",
    fontWeight: "bold",
    alignSelf: "center",
  },
  bottomText2: {
    marginBottom: 20,
    fontFamily: "bold",
    alignSelf: "center",
  },
  buttonStyle: {
    borderRadius: 15,
    height: 50,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "bold",
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "600",
  },
});

export default Login;
