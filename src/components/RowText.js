import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const RowText = (props) => {
    const { messageone, messageoneStyles, messagetwo, messagetwoStyles, containerStyles } = props
    return (
        <View style={containerStyles}>
            <Text style={messageoneStyles}>{messageone} </Text>
            <Text style={messagetwoStyles}>{messagetwo} </Text>
        </View>
    )
}

export default RowText