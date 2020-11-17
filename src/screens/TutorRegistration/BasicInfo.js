import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  colors,
  fonts,
  sectionTitle,
} from '../../styles';
import {
  validateAddressState,
  validateaddressZipcode,
} from '../../utils';
import {
  bypassChecks,
} from '../../testing';
import plusSign from '../../../res/images/plusSign.png';
import TextInputComponent from '../../components/TextInputComponent';
import TitleComponent from '../../components/TitleComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';

export default class BasicInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressStreet: '',
      addressAptnum: '',
      addressCity: '',
      addressState: this.props.route.params.user.addressState || '',
      addressZipcode: this.props.route.params.user.addressZipcode || '',
      education: [
        {
          college: '',
          degree: '',
        },
      ],
      user: this.props.route.params.user,
      type: this.props.route.params.type || '',
    };
  }

  onPressNext = () => {
    let newUser = this.state.user;
    newUser.addressStreet = this.state.addressStreet;
    newUser.addressAptnum = this.state.addressAptnum;
    newUser.addressCity = this.state.addressCity;
    newUser.addressState = this.state.addressState;
    newUser.addressZipcode = this.state.addressZipcode;
    newUser.education = this.state.education;
    this.props.navigation.navigate('Preferences', {type: this.state.type, user: newUser});
  };

  onPressAddDegree = () => {
    this.state.education.push({
      key: this.state.education.length + 1,
      college: '',
      degree: '',
    });
    this.forceUpdate();
  };

  onChangeAddressStreet(addressStreet) {
    this.setState({
      addressStreet: addressStreet,
    });
  }

  onChangeAddressAptnum(addressAptnum) {
    this.setState({
      addressAptnum: addressAptnum,
    });
  }

  onChangeAddressCity(addressCity) {
    this.setState({
      addressCity: addressCity,
    });
  }

  onChangeAddressState(addressState) {
    this.setState({
      addressState: addressState,
    });
  }

  onChangeAddressZipcode(addressZipcode) {
    this.setState({
      addressZipcode: addressZipcode,
    });
  }

  onChangeEducation(value, index, key) {
    let neweducation = this.state.education;
    neweducation[index][key] = value;
    this.setState({
      education: neweducation,
    });
  }

  onChangeTest(test) {
    console.log(test);
    this.setState({
      test: test,
    });
  }

  render() {
    let validInputs = bypassChecks || (
      this.state.addressStreet.length > 0 &&
      this.state.addressCity.length > 0 &&
      validateAddressState(this.state.addressState) &&
      validateaddressZipcode(this.state.addressZipcode));
    return (
      <ContainerComponent>
        <TitleComponent title="Tutor Registration" />
        <Text style={styles.sectionTitle}>Your Address</Text>
        <TextInputComponent
          title="Street"
          placeholderText="110 Wesley Way"
          autoCapitalize="words"
          onChangeText={addressStreet => this.onChangeAddressStreet(addressStreet)}
          value={this.state.addressStreet}
        />
        <TextInputComponent
          title="Apt/Suite"
          placeholderText="2716"
          keyboardType="phone-pad"
          onChangeText={addressAptnum => this.onChangeAddressAptnum(addressAptnum)}
          value={this.state.addressAptnum}
        />
        <TextInputComponent
          title="City"
          placeholderText="Mission Viejo"
          autoCapitalize="words"
          onChangeText={addressCity => this.onChangeAddressCity(addressCity)}
          value={this.state.addressCity}
        />
        <View style={styles.textInputContainerInline}>
          <TextInputComponent
            title="State"
            placeholderText="ZZ"
            maxLength={2}
            autoCapitalize="characters"
            onChangeText={addressState => this.onChangeAddressState(addressState)}
            value={this.state.addressState}
          />
          <View style={styles.inlineFiller} />
          <TextInputComponent
            title="Zip Code"
            placeholderText="55555"
            keyboardType="phone-pad"
            maxLength={6}
            onChangeText={addressZipcode => this.onChangeAddressZipcode(addressZipcode)}
            value={this.state.addressZipcode}
          />
        </View>
        <Text style={styles.sectionTitle}>Educational Background</Text>
        <TextInputComponent
          title="Undergraduate College"
          placeholderText="Undergraduate College"
          onChangeText={(education, index, key) =>
            this.onChangeEducation(education, 0, 'college')
          }
          value={this.state.education[0].college}
        />
        <TextInputComponent
          title="Undergraduate Degree"
          placeholderText="Undergraduate Degree"
          onChangeText={(education, index, key) =>
            this.onChangeEducation(education, 0, 'degree')
          }
          value={this.state.education[0].degree}
        />
        {this.state.education.map((element, i) => {
          return i > 0 ? (
            <View key={i}>
              <TextInputComponent
                title={'Graduate College ' + i}
                placeholderText={'Graduate College ' + i}
                onChangeText={(education, index, key) =>
                  this.onChangeEducation(education, i, 'college')
                }
                value={this.state.education[i].college}
              />
              <TextInputComponent
                title={'Graduate Degree ' + i}
                placeholderText={'Graduate Degree ' + i}
                onChangeText={(education, index, key) =>
                  this.onChangeEducation(education, i, 'degree')
                }
                value={this.state.education[i].degree}
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
            disabled={this.state.education.length > 3}
            onPress={this.onPressAddDegree}>
            <Image source={plusSign} />
            <Text style={styles.addDegreeText}>Add more credentials </Text>
          </TouchableOpacity>
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
  inlineFiller: {
    flex: 1,
  },
  textInputContainerInline: {
    flexDirection: 'row',
  },
  addDegreeText: {
    fontFamily: fonts.gothic,
    fontSize: 14,
    color: colors.black,
  },
});
