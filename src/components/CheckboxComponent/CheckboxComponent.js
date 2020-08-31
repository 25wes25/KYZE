import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Image
} from 'react-native';
import styles from './styles';
import {colors} from '../../styles';
import checkmarkImage from '../../../res/images/checkmark.png';

class CheckboxComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={[
          styles.checkbox,
          this.props.enabled && {backgroundColor: colors.mintGreen},
        ]}
        onPress={this.props.onPress}>
        {this.props.enabled ? (
          <Image source={checkmarkImage} style={styles.checkmark} />
        ) : (
          null
        )}
      </TouchableOpacity>
    );
  }
}

CheckboxComponent.propTypes = {
  enabled: PropTypes.bool,
  onPress: PropTypes.func,
};

CheckboxComponent.defaultProps = {
  enabled: true,
  onPress: () => console.log('Button Pressed'),
};

export default CheckboxComponent;
