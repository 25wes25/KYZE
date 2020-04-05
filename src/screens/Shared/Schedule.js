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

let dates = [
  {
    id: '0',
    weekday: 'Mon',
    date: 23,
    sessions: [
      {
        subject: 'Calculus I',
        time: '4:00pm -> 5:00pm',
        color: '#84E1FF',
      },
      {
        subject: 'Algebra II',
        time: '6:00pm -> 7:00pm',
        color: '#E0C951',
      },
    ],
  },
  {
    id: '1',
    weekday: 'Tue',
    date: 24,
    sessions: [
      {
        subject: 'Physics II',
        time: '12:00pm -> 2:00pm',
        color: '#ffa1f8',
      },
      {
        subject: 'Biology I',
        time: '4:00pm -> 5:00pm',
        color: '#5be073',
      },
    ],
  },
  {
    id: '2',
    weekday: 'Wed',
    date: 25,
    sessions: [
      {
        subject: 'Calculus I',
        time: '4:00pm -> 5:00pm',
        color: '#84E1FF',
      },
      {
        subject: 'Algebra II',
        time: '6:00pm -> 7:00pm',
        color: '#E0C951',
      },
    ],
  },
  {
    id: '3',
    weekday: 'Thu',
    date: 26,
    sessions: [
      {
        subject: 'Physics II',
        time: '12:00pm -> 2:00pm',
        color: '#ffa1f8',
      },
      {
        subject: 'Biology I',
        time: '4:00pm -> 5:00pm',
        color: '#5be073',
      },
    ],
  },
  {
    id: '4',
    weekday: 'Fri',
    date: 27,
    sessions: [],
  },
  {
    id: '5',
    weekday: 'Sat',
    date: 28,
    sessions: [
      {
        subject: 'Chemistry I',
        time: '4:00pm -> 5:00pm',
        color: '#f7ff8a',
      },
    ],
  },
  {
    id: '6',
    weekday: 'Sun',
    date: 29,
    sessions: [
      {
        subject: 'Chemistry I',
        time: '4:00pm -> 5:00pm',
        color: '#f7ff8a',
      },
    ],
  },
];

export default class ScheduleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: 'Week',
      today: 23,
    };
  }

  onPressDateSelectionButton(selection) {
    this.setState({selection: selection});
  }

  renderSession(session) {
    return (
      <View style={styles.sessionContainer}>
        <View
          style={[styles.sessionColorView, {backgroundColor: session.color}]}
        />
        <View style={styles.sessionDetailsContainer}>
          <Text style={styles.sessionSubjectText}>{session.subject}</Text>
          <Text style={styles.sessionTimeText}>{session.time}</Text>
        </View>
      </View>
    );
  }

  renderDay(item) {
    return (
      <TouchableOpacity style={styles.dateRowContainer}>
        <View style={styles.dateDayContainer}>
          <View style={styles.dateDayPair}>
            <Text style={styles.dateWeekdayText}>{item.weekday}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
          <View
            style={[
              styles.dateDaySelection,
              item.date === this.state.today && {backgroundColor: colors.black},
            ]}
          />
        </View>
        <View
          style={[
            styles.dateContentContainer,
            item.date % 2 === 1
              ? {backgroundColor: colors.calendarBlue}
              : {backgroundColor: colors.calendarBlueLight},
          ]}>
          {item.sessions.map(session => {
            return this.renderSession(session);
          })}
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.dateHeaderContainer}>
          <View style={styles.dateSelectionContainer}>
            <TouchableOpacity
              style={[
                styles.dateSelectionButton,
                this.state.selection === '3 Day' && {
                  backgroundColor: colors.darkGray,
                },
              ]}
              onPress={() => this.onPressDateSelectionButton('3 Day')}>
              <Text
                style={[
                  styles.dateSelectionText,
                  this.state.selection === '3 Day' && {
                    color: colors.white,
                  },
                ]}>
                3 Day
              </Text>
            </TouchableOpacity>
            <View style={styles.dateSelectionDivider} />
            <TouchableOpacity
              style={[
                styles.dateSelectionButton,
                this.state.selection === 'Week' && {
                  backgroundColor: colors.darkGray,
                },
              ]}
              onPress={() => this.onPressDateSelectionButton('Week')}>
              <Text
                style={[
                  styles.dateSelectionText,
                  this.state.selection === 'Week' && {
                    color: colors.white,
                  },
                ]}>
                Week
              </Text>
            </TouchableOpacity>
            <View style={styles.dateSelectionDivider} />
            <TouchableOpacity
              style={[
                styles.dateSelectionButton,
                this.state.selection === 'Month' && {
                  backgroundColor: colors.darkGray,
                },
              ]}
              onPress={() => this.onPressDateSelectionButton('Month')}>
              <Text
                style={[
                  styles.dateSelectionText,
                  this.state.selection === 'Month' && {
                    color: colors.white,
                  },
                ]}>
                Month
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.dateHeaderText}>MARCH 2020</Text>
        </View>
        <View style={styles.dateListContainer}>
          <FlatList
            data={dates}
            renderItem={({item}) => this.renderDay(item)}
            keyExtractor={item => item.id}
          />
        </View>
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
  dateRowContainer: {
    flex: 1,
    height: 85, // Faked height for prototype purposes
    flexDirection: 'row',
  },
  dateDayContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 70,
  },
  dateDaySelection: {
    flexDirection: 'column',
    width: 4,
    borderRadius: 2,
    backgroundColor: colors.white,
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
  dateListContainer: {
    flexGrow: 1,
  },
  dateContentContainer: {
    flex: 1,
    flexGrow: 1,
  },
  sessionContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sessionColorView: {
    width: 5,
    borderRadius: 2.5,
    marginVertical: 4,
    marginHorizontal: 10,
  },
  sessionDetailsContainer: {
    justifyContent: 'center',
  },
  sessionSubjectText: {
    fontFamily: fonts.gothic,
    fontSize: 15,
    fontWeight: '500',
    color: colors.white,
  },
  sessionTimeText: {
    fontFamily: fonts.gothic,
    fontSize: 9,
    fontWeight: '500',
    color: colors.white,
  },
});
