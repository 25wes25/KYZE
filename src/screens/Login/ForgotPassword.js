import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fonts} from '../../styles';
import {validateEmail} from '../../utils';
import {CommonActions} from '@react-navigation/native';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';
import TitleComponent from '../../components/TitleComponent';
import TextInputComponent from '../../components/TextInputComponent';

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

  render() {
    let validInputs = validateEmail(this.state.email);
    return (
      <ContainerComponent>
        <TitleComponent/>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        <Text style={styles.descriptionText}>
          Enter your email below and we will send you a link to reset your
          password
        </Text>
        <TextInputComponent
          title=''
          placeholderText='Enter your email'
          onChangeText={email => this.onChangeEmail(email)}
          value={this.state.email}
        />
        <ButtonComponent
          enabled={validInputs}
          onPress={this.onPressResetPassword}
          text='Reset Password'/>
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
      </ContainerComponent>
    );
  }
}

const styles = StyleSheet.create({
  forgotPasswordText: {
    fontFamily: fonts.gothic,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 25,
    color: colors.black,
    paddingLeft: 10,
    marginVertical: 10,
  },
  descriptionText: {
    fontFamily: fonts.gothic,
    fontSize: 14,
    lineHeight: 17,
    color: colors.black,
    paddingLeft: 10,
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
    fontFamily: fonts.gothic,
    fontSize: 16,
    color: colors.black,
  },
  bottomButtonText: {
    fontFamily: fonts.gothic,
    textAlign: 'center',
    fontSize: 16,
    color: colors.mintGreen,
  },
});
