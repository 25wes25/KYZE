import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Auth} from 'aws-amplify';
import {CommonActions} from '@react-navigation/native';
import {
  colors,
  fonts,
} from '../../styles';
import {
  validateEmail,
  validatePhone,
  validateState,
  validateZipCode,
  stripPhoneNumber
} from '../../utils';
import {
  promo,
  bypassChecks,
} from '../../testing';
import TextInputComponent from '../../components/TextInputComponent';
import DropdownComponent from '../../components/DropdownComponent';
import TitleComponent from '../../components/TitleComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';
import CheckboxComponent from '../../components/CheckboxComponent';
import kyze from '../../api/apiConfig';

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.route.params.user) {
      this.props.navigation.navigate('Subjects');
    }
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
      sex: -1,
      dob: '',
      type: this.props.route.params.type || '',
    };
    if (this.props.route.params.type === 'Tutor') {
      this.props.navigation.setOptions({title: 'Account: Step 1 of 6'});
    }
  }

  onPressRegister = async () => {
    let valid = true;
    let invalidEmail = false;
    let invalidPassword = false;
    let invalidPromo = false;
    // if (this.state.email === user.email) {
    //   invalidEmail = true;
    //   valid = false;
    //   this.alert('An account with this email already exists');
    // }
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

    let user = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      state: this.state.state,
      zipCode: this.state.zipCode,
      sex: this.state.sex,
      dob: this.state.dob,
      type: this.state.type,
    }

    if (valid) {
      if (this.state.type === 'Student') {
        try {
        
          await Auth.signUp({
            username: this.state.email,
            password: this.state.password,
            attributes: {
              email: this.state.email
            }});
          kyze.api
            .createUser(user)
            .then(user => {
              this.props.navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [
                    {name: this.props.route.params.type + 'BottomTabNavigator', params: {user: user}},
                  ],
                }),
              );
              })
              .catch(error => {
                console.log("Kyze Error", error)
                Alert.alert(
                  'Error',
                  error.message,
                  [{text: 'OK'}],
                  {
                    cancelable: false,
                  },
                );
              });
        } catch (error) {
          console.log("Cognito Error", error);
        }
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

  onChangePhoneNumber(phoneNumber) {
    let cleanPhoneNumber = stripPhoneNumber(phoneNumber);
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

  onChangeSex(sex) {
    this.setState({
      sex: sex,
    });
  }

  onChangeDob(dob) {
    this.setState({
      dob: dob,
    });
  }

  alert(message) {
    Alert.alert('Error', message, [{text: 'OK'}], {cancelable: false});
  }

  render() {
    let validInputs = bypassChecks || (
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.sex != -1 &&
      validatePhone(this.state.phoneNumber) &&
      validateEmail(this.state.email) &&
      validateState(this.state.state) &&
      validateZipCode(this.state.zipCode) &&
      this.state.password.length >= 8 &&
      this.state.confirmPassword.length >= 8 &&
      this.state.password === this.state.confirmPassword &&
      this.state.tosAgree);
    return (
      <ContainerComponent>
        <TitleComponent title={this.state.type+' Registration'}/>
        <View style={styles.textInputContainerInline}>
          <TextInputComponent
            title="First Name"
            placeholderText="First Name"
            autoCapitalize="words"
            onChangeText={firstName => this.onChangeFirstName(firstName)}
            value={this.state.firstName}
          />
          <View style={styles.inlineFiller} />
          <TextInputComponent
            title="Last Name"
            placeholderText="Last Name"
            autoCapitalize="words"
            onChangeText={lastName => this.onChangeLastName(lastName)}
            value={this.state.lastName}
          />
        </View>
        <View style={styles.textInputContainerInline}>
          <DropdownComponent
            choices={['Male', 'Female', 'Other', 'Prefer not to say']}
            default="Sex"
            title="Sex"
            onSelect={selected => this.onChangeSex(selected)}
          />
          <View style={styles.inlineFiller} />
          <TextInputComponent
            title="Date of Birth"
            placeholderText="1/1/2000"
            autoCapitalize="words"
            onChangeText={dob => this.onChangeDob(dob)}
            value={this.state.dob}
          />
        </View>
        <TextInputComponent
          title="Phone Number"
          placeholderText="Phone Number"
          keyboardType="phone-pad"
          onChangeText={phoneNumber => this.onChangePhoneNumber(phoneNumber)}
          value={this.state.phoneNumber}
        />
        <TextInputComponent
          title="Email Address"
          placeholderText="Email Address"
          onChangeText={email => this.onChangeEmail(email)}
          value={this.state.email}
          invalid={this.state.invalidEmail}
        />
        <View style={styles.textInputContainerInline}>
          <TextInputComponent
            title="State"
            placeholderText="State"
            autoCapitalize="characters"
            maxLength={2}
            onChangeText={state => this.onChangeState(state)}
            value={this.state.state}
          />
          <View style={styles.inlineFiller} />
          <TextInputComponent
            title="Zip Code"
            placeholderText="Zip Code"
            maxLength={6}
            onChangeText={zipCode => this.onChangeZipCode(zipCode)}
            value={this.state.zipCode}
          />
        </View>
        <TextInputComponent
          title="Password"
          placeholderText="Password"
          secureTextEntry={true}
          onChangeText={password => this.onChangePassword(password)}
          value={this.state.password}
          invalid={this.state.invalidPassword}
        />
        <TextInputComponent
          title="Confirm Password"
          placeholderText="Confirm Password"
          secureTextEntry={true}
          onChangeText={confirmPassword =>
            this.onChangeConfirmPassword(confirmPassword)
          }
          value={this.state.confirmPassword}
          invalid={this.state.invalidPassword}
        />
        <TextInputComponent
          title="Promotional Code (optional)"
          placeholderText="Promotional Code"
          autoCapitalize="characters"
          onChangeText={promoCode => this.onChangePromoCode(promoCode)}
          value={this.state.promoCode}
          invalid={this.state.invalidPromo}
        />
        <View style={styles.tosContainer}>
          <CheckboxComponent
            enabled={this.state.tosAgree}
            onPress={this.onPressCheck}/>
          <Text style={styles.tosText}>I agree to KYZE's </Text>
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
        {
          this.state.type === 'Student' ? (
            <ButtonComponent
              enabled={validInputs}
              onPress={this.onPressRegister}
              text='Create Account'/>
          ) : (
            <ButtonComponent
              enabled={validInputs}
              onPress={this.onPressRegister}
              text='Next'
              arrow={true}/>
          )
        }
      </ContainerComponent>
    );
  }
}

const styles = StyleSheet.create({
  inlineFiller: {
    flex: 1,
  },
  textInputContainerInline: {
    flexDirection: 'row',
  },
  tosContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  tosText: {
    fontFamily: fonts.gothic,
    fontSize: 12,
    color: colors.black,
  },
  tosButtonText: {
    fontFamily: fonts.gothic,
    textAlign: 'center',
    fontSize: 12,
    color: colors.mintGreen,
  },
});
