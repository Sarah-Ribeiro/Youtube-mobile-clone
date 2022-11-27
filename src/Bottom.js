import React from "react";
import { StyleSheet, Text, View, } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";

function Bottom() {
    return (
        <View style={styles.header}>
            <View style={styles.rightIcons}>
                <Icon name="home" size={32} color="#fff" style={styles.headerIcons}></Icon>
                <Icon name="add" size={32} color="#fff" style={styles.headerIcons}></Icon>
                <Icon name="video-library" size={32} color="#fff" style={styles.headerIcons}></Icon>
                <Icon name="subscriptions" size={32} color="#fff" style={styles.headerIcons}></Icon>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#404040",
        justifyContent: "space-between",
        flexDirection: "row",
        bottom: 0, 
        position: "absolute",
        width: 500, 
        padding: 20,
    },
    rightIcons: {
        flexDirection: "row",
        alignItems: "center"
    },
    headerIcons: {
        marginHorizontal: 30
    }
});

export default Bottom;
