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
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import DateTimePicker from "@react-native-community/datetimepicker";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const UpdateCustomerProfile = ({ navigation, route }) => {
  //   const name = route.params.name;
  //   const email = route.params.email;
  //   const mobile = route.params.mobile;
  //   const city = route.params.city;

  //   const [newName, setNewName] = useState(name);
  //   const [newMobile, setNewMobile] = useState(mobile);

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
  const { colors } = useTheme();

  //   const onSubmitPress = () => {
  //     AsyncStorage.getItem("token").then((value) => {
  //       if (value) {
  //         fetch("http://192.168.43.169:5000/api/v1/user/update", {
  //           method: "POST",
  //           cache: "no-cache",
  //           headers: {
  //             Authorization: `Bearer ${value}`,
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({
  //             name: newName,
  //             mobile: newMobile,
  //           }),
  //         })
  //           .then((result) => {
  //             return result.json();
  //           })
  //           .then((response) => {
  //             navigation.navigate("Profile");
  //           })
  //           .catch((error) => {
  //             console.error(error);
  //           });
  //       }
  //     });
  //   };

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
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
            {/* {name} */}
          </Text>
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.labels}> Name </Text>
            <View style={styles.action}>
              <Feather name="user" color="#05375a" size={20} />
              <TextInput
                style={styles.textInput}
                //   onChangeText={(value) => setPassword(value)}
              />
            </View>
          </View>
          <View>
            <Text style={styles.labels}> Email </Text>
            <View style={styles.action}>
              <Feather name="mail" color="#05375a" size={20} />
              <TextInput
                style={styles.textInput}
                //   onChangeText={(value) => setPassword(value)}
              />
            </View>
          </View>
          <View>
            <Text style={styles.labels}> Mobile </Text>
            <View style={styles.action}>
              <Feather name="phone" color="#05375a" size={20} />
              <TextInput
                style={styles.textInput}
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
                <Feather name="calendar" color="#05375a" size={20} />
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
              <Feather name="map-pin" color="#05375a" size={20} />
              <TextInput
                style={styles.textInput}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateCustomerProfile;

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
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc",
    paddingBottom: 5,
  },
});
