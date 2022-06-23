import React, { useState } from "react";
import { View, StyleSheet, Share, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  // useTheme,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

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

const DrawerContent = (props) => {
  const navigation = useNavigation();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  // const paperTheme = useTheme();
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

  const onShare = async () => {
    try {
      const result = await Share.share(
        {
          subject: "RoadScouts",
          title: "A Transportation App.",
          message:
            "Hey, Download this app and get a awesome discount on your first ride!\n https://play.google.com/store/apps/details?id=com.whatsapp&hl=en_IN&gl=US",
          // url: "https://play.google.com/store/apps/details?id=com.whatsapp&hl=en_IN&gl=US",
        },
        {
          // Android
          dialogTitle: "Share RoadScouts App ",
          // IOS
          excludedActivityTypes: [],
        }
      );
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <Drawer.Section style={styles.drawerSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Image
              source={require("../../assets/profile.jpg")}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
                marginLeft: 10,
              }}
            />
            <View
              style={{
                marginLeft: 15,
                alignSelf: "center",
                flexDirection: "column",
              }}
            >
              <Text style={styles.title}>Shravan Patel</Text>
              <Text style={styles.caption}>patelshravan24@gmail</Text>
            </View>
          </View>
        </Drawer.Section>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItemList {...props} />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text style={{ fontFamily: "regular2" }}>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Ionicons name="share-social-outline" color={color} size={size} />
          )}
          label="Tell a friend"
          onPress={onShare}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </Drawer.Section>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontFamily: "regular",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: "regular",
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
