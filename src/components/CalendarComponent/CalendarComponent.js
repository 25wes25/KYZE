import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import styles from './styles';
import {colors} from '../../styles';

const dow = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
]

class CalendarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: 23,
    };
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

  render() {
    let dates = [];
    for (let i=0; i<this.props.days; i++) {
      let d = new Date();
      d.setDate(d.getDate() + i);
      dates.push({
        id: i.toString(),
        weekday: dow[d.getDay()],
        date: d.getDate(),
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
      });
    }

    return (
      <View style={styles.calendarContainer}>
        <FlatList
          data={dates}
          renderItem={({item}) => this.renderDay(item)}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      </View>
    );
  }
}

export default CalendarComponent;
