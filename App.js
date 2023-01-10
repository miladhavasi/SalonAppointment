import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { I18nManager } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import ArticleScreen from './Screens/ArticleScreen';
import ArticleDetailScreen from './Screens/ArticleDetailScreen';
import SalonList from './Component/ComplexAnimation/Salon/SalonList';
import SalonListDetails from './Component/ComplexAnimation/Salon/SalonListDetails';
import HomeScreen from './Screens/HomeScreen';
import ArticleData from './Data/ArticleData';

import { windowHeight, windowWidth } from './config/size'

SplashScreen.preventAutoHideAsync();
I18nManager.forceRTL(true);

export default function App() {
  const [fontsLoaded] = useFonts({
    "Helvetica": require("./assets/Fonts/Helvetica.ttf"),
    "Helvetica-Bold": require("./assets/Fonts/Helvetica-Bold.ttf"),
    "Iran-Sans-Bold": require("./assets/Fonts/Iran-Sans-Bold.ttf"),
    "Iran-Sans-Light": require("./assets/Fonts/Iran-Sans-Light.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  const ProfileScreen = () => {
    return <Text>This is 's profile</Text>;
  };




  const Stack = createSharedElementStackNavigator();

  return (


    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ArticleScreen" >
          <Stack.Screen name="ArticleScreen" component={ArticleScreen} options ={{headerShown: false} }/>
          <Stack.Screen name="ArticleDetailScreen" component={ArticleDetailScreen} options ={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>

    // <View style={{ flex: 1, backgroundColor: 'khaki' }} onLayout={onLayoutRootView}>

    //   <FlatList
    //     data={data}
    //     renderItem={({ item }) => (

    //       <Text >{item.id}</Text>

    //     )}
    //     keyExtractor={item => item.id}
    //   />

    // </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
