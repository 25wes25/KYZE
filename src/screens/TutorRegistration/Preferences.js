import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../styles';
import nextArrow from '../../../res/images/nextArrow.png';
import TitleComponent from '../../components/TitleComponent';
import DropdownComponent from '../../components/DropdownComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';

export default class PreferencesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cancellationPolicy: -1,
      currentRadius: -1,
      homeRadius: -1,
    };
  }

  onPressNext = () => {
    this.props.navigation.navigate('Personalize Profile');
  };

  onChangeCancellationPolicy(policy) {
    this.setState({
      cancellationPolicy: policy,
    });
  }

  onChangeCurrentRadius(currentRadius) {
    this.setState({
      currentRadius: currentRadius,
    });
  }

  onChangeHomeRadius(homeRadius) {
    this.setState({
      homeRadius: homeRadius,
    });
  }

  render() {
    let validInputs =
      this.state.cancellationPolicy != -1 &&
      this.state.currentRadius != -1 &&
      this.state.homeRadius != -1;
    return (
      <ContainerComponent>
        <TitleComponent title="Tutor Registration" />
        <Text style={styles.sectionTitle}>Hourly Rate</Text>
        <Text style={styles.blockText}>
          <Text>
            Once you are certified to tutor a course you can set your own
            hourly rate per course{'\n\n'}
          </Text>
          <Text style={{fontWeight: 'bold'}}>Note: </Text>
          <Text>
            keep in mind KYZE charges a 10% fee of the total session amount.
            Most tutors charge at least $20 per hour
          </Text>
        </Text>
        <Text style={styles.sectionTitle}>Cancellation Policy</Text>
        <Text style={styles.blockText}>
          Please select one of the following options
        </Text>
        <View style={styles.radioButtonContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={policy => this.onChangeCancellationPolicy(0)}>
            {this.state.cancellationPolicy == 0 ? (
              <View style={styles.radioButtonFill} />
            ) : (
              <View />
            )}
          </TouchableOpacity>
          <Text style={styles.radioButtonText}>
            <Text>Charge students </Text>
            <Text style={{fontWeight: 'bold'}}>50% </Text>
            <Text>of the total session price if they cancel less than </Text>
            <Text style={{fontWeight: 'bold'}}>24 hours </Text>
            <Text>before the session</Text>
          </Text>
        </View>
        <View style={styles.dividerLine} />
        <View style={styles.radioButtonContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={policy => this.onChangeCancellationPolicy(1)}>
            {this.state.cancellationPolicy == 1 ? (
              <View style={styles.radioButtonFill} />
            ) : (
              <View />
            )}
          </TouchableOpacity>
          <Text style={styles.radioButtonText}>
            <Text>Charge students </Text>
            <Text style={{fontWeight: 'bold'}}>50% </Text>
            <Text>of the total session price if they cancel less than </Text>
            <Text style={{fontWeight: 'bold'}}>48 hours </Text>
            <Text>before the session</Text>
          </Text>
        </View>
        <View style={styles.dividerLine} />
        <View style={styles.radioButtonContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={policy => this.onChangeCancellationPolicy(2)}>
            {this.state.cancellationPolicy == 2 ? (
              <View style={styles.radioButtonFill} />
            ) : (
              <View />
            )}
          </TouchableOpacity>
          <Text style={styles.radioButtonText}>
            <Text>Charge students </Text>
            <Text style={{fontWeight: 'bold'}}>75% </Text>
            <Text>of the total session price if they cancel less than </Text>
            <Text style={{fontWeight: 'bold'}}>24 hours </Text>
            <Text>before the session</Text>
          </Text>
        </View>
        <View style={styles.dividerLine} />
        <View style={styles.radioButtonContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={policy => this.onChangeCancellationPolicy(3)}>
            {this.state.cancellationPolicy == 3 ? (
              <View style={styles.radioButtonFill} />
            ) : (
              <View />
            )}
          </TouchableOpacity>
          <Text style={styles.radioButtonText}>
            <Text>Charge students </Text>
            <Text style={{fontWeight: 'bold'}}>75% </Text>
            <Text>of the total session price if they cancel less than </Text>
            <Text style={{fontWeight: 'bold'}}>48 hours </Text>
            <Text>before the session</Text>
          </Text>
        </View>
        <View style={styles.dividerLine} />
        <View style={styles.radioButtonContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={policy => this.onChangeCancellationPolicy(4)}>
            {this.state.cancellationPolicy == 4 ? (
              <View style={styles.radioButtonFill} />
            ) : (
              <View />
            )}
          </TouchableOpacity>
          <Text style={styles.radioButtonText}>
            <Text>Charge students </Text>
            <Text style={{fontWeight: 'bold'}}>100% </Text>
            <Text>of the total session price if they cancel less than </Text>
            <Text style={{fontWeight: 'bold'}}>24 hours </Text>
            <Text>before the session</Text>
          </Text>
        </View>
        <View style={styles.dividerLine} />
        <View style={styles.radioButtonContainer}>
          <TouchableOpacity
            style={styles.radioButton}
            onPress={policy => this.onChangeCancellationPolicy(5)}>
            {this.state.cancellationPolicy == 5 ? (
              <View style={styles.radioButtonFill} />
            ) : (
              <View />
            )}
          </TouchableOpacity>
          <Text style={styles.radioButtonText}>
            <Text>Charge students </Text>
            <Text style={{fontWeight: 'bold'}}>100% </Text>
            <Text>of the total session price if they cancel less than </Text>
            <Text style={{fontWeight: 'bold'}}>48 hours </Text>
            <Text>before the session</Text>
          </Text>
        </View>
        <View style={styles.dividerLine} />
        <Text style={styles.sectionTitle}>Travel Radius</Text>
        <Text style={styles.blockText}>
          <Text>How far do you want to travel from your </Text>
          <Text style={{fontWeight: 'bold'}}>current location </Text>
          <Text>to tutor a student</Text>
        </Text>
        <DropdownComponent
          choices={[
            '5 miles',
            '10 miles',
            '15 miles',
            '20 miles',
            '25 miles',
            '30 miles',
          ]}
          default="10 miles"
          title=""
          onSelect={selected => this.onChangeCurrentRadius(selected)}
        />
        <Text style={styles.blockText}>
          <Text>How far do you want to travel from your </Text>
          <Text style={{fontWeight: 'bold'}}>home </Text>
          <Text>to tutor a student</Text>
        </Text>
        <DropdownComponent
          choices={[
            '5 miles',
            '10 miles',
            '15 miles',
            '20 miles',
            '25 miles',
            '30 miles',
          ]}
          default="10 miles"
          title=""
          onSelect={selected => this.onChangeHomeRadius(selected)}
        />
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
  sectionTitle: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 18,
    color: colors.black,
    marginTop: 20,
  },
  blockText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    color: colors.black,
    marginTop: 9,
  },
  radioButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  radioButton: {
    borderWidth: 2,
    borderRadius: 15,
    borderColor: colors.black,
    width: 30,
    height: 30,
  },
  radioButtonFill: {
    borderRadius: 10,
    backgroundColor: colors.mintGreen,
    width: 20,
    height: 20,
    margin: 3,
  },
  radioButtonText: {
    flex: 1,
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 12,
    color: colors.black,
    marginLeft: 10,
  },
  dividerLine: {
    marginLeft: 40,
    marginTop: 5,
    flex: 1,
    backgroundColor: colors.black,
    height: 1,
  },
});
