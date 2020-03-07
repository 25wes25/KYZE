import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './Router';

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
