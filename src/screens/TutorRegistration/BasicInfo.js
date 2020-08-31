import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../styles';
import {
  validateState,
  validateZipCode,
} from '../../utils';
import plusSign from '../../../res/images/plusSign.png';
import TextInputComponent from '../../components/TextInputComponent';
import TitleComponent from '../../components/TitleComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';

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

  render() {
    let validInputs =
      this.state.street.length > 0 &&
      this.state.city.length > 0 &&
      validateState(this.state.state) &&
      validateZipCode(this.state.zipCode);
    return (
      <ContainerComponent>
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
  textInputContainer: {
    flex: 3,
    marginVertical: 10,
  },
  textInputContainerInline: {
    flexDirection: 'row',
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
