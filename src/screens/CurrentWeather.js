import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { weatherType } from '../utilities/weatherType';



export default function CurrentWeather({ weatherData }) {
    const { wrapper, container, tempStyles, feels, highlowwrappr, highlow, bodywrapper, description, message } = styles
    console.log(weatherData)
    const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData
    const weatherCondition = weather[0].main


    return (
        <SafeAreaView style={[wrapper, { backgroundColor: weatherType[weatherCondition].backgroundColor }]}>
            <View style={container}>
                <Feather name={weatherType[weatherCondition].icon} size={100} color="white" />
                <Text style={tempStyles}>{temp}°</Text>
                <Text style={feels}>{`feels ike ${feels_like}°`}</Text>
                <RowText messageone={`High : ${temp_max}° `} messagetwo={`Low :${temp_min}° `} containerStyles={highlowwrappr} messageoneStyles={highlow} messagetwoStyles={highlow} />
            </View>
            <RowText messageone={weather[0]?.description} messagetwo={weatherType[weatherCondition]?.message} containerStyles={bodywrapper} messageoneStyles={description} messagetwoStyles={message} />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,

    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    },
    tempStyles: {
        color: "black",
        fontSize: 48
    },
    feels: {
        fontSize: 30,
        color: "black"
    }
    , highlow: {
        color: "black",
        fontSize: 20,

    },
    highlowwrappr: {
        flexDirection: "row"
    },
    bodywrapper: {
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingLeft: 25,
        marginBottom: 40
    },
    description: {
        fontSize: 36
    },
    message: {
        fontSize: 23
    }

});
