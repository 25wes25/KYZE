import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../styles';
import {CommonActions} from '@react-navigation/native';

export default class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  onPressResetPassword = () => {
    // Implement email reset system
  };

  onPressRegister = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'Register',
      }),
    );
  };

  onPressHelp = () => {};

  onChangeEmail(email) {
    this.setState({
      email: email.toLowerCase(),
    });
  }

  validate(email) {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
  }

  render() {
    let validInputs = this.validate(this.state.email);
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled">
          <Text style={styles.appTitle}>KODA</Text>
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
          </View>
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
          <Text style={styles.descriptionText}>
            Enter your email below and we will send you a link to reset your
            password
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder={'Enter your email'}
            placeholderTextColor={colors.opaqueBlack}
            autoCapitalize="none"
            onChangeText={email => this.onChangeEmail(email)}
            value={this.state.email}
          />
          <TouchableOpacity
            style={[
              styles.resetPasswordButton,
              validInputs && {backgroundColor: colors.mintGreen},
            ]}
            disabled={!validInputs}
            onPress={this.onPressResetPassword}>
            <Text style={styles.resetPasswordButtonText}>Reset Password</Text>
          </TouchableOpacity>
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
          </View>
          <View style={styles.bottomContentContainer}>
            <Text style={styles.bottomText}>Don't have an account? </Text>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={this.onPressRegister}>
              <Text style={styles.bottomButtonText}>Register for free</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContentContainer}>
            <Text style={styles.bottomText}>Having trouble? </Text>
            <TouchableOpacity
              style={styles.bottomButton}
              onPress={this.onPressHelp}>
              <Text style={styles.bottomButtonText}>Get help</Text>
            </TouchableOpacity>
          </View>
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
  },
  forgotPasswordText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 25,
    color: colors.black,
    paddingLeft: 10,
    marginVertical: 10,
  },
  descriptionText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    lineHeight: 17,
    color: colors.black,
    paddingLeft: 10,
  },
  textInput: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 18,
    lineHeight: 22,
    color: colors.black,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  resetPasswordButton: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.lightGray,
    marginVertical: 10,
    marginHorizontal: 40,
  },
  resetPasswordButtonText: {
    fontFamily: 'Apple SD Gothic Neo',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 24,
    fontSize: 18,
    lineHeight: 22,
    color: colors.black,
    overflow: 'hidden',
  },
  dividerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    backgroundColor: colors.black,
    height: 1,
  },
  bottomContentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  bottomText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 16,
    color: colors.black,
  },
  bottomButton: {},
  bottomButtonText: {
    fontFamily: 'Apple SD Gothic Neo',
    textAlign: 'center',
    fontSize: 16,
    color: colors.mintGreen,
  },
});
