import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import pedram from '../../../res/images/pedram.png';
import {colors, fonts} from '../../styles';

const user = {
  name: 'Pedram H.',
};

const shortcuts = ['Home', 'Favorite Starbucks', 'Santa Monica Library'];

let sessionsData = [
  {
    id: '0',
    duration: 2,
    earnings: 60,
    subject: 'Organic Chemistry I',
    date: 'April 3, 2020',
  },
  {
    id: '1',
    duration: 1,
    earnings: 30,
    subject: 'Algebra I',
    date: 'March 29, 2020',
  },
  {
    id: '2',
    duration: 2,
    earnings: 40,
    subject: 'Calculus II',
    date: 'March 24, 2020',
  },
  {
    id: '3',
    duration: 2,
    earnings: 60,
    subject: 'Organic Chemistry I',
    date: 'March 23, 2020',
  },
  {
    id: '4',
    duration: 1,
    earnings: 30,
    subject: 'Algebra I',
    date: 'March 20, 2020',
  },
  {
    id: '5',
    duration: 2,
    earnings: 40,
    subject: 'Calculus II',
    date: 'March 16, 2020',
  },
];

export default class StudentProfileScreen extends React.Component {
  renderItem(item) {
    return (
      <TouchableOpacity style={styles.sessionButton}>
        <View style={styles.sessionContainer}>
          <View style={styles.sessionIcon} />
          <View style={styles.sessionDetailsContainer}>
            <Text style={styles.sessionSubjectText}>{item.subject}</Text>
            <Text style={styles.sessionDetailsText}>
              {item.date} * {item.duration} hrs
            </Text>
          </View>
          <View style={styles.sessionEarningsContainer}>
            <Text style={styles.sessionEarnings}>${item.earnings}.00</Text>
            <Image
              style={styles.nextArrow}
              source={require('../../../res/images/rightArrow.png')}
            />
          </View>
        </View>
        <View style={styles.dividerLine} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View
            style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <View style={styles.blackBar} />
            <Image style={styles.photo} source={pedram} />
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.topContent}>
              <Text style={styles.name}>{user.name}</Text>
            </View>
          </View>
          <View style={styles.dividerLine} />
          <View style={styles.contentContainer}>
            <Text style={styles.heading}>Shortcuts</Text>
            {shortcuts.map((e, i) => {
              return (
                <View key={i}>
                  <View style={styles.dividerLine} />
                  <TouchableOpacity>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 10,
                      }}>
                      <View style={styles.icon} />
                      <Text style={styles.heading}>{e}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
          <View style={styles.dividerLine} />
          <View style={styles.dividerLine} />
          <View style={styles.contentContainer}>
            <Text style={styles.heading}>Session History</Text>
            <View style={styles.dividerLine} />
            <FlatList
              data={sessionsData}
              renderItem={({item}) => this.renderItem(item)}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
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
  contentContainer: {
    justifyContent: 'center',
    marginHorizontal: 40,
  },
  dividerLine: {
    flex: 1,
    backgroundColor: colors.darkGray,
    height: 1,
    marginVertical: 10,
  },
  blackBar: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: colors.darkGray,
    height: 100,
  },
  photo: {
    flex: 1,
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: colors.black,
    backgroundColor: colors.white,
    marginTop: -50,
  },
  heading: {
    fontFamily: fonts.gothic,
    fontSize: 18,
    color: colors.black,
  },
  subheading: {
    fontFamily: fonts.gothic,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 5,
  },
  icon: {
    height: 40,
    width: 40,
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: colors.lightGray,
    marginRight: 20,
  },
  name: {
    fontFamily: fonts.gothic,
    fontSize: 22,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 5,
  },
  earningsHistoryList: {
    flex: 1,
  },
  sessionButton: {},
  sessionContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  sessionIcon: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: colors.lightGray,
  },
  sessionDetailsContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  sessionSubjectText: {
    fontFamily: fonts.gothic,
    fontSize: 16,
    fontWeight: '800',
  },
  sessionDetailsText: {
    fontFamily: fonts.gothic,
    fontSize: 12,
    fontWeight: '500',
  },
  sessionEarningsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sessionEarnings: {
    fontFamily: fonts.gothic,
    fontSize: 16,
    fontWeight: '500',
    paddingTop: 5,
  },
  nextArrow: {
    marginLeft: 10,
  },
});
