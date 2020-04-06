import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './Router';

StatusBar.setBarStyle('light-content');
console.disableYellowBox = true;
export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  }
}
