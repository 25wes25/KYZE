import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fonts} from '../../styles';
var moment = require('moment');

moment().date();
moment.updateLocale('en', {
  calendar: Object,
});
let dates = [
  {
    id: '0',
    weekday: 'Mon',
    date: 23,
    session: [
      {
        subject: 'Calculus I',
        time: '4:00pm -> 5:00pm',
      },
      {
        subject: 'Algebra II',
        time: '6:00pm -> 7:00pm',
      },
    ],
  },
  {
    id: '1',
    weekday: 'Tue',
    date: 24,
    session: [],
  },
  {
    id: '2',
    weekday: 'Wed',
    date: 25,
    session: [],
  },
  {
    id: '3',
    weekday: 'Thu',
    date: 26,
    session: [],
  },
  {
    id: '4',
    weekday: 'Fri',
    date: 27,
    session: [],
  },
  {
    id: '5',
    weekday: 'Sat',
    date: 28,
    session: [],
  },
  {
    id: '6',
    weekday: 'Sun',
    date: 29,
    session: [],
  },
];

export default class ScheduleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.dateHeaderContainer}>
            <View style={styles.dateSelectionContainer}>
              <TouchableOpacity style={styles.dateSelectionButton}>
                <Text style={styles.dateSelectionText}>3 Day</Text>
              </TouchableOpacity>
              <View style={styles.dateSelectionDivider} />
              <TouchableOpacity style={[styles.dateSelectionButton, {backgroundColor: colors.lightGray}]}>
                <Text style={styles.dateSelectionText}>Week</Text>
              </TouchableOpacity>
              <View style={styles.dateSelectionDivider} />
              <TouchableOpacity style={styles.dateSelectionButton}>
                <Text style={styles.dateSelectionText}>Month</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.dateHeaderText}>MARCH 2020</Text>
          </View>
          <FlatList
              data={dates}
              renderItem={({item}) => this.renderDay(item)}
              keyExtractor={item => item.id}
          />
        </SafeAreaView>
    );
  }

  renderSession(day) {
    return (
        <View>
          <View />
          <View>
            <Text>{day.session[0].subject}</Text>
            <Text>{day.session[0].time}</Text>
          </View>
        </View>
    );
  }

  renderDay(item) {
    return (
        <View style={styles.dateRowContainer}>
          <View style={styles.dateDayContainer}>
            <View style={styles.dateDayPair}>
              <Text style={styles.dateWeekdayText}>{item.weekday}</Text>
              <Text style={styles.dateText}>{item.date}</Text>
            </View>
          </View>
          <View
              style={[
                styles.dateContentContainer,
                item.date % 2 === 1
                    ? {backgroundColor: colors.calendarBlue}
                    : {backgroundColor: colors.calendarBlueLight},
              ]}>
            {/*{day.session.length > 0 && this.renderSession(day)}*/}
          </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  dateRowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  dateDayContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 70,
  },
  dateDayPair: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingRight: 4,
  },
  dateWeekdayText: {
    textAlign: 'center',
    fontFamily: fonts.gothic,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '300',
  },
  dateText: {
    textAlign: 'center',
    fontFamily: fonts.gothic,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: '600',
  },
  dateContentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  dateHeaderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    borderBottomWidth: 1,
    borderColor: colors.black,
  },
  dateSelectionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.black,
  },
  dateSelectionButton: {
    paddingTop: 10,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  dateSelectionText: {
    textAlign: 'center',
    fontFamily: fonts.gothic,
    fontSize: 16,
    fontWeight: '600',
  },
  dateSelectionDivider: {
    width: 1,
    paddingVertical: 12,
    backgroundColor: colors.black,
  },
  dateHeaderText: {
    textAlign: 'center',
    fontFamily: fonts.gothic,
    fontSize: 22,
    fontWeight: '600',
    paddingTop: 16,
    paddingBottom: 12,
  },
});
