import { View, Text, Animated, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'

const BlinkView = (props: any) => {
    const [backgroundColor, setBackgroundColor] = React.useState<string>('#1C3879');
    const [loops, setLoops] = React.useState<number>(0);
    const value = useRef(new Animated.Value(0)).current;


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: backgroundColor,
            justifyContent: 'center',
            alignItems: 'center'
        },
    });

    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

export default BlinkView