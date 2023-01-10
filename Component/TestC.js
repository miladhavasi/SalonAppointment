import React from 'react';
import { View,StyleSheet,Dimensions } from 'react-native';
import CarouselAC from './Carousel/CarouselAC';

const TestC = () => {
  const { width: windowWidth, height:windowHeight } = Dimensions.get("screen");    
  const data = [
    { id: 1, image: require("../assets/Images/Banner-01.jpg"), text: "Baner 01" },
    { id: 2, image: require("../assets/Images/Banner-02.jpg"), text: "Baner 02" },
    { id: 3, image: require("../assets/Images/Banner-03.jpg"), text: "Baner 03" },
    { id: 4, image: require("../assets/Images/Banner-04.jpg"), text: "Baner 04" },
    { id: 5, image: require("../assets/Images/Banner-05.jpg"), text: "Baner 05" },
    { id: 6, image: require("../assets/Images/Banner-03.jpg"), text: "Baner 06" },
    { id: 7, image: require("../assets/Images/Banner-02.jpg"), text: "Baner 07" },
    { id: 8, image: require("../assets/Images/Banner-02.jpg"), text: "Baner 08" },
    { id: 9, image: require("../assets/Images/Banner-05.jpg"), text: "Baner 09" },

];
    return (
      <View style={{flex:1,alignItems:'center'}}>
        <CarouselAC data={data} _height={(windowWidth-40)/16*9} _width={(windowWidth-40)}/>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
  });
export default TestC;