import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import thumb from '../assets/thumb.jpg'
import { useFonts, Roboto_500Medium, Roboto_100Thin } from '@expo-google-fonts/roboto';
import photo from '../assets/photo.jpeg'

export default function Content() {

    let [fontsLoaded] = useFonts({
        Roboto_500Medium,
        Roboto_100Thin
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                
            <Image source={thumb} style={styles.image}></Image>
            <Text style={styles.text}>OS PORTEIROS DO LENDÁRIO</Text>
            <Image style={styles.photo} source={photo}></Image>
            <View style={styles.description}>
                <Text  style={styles.description}>1Kawi</Text>
                <Text  style={styles.description}>15 Views</Text>
                <Text  style={styles.description}>3 meses</Text>
            </View>
            <Image source={thumb} style={styles.image}></Image>
            <Text style={styles.text}>OS PORTEIROS DO LENDÁRIO</Text>
            <Image style={styles.photo} source={photo}></Image>
            <View style={styles.description}>
                <Text  style={styles.description}>1Kawi</Text>
                <Text  style={styles.description}>15 Views</Text>
                <Text  style={styles.description}>3 meses</Text>
            </View>
            <Image source={thumb} style={styles.image}></Image>
            <Text style={styles.text}>OS PORTEIROS DO LENDÁRIO</Text>
            <Image style={styles.photo} source={photo}></Image>
            <View style={styles.description}>
                <Text  style={styles.description}>1Kawi</Text>
                <Text  style={styles.description}>15 Views</Text>
                <Text  style={styles.description}>3 meses</Text>
            </View>
            <Image source={thumb} style={styles.image}></Image>
            <Text style={styles.text}>OS PORTEIROS DO LENDÁRIO</Text>
            <Image style={styles.photo} source={photo}></Image>
            <View style={styles.description}>
                <Text  style={styles.description}>1Kawi</Text>
                <Text  style={styles.description}>15 Views</Text>
                <Text  style={styles.description}>3 meses</Text>
            </View>
            <Image source={thumb} style={styles.image}></Image>
            <Text style={styles.text}>OS PORTEIROS DO LENDÁRIO</Text>
            <Image style={styles.photo} source={photo}></Image>
            <View style={styles.description}>
                <Text  style={styles.description}>1Kawi</Text>
                <Text  style={styles.description}>15 Views</Text>
                <Text  style={styles.description}>3 meses</Text>
            </View>
            <Image source={thumb} style={styles.image}></Image>
            <Text style={styles.text}>OS PORTEIROS DO LENDÁRIO</Text>
            <Image style={styles.photo} source={photo}></Image>
            <View style={styles.description}>
                <Text  style={styles.description}>1Kawi</Text>
                <Text  style={styles.description}>15 Views</Text>
                <Text  style={styles.description}>3 meses</Text>
            </View>
            <Image source={thumb} style={styles.image}></Image>
            <Text style={styles.text}>OS PORTEIROS DO LENDÁRIO</Text>
            <Image style={styles.photo} source={photo}></Image>
            <View style={styles.description}>
                <Text  style={styles.description}>1Kawi</Text>
                <Text  style={styles.description}>15 Views</Text>
                <Text  style={styles.description}>3 meses</Text>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        display: 'flex',
    },
    image: {
        marginTop: 30,
        width: 390,
        height: 200
    },
    text: {
        fontFamily: 'Roboto_500Medium',
        color: 'white',
        fontSize: 16,
        marginLeft: 55,
        marginTop: 15,
    },
    photo: {
        borderRadius: '50%',
        width: 45,
        height: 45,
        marginTop: -25,
        marginLeft: 5
    },
    description: {
        fontFamily: 'Roboto_100Thin',
        fontSize: 10,
        justifyContent: 'space-around',
        flexDirection: 'row',
        color: 'gray',
        marginHorizontal: 110,
        top: -8, 
        marginLeft: 60
    }
})