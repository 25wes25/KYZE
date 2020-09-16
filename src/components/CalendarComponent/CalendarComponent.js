import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Content,
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
      viewHeight: 100,
    };
  }

  renderDay(item) {
    return (
      <TouchableOpacity style={[
        styles.dateRowContainer,
        {
          height: this.state.viewHeight/this.props.days,
        }
      ]}>
        <View style={styles.dateDayContainer}>
          <View style={styles.dateDayPair}>
            <Text style={styles.dateWeekdayText}>{item.weekday}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>
          <View
            style={[
              styles.dateDaySelection,
              item.date === (new Date()).getDate() && {backgroundColor: colors.black},
            ]}
          />
        </View>
        <View
          style={[
            styles.dateContentContainer,
            item.day % 2 === 1
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
      <View style={[
        styles.sessionContainer,
        {
          height: (100/this.props.maxSessionsPerDay).toString()+'%',
        }
      ]}>
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

  measureViewHeight(event) {
    this.setState({
      viewHeight: event.nativeEvent.layout.height
    });
  }

  render() {
    let dates = [];
    let weekOffset = 0;
    if (this.props.days == 7) {
      weekOffset = (new Date()).getDay();
    }
    for (let i=0; i<this.props.days; i++) {
      let d = new Date();
      d.setDate(d.getDate() + i - weekOffset);
      dates.push({
        id: i.toString(),
        weekday: dow[d.getDay()],
        date: d.getDate(),
        day: d.getDay(),
        sessions: this.props.sessions[d.getDate()] ? (
          this.props.sessions[d.getDate()].slice(0, this.props.maxSessionsPerDay)
        ) : (
          []
        ),
      });
    }

    return (
      <View
        style={styles.calendarContainer}
        onLayout={(event) => this.measureViewHeight(event)}>
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

CalendarComponent.propTypes = {
  sessions: PropTypes.objects,
  days: PropTypes.number,
  maxSessionsPerDay: PropTypes.number,
};

CalendarComponent.defaultProps = {
  sessions: {},
  days: 3,
  maxSessionsPerDay: 2,
};

export default CalendarComponent;
