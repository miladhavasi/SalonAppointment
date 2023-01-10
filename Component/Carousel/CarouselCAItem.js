import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';


export default ({ item }) => {

    const { width: windowWidth, height:windowHeight } = useWindowDimensions();


    return (
        <View style={[styles.container,{height:windowHeight}]}>
            <View style={ {flex:0.9,justifyContent: 'center'}}>
                <Image source={item.image} style={ styles.image} /> 
            </View>

            <View style={{flex:0.1}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );

}
//,{width}
//resizeMode: 'contain'
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center',
    },
    image: {
        resizeMode: 'contain' 
    },
    title: {
        fontWeight: '800',
        marginBottom:10,
        color: '#493d8a',
        textAlign: 'center',

    },
    description: {
        //backgroundColor:'purple',
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal:64,
    }
});