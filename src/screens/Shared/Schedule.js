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
import {sessions} from '../../testing';
import CalendarComponent from '../../components/CalendarComponent';

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
        <CalendarComponent
          sessions={sessions}
          days={
            this.state.selection === '3 Day' ? (
              3
            ) : (
              this.state.selection === 'Week' ? (
                7
              ) : (
                //Month
                null
              )
            )
          }
          maxSessionsPerDay={
            this.state.selection === '3 Day' ? (
              4
            ) : (
              this.state.selection === 'Week' ? (
                2
              ) : (
                //Month
                null
              )
            )
          }/>
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
