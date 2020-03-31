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
import {CommonActions} from '@react-navigation/native';
import {colors} from '../styles';
import TitleComponent from '../components/TitleComponent';

const user = {
  email: 'test@gmail.com',
  password: 'test1234',
};

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      invalidLogin: false,
    };
  }

  onPressLogin = () => {
    if (
      this.state.email === user.email &&
      this.state.password === user.password
    ) {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'DrawerNavigator'}],
        }),
      );
    } else {
      this.setState({invalidLogin: true});
    }
  };

  onPressForgotPassword = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'Forgot Password',
      }),
    );
  };

  onPressRegister = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'Register',
        params: {type: this.props.route.params.type},
      }),
    );
  };

  onChangeEmail(email) {
    this.setState({
      email: email,
    });
  }

  onChangePassword(password) {
    this.setState({
      password: password,
    });
  }

  validate(email) {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
  }

  render() {
    let validInputs =
      this.validate(this.state.email) && this.state.password.length >= 8;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled">
          <TitleComponent title="Log in">
          </TitleComponent>
          {this.state.invalidLogin ? (
            <Text style={styles.errorText}>Invalid email or password</Text>
          ) : (
            <View style={{height: 20}} />
          )}
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>Email Address</Text>
            <TextInput
              style={[
                styles.textInput,
                this.state.invalidLogin && {borderColor: colors.red},
              ]}
              placeholder={'Email'}
              placeholderTextColor={colors.opaqueBlack}
              autoCapitalize="none"
              onChangeText={email => this.onChangeEmail(email)}
              value={this.state.email}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>Password</Text>
            <TextInput
              style={[
                styles.textInput,
                this.state.invalidLogin && {borderColor: colors.red},
              ]}
              secureTextEntry={true}
              placeholder={'Password'}
              placeholderTextColor={colors.opaqueBlack}
              onChangeText={password => this.onChangePassword(password)}
              value={this.state.password}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.loginButtonContainer,
              validInputs && {backgroundColor: colors.mintGreen},
            ]}
            disabled={!validInputs}
            onPress={this.onPressLogin}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
          <View style={[styles.dividerContainer, {marginVertical: 20}]}>
            <View style={styles.dividerLine} />
          </View>
          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={this.onPressForgotPassword}>
            <Text style={styles.forgotPasswordButtonText}>Forgot Password</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account? </Text>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={this.onPressRegister}>
              <Text style={styles.registerButtonText}>Register for free</Text>
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
    marginBottom: 14,
  },
  errorText: {
    fontFamily: 'Apple SD Gothic Neo',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    lineHeight: 20,
    color: colors.red,
  },
  textInputContainer: {
    marginVertical: 10,
  },
  textInputTitle: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    color: colors.black,
    paddingLeft: 10,
    marginBottom: 2,
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
  },
  loginButtonContainer: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.lightGray,
    marginVertical: 20,
  },
  loginButtonText: {
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
  forgotPasswordButton: {
    marginVertical: 10,
  },
  forgotPasswordButtonText: {
    fontFamily: 'Apple SD Gothic Neo',
    textAlign: 'center',
    fontSize: 16,
    color: colors.mintGreen,
  },
  registerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  registerText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 16,
    color: colors.black,
  },
  registerButton: {},
  registerButtonText: {
    fontFamily: 'Apple SD Gothic Neo',
    textAlign: 'center',
    fontSize: 16,
    color: colors.mintGreen,
  },
});
