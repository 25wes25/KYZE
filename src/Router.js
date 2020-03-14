import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LandingScreen from './screens/Landing';
import LoginScreen from './screens/Login';
import ForgotPasswordScreen from './screens/ForgotPassword';
import RegisterScreen from './screens/RegisterStudent';
import DashboardScreen from './screens/Dashboard';
import ProfileScreen from './screens/Profile';
import SettingsScreen from './screens/Settings';
import TermsOfServiceScreen from './screens/TermsOfService';
import PrivacyPolicyScreen from './screens/PrivacyPolicy';

import {colors} from './styles';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DashboardStack() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        gestureEnabled: false,
        title: '',
        headerStyle: {backgroundColor: colors.darkGray},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{title: ''}}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        gestureEnabled: false,
        title: '',
        headerStyle: {backgroundColor: colors.darkGray},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        title: '',
        headerStyle: {backgroundColor: colors.darkGray},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
      }}>
      <Drawer.Screen name="Dashboard" component={DashboardStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
    </Drawer.Navigator>
  );
}

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{
        gestureEnabled: false,
        title: '',
        headerStyle: {backgroundColor: colors.darkGray},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Landing"
        component={LandingScreen}
        options={{headerShown: false, headerBackTitle: ''}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerBackTitle: ''}}
      />
      <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Terms of Service" component={TermsOfServiceScreen} />
      <Stack.Screen name="Privacy Policy" component={PrivacyPolicyScreen} />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
