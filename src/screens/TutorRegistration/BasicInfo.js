import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../styles';
import nextArrow from '../../../res/images/nextArrow.png';
import plusSign from '../../../res/images/plusSign.png';
import TextInputComponent from '../../components/TextInputComponent';
import TitleComponent from '../../components/TitleComponent';

export default class BasicInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      street: '',
      aptNum: '',
      city: '',
      state: '',
      zipCode: '',
      degrees: [
        {
          college: '',
          degree: '',
        },
      ],
    };
  }

  onPressNext = () => {
    this.props.navigation.navigate('Preferences');
  };

  onPressAddDegree = () => {
    this.state.degrees.push({
      key: this.state.degrees.length + 1,
      college: '',
      degree: '',
    });
    this.forceUpdate();
  };

  onChangeStreet(street) {
    this.setState({
      street: street,
    });
  }

  onChangeAptNum(aptNum) {
    this.setState({
      aptNum: aptNum,
    });
  }

  onChangeCity(city) {
    this.setState({
      city: city,
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

  onChangeDegrees(value, index, key) {
    let newDegrees = this.state.degrees;
    newDegrees[index][key] = value;
    this.setState({
      degrees: newDegrees,
    });
  }

  onChangeTest(test) {
    console.log(test);
    this.setState({
      test: test,
    });
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
    let validInputs =
      this.state.street.length > 0 &&
      this.state.city.length > 0 &&
      this.validateState(this.state.state) &&
      this.validateZipCode(this.state.zipCode);
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled">
          <TitleComponent title="Tutor Registration" />
          <Text style={styles.sectionTitle}>Your Address</Text>
          <TextInputComponent
            title="Street"
            placeholderText="110 Wesley Way"
            autoCapitalize="words"
            onChangeText={street => this.onChangeStreet(street)}
            value={this.state.street}
          />
          <TextInputComponent
            title="Apt/Suite"
            placeholderText="2716"
            keyboardType="phone-pad"
            onChangeText={aptNum => this.onChangeAptNum(aptNum)}
            value={this.state.aptNum}
          />
          <TextInputComponent
            title="City"
            placeholderText="Mission Viejo"
            autoCapitalize="words"
            onChangeText={city => this.onChangeCity(city)}
            value={this.state.city}
          />
          <View style={styles.textInputContainerInline}>
            <TextInputComponent
              title="State"
              placeholderText="ZZ"
              maxLength={2}
              autoCapitalize="characters"
              onChangeText={state => this.onChangeState(state)}
              value={this.state.state}
            />
            <View style={styles.inlineFiller} />
            <TextInputComponent
              title="Zip Code"
              placeholderText="55555"
              keyboardType="phone-pad"
              maxLength={6}
              onChangeText={zipCode => this.onChangeZipCode(zipCode)}
              value={this.state.zipCode}
            />
          </View>
          <Text style={styles.sectionTitle}>Educational Background</Text>
          <TextInputComponent
            title="Undergraduate College"
            placeholderText="Undergraduate College"
            onChangeText={(degrees, index, key) =>
              this.onChangeDegrees(degrees, 0, 'college')
            }
            value={this.state.degrees[0].college}
          />
          <TextInputComponent
            title="Undergraduate Degree"
            placeholderText="Undergraduate Degree"
            onChangeText={(degrees, index, key) =>
              this.onChangeDegrees(degrees, 0, 'degree')
            }
            value={this.state.degrees[0].degree}
          />
          {this.state.degrees.map((element, i) => {
            return i > 0 ? (
              <View key={i}>
                <TextInputComponent
                  title={'Graduate College ' + i}
                  placeholderText={'Graduate College ' + i}
                  onChangeText={(degrees, index, key) =>
                    this.onChangeDegrees(degrees, i, 'college')
                  }
                  value={this.state.degrees[i].college}
                />
                <TextInputComponent
                  title={'Graduate Degree ' + i}
                  placeholderText={'Graduate Degree ' + i}
                  onChangeText={(degrees, index, key) =>
                    this.onChangeDegrees(degrees, i, 'degree')
                  }
                  value={this.state.degrees[i].degree}
                />
              </View>
            ) : (
              <View key={i} />
            );
          })}
          <View style={styles.addDegreeContainer}>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              disabled={this.state.degrees.length > 3}
              onPress={this.onPressAddDegree}>
              <Image source={plusSign} />
              <Text style={styles.addDegreeText}>Add more credentials </Text>
            </TouchableOpacity>
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
  inlineFiller: {
    flex: 1,
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
  sectionTitle: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 18,
    color: colors.black,
    marginTop: 20,
  },
  addDegreeText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    color: colors.black,
  },
});
