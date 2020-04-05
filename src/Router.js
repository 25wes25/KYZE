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
import DashboardScreen from './screens/Dashboard';
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

import {colors, dynamicSizes} from './styles';

const Stack = createStackNavigator();
const StudentBottomTab = createBottomTabNavigator();
const TutorBottomTab = createBottomTabNavigator();

function DashboardStack(type) {
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
        initialParams={{type: type}}
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
        inactiveTintColor: colors.mediumGray,
        labelStyle: {
          fontFamily: 'Apple SD Gothic Neo',
          fontSize: 12,
          fontWeight: 'bold',
        },
        style: {
          height: dynamicSizes.tabNavigatorHeight,
          borderTopColor: colors.black,
        },
      }}>
      <StudentBottomTab.Screen
        name="Dashboard"
        component={() => DashboardStack('Student')}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  source={require('../res/images/dashboardIconSelected.png')}
                />
              );
            } else {
              return (
                <Image
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
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  source={require('../res/images/searchIconSelected.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../res/images/searchIconUnselected.png')}
                />
              );
            }
          },
        }}
      />
      <StudentBottomTab.Screen
        name="Schedule"
        component={ScheduleStack}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  source={require('../res/images/scheduleIconSelected.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../res/images/scheduleIconUnselected.png')}
                />
              );
            }
          },
        }}
      />
      <StudentBottomTab.Screen
        name="Messages"
        component={MessagesStack}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  source={require('../res/images/messagesIconSelected.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../res/images/messagesIconUnselected.png')}
                />
              );
            }
          },
        }}
      />
      <StudentBottomTab.Screen
        name="StudentProfile"
        component={StudentProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  source={require('../res/images/profileIconSelected.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../res/images/profileIconUnselected.png')}
                />
              );
            }
          },
        }}
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
        inactiveTintColor: colors.mediumGray,
        labelStyle: {
          fontFamily: 'Apple SD Gothic Neo',
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 5,
        },
        style: {
          height: dynamicSizes.tabNavigatorHeight,
          borderTopColor: colors.black,
        },
        iconStyle: {
          marginTop: 12,
        },
      }}>
      <TutorBottomTab.Screen
        name="Dashboard"
        component={() => DashboardStack('Tutor')}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  source={require('../res/images/dashboardIconSelected.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../res/images/dashboardIconUnselected.png')}
                />
              );
            }
          },
        }}
      />
      <TutorBottomTab.Screen
        name="Earnings"
        component={EarningsStack}
        options={{
          tabBarLabel: 'Earnings',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  source={require('../res/images/earningsIconSelected.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../res/images/earningsIconUnselected.png')}
                />
              );
            }
          },
        }}
      />
      <TutorBottomTab.Screen
        name="Schedule"
        component={ScheduleStack}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  source={require('../res/images/scheduleIconSelected.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../res/images/scheduleIconUnselected.png')}
                />
              );
            }
          },
        }}
      />
      <TutorBottomTab.Screen
        name="Messages"
        component={MessagesStack}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  source={require('../res/images/messagesIconSelected.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../res/images/messagesIconUnselected.png')}
                />
              );
            }
          },
        }}
      />
      <TutorBottomTab.Screen
        name="TutorProfile"
        component={TutorProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => {
            if (focused) {
              return (
                <Image
                  source={require('../res/images/profileIconSelected.png')}
                />
              );
            } else {
              return (
                <Image
                  source={require('../res/images/profileIconUnselected.png')}
                />
              );
            }
          },
        }}
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
