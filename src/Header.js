import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import youtube from '../assets/Youtube-logo.png'

function Header() {
  return (
    <View style={styles.header}>
      <View style={{ justifyContent: "center", paddingLeft: 20 }}>
        <Image source={youtube} style={styles.image}/>
      </View>
      <View style={styles.rightIcons}>
        <Icon
            style={styles.headerIcons}
            name="search"
            size={28}
            color="#fff"
          />
          <Icon
            style={styles.headerIcons}
            name="videocam"
            size={28}
            color="#fff"
          />
          <Icon
            style={styles.headerIcons}
            name="notifications"
            size={28}
            color="#fff"
          />
          <Icon
            style={styles.headerIcons}
            name="account-circle"
            size={28}
            color="#fff"
          />
          
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'fixed',
    top: 0,
    height: 100,
    paddingTop: 40,
    backgroundColor: "#404040",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  rightIcons: {
    flexDirection: "row",
    alignItems: "center"
  },
  headerIcons: {
    marginHorizontal: 10
  }, 
  image: {
    width: 80, 
    height: 400,
    resizeMode: "contain"
  }
});

export default Header;
