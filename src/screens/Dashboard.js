import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, fonts} from '../styles';

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
];

let rewardsAndPromoData = [
  {
    id: '0',
    text: 'Refer a friend and you both recieve $5 in session credit',
  },
];

let notificationsData = [
  {
    id: '0',
    text: 'New update: Take a tour and learn about the new features',
  },
  {
    id: '1',
    text: 'View the new tutoring resources',
  },
  {
    id: '2',
    text: 'View the new tutoring resources',
  },
  {
    id: '3',
    text: 'Session canceled',
  },
  {
    id: '4',
    text: 'New feature!',
  },
];

export default class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.route.params.type || '',
      today: 23,
    };
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

  renderItem(item) {
    return (
      <TouchableOpacity style={styles.notificationButton}>
        <View style={styles.notificationContainer}>
          <View style={styles.notificationIcon} />
          <Text style={styles.notificationText}>{item.text}</Text>
        </View>
        <View style={[styles.divider, {marginHorizontal: 20}]} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.sessionsContainer}>
          <View style={styles.sessionsTitleContainer}>
            <Text style={styles.categoryTitleText}>Upcoming Sessions</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.calendarContainer}>
            <FlatList
              data={dates}
              renderItem={({item}) => this.renderDay(item)}
              keyExtractor={item => item.id}
              scrollEnabled={false}
            />
          </View>
        </View>
        <View style={styles.separator} />
        {this.state.type === 'Student' ? (
          <View style={styles.findTutorContainer}>
            <TouchableOpacity style={styles.findTutorButton}>
              <Text style={styles.findTutorText}>FIND A TUTOR</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.rewardsAndPromosContainer}>
            <View style={styles.rewardsAndPromosTitleContainer}>
              <Text style={styles.categoryTitleText}>Rewards & Promos</Text>
              <TouchableOpacity style={styles.viewAllButton}>
                <Text style={styles.viewAllText}>View all</Text>
                <Image
                  style={styles.nextArrow}
                  source={require('../../res/images/rightArrow.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />
            <TouchableOpacity style={styles.notificationContainer}>
              <View style={styles.notificationIcon} />
              <Text style={styles.notificationText}>
                {rewardsAndPromoData[0].text}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.separator} />
        <View style={styles.notificationsContainer}>
          <View style={styles.notificationsTitleContainer}>
            <Text style={styles.categoryTitleText}>Notifications</Text>
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View all</Text>
              <Image
                style={styles.nextArrow}
                source={require('../../res/images/rightArrow.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.divider} />
          <View style={styles.notificationsList}>
            <FlatList
              data={notificationsData}
              renderItem={({item}) => this.renderItem(item)}
              keyExtractor={item => item.id}
            />
          </View>
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
  sessionsContainer: {},
  sessionsTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  categoryTitleText: {
    flex: 1,
    fontFamily: fonts.gothic,
    fontSize: 18,
    fontWeight: '600',
  },
  calendarContainer: {
    flexGrow: 1,
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
  separator: {
    height: 10,
    backgroundColor: colors.tan,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.black,
  },
  findTutorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  findTutorButton: {
    borderRadius: 10,
    backgroundColor: colors.yellowGold,
    marginVertical: 24,
  },
  findTutorText: {
    textAlign: 'center',
    fontFamily: fonts.gothic,
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 32,
  },
  rewardsAndPromosContainer: {},
  rewardsAndPromosTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: colors.black,
  },
  notificationsContainer: {
    flex: 1,
  },
  notificationsList: {
    flex: 1,
  },
  notificationButton: {},
  notificationContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  notificationsTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  notificationIcon: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: colors.lightGray,
  },
  notificationText: {
    fontFamily: fonts.gothic,
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 12,
  },
  viewAllButton: {
    flexDirection: 'row',
  },
  viewAllText: {
    fontFamily: fonts.gothic,
    fontSize: 16,
  },
  nextArrow: {
    marginLeft: 10,
  },
});
