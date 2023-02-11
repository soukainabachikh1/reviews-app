import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import Home from './Pages/Home';
import { useState } from 'react';
import {AppLoading} from 'expo'

const getFont = () => {
  return Font.loadAsync({
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  })
}

export default function App() {
const [fontsLoaded, setFontLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <Home/>
    );
  } else{
    return(
      <AppLoading
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
