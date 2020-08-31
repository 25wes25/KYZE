import React from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, View} from 'react-native';
import styles from './styles';
import {colors} from '../../styles';

class TitleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.appTitle}>KYZE</Text>
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          {
            this.props.title !== '' ? (
              <Text style={styles.dividerText}>{this.props.title}</Text>
            ) : (
              null
            )
          }
          <View style={styles.dividerLine} />
        </View>
      </View>
    );
  }
}

TitleComponent.propTypes = {
  title: PropTypes.string,
};

TitleComponent.defaultProps = {
  title: '',
};

export default TitleComponent;
