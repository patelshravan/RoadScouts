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
  JosefinSans_700Bold,
} from "@expo-google-fonts/josefin-sans";
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import Feather from "react-native-vector-icons/Feather";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
    setEmail("");
    setPassword("");
    setIsEnabled(false);
  }, []);

  let [fontLoaded, error] = useFonts({
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
            thumbColor={isEnabled ? "#2c9dd1" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Email </Text>
          <View style={styles.action}>
            <Feather name="mail" color="#05375a" size={20} />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              value={email}
              keyboardType="email-address"
              onChangeText={(value) => setEmail(value)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labels}> Password </Text>
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
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: "#32cd32",
            },
          ]}
          onPress={handleLoginSubmit}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ForgotPassword");
          }}
          style={{ alignSelf: "flex-end" }}
        >
          <Text style={{ fontFamily: "regular2" }}>Forgot Password?</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.bottomText1} />
          <Text style={styles.bottomText2}>
            {" "}
            Don't have an account?{" "}
            <Text
              style={{ fontWeight: "bold", color: "#32cd32" }}
              onPress={handleSignupSubmit}
            >
              Create One
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
    borderBottomWidth: 1.6,
    borderBottomColor: "#000",
    width: "100%",
  },
  bottomText2: {
    fontFamily: "bold",
    alignSelf: "center",
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

export default Login;
