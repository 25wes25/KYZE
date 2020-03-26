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

export default class BasicInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degrees: [
        {
          college: "",
          degree: "",
        }
      ],
    };
  }

  onPressNext = () => {
    this.props.navigation.navigate('Preferences');
  };

  render() {
    let validInputs = true;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled">
          <Text style={styles.appTitle}>KODA</Text>
          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>{'Tutor Registration'}</Text>
            <View style={styles.dividerLine} />
          </View>
          <Text style={styles.sectionTitle}>Your Address</Text>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>Street</Text>
            <TextInput
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>Apt/Suite</Text>
            <TextInput
              style={styles.textInput}
            />
          </View><
          View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>City</Text>
            <TextInput
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputContainerInline}>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputTitle}>State</Text>
              <TextInput
                style={styles.textInput}
              />
            </View>
            <View style={styles.inlineFiller} />
            <View style={styles.textInputContainer}>
              <Text style={styles.textInputTitle}>Zip Code</Text>
              <TextInput
                style={styles.textInput}
              />
            </View>
          </View>
          <Text style={styles.sectionTitle}>Educational Background</Text>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>Undergraduate College</Text>
            <TextInput
              style={styles.textInput}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Text style={styles.textInputTitle}>Undergraduate Degree</Text>
            <TextInput
              style={styles.textInput}
            />
          </View>
          {
            this.state.degrees.map((element, index) => {
              return (
                <View>
                  <View style={styles.textInputContainer}>
                    <Text style={styles.textInputTitle}>Graduate College {index+1}</Text>
                    <TextInput
                      style={styles.textInput}
                    />
                  </View>
                  <View style={styles.textInputContainer}>
                    <Text style={styles.textInputTitle}>Graduate Degree {index+1}</Text>
                    <TextInput
                      style={styles.textInput}
                    />
                  </View>
                </View>
            );})
          }
          <View style={styles.addDegreeContainer}>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={this.onPressAddDegree}>
              <Image source={plusSign}/>
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
