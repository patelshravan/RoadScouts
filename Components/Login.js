import React, { useState, useCallback } from "react";
import {
  View,
  RefreshControl,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
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

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Login = ({ navigation }) => {
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
    setAgree("");
    setEmail("");
    setPassword("");
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

  const handleLoginSubmit = () => {
    if (!isEnabled) {
      navigation.navigate("Home", { Email: `${email}` });
    } else {
      navigation.navigate("HomeDriver", { Email: `${email}` });
    }
  };

  const handleSignupSubmit = () => {
    navigation.navigate("Signup");
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.mainHeader}>Account Login</Text>
        <View style={styles.switch}>
          <Text style={{ fontSize: 20, fontFamily: "bold" }}>
            Are You a Driver?
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#32cd32" }}
            thumbColor={isEnabled ? "#4630EB" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your email </Text>
          <View style={styles.action}>
            <Feather name="mail" color="#05375a" size={20} />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Enter your password </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              style={styles.textInput}
              value={password}
              secureTextEntry={true}
              onChangeText={(value) => setPassword(value)}
            />
          </View>
        </View>
        <View style={styles.wrapper}>
          <Checkbox
            color="#4630EB"
            status={agree ? "checked" : "unchecked"}
            onPress={() => {
              setAgree(!agree);
            }}
          />
          <Text style={styles.wrapperText}>
            {" "}
            I have read and agreed with the T&C{" "}
          </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: agree ? "#4630EB" : "grey",
            },
          ]}
          disabled={!agree}
          onPress={handleLoginSubmit}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgotPassword");
          }}
          style={{ marginTop: 10, alignSelf: "flex-end" }}
        >
          <Text style={{ fontFamily: "regular" }}>Forgot Password?</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.bottomText1} />
          <Text style={styles.bottomText2}> Don't have an account? </Text>
        </View>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: "#4630EB",
            },
          ]}
          onPress={handleSignupSubmit}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
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
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    alignSelf: "center",
    fontFamily: "regular2",
    paddingTop: 50,
    paddingBottom: 30,
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: "regular",
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
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: "regular",
    fontSize: 18,
  },
  textInput: {
    marginTop: Platform.OS === "android" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    alignContent: "center",
  },
  wrapperText: {
    marginTop: 0,
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
    marginBottom: 10,
    fontFamily: "bold",
    alignSelf: "center",
  },
  buttonStyle: {
    borderRadius: 40,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "600",
  },
});

export default Login;
