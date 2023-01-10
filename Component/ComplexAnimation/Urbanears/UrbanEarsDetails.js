// import {AntDesgin} from '@expo/vector-icons'
// import * as React from 'react';
// import{
//     Animated,
//     Dimensions,
//     Text,
//     View,
//     StyleSheet,
//     Image,
//     StatusBar,
//     SafeAreaView,
//     TouchableOpacity} from 'react-native'
// //import {SPACING} from ''

// const PlayIcon=()=><AntDesgin name='playcircleo' size={18} color='black' />

// const UrbanEarsDetails=({navigation, route})=>{
//     const {item}=route.params;
//     return(
//         <SafeAreaView style={{flex: 1,}}>
//             <AntDesgin 
//             name='close'
//             size={28}
//             style={{
//                 padding: 12,
//                 position:'absolute',
//                 //top:SPACING*2,
//                 right:0,
//                 zIndex:2,
//             }}
//             color={'#333'}
//             onPress={()=>{
//                 //animation(0).start()
//                 navigation.goBack();
//             }}
//             />
//             <View>
//                 <View style={{flexDirection:'row', overflow:'hidden'}}>
//                     {item.type.split('').map((letter,index)=>{
//                         return(
//                             <Text 
//                                 key={`${letter}-${index}`}
//                                 style={{
//                                     fontSize:42,
//                                     fontWeight:'bold',
//                                     textTransform:'uppercase',
//                                 }}
//                             >
//                                 {letter}
//                             </Text>
//                         )
//                     })}
//                 </View>
//             </View>
//         </SafeAreaView>
//     )
// }

// export default UrbanEarsDetails;