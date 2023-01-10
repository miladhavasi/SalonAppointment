import React from 'react';
import { View,Dimensions } from 'react-native';
import ArticleData from '../Data/ArticleData'
import CategoryData from '../Data/CategoryData'
import ArticleList from '../Component/Lists/ArticleList'

const { width } = Dimensions.get("screen");

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export default ({navigation})=> {
 return (
   <View style={{flex:1,alignItems:'center'}}>
      <ArticleList navigation={navigation} data={shuffle(ArticleData)} height={(width - 16 * 2) / 2} width={width - 16 * 2} />
   </View>
  );
}



