import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';
import styles from './styles';
import {colors} from '../../styles';

class ContainerComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          keyboardShouldPersistTaps="handled">
          {this.props.children}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ContainerComponent;
