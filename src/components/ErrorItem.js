import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
const ErrorItem = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}>Sorry something went wrong</Text>
            <Feather name={'frown'} size={100} color={'white'} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    errorMessage: {
        fontSize: 20,
        color: "white",
        marginHorizontal: 10,
        alignItems: "center"
    }
})
export default ErrorItem