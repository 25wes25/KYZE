import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {colors, fonts} from '../../styles';
import {validateEmail} from '../../utils';
import {user} from '../../testing';
import TextInputComponent from '../../components/TextInputComponent';
import TitleComponent from '../../components/TitleComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';

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
          index: 0,
          routes: [{name: this.props.route.params.type + 'BottomTabNavigator'}],
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

  render() {
    let validInputs =
      validateEmail(this.state.email) && this.state.password.length >= 8;
    return (
      <ContainerComponent>
        <TitleComponent title="Log In" />
        {this.state.invalidLogin ? (
          <Text style={styles.errorText}>Invalid email or password</Text>
        ) : (
          <View style={{height: 20}} />
        )}
        <TextInputComponent
          title="Email Address"
          placeholderText="Email"
          onChangeText={email => this.onChangeEmail(email)}
          value={this.state.email}
          invalid={this.state.invalidLogin}
        />
        <TextInputComponent
          title="Password"
          placeholderText="Password"
          secureTextEntry={true}
          onChangeText={password => this.onChangePassword(password)}
          value={this.state.password}
          invalid={this.state.invalidLogin}
        />
        <ButtonComponent
          enabled={validInputs}
          onPress={this.onPressLogin}
          text='Log in'/>
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
            onPress={this.onPressRegister}>
            <Text style={styles.registerButtonText}>Register for free</Text>
          </TouchableOpacity>
        </View>
      </ContainerComponent>
    );
  }
}

const styles = StyleSheet.create({
  errorText: {
    fontFamily: fonts.gothic,
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 16,
    lineHeight: 20,
    color: colors.red,
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
  forgotPasswordButton: {
    marginVertical: 10,
  },
  forgotPasswordButtonText: {
    fontFamily: fonts.gothic,
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
    fontFamily: fonts.gothic,
    fontSize: 16,
    color: colors.black,
  },
  registerButtonText: {
    fontFamily: fonts.gothic,
    textAlign: 'center',
    fontSize: 16,
    color: colors.mintGreen,
  },
});
