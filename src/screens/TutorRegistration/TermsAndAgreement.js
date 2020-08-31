import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../styles';
import checkmarkImage from '../../../res/images/checkmark.png';
import nextArrow from '../../../res/images/nextArrow.png';
import TitleComponent from '../../components/TitleComponent';
import TextInputComponent from '../../components/TextInputComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';
import CheckboxComponent from '../../components/CheckboxComponent';

export default class TermsAndAgreementScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      termsAgree: false,
      legalWorking: false,
      firstName: '',
      lastName: '',
    };
  }

  onPressNext = () => {
    this.props.navigation.navigate('Email Confirmation');
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
    let validInputs =
      this.state.termsAgree &&
      this.state.legalWorking &&
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0;
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
          onPress={this.onPressNext}
          text='Next'
          arrow={true}/>
      </ContainerComponent>
    );
  }
}

const styles = StyleSheet.create({
  blockText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    color: colors.black,
    marginTop: 9,
    marginBottom: 20,
  },
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
