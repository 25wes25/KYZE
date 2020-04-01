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
import TitleComponent from '../../components/TitleComponent';

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
          <TitleComponent title={'Tutor Registration'}>
          </TitleComponent>
          <Text style={styles.header}>
            Email Confirmation Sent
          </Text>
          <Text style={styles.blockText}>
            An email confirmation has been sent to the provided address. If
            you don't recieve an email in a few minutes, please double check
            your email address below and click resend
          </Text>
          <Text style={styles.blockText}>
            example@gmail.com
          </Text>
          <TouchableOpacity>
            <Text style={{
              color: colors.mintGreen,
            }}>
              change email
            </Text>
          </TouchableOpacity>
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
  header: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 20,
    color: colors.black,
    marginVertical: 10,
  },
  blockText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    color: colors.black,
    marginTop: 9,
  },
});
