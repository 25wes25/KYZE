import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  colors,
  fonts,
  sectionTitle,
  blockText,
} from '../../styles';
import {
  bypassChecks,
} from '../../testing';
import nextArrow from '../../../res/images/nextArrow.png';
import addProfilePhoto from '../../../res/images/addProfilePhoto.png';
import TitleComponent from '../../components/TitleComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';

export default class PersonalizeProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: '',
      bio: '',
    };
  }

  onPressNext = () => {
    this.props.navigation.navigate('Terms and Agreement');
  };

  onChangeHeadline(headline) {
    this.setState({
      headline: headline,
    });
  }

  onChangeBio(bio) {
    this.setState({
      bio: bio,
    });
  }

  render() {
    let validInputs = bypassChecks || (
      this.state.headline.length > 0 &&
      this.state.bio.length > 0);
    return (
      <ContainerComponent>
        <TitleComponent title="Tutor Registration" />
        <Text style={styles.sectionTitle}>Profile Picture</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={styles.profilePhoto}>
            <Image
              source={addProfilePhoto}
              style={{marginHorizontal: 17, marginVertical: 29}}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionTitle}>Profile Headline</Text>
        <Text style={styles.blockText}>
          This will appear at the top of your profile and is one of the first
          things a student sees about you
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Short headline about yourself"
          multiline={true}
          maxLength={40}
          onChangeText={headline => this.onChangeHeadline(headline)}
        />

        <Text style={styles.sectionTitle}>Bio</Text>
        <Text style={styles.blockText}>
          <Text>
            Help students get to know you and encourage them to contact you
            {'\n\n'}
          </Text>
          <Text style={{fontWeight: 'bold'}}>Note: </Text>
          <Text>
            this section must be 1-2 paragraphs long and cannot be in ALL CAPS
            or resume format
          </Text>
        </Text>
        <TextInput
          style={[styles.input, {minHeight: 200}]}
          placeholder="Do you have experience tutoring or teaching? What do
            you love about tutoring? What makes you a qualified tutor?"
          multiline={true}
          maxLength={1000}
          onChangeText={bio => this.onChangeBio(bio)}
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
  profilePhoto: {
    borderWidth: 2,
    borderRadius: 60,
    borderColor: colors.black,
    width: 120,
    height: 120,
  },
  input: {
    fontFamily: fonts.gothic,
    fontSize: 18,
    lineHeight: 22,
    color: colors.black,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
