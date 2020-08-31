import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  View,
  Text,
  Image
} from 'react-native';
import styles from './styles';
import {colors} from '../../styles';
import nextArrow from '../../../res/images/nextArrow.png';

class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          this.props.enabled && {backgroundColor: colors.mintGreen},
        ]}
        disabled={!this.props.enabled}
        onPress={this.props.onPress}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={styles.buttonText}>{this.props.text}</Text>
          {
            this.props.arrow ? (
              <Image source={nextArrow}/>
            ) : (
              null
            )
          }
        </View>
      </TouchableOpacity>
    );
  }
}

ButtonComponent.propTypes = {
  text: PropTypes.string,
  enabled: PropTypes.bool,
  arrow: PropTypes.bool,
  onPress: PropTypes.func,
};

ButtonComponent.defaultProps = {
  text: 'Button',
  enabled: true,
  arrow: false,
  onPress: () => console.log('Button Pressed'),
};

export default ButtonComponent;
