import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LandingScreen from './screens/Landing';
import LoginScreen from './screens/Login';
import ForgotPasswordScreen from './screens/ForgotPassword';
import RegisterScreen from './screens/Register';
import SubjectsScreen from './screens/TutorRegistration/Subjects';
import PersonalizeProfileScreen from './screens/TutorRegistration/PersonalizeProfile';
import TermsAndAgreementScreen from './screens/TutorRegistration/TermsAndAgreement';
import EmailConfirmationScreen from './screens/TutorRegistration/EmailConfirmation';
import PreferencesScreen from './screens/TutorRegistration/Preferences';
import BasicInfoScreen from './screens/TutorRegistration/BasicInfo';
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
      <Stack.Screen
        name="Subjects"
        component={SubjectsScreen}
        options={{title: 'Select Subjects: Step 2 of 6'}}
      />
      <Stack.Screen
        name="Basic Info"
        component={BasicInfoScreen}
        options={{title: 'Basic Info: Step 3 of 6'}}
      />
      <Stack.Screen
        name="Preferences"
        component={PreferencesScreen}
        options={{title: 'Preferences: Step 4 of 6'}}
      />
      <Stack.Screen
        name="Personalize Profile"
        component={PersonalizeProfileScreen}
        options={{title: 'Personalize Profile: Step 5 of 6'}}
      />
      <Stack.Screen
        name="Terms and Agreement"
        component={TermsAndAgreementScreen}
        options={{title: 'Terms & Agreement: Step 6 of 6'}}
      />
      <Stack.Screen
        name="Email Confirmation"
        component={EmailConfirmationScreen}
        options={{title: 'Email Confirmation'}}
      />
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
