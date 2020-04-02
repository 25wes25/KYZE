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
import checkmarkImage from '../../../res/images/checkmark.png';
import nextArrow from '../../../res/images/nextArrow.png';
import TitleComponent from '../../components/TitleComponent';
import TextInputComponent from '../../components/TextInputComponent';

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

  onChangeTermsAgree(termsAgree) {
    this.setState({
      termsAgree: !this.state.termsAgree,
    });
  }

  onChangeLegalWorking(legalWorking) {
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
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled">
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
            <TouchableOpacity
              style={[
                styles.checkbox,
                this.state.termsAgree && {backgroundColor: colors.mintGreen},
              ]}
              onPress={termsAgree => this.onChangeTermsAgree(termsAgree)}>
              {this.state.termsAgree ? (
                <Image source={checkmarkImage} style={styles.checkmark} />
              ) : (
                <View />
              )}
            </TouchableOpacity>
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
            <TouchableOpacity
              style={[
                styles.checkbox,
                this.state.legalWorking && {backgroundColor: colors.mintGreen},
              ]}
              onPress={legalWorking => this.onChangeLegalWorking(legalWorking)}>
              {this.state.legalWorking ? (
                <Image source={checkmarkImage} style={styles.checkmark} />
              ) : (
                <View />
              )}
            </TouchableOpacity>
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
          <TouchableOpacity
            style={[
              styles.nextButtonContainer,
              validInputs && {backgroundColor: colors.mintGreen},
            ]}
            disabled={!validInputs}
            onPress={this.onPressNext}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={styles.nextButtonText}>Next</Text>
              <Image source={nextArrow} />
            </View>
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
  nextButtonContainer: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.lightGray,
    marginVertical: 20,
  },
  nextButtonText: {
    fontFamily: 'Apple SD Gothic Neo',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    fontSize: 16,
    color: colors.black,
    overflow: 'hidden',
  },
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
  checkmark: {
    width: 15,
    height: 15,
    margin: 1.5,
  },
  textInputContainerInline: {
    flexDirection: 'row',
  },
  inlineFiller: {
    flex: 1,
  },
});
