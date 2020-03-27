import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TextInput,
  View,
} from 'react-native';
import styles from './styles';
import {colors} from '../../styles';

class TextInputComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <TextInput
          style={[
            styles.input,
            this.props.invalid && {borderColor: colors.red},
          ]}
          placeholder={this.props.placeholderText}
          placeholderTextColor={colors.opaqueBlack}
          autoCapitalize={this.props.autoCapitalize}
          secureTextEntry={this.props.secureTextEntry}
          keyboardType={this.props.keyboardType}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
        />
      </View>
    );
  }
}

TextInputComponent.propTypes = {
  title: PropTypes.string,
  placeholderText: PropTypes.string,
  value: PropTypes.string,
  autoCapitalize: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  invalid: PropTypes.bool,
  onChangeText: PropTypes.func,
};

TextInputComponent.defaultProps = {
  title: 'Title',
  placeholderText: 'Placeholder Text',
  value: '',
  autoCapitalize: 'none',
  secureTextEntry: false,
  keyboardType: 'default',
  invalid: false,
  onChangeText: () => console.log('Text Changed'),
};

export default TextInputComponent;
