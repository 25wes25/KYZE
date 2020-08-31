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
import {CommonActions} from '@react-navigation/routers';
import TitleComponent from '../../components/TitleComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';

export default class EmailConfirmationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressResendEmail = () => {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: this.props.route.params.type + 'BottomTabNavigator'}],
      }),
    );
  };

  render() {
    let validInputs = true;
    return (
      <ContainerComponent>
        <TitleComponent title='Tutor Registration' />
        <Text style={styles.header}>Email Confirmation Sent</Text>
        <Text style={styles.blockText}>
          An email confirmation has been sent to the provided address. If you
          don't recieve an email in a few minutes, please double check your
          email address below and click resend
        </Text>
        <Text style={styles.blockText}>example@gmail.com</Text>
        <TouchableOpacity>
          <Text
            style={{
              color: colors.mintGreen,
            }}>
            change email
          </Text>
        </TouchableOpacity>
        <ButtonComponent
          enabled={validInputs}
          onPress={this.onPressResendEmail}
          text='Resend Email'/>
      </ContainerComponent>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 20,
    color: colors.black,
    marginVertical: 10,
  },
  blockText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    color: colors.black,
    marginTop: 9,
  },
});
