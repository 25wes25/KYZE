import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Auth} from 'aws-amplify';
import {
  colors,
  fonts,
  blockText,
} from '../../styles';
import {
  bypassChecks,
} from '../../testing';
import checkmarkImage from '../../../res/images/checkmark.png';
import nextArrow from '../../../res/images/nextArrow.png';
import TitleComponent from '../../components/TitleComponent';
import TextInputComponent from '../../components/TextInputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';
import CheckboxComponent from '../../components/CheckboxComponent';
import {CommonActions} from '@react-navigation/native';
import kyze from '../../api/apiConfig';

export default class TermsAndAgreementScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      termsAgree: false,
      legalWorking: false,
      firstName: '',
      lastName: '',
      user: this.props.route.params.user,
      type: this.props.route.params.type || '',
    };
  }

  onPressNext = () => {
    this.props.navigation.navigate('Email Confirmation', {user: this.state.user});
  };

  onPressRegister = async () => {
    let valid = true;
    let password = this.state.user.password;

    if (valid) {
      try {
        if (!this.state.user.existingAccount) {
          await Auth.signUp({
            username: this.state.user.email,
            password: password,
            attributes: {
              email: this.state.user.email
            }});
        }
        delete this.state.user.existingAccount;
        delete this.state.user.password;
        kyze.api
          .createTutor(this.state.user)
          .then(user => {
            this.props.navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  {name: this.state.type + 'BottomTabNavigator', params: {user: user}},
                ],
              }),
            );
            })
            .catch(error => {
              console.log("Kyze Error", error);
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
        Alert.alert(
          'Error',
          error.message,
          [{text: 'OK'}],
          {
            cancelable: false,
          },
        );
      }
    }
  };

  onChangeTermsAgree() {
    this.setState({
      termsAgree: !this.state.termsAgree,
    });
  }

  onChangeLegalWorking() {
    this.setState({
      legalWorking: !this.state.legalWorking,
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

  render() {
    let validInputs = bypassChecks || (
      this.state.termsAgree &&
      this.state.legalWorking &&
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0);
    return (
      <ContainerComponent>
        <TitleComponent title={'Tutor Registration'} />
        <Text style={styles.blockText}>
          The agreement on this page is a binding legal contract between .....
          {'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}
          ....... etc
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <CheckboxComponent
            enabled={this.state.termsAgree}
            onPress={() => this.onChangeTermsAgree()}/>
          <Text style={{marginRight: 50}}>
            I agree to the terms stated above
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginVertical: 10,
          }}>
          <CheckboxComponent
            enabled={this.state.legalWorking}
            onPress={() => this.onChangeLegalWorking()}/>
          <Text style={{marginRight: 50}}>
            I have a valid social security number, I am authorized to work in
            the United States, and I am at least 18 years of age or older
          </Text>
        </View>
        <View style={styles.textInputContainerInline}>
          <TextInputComponent
            title="Legal First Name"
            placeholderText="First"
            autoCapitalize="words"
            onChangeText={firstName => this.onChangeFirstName(firstName)}
            value={this.state.firstName}
          />
          <View style={styles.inlineFiller} />
          <TextInputComponent
            title="Legal Last Name"
            placeholderText="Last"
            autoCapitalize="words"
            onChangeText={lastName => this.onChangeLastName(lastName)}
            value={this.state.lastName}
          />
        </View>
        <ButtonComponent
          enabled={validInputs}
          onPress={this.onPressRegister}
          text='Create Account'/>
      </ContainerComponent>
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
  textInputContainerInline: {
    flexDirection: 'row',
  },
  inlineFiller: {
    flex: 1,
  },
});
