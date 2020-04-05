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
];

export default class DashboardScreen extends React.Component {
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
          <View style={styles.calendarContainer} />
        </View>
        <View style={styles.separator} />
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
    height: 240,
  },
  separator: {
    height: 10,
    backgroundColor: colors.tan,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.black,
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
