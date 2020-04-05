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
import {colors, fonts} from '../../styles';

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

export default class EarningsScreen extends React.Component {
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
        <View style={[styles.divider, {marginHorizontal: 20}]} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.earningsHeaderContainer}>
          <View style={styles.earningsTodayContainer}>
            <Text style={styles.earningsTodayTitleText}>Today</Text>
            <Text style={styles.earningsSessionTitleText}>
              session earnings
            </Text>
            <Text style={styles.earningsText}>$60.00</Text>
          </View>
          <View style={styles.earningsDetailsContainer}>
            <View style={styles.earningsDetailContainer}>
              <Text style={styles.earningsDetailsText}>Sessions</Text>
              <Text style={styles.earningsDetailsText}>1</Text>
            </View>
            <View style={styles.earningsDetailContainer}>
              <Text style={styles.earningsDetailsText}>Duration</Text>
              <Text style={styles.earningsDetailsText}>2 hrs</Text>
            </View>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitleText}>Balance</Text>
          <View style={styles.divider} />
          <View style={styles.balanceRow}>
            <Text style={styles.balanceText}>$100.00</Text>
            <TouchableOpacity style={styles.transferButton}>
              <Text style={styles.transferText}>Transfer</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.divider, {marginHorizontal: 20}]} />
          <TouchableOpacity style={styles.bankDetailsButton}>
            <Text style={styles.bankDetailsText}>
              Bank of America **** 1919
            </Text>
            <Image
              style={styles.nextArrow}
              source={require('../../../res/images/rightArrow.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.separator} />
        <View style={styles.earningsHistoryContainer}>
          <Text style={styles.earningsHistoryTitleText}>Earnings History</Text>
          <View style={styles.divider} />
          <View style={styles.earningsHistoryList}>
            <FlatList
              data={sessionsData}
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
    backgroundColor: colors.white,
  },
  earningsHeaderContainer: {},
  earningsTodayContainer: {
    alignItems: 'center',
  },
  earningsTodayTitleText: {
    textAlign: 'center',
    fontFamily: fonts.gothic,
    fontSize: 20,
    paddingTop: 10,
  },
  earningsSessionTitleText: {
    textAlign: 'center',
    fontFamily: fonts.gothic,
    fontSize: 15,
  },
  earningsText: {
    textAlign: 'center',
    fontFamily: fonts.gothic,
    fontSize: 45,
  },
  earningsDetailsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 50,
  },
  earningsDetailContainer: {
    flex: 1,
  },
  earningsDetailsText: {
    textAlign: 'center',
    fontFamily: fonts.gothic,
    fontSize: 15,
    paddingBottom: 4,
  },
  separator: {
    height: 10,
    backgroundColor: colors.tan,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.black,
  },
  balanceContainer: {},
  balanceTitleText: {
    fontFamily: fonts.gothic,
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 14,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  divider: {
    height: 1,
    backgroundColor: colors.black,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 20,
  },
  balanceText: {
    flex: 1,
    fontFamily: fonts.gothic,
    fontSize: 20,
  },
  transferButton: {
    backgroundColor: colors.yellowGold,
    borderRadius: 4,
    borderWidth: 1,
  },
  transferText: {
    fontFamily: fonts.gothic,
    fontSize: 12,
    fontWeight: '500',
    paddingTop: 4,
    paddingBottom: 2,
    paddingHorizontal: 8,
  },
  bankDetailsButton: {
    flexDirection: 'row',
    paddingTop: 18,
    paddingBottom: 14,
    paddingHorizontal: 20,
  },
  bankDetailsText: {
    flex: 1,
    fontFamily: fonts.gothic,
    fontSize: 14,
  },
  earningsHistoryContainer: {
    flex: 1,
  },
  earningsHistoryTitleText: {
    fontFamily: fonts.gothic,
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 14,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  earningsHistoryList: {
    flex: 1,
  },
  sessionButton: {},
  sessionContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
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
