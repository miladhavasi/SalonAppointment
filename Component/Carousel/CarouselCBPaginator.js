import React from 'react';
import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native';

export default ({ data, scrollX }) => {
    const { width: windowWidth, height: windowheight } = useWindowDimensions();

    return (
        <View style={{flexDirection: 'row', height: 64, alignItems: 'center'}}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * windowWidth, i * windowWidth, (i + 1) * windowWidth]
                const dotWidth=scrollX.interpolate({
                    inputRange,
                    outputRange:[10,20,10],
                    extrapolate:'clamp',
                })
                const opacity=scrollX.interpolate({
                    inputRange,
                    outputRange:[0.3,1,0.3],
                    extrapolate:'clamp'
                })
                return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={i.toString()} />
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#493d8a',
        marginHorizontal: 8,
    },
})