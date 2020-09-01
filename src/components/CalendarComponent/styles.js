import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../styles';

export default StyleSheet.create({
  calendarContainer: {
    flexGrow: 1,
  },
  dateRowContainer: {
    flex: 1,
    //height: 85, // Faked height for prototype purposes
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
    justifyContent: 'center',
  },
  sessionContainer: {
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
