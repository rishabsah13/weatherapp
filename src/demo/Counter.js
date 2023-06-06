import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)
    const [newcount, setnewcount] = useState(0)
    useEffect(() => {
        console.log(`count value is ${count}`)
        return () => {
            console.log('useeffect cleanup')
        }
    }, [count, newcount])
    return (
        <View>
            <Text style={{ marginTop: 200 }}>{`count :${count}`}</Text>
            <Button color='red' title="Increase the count"
                onPress={() => setCount(count + 1)


                }
            />
            <Button title='decrease the count' onPress={() => setCount(count - 1)

            } />
            <Button title='decrease the count' onPress={() => setnewcount(count + 1)

            } />
            <Button title='decrease the count' onPress={() => setnewcount(count - 1)

            } />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "orange"
    },
    title: {
        alignSelf: "center",
        fontSize: 25,
        marginTop: 25
    }
})
export default Counter