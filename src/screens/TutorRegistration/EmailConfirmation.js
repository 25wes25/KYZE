import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../styles';
import nextArrow from '../../../res/images/nextArrow.png';
import {CommonActions} from '@react-navigation/routers';

export default class EmailConfirmationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressResendEmail = () => {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'DrawerNavigator'}],
      }),
    );
  };

  render() {
    let validInputs = true;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled">
          <Text style={styles.appTitle}>KODA</Text>
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>{'Tutor Registration'}</Text>
            <View style={styles.dividerLine} />
          </View>
          <TouchableOpacity
            style={[
              styles.resendEmailButtonContainer,
              validInputs && {backgroundColor: colors.mintGreen},
            ]}
            disabled={!validInputs}
            onPress={this.onPressResendEmail}>
            <Text style={styles.resendEmailButtonText}>Resend Email</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  contentContainer: {
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  appTitle: {
    fontFamily: 'Apple SD Gothic Neo',
    textAlign: 'left',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 20,
    fontSize: 50,
    color: colors.black,
    marginTop: 40,
    marginBottom: 14,
  },
  resendEmailButtonContainer: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.lightGray,
    marginVertical: 20,
  },
  resendEmailButtonText: {
    fontFamily: 'Apple SD Gothic Neo',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    fontSize: 16,
    color: colors.black,
    overflow: 'hidden',
  },
  dividerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dividerLine: {
    flex: 1,
    backgroundColor: colors.black,
    height: 1,
  },
  dividerText: {
    fontFamily: 'Apple SD Gothic Neo',
    textAlign: 'center',
    paddingHorizontal: 12,
    fontSize: 18,
    color: colors.black,
  },
});
