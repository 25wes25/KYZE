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
      selected: this.props.choices.length,
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
        {
          this.props.title === '' ? (
            <View/>
          ) : (
            <Text style={styles.title}>{this.props.title}</Text>
          )
        }
        <View style={styles.listContainer} >
          <TouchableOpacity
            style={
              {
                marginVertical: 3,
                marginLeft: 10,
              }}
            onPress={(selected) => this.openClose(this.state.selected)}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {
                (this.state.selected==this.props.choices.length) ? (
                  <Text
                    style={
                      {
                        color: colors.lightGray,
                        paddingRight: 30,
                      }}>
                    {this.props.default}
                  </Text>
                ) : (
                  <Text style={
                    {
                      paddingRight: 30,
                    }}>
                    {this.props.choices[this.state.selected]}
                  </Text>
                )
              }
              <Image style={this.state.open ? (
                styles.arrowUp
              ) : (
                styles.arrowDown
              )} source={nextArrow} />
            </View>
          </TouchableOpacity>
          {
            this.props.choices.map((element, index) => {
              return (
                (index!=this.state.selected && this.state.open) ? (
                  <View key={index}>
                    {
                      (index==Math.max(1-this.state.selected, 0)) ? (
                        <View style={[styles.dividerLine,
                          {marginHorizontal: 0}]} />
                      ) : (
                        <View style={[styles.dividerLine,
                          {marginHorizontal: 10}]} />
                      )
                    }
                    <TouchableOpacity
                      style={styles.listItem}
                      onPress={(selected) => this.openClose(index)}>
                      <Text style={{marginVertical:10}}>{element}</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View key={index}/>
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
  default: PropTypes.string,
  onSelect: PropTypes.func,
};

DropdownComponent.defaultProps = {
  title: 'Title',
  choices: ["a", "b", "c"],
  default: "Select an option",
  onSelect: (selected) => console.log(selected),
};

export default DropdownComponent;
