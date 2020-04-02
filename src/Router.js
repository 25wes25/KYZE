import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import StudentDashboardScreen from './screens/Student/StudentDashboard';
import TutorDashboardScreen from './screens/Tutor/TutorDashboard';
import SearchScreen from './screens/Student/Search';
import EarningsScreen from './screens/Tutor/Earnings';
import ScheduleScreen from './screens/Shared/Schedule';
import MessagesScreen from './screens/Shared/Messages';
import StudentProfileScreen from './screens/Student/StudentProfile';
import TutorProfileScreen from './screens/Tutor/TutorProfile';
import StudentSettingsScreen from './screens/Student/StudentSettings';
import TutorSettingsScreen from './screens/Tutor/TutorSettings';
import TermsOfServiceScreen from './screens/TermsOfService';
import PrivacyPolicyScreen from './screens/PrivacyPolicy';

import {colors} from './styles';

const Stack = createStackNavigator();
const StudentBottomTab = createBottomTabNavigator();
const TutorBottomTab = createBottomTabNavigator();

function StudentDashboardStack() {
  return (
    <Stack.Navigator
      initialRouteName="StudentDashboard"
      screenOptions={{
        gestureEnabled: false,
        title: '',
        headerStyle: {backgroundColor: colors.darkGray},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="StudentDashboard"
        component={StudentDashboardScreen}
        options={{title: 'Dashboard'}}
      />
    </Stack.Navigator>
  );
}

function TutorDashboardStack() {
  return (
    <Stack.Navigator
      initialRouteName="TutorDashboard"
      screenOptions={{
        gestureEnabled: false,
        title: '',
        headerStyle: {backgroundColor: colors.darkGray},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="TutorDashboard"
        component={TutorDashboardScreen}
        options={{title: 'Dashboard'}}
      />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{
        gestureEnabled: false,
        title: '',
        headerStyle: {backgroundColor: colors.darkGray},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{title: 'Search'}}
      />
    </Stack.Navigator>
  );
}

function EarningsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Earnings"
      screenOptions={{
        gestureEnabled: false,
        title: '',
        headerStyle: {backgroundColor: colors.darkGray},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Earnings"
        component={EarningsScreen}
        options={{title: 'Earnings'}}
      />
    </Stack.Navigator>
  );
}

function ScheduleStack() {
  return (
    <Stack.Navigator
      initialRouteName="ScheduleDashboard"
      screenOptions={{
        gestureEnabled: false,
        title: '',
        headerStyle: {backgroundColor: colors.darkGray},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{title: 'Schedule'}}
      />
    </Stack.Navigator>
  );
}

function MessagesStack() {
  return (
    <Stack.Navigator
      initialRouteName="Messages"
      screenOptions={{
        gestureEnabled: false,
        title: '',
        headerStyle: {backgroundColor: colors.darkGray},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Messages"
        component={MessagesScreen}
        options={{title: 'Messages'}}
      />
    </Stack.Navigator>
  );
}

function StudentProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="StudentProfile"
      screenOptions={{
        gestureEnabled: false,
        title: '',
        headerStyle: {backgroundColor: colors.darkGray},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="StudentProfile"
        component={StudentProfileScreen}
        options={{title: 'Profile'}}
      />
      <Stack.Screen
        name="StudentSettings"
        component={StudentSettingsScreen}
        options={{title: 'Settings'}}
      />
    </Stack.Navigator>
  );
}

function TutorProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="TutorProfile"
      screenOptions={{
        gestureEnabled: false,
        title: '',
        headerStyle: {backgroundColor: colors.darkGray},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="TutorProfile"
        component={TutorProfileScreen}
        options={{title: 'Profile'}}
      />
      <Stack.Screen
        name="TutorSettings"
        component={TutorSettingsScreen}
        options={{title: 'Settings'}}
      />
    </Stack.Navigator>
  );
}

function StudentBottomTabNavigator() {
  return (
    <StudentBottomTab.Navigator
      initialRouteName="StudentDashboard"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        title: '',
        headerStyle: {backgroundColor: colors.darkGray},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
      }}
      tabBarOptions={{
        activeTintColor: colors.black,
        inactiveTintColor: colors.lightGray,
        labelStyle: {
          fontFamily: 'Apple SD Gothic Neo',
          fontSize: 12,
        },
        style: {
          height: 60,
          borderTopColor: colors.black,
        },
      }}>
      <StudentBottomTab.Screen
        name="StudentDashboard"
        component={StudentDashboardStack}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  style={{height: 42, width: 42}}
                  source={require('../res/images/dashboardIconSelected.png')}
                />
              );
            } else {
              return (
                <Image
                  style={{height: 42, width: 42}}
                  source={require('../res/images/dashboardIconUnselected.png')}
                />
              );
            }
          },
        }}
      />
      <StudentBottomTab.Screen
        name="Search"
        component={SearchStack}
        options={{tabBarLabel: 'Search'}}
      />
      <StudentBottomTab.Screen
        name="Schedule"
        component={ScheduleStack}
        options={{tabBarLabel: 'Schedule'}}
      />
      <StudentBottomTab.Screen
        name="Messages"
        component={MessagesStack}
        options={{tabBarLabel: 'Messages'}}
      />
      <StudentBottomTab.Screen
        name="StudentProfile"
        component={StudentProfileStack}
        options={{tabBarLabel: 'Profile'}}
      />
    </StudentBottomTab.Navigator>
  );
}

function TutorBottomTabNavigator() {
  return (
    <TutorBottomTab.Navigator
      initialRouteName="TutorDashboard"
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        title: '',
        headerStyle: {backgroundColor: colors.darkGray},
        headerTintColor: colors.white,
        headerBackTitleVisible: false,
        borderTopColor: colors.black,
      }}
      tabBarOptions={{
        activeTintColor: colors.black,
        inactiveTintColor: colors.lightGray,
        labelStyle: {
          fontFamily: 'Apple SD Gothic Neo',
          fontSize: 12,
          marginBottom: 5,
        },
        style: {
          height: 60,
        },
        iconStyle: {
          marginTop: 12,
        },
      }}>
      <TutorBottomTab.Screen
        name="TutorDashboard"
        component={TutorDashboardStack}
        options={{tabBarLabel: 'Dashboard'}}
      />
      <TutorBottomTab.Screen
        name="Search"
        component={SearchStack}
        options={{tabBarLabel: 'Search'}}
      />
      <TutorBottomTab.Screen
        name="Schedule"
        component={ScheduleStack}
        options={{tabBarLabel: 'Schedule'}}
      />
      <TutorBottomTab.Screen
        name="Messages"
        component={MessagesStack}
        options={{tabBarLabel: 'Messages'}}
      />
      <TutorBottomTab.Screen
        name="TutorProfile"
        component={TutorProfileStack}
        options={{tabBarLabel: 'Profile'}}
      />
    </TutorBottomTab.Navigator>
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
        name="StudentBottomTabNavigator"
        component={StudentBottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TutorBottomTabNavigator"
        component={TutorBottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
