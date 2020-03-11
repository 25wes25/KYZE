import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {colors} from '../styles';
import checkmarkImage from '../../res/images/checkmark.png';

const user = {
  email: 'test@gmail.com',
};

const promo = {
  code: 'BILL2020',
}

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmPassword: '',
      email: '',
      firstName: '',
      invalidEmail: false,
      invalidPassword: false,
      invalidPromo: false,
      lastName: '',
      password: '',
      phoneNumber: '',
      promoCode: '',
      state: '',
      tosAgree: false,
      zipCode: '',
    };
  }

  onPressRegister = () => {
    let valid = true;
    if (
      this.state.email === user.email
    ) {
      this.setState({invalidEmail: true});
      valid = false;
    }
    if (
      !(this.state.password === this.state.confirmPassword)
    ) {
      this.setState({invalidPassword: true});
      valid = false;
    }
    if (
      !(this.state.promoCode === promo.code) &&
      this.state.promoCode.length > 0
    ) {
      this.setState({invalidPromo: true});
      valid = false;
    }
    if (valid) {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: 'DrawerNavigator'}],
        }),
      );
    }
  };

  onPressTOS = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'Terms of Service',
      }),
    );
  };

  onPressPrivacy = () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: 'Privacy Policy',
      }),
    );
  };

  onPressCheck = () => {
    this.setState({tosAgree: !this.state.tosAgree});
  }

  onChangeConfirmPassword(confirmPassword) {
    this.setState({
      confirmPassword: confirmPassword,
    });
  }

  onChangeEmail(email) {
    this.setState({
      email: email,
    });
  }

  onChangeFirstName(firstName) {
    this.setState({
      firstName: firstName,
    });
  }

  onChangeLastName(lastName) {
    this.setState({
      lastName: lastName,
    });
  }

  onChangePassword(password) {
    this.setState({
      password: password,
    });
  }

  onChangePhoneNumber(phoneNumber) {
    this.setState({
      phoneNumber: phoneNumber,
    });
  }

  onChangePromoCode(promoCode) {
    this.setState({
      promoCode: promoCode,
    });
  }

  onChangeState(state) {
    this.setState({
      state: state,
    });
  }

  onChangeZipCode(zipCode) {
    this.setState({
      zipCode: zipCode,
    });
  }

  validateEmail(email) {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
  }

  validatePhone(phoneNumber) {
    const expression = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    return expression.test(String(phoneNumber).toLowerCase());
  }

  validateState(state) {
    const expression = /^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$/;

    return expression.test(String(state).toUpperCase());
  }

  validateZipCode(zipCode) {
    const expression = /^\d{5}$/;

    return expression.test(String(zipCode).toUpperCase());
  }

  render() {
    let validInputs = this.state.firstName.length > 0 &&
                      this.state.lastName.length > 0 &&
                      this.validatePhone(this.state.phoneNumber) &&
                      this.validateEmail(this.state.email) &&
                      this.validateState(this.state.state) &&
                      this.validateZipCode(this.state.zipCode) &&
                      this.state.password.length >= 8 &&
                      this.state.confirmPassword.length >= 8 &&
                      this.state.tosAgree;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps="handled">
          <Text style={styles.appTitle}>KODA</Text>
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Student Registration</Text>
            <View style={styles.dividerLine} />
          </View>
          <View style={styles.textInputContainerInline}>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputTitle}>First Name</Text>
              <TextInput
                style={styles.textInput}
                autoCapitalize="words"
                onChangeText={firstName => this.onChangeFirstName(firstName)}
                value={this.state.firstName}
              />
            </View>
            <View style={styles.inlineFiller}></View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputTitle}>Last Name</Text>
              <TextInput
                style={styles.textInput}
                autoCapitalize="words"
                onChangeText={lastName => this.onChangeLastName(lastName)}
                value={this.state.lastName}
              />
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>Phone Number</Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType='phone-pad'
              onChangeText={phoneNumber => this.onChangePhoneNumber(phoneNumber)}
              value={this.state.phoneNumber}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>Email Address</Text>
            <TextInput
              style={[
                styles.textInput,
                this.state.invalidEmail && {borderColor: colors.red},
              ]}
              autoCapitalize="none"
              onChangeText={email => this.onChangeEmail(email)}
              value={this.state.email}
            />
          </View>
          <View style={styles.textInputContainerInline}>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputTitle}>State</Text>
              <TextInput
                style={styles.textInput}
                autoCapitalize="characters"
                onChangeText={state => this.onChangeState(state)}
                value={this.state.state}
              />
            </View>
            <View style={styles.inlineFiller}></View>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputTitle}>Zip Code</Text>
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={zipCode => this.onChangeZipCode(zipCode)}
                value={this.state.zipCode}
              />
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>Password</Text>
            <TextInput
              style={[
                styles.textInput,
                this.state.invalidPassword && {borderColor: colors.red},
              ]}
              secureTextEntry={true}
              placeholderTextColor={colors.opaqueBlack}
              onChangeText={password => this.onChangePassword(password)}
              value={this.state.password}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>Confirm Password</Text>
            <TextInput
              style={[
                styles.textInput,
                this.state.invalidPassword && {borderColor: colors.red},
              ]}
              secureTextEntry={true}
              placeholderTextColor={colors.opaqueBlack}
              onChangeText={confirmPassword => this.onChangeConfirmPassword(confirmPassword)}
              value={this.state.confirmPassword}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>Promotional Code (optional)</Text>
            <TextInput
              style={[
                styles.textInput,
                this.state.invalidPromo && {borderColor: colors.red},
              ]}
              autoCapitalize="characters"
              onChangeText={promoCode => this.onChangePromoCode(promoCode)}
              value={this.state.promoCode}
            />
          </View>
          <View style={styles.tosContainer}>
            <TouchableOpacity
              style={[
                styles.checkbox,
                this.state.tosAgree && {backgroundColor: colors.mintGreen},
              ]}
              onPress={this.onPressCheck}>
              {this.state.tosAgree ? (
                <Image
                  source={checkmarkImage}
                  style={styles.checkmark}>
                </Image>
              ) : (
                <View></View>
              )}
            </TouchableOpacity>
            <Text style={styles.tosText}>I agree to Koda's </Text>
            <TouchableOpacity
              style={styles.tosButton}
              onPress={this.onPressTOS}>
              <Text style={styles.tosButtonText}>Terms of Service</Text>
            </TouchableOpacity>
            <Text style={styles.tosText}> and </Text>
            <TouchableOpacity
              style={styles.tosButton}
              onPress={this.onPressPrivacy}>
              <Text style={styles.tosButtonText}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={[
              styles.registerButtonContainer,
              validInputs && {backgroundColor: colors.mintGreen},
            ]}
            disabled={!validInputs}
            onPress={this.onPressRegister}>
            <Text style={styles.registerButtonText}>Create Account</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.black,
    marginHorizontal: 10,
  },
  checkmark: {
    width: 15,
    height: 15,
    margin: 1.5,
  },
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
  inlineFiller: {
    flex: 1,
  },
  registerButtonContainer: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.lightGray,
    marginVertical: 20,
  },
  registerButtonText: {
    fontFamily: 'Apple SD Gothic Neo',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    fontSize: 16,
    color: colors.black,
    overflow: 'hidden',
  },
  textInputContainer: {
    flex: 3,
    marginVertical: 10,
  },
  textInputContainerInline: {
    flexDirection: 'row',
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
  tosContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  tosText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 12,
    color: colors.black,
  },
  tosButton: {},
  tosButtonText: {
    fontFamily: 'Apple SD Gothic Neo',
    textAlign: 'center',
    fontSize: 12,
    color: colors.mintGreen,
  },
});
