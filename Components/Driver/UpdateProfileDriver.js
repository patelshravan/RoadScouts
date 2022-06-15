import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";

import { useTheme } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesome } from "@expo/vector-icons";

const UpdateProfileDriver = ({ navigation, route }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setText(fDate + "\n");
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const [image, setImage] = useState(
    "https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg"
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: "#fff",
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: "bold2",
              fontSize: 18,
              marginTop: 10,
            }}
          >
            Personal Information
          </Text>
        </View>
        <View>
          <View>
            <Text style={styles.labels}> Name </Text>
            <View style={styles.action}>
              <Feather name="user" color="#777777" size={20} />
              <TextInput
                style={styles.textInput}
                autoCapitalize="words"
                //   onChangeText={(value) => setPassword(value)}
              />
            </View>
          </View>
          <View>
            <Text style={styles.labels}> Email </Text>
            <View style={styles.action}>
              <Feather name="mail" color="#777777" size={20} />
              <TextInput
                style={styles.textInput}
                keyboardType="email-address"
                //   onChangeText={(value) => setPassword(value)}
              />
            </View>
          </View>
          <View>
            <Text style={styles.labels}> Mobile </Text>
            <View style={styles.action}>
              <Feather name="phone" color="#777777" size={20} />
              <TextInput
                style={styles.textInput}
                keyboardType="phone-pad"
                //   onChangeText={(value) => setPassword(value)}
              />
            </View>
          </View>
          <View>
            <Text style={styles.labels}> DOB </Text>
            <View style={styles.action}>
              <TouchableOpacity
                onPress={() => {
                  showMode("date");
                }}
              >
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    display="default"
                    onChange={onChange}
                  />
                )}
                <Feather name="calendar" color="#777777" size={20} />
              </TouchableOpacity>
              <TextInput
                style={styles.textInput}
                value={text}
                onChangeText={(value) => setText(value)}
                editable={false}
              />
            </View>
          </View>
          <View>
            <Text style={styles.labels}> City </Text>
            <View style={styles.action}>
              <Feather name="map-pin" color="#777777" size={20} />
              <TextInput
                style={styles.textInput}
                autoCapitalize="words"
                //   onChangeText={(value) => setPassword(value)}
              />
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.buttonStyle,
              {
                backgroundColor: "#4630EB",
              },
            ]}
            //   onPress={onSubmitPress}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.bottomText1} />
            {/* Vehicle */}
            <Text
              style={{
                fontFamily: "bold2",
                fontSize: 18,
                marginTop: 30,
                alignSelf: "center",
              }}
            >
              Vehicle Information
            </Text>
            <View>
              <View>
                <Text style={styles.labels}> Driving License </Text>
                <View style={styles.action}>
                  <FontAwesome
                    name="drivers-license-o"
                    size={20}
                    color="#777777"
                  />
                  <TextInput
                    style={styles.textInput}
                    keyboardType="name-phone-pad"
                    autoCapitalize="characters"
                    maxLength={16}
                    //   onChangeText={(value) => setPassword(value)}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.labels}> Vehicle Name </Text>
                <View style={styles.action}>
                  <FontAwesome name="car" color="#777777" size={20} />
                  <TextInput
                    style={styles.textInput}
                    autoCapitalize="words"
                    //   onChangeText={(value) => setPassword(value)}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.labels}> Vehicle Number </Text>
                <View style={styles.action}>
                  <FontAwesome name="car" color="#777777" size={20} />
                  <TextInput
                    style={styles.textInput}
                    keyboardType="number-pad"
                    //   onChangeText={(value) => setPassword(value)}
                  />
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.buttonStyle,
              {
                backgroundColor: "#4630EB",
              },
            ]}
            //   onPress={onSubmitPress}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateProfileDriver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textInput: {
    marginTop: Platform.OS === "android" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    flex: 1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
  },
  buttonStyle: {
    borderRadius: 20,
    height: 50,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  bottomText1: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    width: "100%",
    fontFamily: "regular",
    fontWeight: "bold",
    alignSelf: "center",
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
  action: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc",
    paddingBottom: 5,
  },
});
