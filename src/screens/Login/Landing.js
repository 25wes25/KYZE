import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {colors} from '../../styles';
import backgroundImage from '../../../res/images/landingBackground.jpg';
import {CommonActions} from '@react-navigation/routers';

export default class LandingScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onPressLoginAsStudent = () => {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'StudentBottomTabNavigator'}],
      }),
    );
    /*this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'Login',
        params: {type: 'Student'},
      }),
    );*/
  };

  onPressLoginAsTutor = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'Login',
        params: {type: 'Tutor'},
      }),
    );
  };

  render() {
    return (
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundContainer}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.appTitle}>KYZE</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onPressLoginAsStudent}>
              <Text style={styles.buttonText}>Student / Parent</Text>
            </TouchableOpacity>
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.dividerLine} />
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this.onPressLoginAsTutor}>
              <Text style={styles.buttonText}>Tutor</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  appTitle: {
    flex: 1,
    marginTop: 60,
    fontFamily: 'Apple SD Gothic Neo',
    textAlign: 'left',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
    fontSize: 50,
    color: colors.white,
  },
  buttonsContainer: {
    marginBottom: 48,
  },
  buttonContainer: {
    marginHorizontal: 40,
    marginVertical: 12,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.white,
  },
  buttonText: {
    fontFamily: 'Apple SD Gothic Neo',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingVertical: 32,
    paddingHorizontal: 20,
    fontSize: 32,
    color: colors.white,
  },
  dividerContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 40,
    alignItems: 'center',
  },
  dividerLine: {
    flex: 1,
    backgroundColor: colors.white,
    height: 1,
  },
  dividerText: {
    fontFamily: 'Apple SD Gothic Neo',
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: 18,
    color: colors.white,
  },
});
