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
import addProfilePhoto from '../../../res/images/addProfilePhoto.png';
import TitleComponent from '../../components/TitleComponent';

export default class PersonalizeProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
    };
  }

  onPressNext = () => {
    this.props.navigation.navigate('Terms and Agreement');
  };

  render() {
    let validInputs = true;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled">
          <TitleComponent title='Tutor Registration'>
          </TitleComponent>
          <Text style={styles.sectionTitle}>Profile Picture</Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              style={styles.profilePhoto}
              >
              <Image
                source={addProfilePhoto}
                style={{marginHorizontal: 17, marginVertical: 29}}/>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>Profile Headline</Text>
          <Text style={styles.blockText}>
            This will appear at the top of your profile and is one of the first
            things a student sees about you
          </Text>
          <TextInput
            style={styles.input}
            placeholder='Short headline about yourself'
            multiline={true}
            maxLength={40}
          />

          <Text style={styles.sectionTitle}>Bio</Text>
          <Text style={styles.blockText}>
            <Text>
              Help students get to know you and encourage them to contact
              you{'\n\n'}
            </Text>
            <Text style={{fontWeight: "bold"}}>Note: </Text>
            <Text>
              this section must be 1-2 paragraphs long and cannot be in ALL
              CAPS or resume format
            </Text>
          </Text>
          <TextInput
            style={[styles.input, {minHeight: 200}]}
            placeholder='Do you have experience tutoring or teaching? What do
              you love about tutoring? What makes you a qualified tutor?'
            multiline={true}
            maxLength={1000}
          />

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
  sectionTitle: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 18,
    color: colors.black,
    marginTop: 20,
  },
  profilePhoto: {
    borderWidth: 2,
    borderRadius: 60,
    borderColor: colors.black,
    width: 120,
    height: 120,
  },
  blockText: {
   fontFamily: 'Apple SD Gothic Neo',
   fontSize: 14,
   color: colors.black,
   marginTop: 9,
   marginBottom: 5,
  },
  input: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 18,
    lineHeight: 22,
    color: colors.black,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
