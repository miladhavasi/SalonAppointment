import React from 'react';
import { View,Text,StyleSheet, Image,useWindowDimensions } from 'react-native';

export default ({item})=> {
    const {width :windowWidth,height:windowheight}=useWindowDimensions();

 return (
    <View style={[StyleSheet.container,{width:windowWidth}]}>

            <Image source={item.image} style={[styles.image, {flex:.7,width:windowWidth , resizeMode: 'contain'}]}/>

        
        <View style={{flex:0.3}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    </View>
  );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        justifyContent:'center',

    },
    title:{
        fontWeight:'800',
        fontSize:28,
        marginBottom:10,
        color:'#493d8a',
        textAlign:'center',
    
    },
    description:{
        fontWeight:'300',
        color:'#62656b',
        textAlign:'center',
        paddingHorizontal:64,
    },
})