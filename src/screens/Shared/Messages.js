import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import nextArrow from '../../../res/images/nextArrow.png';
import search from '../../../res/images/searchbarIcon.png';
import {colors} from '../../styles';

const DATA = [
  {
    id: '0',
  },
  {
    id: '1',
    name: 'Name',
    preview: 'It was great tutoring you the other day, let me ...',
    date: '5:03 PM',
  },
  {
    id: '2',
    name: 'Name',
    preview: 'It was great tutoring you the other day, let me ...',
    date: 'Yesterday',
  },
  {
    id: '3',
    name: 'Name',
    preview: 'It was great tutoring you the other day, let me ...',
    date: 'Wednesday',
  },
  {
    id: '4',
    name: 'Name',
    preview: 'It was great tutoring you the other day, let me ...',
    date: '3/17/20',
  },
  {
    id: '5',
    name: 'Name',
    preview: 'It was great tutoring you the other day, let me ...',
    date: '5:03 PM',
  },
  {
    id: '6',
    name: 'Name',
    preview: 'It was great tutoring you the other day, let me ...',
    date: '5:03 PM',
  },
  {
    id: '7',
    name: 'Name',
    preview: 'It was great tutoring you the other day, let me ...',
    date: '5:03 PM',
  },
  {
    id: '8',
    name: 'Name',
    preview: 'It was great tutoring you the other day, let me ...',
    date: '5:03 PM',
  },
  {
    id: '9',
    name: 'Name',
    preview: 'It was great tutoring you the other day, let me ...',
    date: '5:03 PM',
  },
];

export default class MessagesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              {item.id == 0 ? (
                <View style={[styles.input,{flex: 1, flexDirection: 'row'}]}>
                  <Image source={search} style={{marginRight:10}}/>
                  <TextInput
                    placeholder="Search"
                    placeholderTextColor={colors.opaqueBlack}
                  />
                </View>
              ) : (
                <View>
                  <View style={styles.dividerLine} />
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <View style={styles.icon} />
                    <View style={{marginLeft: 10, flex: 1}}>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.messageName}>{item.name}</Text>
                        <Text
                          style={[styles.messageDate, {marginLeft: 'auto'}]}>
                          {item.date}
                        </Text>
                      </View>
                      <Text style={styles.messagePreview}>{item.preview}</Text>
                    </View>
                    <Image source={nextArrow} />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          )}
        />
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
  itemContainer: {
    marginHorizontal: 30,
  },
  dividerLine: {
    flex: 1,
    backgroundColor: colors.black,
    height: 1,
    marginVertical: 10,
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.lightGray,
  },
  messageName: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  messageDate: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 12,
    color: colors.black,
  },
  messagePreview: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 12,
    color: colors.black,
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
    marginVertical: 20,
  },
});
