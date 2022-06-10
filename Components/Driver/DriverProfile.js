import { View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
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

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome } from "@expo/vector-icons";

const DriverProfile = ({ navigation }) => {
  const update = () => {
    navigation.navigate("UpdateProfileDriver");
  };

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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Avatar.Image
            style={{ backgroundColor: "#ffffff" }}
            source={{
              uri: "https://spesialis1.orthopaedi.fk.unair.ac.id/wp-content/uploads/2021/02/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
              Shravan
            </Title>
            <Caption style={styles.caption}>@patelshravan</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <Text style={{ fontFamily: "bold2", fontSize: 18, marginBottom: 10 }}>
          Personal Information
        </Text>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            Swaroopganj, Rajasthan
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>7742026070</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            patelshravan24@gmail.com
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="calendar" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>24/09/2000</Text>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <Text style={{ fontFamily: "bold2", fontSize: 18, marginBottom: 10 }}>
          Vehicle Information
        </Text>
        <View style={styles.row}>
          <FontAwesome name="drivers-license-o" size={20} color="#777777" />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            RJ38 20180003417
          </Text>
        </View>
        <View style={styles.row}>
          <FontAwesome name="car" size={20} color="#777777" />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            Maruti Suzuki Ertiga - RJ38UA0543
          </Text>
        </View>
        {/* <View style={styles.row}>
          <Icon name="calendar" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>24/09/2000</Text>
        </View> */}
      </View>
      <View>
        <TouchableOpacity
          style={[
            styles.buttonStyle,
            {
              backgroundColor: "#6495ed",
            },
          ]}
          onPress={update}
        >
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DriverProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 50,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
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
});
