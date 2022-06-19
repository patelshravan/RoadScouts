import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const TermAndCond = ({ navigation }) => {
  const [accepted, setAccepted] = useState(false);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Terms and conditions</Text>
        <ScrollView
          style={styles.tcContainer}
          showsVerticalScrollIndicator={false}
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent)) {
              setAccepted({
                accepted: true,
              });
            }
          }}
        >
          <Text style={{ fontFamily: "regular" }}>
            Welcome to our app. If you continue to browse and use this app, you
            are agreeing to comply with and be bound by the following terms and
            conditions of use, which together with our privacy policy govern
            [RoadScouts]’s relationship with you in relation to this app. If you
            disagree with any part of these terms and conditions, please do not
            use our app.
          </Text>
          <Text style={{ fontFamily: "regular", marginTop: 10 }}>
            The term ‘[RoadScouts]’ or ‘us’ or ‘we’ refers to the owner of the
            app whose registered office is [MeenaVaas, Swaroopganj, Sirohi,
            Rajasthan]. Our company’s registration number is
            [U72200MH2009PLC123456 and Swaroopganj]. The term ‘you’ refers to
            the user or viewer of our app.
          </Text>
          <Text style={{ fontFamily: "regular", marginTop: 10 }}>
            {"\u2022"} The content of the pages of this app is for your general
            information and use only. It is subject to change without notice.
          </Text>
          <Text style={{ fontFamily: "regular", marginTop: 10 }}>
            {"\u2022"} This app uses cookies to monitor browsing preferences. If
            you do allow cookies to be used, the following personal information
            may be stored by us for use by third parties.
          </Text>
          <Text style={{ fontFamily: "regular", marginTop: 10 }}>
            {"\u2022"} Neither we nor any third parties provide any warranty or
            guarantee as to the accuracy, timeliness, performance, completeness
            or suitability of the information and materials found or offered on
            this app for any particular purpose. You acknowledge that such
            information and materials may contain inaccuracies or errors and we
            expressly exclude liability for any such inaccuracies or errors to
            the fullest extent permitted by law.
          </Text>
          <Text style={{ fontFamily: "regular", marginTop: 10 }}>
            {"\u2022"} Your use of any information or materials on this app is
            entirely at your own risk, for which we shall not be liable. It
            shall be your own responsibility to ensure that any products,
            services or information available through this app meet your
            specific requirements.
          </Text>
          <Text style={{ fontFamily: "regular", marginTop: 10 }}>
            {"\u2022"} This app contains material which is owned by or licensed
            to us. This material includes, but is not limited to, the design,
            layout, look, appearance and graphics. Reproduction is prohibited
            other than in accordance with the copyright notice, which forms part
            of these terms and conditions.
          </Text>
          <Text style={{ fontFamily: "regular", marginTop: 10 }}>
            {"\u2022"} All trademarks reproduced in this app, which are not the
            property of, or licensed to the operator, are acknowledged on the
            app. Unauthorised use of this app may give rise to a claim for
            damages and/or be a criminal offence.
          </Text>
          <Text style={{ fontFamily: "regular", marginTop: 10 }}>
            {"\u2022"} From time to time, this app may also include links to
            other apps. These links are provided for your convenience to provide
            further information. They do not signify that we endorse the app(s).
            We have no responsibility for the content of the linked app(s).
          </Text>
          <Text style={{ fontFamily: "regular", marginTop: 10 }}>
            {"\u2022"} Your use of this app and any dispute arising out of such
            use of the app is subject to the laws of England, Northern Ireland,
            Scotland and Wales.
          </Text>
          <Text style={{ fontFamily: "regular", marginTop: 10 }}>
            The use of this app is subject to the following terms of use.
          </Text>
        </ScrollView>

        <TouchableOpacity
          disabled={!accepted}
          onPress={() => {
            navigation.navigate("Signup");
          }}
          style={accepted ? styles.button : styles.buttonDisabled}
        >
          <Text style={styles.buttonLabel}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 25,
    color: "#051C60",
    fontWeight: "500",
    alignSelf: "center",
    fontFamily: "regular2",
    paddingTop: 50,
    textTransform: "capitalize",
  },

  tcContainer: {
    marginTop: 15,
    marginBottom: 15,
    height: height * 0.7,
  },

  button: {
    backgroundColor: "#32cd32",
    padding: 10,
    borderRadius: 15,
    height: 50,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonDisabled: {
    backgroundColor: "#999",
    padding: 10,
    borderRadius: 15,
    height: 50,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonLabel: {
    color: "#FFF",
    fontSize: 20,
    justifyContent: "center",
    alignContent: "center",
    fontFamily: "bold",
  },
});

export default TermAndCond;
