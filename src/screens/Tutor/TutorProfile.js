import React from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import kyze from '../../api/apiConfig';
import nextArrow from '../../../res/images/nextArrow.png';
import star from '../../../res/images/star.png';
import cancellation from '../../../res/images/cancellation.png';
import verified from '../../../res/images/verified.png';
import info from '../../../res/images/info.png';
import checkmark from '../../../res/images/checkmark.png';
import pedram from '../../../res/images/pedram.png';
import {
  colors,
  fonts,
  blockText,
} from '../../styles';


const user = {
  name: 'Pedram H.',
  headline:
    'M.S. in Engineering form UCLA with 10+ years of tutoring experience',
  avgRating: 4.9,
  numRatings: 17,
  hours: 200,
  rate: 50,
  students: 30,
};

export default class TutorProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.loadUser();
  }

  loadUser = () => {
    kyze.api
      .getTutorByEmail("tutor@kyze.com")
      .then(user => {
        console.log(user);

        let courseList = {};
        for (let i=0; i<user.subjects.length; i++) {
          let course = user.subjects[i];
          if (courseList[course.subject]) {
            courseList[course.subject].courses[course.title] = course;
          }
          else {
            courseList[course.subject] = {
              title: course.subject,
              id: i,
              courses: {},
            };
            courseList[course.subject].courses[course.title] = course;
          }
        }
        console.log(courseList);

        this.setState({
          user: user,
          subjects: courseList,
        });
      })
      .catch(error => {
        console.log("Kyze Error", error);
        this.setState({isLoggingIn: false});
        Alert.alert(
          'Error',
          error.message,
          [{text: 'OK'}],
          {
            cancelable: false,
          },
        );
      });
  }

  renderEducation(education) {
    return (
      <View>
        <Text style={styles.subheading}>DEGREE</Text>
        <Text style={styles.degree}>
          {education.degree}{'\n'}
          {education.college}
        </Text>
      </View>
    );
  }

  renderSubject(key) {
    let subject = this.state.subjects[key];
    return (
      <View>
        <Text style={styles.subheading}>{subject.title}</Text>
        <FlatList
          data={Object.keys(subject.courses)}
          renderItem={({item}) => this.renderCourse(item, subject)}
          listKey={item => item.id}
          scrollEnabled={false}
        />
      </View>
    );
  }

  renderCourse(key, subject) {
    let course = subject.courses[key];
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginVertical: 7,
          marginLeft: 10,
        }}>
        <Image
          source={checkmark}
          style={{width: 15, height: 15, marginRight: 7}}
        />
        <Text>{course.title}</Text>
        <Text style={{marginLeft:'auto'}}>($NA/hr)</Text>
      </View>
    );
  }

  render() {
    if (!this.state.user) {
      return (
        <View></View>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.topContent}>
            <Image style={styles.photo} source={pedram} />
            <Text style={styles.name}>
              {this.state.user.firstName + " " + this.state.user.lastName[0] + "."}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <Text style={[styles.reviewAvg, {marginLeft: 0}]}>
                {user.avgRating}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: 10,
                }}>
                {Array(5)
                  .fill(0)
                  .map((e, i) => {
                    return <Image key={i} source={star} sty />;
                  })}
              </View>
            </View>
            <Text style={styles.headline}>{this.state.user.profileHeadline || 'UNDEFINED'}</Text>
            <View style={styles.statsBox}>
              <View style={styles.stat}>
                <Text style={styles.statsValue}>{this.state.user.hours || 'NA'}</Text>
                <Text style={styles.statsHeading}>Hours Tutored</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statsValue}>${this.state.user.rate || 'NA'}</Text>
                <Text style={styles.statsHeading}>Rate/hr</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statsValue}>{this.state.user.students || 'NA'}</Text>
                <Text style={styles.statsHeading}>Students Tutored</Text>
              </View>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <View>
              <Text style={styles.heading}>About</Text>
              <Text style={styles.blockText}>
                <Text>
                  {this.state.user.profileBio || 'UNDEFINED'}
                </Text>
              </Text>
            </View>
            <View style={{marginTop: 40}}>
              <Text style={styles.heading}>Education</Text>
              <FlatList
                data={this.state.user.education}
                renderItem={({item}) => this.renderEducation(item)}
                keyExtractor={item => item.id}
                scrollEnabled={false}
              />
            </View>
            <View style={{marginTop: 40}}>
              <Text style={styles.heading}>Policies</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 3,
                }}>
                <Image source={verified} style={{marginRight: 10}} />
                <Text>Background Check</Text>
                <Text style={{fontWeight: 'bold', marginLeft: 'auto'}}>
                  NA
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 3,
                }}>
                <Image source={cancellation} style={{marginRight: 10}} />
                <Text>Session Cancellation</Text>
                <Text style={{fontWeight: 'bold', marginLeft: 'auto'}}>
                  NA
                </Text>
                <TouchableOpacity>
                  <Image source={info} style={{marginLeft: 5}} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 40}}>
              <Text style={styles.heading}>Certified Courses</Text>
              <FlatList
                data={Object.keys(this.state.subjects)}
                renderItem={({item}) => this.renderSubject(item)}
                keyExtractor={item => item.id}
                scrollEnabled={false}
              />
            </View>
            <View style={{marginTop: 40}}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 10,
                }}>
                <Text style={styles.heading}>Ratings & Reviews</Text>
                <Text style={{marginLeft: 'auto', color: '#2F80ED'}}>
                  View All
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 2,
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: fonts.gothic,
                      fontSize: 40,
                      color: colors.black,
                      marginTop: 5,
                    }}>
                    {user.avgRating}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: 10,
                    }}>
                    {Array(5)
                      .fill(0)
                      .map((e, i) => {
                        return <Image key={i} source={star} sty />;
                      })}
                  </View>
                  <Text style={styles.reviewCnt}>
                    {user.numRatings} Ratings
                  </Text>
                </View>
                <View
                  style={{
                    flex: 3,
                    flexDirection: 'column',
                  }}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text>
                      Communication
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 'auto'}}>
                      <Text>
                        4.1
                      </Text>
                      <Image source={star} style={{width: 10, height: 10, tintColor: colors.black}}/>
                    </View>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text>
                      Prepared
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 'auto'}}>
                      <Text>
                        4.2
                      </Text>
                      <Image source={star} style={{width: 10, height: 10, tintColor: colors.black}}/>
                    </View>
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text>
                      Friendly
                    </Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 'auto'}}>
                      <Text>
                        4.4
                      </Text>
                      <Image source={star} style={{width: 10, height: 10, tintColor: colors.black}}/>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.dividerLine} />
              <View style={{flex: 1, flexDirection: 'row'}}>
                <Text>
                  Fantastic Algebra Tutor
                </Text>
                <Text style={{marginLeft: 'auto', fontSize: 8}}>
                  Sep. 29
                </Text>
              </View>
              <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  {Array(5)
                    .fill(0)
                    .map((e, i) => {
                      return <Image key={i} source={star} sty />;
                    })}
                </View>
                <Text style={{marginLeft: 'auto', fontSize: 8}}>
                  Michael Smith
                </Text>
              </View>
              <Text style={styles.blockText}>
                Your mom is an amazing tutor. She is patient, thorough, and
                explains the material in a way that is easy to learn and
                understand. My son had a blah blah mom is an amazing tutor. She
                is patient, thorough, and explains the material in a way that is
                ...
              </Text>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text style={{marginLeft: 'auto', color: '#2F80ED'}}>
                  more
                </Text>
              </TouchableOpacity>
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
  },
  contentContainer: {
    justifyContent: 'center',
    marginHorizontal: 40,
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    backgroundColor: colors.lightGray,
    height: 1,
    marginVertical: 10,
  },
  photo: {
    flex: 1,
    width: 100,
    height: 100,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: colors.darkGray,
    backgroundColor: colors.white,
  },
  heading: {
    fontFamily: fonts.gothic,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  subheading: {
    fontFamily: fonts.gothic,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 5,
  },
  degree: {
    fontFamily: fonts.gothic,
    fontSize: 12,
    color: colors.black,
    marginTop: 5,
  },
  topContent: {
    width: '100%',
    marginTop: -500,
    marginBottom: 20,
    paddingTop: 520,
    paddingHorizontal: 40,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.darkGray,
  },
  name: {
    fontFamily: fonts.gothic,
    fontSize: 22,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 5,
  },
  headline: {
    fontFamily: fonts.gothic,
    fontSize: 13,
    color: colors.white,
    textAlign: 'center',
    marginTop: 10,
  },
  statsBox: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  stat: {
    flex: 1,
    flexDirection: 'column',
    margin: 14,
  },
  statsHeading: {
    flex: 1,
    fontFamily: fonts.gothic,
    fontSize: 10,
    color: colors.white,
    textAlign: 'center',
    marginBottom: 5,
  },
  statsValue: {
    flex: 1,
    fontFamily: fonts.gothic,
    fontSize: 25,
    color: colors.white,
    textAlign: 'center',
  },
  reviewAvg: {
    fontFamily: fonts.gothic,
    fontSize: 16,
    color: colors.white,
    marginLeft: 'auto',
  },
  reviewCnt: {
    fontFamily: fonts.gothic,
    fontSize: 9,
    color: colors.black,
  },
  reviewer: {
    fontFamily: fonts.gothic,
    fontSize: 8,
    color: colors.black,
  },
});
