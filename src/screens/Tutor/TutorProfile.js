import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import nextArrow from '../../../res/images/nextArrow.png';
import star from '../../../res/images/star.png';
import cancellation from '../../../res/images/cancellation.png';
import verified from '../../../res/images/verified.png';
import info from '../../../res/images/info.png';
import checkmark from '../../../res/images/checkmark.png';
import {colors} from '../../styles';

const user = {
  name: 'Pedram H.',
  headline: 'M.S. in Engineering form UCLA with 10+ years of tutoring experience',
  avgRating: 4.9,
  numRatings: 17,
  hours: 200,
  rate: 50,
  students: 30,
};

export default class TutorProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="handled">
          <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <View style={styles.blackBar}/>
            <View style={styles.photo}/>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.topContent}>
              <Text style={styles.name}>
                {user.name}
              </Text>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
                <Text style={[styles.reviewAvg, {marginLeft: 0}]}>
                  {user.avgRating}
                </Text>
                <View style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                }}>
                  {Array(5).fill(0).map((e, i) => {
                    return (
                      <Image key={i} source={star} sty/>
                    );
                  })}
                </View>
              </View>
              <Text style={styles.headline}>
                {user.headline}
              </Text>
              <View style={styles.statsBox}>
                <View style={styles.stat}>
                  <Text style={styles.statsHeading}>
                    Hours Tutored
                  </Text>
                  <Text style={styles.statsValue}>
                    {user.hours}
                  </Text>
                </View>
                <View style={styles.verticalDivider}/>
                <View style={styles.stat}>
                  <Text style={styles.statsHeading}>
                    Rate/hr
                  </Text>
                  <Text style={styles.statsValue}>
                    ${user.rate}
                  </Text>
                </View>
                <View style={styles.verticalDivider}/>
                <View style={styles.stat}>
                  <Text style={styles.statsHeading}>
                    Students Tutored
                  </Text>
                  <Text style={styles.statsValue}>
                    {user.students}
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <Text style={styles.heading}>
                  Reviews
                </Text>
                <Text style={styles.reviewAvg}>
                  {user.avgRating}
                </Text>
                <View style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                }}>
                  {Array(5).fill(0).map((e, i) => {
                    return (
                      <Image key={i} source={star} sty/>
                    );
                  })}
                </View>
                <Text style={styles.reviewCnt}>
                  ({user.numRatings} Ratings)
                </Text>
              </View>
              <Text style={styles.blockText}>
                Your mom is an amazing tutor. She is patient, thorough, and
                explains the material in a way that is easy to learn and
                understand. My son had a blah blah mom is an amazing tutor.
                She is patient, thorough, and explains the material in a way
                that is ...
              </Text>
              <View style={{
                flex: 1,
                flexDirection: 'row'
              }}>
                <View>
                  <Text style={styles.reviewer}>
                    Lynn from Laguna Niguel, CA
                  </Text>
                  <Text style={styles.reviewer}>
                    1/22/2020
                  </Text>
                </View>
                <TouchableOpacity style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                  <Text style={{marginLeft: 'auto', color: '#2F80ED',}}>
                    More reviews
                  </Text>
                  <Image source={nextArrow} style={{height: 25, width: 25, tintColor: '#2F80ED',}}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={styles.heading}>
                About
              </Text>
              <Text style={styles.blockText}>
                <Text>
                  Your mom is an amazing tutor. She is patient, thorough, and
                  explains the material in a way that is easy to learn and
                  understand. My son had a blah blah mom is an amazing tutor.
                  She is patient, thorough, and explains the material in a way
                  that is ...
                </Text>
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={styles.heading}>
                Education
              </Text>
              <Text style={styles.subheading}>
                Undergraduate
              </Text>
              <Text style={styles.degree}>
                B.S. Bioengineering{'\n'}
                University of California Los Angeles
              </Text>
              <Text style={styles.subheading}>
                Graduate
              </Text>
              <Text style={styles.degree}>
                M.S. Computer Science{'\n'}
                University of California Saddleback
              </Text>
              <Text style={styles.degree}>
                Ph.D Education{'\n'}
                University of California Irvine
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={styles.heading}>
                Policies
              </Text>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 3,
              }}>
                <Image source={verified} style={{marginRight: 10}}/>
                <Text>
                  Background Check
                </Text>
                <Text style={{fontWeight: 'bold', marginLeft: 'auto'}}>
                  1/15/20
                </Text>
              </View>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 3,
              }}>
                <Image source={cancellation} style={{marginRight: 10}}/>
                <Text>
                  Session Cancellation
                </Text>
                <Text style={{fontWeight: 'bold', marginLeft: 'auto'}}>
                  24 hour notice
                </Text>
                <TouchableOpacity>
                  <Image source={info} style={{marginLeft: 5}}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={styles.heading}>
                Certified Courses
              </Text>
              <Text style={styles.subheading}>
                MATH
              </Text>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                marginVertical: 7,
                marginLeft: 10,
              }}>
                <Image source={checkmark} style={{width: 15, height: 15, marginRight: 7}}/>
                <Text>
                  Algebra I ($25/hr)
                </Text>
              </View>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                marginVertical: 7,
                marginLeft: 10,
              }}>
                <Image source={checkmark} style={{width: 15, height: 15, marginRight: 7}}/>
                <Text>
                  Algebra II ($25/hr)
                </Text>
              </View>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                marginVertical: 7,
                marginLeft: 10,
              }}>
                <Image source={checkmark} style={{width: 15, height: 15, marginRight: 7}}/>
                <Text>
                  Calculus I ($30/hr)
                </Text>
              </View>
              <Text style={styles.subheading}>
                CHEMISTRY
              </Text>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                marginVertical: 7,
                marginLeft: 10,
              }}>
                <Image source={checkmark} style={{width: 15, height: 15, marginRight: 7}}/>
                <Text>
                  Organic Chemistry I ($50/hr)
                </Text>
              </View>
            </View>
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
    marginBottom: 20,
  },
  blackBar: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: colors.black,
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
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  subheading: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 5,
  },
  degree: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 12,
    color: colors.black,
    marginTop: 5,
  },
  topContent: {
    margin: 10,
  },
  name: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 22,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 5,
  },
  headline: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 13,
    color: colors.black,
    textAlign: 'center',
    marginTop: 10,
  },
  statsBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.black,
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  stat: {
    flex: 1,
    flexDirection: 'column',
    margin: 14,
  },
  statsHeading: {
    flex: 1,
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 10,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 5,
  },
  statsValue: {
    flex: 1,
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 25,
    color: colors.black,
    textAlign: 'center',
  },
  verticalDivider: {
    width: 0.5,
    borderWidth: 0.5,
    borderColor: colors.black,
    marginVertical: 15,
  },
  reviewAvg: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 16,
    color: colors.black,
    marginLeft: 'auto',
  },
  reviewCnt: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 9,
    color: colors.black,
  },
  blockText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 12,
    color: colors.black,
    marginVertical: 9,
  },
  reviewer: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 8,
    color: colors.black,
  },
});
