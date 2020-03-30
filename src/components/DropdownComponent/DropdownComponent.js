import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import nextArrow from '../../../res/images/nextArrow.png';
import styles from './styles';
import {colors} from '../../styles';

class DropdownComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      selected: 0,
    }
  }

  openClose(selected) {
    this.setState({
      open: !this.state.open,
      selected: selected,
    });
    this.props.onSelect(this.props.choices[selected]);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.listContainer} >
          <TouchableOpacity
            style={[styles.listItem,
              {
                paddingVertical: 3,
              }]}
            onPress={(selected) => this.openClose(this.state.selected)}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>{this.props.choices[this.state.selected]}</Text>
              <Image style={this.state.open ? (
                styles.arrowRotated
              ) : (
                styles.arrow
              )} source={nextArrow} />
            </View>
          </TouchableOpacity>
          {
            this.props.choices.map((element, index) => {
              return (
                (index!=this.state.selected && this.state.open) ? (
                  <TouchableOpacity
                    key={index}
                    style={styles.listItem}
                    onPress={(selected) => this.openClose(index)}>
                    <Text>{element}</Text>
                  </TouchableOpacity>
                ) : (
                  <View/>
                )
              );
            })
          }
        </View>
      </View>
    );
  }
}

DropdownComponent.propTypes = {
  title: PropTypes.string,
  choices: PropTypes.array,
  onSelect: PropTypes.func,
};

DropdownComponent.defaultProps = {
  title: 'Title',
  choices: ["Select an option", "a", "b", "c"],
  onSelect: (selected) => console.log(selected),
};

export default DropdownComponent;
