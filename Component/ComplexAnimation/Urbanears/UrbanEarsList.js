// import {useNavigatiom} from '@react-navigation/native'







// import * as React from 'react'
// import{
//     Animated,
//     Dimensions,
//     Text,
//     View,
//     StyleSheet,
//     Image,
//     StatusBar,
//     SafeAreaView,
//     TouchableOpacity
// } from 'react-native'
// import { Circle } from 'react-native-svg';
// import urbanears from './urbanears'
// const {height, width } = useWindowDimensions();

// const TICKER_HEIGHT=40;
// const LOGO_WIDTH=220;
// const LOGO_HEIGHT=40;
// const CIRCLE_SIZE=width*.6;
// const DOT_SIZE=40;

// const Item=({item,scrollx,index})=>{
//     const {imageUri,heading,description}=item
//     const navigation=useNavigatiom();
//     const inputRange=[(index-1)*width,(index)*width,(index+1)*width]
//     const opacityInputRange=[
//         (index-0.4)*width,
//         (index)*width,
//         (index+0.4)*width
//     ]
//     const translateXHeading=scrollx.interpolate({
//         inputRange,
//         outputRange:[width*0.1,0,-width*0.1],
//     })
//     const translateXDescription=scrollx.interpolate({
//         inputRange,
//         outputRange:[width,0,-width],
//     })
//     const opacity=scrollx.interpolate({
//         inputRange:opacityInputRange,
//         outputRange:[0,1,0],
//     })
//     const imageScale=scrollX.interpolate({
//         inputRange,
//         outputRange:[0.2,1,0.2],
//     })
//     return(
//         <TouchableOpacity
//            activeOpacity={0.8}
//            onPress={()=>{
//             navigation.navigate('UrbanEarsDetails',{item})
//            }}
//            style={StyleSheet.itemStyle}
//            >
//             <Animated.Image
//                 source={imageUri}
//                 style={[
//                     styles.imageStyle,
//                     {

//                     }
//                 ]}
//            </TouchableOpacity>
//     )






































































































//     return(
//         <View style={styles.pagination}>
//             <Animated.View
//                 style={[styles.paginationIndicator,
//                 {
//                     transform:[{translatex}]
//                 }
//             ]}
//             />
//             {urbanears.map((item)=>{
//                 return(
//                     <View>
//                         <View 
//                             style={[styles.paginationDot,{backgroundColor:item.color}]}
//                         />
//                     </View>
//                 )
//             })}
//         </View>
//     )
// }

// export default function UrbanEarsList({navigation}){
//     const _scrollX=React.useRef(new Animated.Value(0)).current;

//     return(
//         <SafeAreaView style={styles.container}>
//             <StatusBar hidden />
//             <Circle scrollX={_scrollX} />
//             <Image 
//                 style={styles.logo}
//                 source={require('')}
//             />
//             <Animated.FlatList 
//                 pagingEnabled
//                 showsHorizontalScrollIndicator={false}
//                 scrollEventThrottle={16}

//             />
//         </SafeAreaView>
//     )
// }

