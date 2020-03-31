import React from 'react';
import {
  Alert,
  Image,
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
import checkmarkImage from '../../res/images/checkmark.png';
import nextArrow from '../../res/images/nextArrow.png';
import TextInputComponent from '../components/TextInputComponent';
import DropdownComponent from '../components/DropdownComponent';
import TitleComponent from '../components/TitleComponent';

const user = {
  email: 'test@gmail.com',
};

const promo = {
  code: 'BILL2020',
};

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
      sex: '',
      dob: '',
      type: this.props.route.params.type || '',
    };
    if (this.props.route.params.type === 'Tutor') {
      this.props.navigation.setOptions({title: 'Account: Step 1 of 6'});
    }
  }

  onPressRegister = () => {
    let valid = true;
    let invalidEmail = false;
    let invalidPassword = false;
    let invalidPromo = false;
    if (this.state.email === user.email) {
      invalidEmail = true;
      valid = false;
      this.alert('An account with this email already exists');
    }
    if (!(this.state.password === this.state.confirmPassword)) {
      invalidPassword = true;
      valid = false;
      this.alert('Please make sure the passwords match');
    }
    if (
      !(this.state.promoCode === promo.code) &&
      this.state.promoCode.length > 0
    ) {
      invalidPromo = true;
      valid = false;
      this.alert('Invalid promotional code');
    }
    this.setState({invalidEmail, invalidPassword, invalidPromo});
    if (valid) {
      if (this.state.type === 'Students') {
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'DrawerNavigator'}],
          }),
        );
      } else if (this.state.type === 'Tutor') {
        this.props.navigation.navigate('Subjects');
      }
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
  };

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

  stripPhoneNumber(phoneNumber) {
    let cleanPhoneNumber = '';
    for (let i = 0; i < phoneNumber.length; i++) {
      if (/\d/.test(phoneNumber[i])) {
        cleanPhoneNumber = cleanPhoneNumber.concat(phoneNumber[i]);
      }
    }
    return cleanPhoneNumber;
  }

  onChangePhoneNumber(phoneNumber) {
    let cleanPhoneNumber = this.stripPhoneNumber(phoneNumber);
    let formattedPhoneNumber = '';
    if (cleanPhoneNumber.length >= 10) {
      formattedPhoneNumber =
        '(' +
        phoneNumber.substring(0, 3) +
        ') ' +
        phoneNumber.substring(3, 6) +
        '-' +
        phoneNumber.substring(6, 10);
    } else {
      formattedPhoneNumber = cleanPhoneNumber;
    }

    this.setState({
      phoneNumber: formattedPhoneNumber,
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

  alert(message) {
    Alert.alert('Error', message, [{text: 'OK'}], {cancelable: false});
  }

  render() {
    let validInputs =
      this.state.firstName.length > 0 &&
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
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled">
          <TitleComponent title={this.state.type + ' Registration'}>
          </TitleComponent>
          <View style={styles.textInputContainerInline}>
            <TextInputComponent
              title='First Name'
              placeholderText='First Name'
              autoCapitalize="words"
              onChangeText={firstName => this.onChangeFirstName(firstName)}
              value={this.state.firstName}
              >
            </TextInputComponent>
            <View style={styles.inlineFiller} />
            <TextInputComponent
              title='Last Name'
              placeholderText='Last Name'
              autoCapitalize="words"
              onChangeText={lastName => this.onChangeLastName(lastName)}
              value={this.state.lastName}
              >
            </TextInputComponent>
          </View>
          <View style={styles.textInputContainerInline}>
            <DropdownComponent
              choices={["Male", "Female", "Other", "Prefer not to say"]}
              default="Sex"
              title='Sex'
            >
            </DropdownComponent>
            <View style={styles.inlineFiller} />
            <TextInputComponent
              title='Date of Birth'
              placeholderText='1/25/1998'
              autoCapitalize="words"
              onChangeText={lastName => this.onChangeLastName(lastName)}
              value={this.state.lastName}
              >
            </TextInputComponent>
          </View>
          <TextInputComponent
            title='Phone Number'
            placeholderText='Phone Number'
            keyboardType="phone-pad"
            onChangeText={phoneNumber =>
              this.onChangePhoneNumber(phoneNumber)
            }
            value={this.state.phoneNumber}
            >
          </TextInputComponent>
          <TextInputComponent
            title='Email Address'
            placeholderText='Email Address'
            onChangeText={email => this.onChangeEmail(email)}
            value={this.state.email}
            invalid={this.state.invalidEmail}
            >
          </TextInputComponent>
          <View style={styles.textInputContainerInline}>
            <TextInputComponent
              title='State'
              placeholderText='State'
              autoCapitalize="characters"
              maxLength={2}
              onChangeText={state => this.onChangeState(state)}
              value={this.state.state}
              >
            </TextInputComponent>
            <View style={styles.inlineFiller} />
            <TextInputComponent
              title='Zip Code'
              placeholderText='Zip Code'
              maxLength={6}
              onChangeText={zipCode => this.onChangeZipCode(zipCode)}
              value={this.state.zipCode}
              >
            </TextInputComponent>
          </View>
          <TextInputComponent
            title='Password'
            placeholderText='Password'
            secureTextEntry={true}
            onChangeText={password => this.onChangePassword(password)}
            value={this.state.password}
            invalid={this.state.invalidPassword}
            >
          </TextInputComponent>
          <TextInputComponent
            title='Confirm Password'
            placeholderText='Confirm Password'
            secureTextEntry={true}
            onChangeText={confirmPassword =>
              this.onChangeConfirmPassword(confirmPassword)
            }
            value={this.state.confirmPassword}
            invalid={this.state.invalidPassword}
            >
          </TextInputComponent>
          <TextInputComponent
            title='Promotional Code (optional)'
            placeholderText='Promotional Code'
            autoCapitalize='characters'
            onChangeText={promoCode => this.onChangePromoCode(promoCode)}
            value={this.state.promoCode}
            invalid={this.state.invalidPromo}
            >
          </TextInputComponent>
          <View style={styles.tosContainer}>
            <TouchableOpacity
              style={[
                styles.checkbox,
                this.state.tosAgree && {backgroundColor: colors.mintGreen},
              ]}
              onPress={this.onPressCheck}>
              {this.state.tosAgree ? (
                <Image source={checkmarkImage} style={styles.checkmark} />
              ) : (
                <View />
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
            {this.state.type === 'Student' ? (
              <Text style={styles.registerButtonText}>Create Account</Text>
            ) : (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text style={styles.registerButtonText}>Next</Text>
                <Image source={nextArrow} />
              </View>
            )}
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
  textInputContainerInline: {
    flexDirection: 'row',
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
