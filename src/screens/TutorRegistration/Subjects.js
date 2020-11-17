import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {
  colors,
  fonts,
  blockText
} from '../../styles';
import {
  subjects,
  bypassChecks
} from '../../testing';
import kyze from '../../api/apiConfig';
import nextArrow from '../../../res/images/nextArrow.png';
import TitleComponent from '../../components/TitleComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';
import CheckboxComponent from '../../components/CheckboxComponent';

export default class SubjectsScreen extends React.Component {
  constructor(props) {
    super(props);

    kyze.api
      .getAllCourses()
      .then(courses => {
          let courseList = {};
          for (let i=0; i<courses.length; i++) {
            let course = courses[i];
            if (courseList[course.subject]) {
              courseList[course.subject].courses[course.title] = {
                id: course.id,
                title: course.title,
                selected: false,
              };
            }
            else {
              courseList[course.subject] = {
                title: course.subject,
                id: i,
                expanded: false,
                courses: {},
              };
              courseList[course.subject].courses[course.title] = {
                id: course.id,
                title: course.title,
                selected: false,
              };
            }
          }
          this.setState({
            subjects: courseList,
          })
      })
      .catch(error => {
        console.log("Kyze Error", error)
        Alert.alert(
          'Error',
          error.message,
          [{text: 'OK'}],
          {
            cancelable: false,
          },
        );
      });

    this.state = {
      subjects: {},
      user: this.props.route.params.user,
      type: this.props.route.params.type || '',
    };
  }

  onPressNext = () => {
    let tutoredCourses = [];
    for (let keyI in this.state.subjects) {
      let subject = this.state.subjects[keyI];
      for (let keyJ in subject.courses) {
        let course = subject.courses[keyJ];
        if (course.selected) {
          tutoredCourses.push({
            title: course.title,
            subject: subject.title,
            enabled: true,
          });
        }
      }
    }
    let newUser = this.state.user;
    newUser.subjects = tutoredCourses;
    this.props.navigation.navigate('Basic Info', {type: this.state.type, user: newUser});
  };

  openClose(key) {
    let newSubjects = this.state.subjects;
    newSubjects[key].expanded = !newSubjects[key].expanded;
    this.setState({
      subjects: newSubjects,
    });
  }

  onPressCheck(keyI, keyJ) {
    let newSubjects = this.state.subjects;
    newSubjects[keyI].courses[keyJ].selected = !newSubjects[keyI].courses[keyJ].selected;
    this.setState({
      subjects: newSubjects,
    });
  }

  renderSubject(key) {
    let subject = this.state.subjects[key];
    return (
      <View>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
          }}
          onPress={(key) => this.openClose(subject.title)}>
          <Image
            source={nextArrow}
            style={subject.expanded ? styles.arrowUp : styles.arrowDown}
          />
          <Text style={styles.subjectText}>{subject.title}</Text>
        </TouchableOpacity>
        {subject.expanded ? (
          <FlatList
            data={Object.keys(subject.courses)}
            renderItem={({item}) => this.renderCourse(item, subject)}
            listKey={item => item.id}
            scrollEnabled={false}
          />
        ) : (
          <View />
        )}
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
          alignItems: 'center',
          marginVertical: 8,
        }}>
        <CheckboxComponent
          enabled={course.selected}
          onPress={(keyI, keyJ) => this.onPressCheck(subject.title, key)}/>
        <Text style={styles.courseText}>{course.title}</Text>
      </View>
    );
  }

  render() {
    let validInputs = bypassChecks || true;
    if (this.state.subjects.length == 0) {
      return (
        <View>

        </View>
      )
    }
    return (
      <ContainerComponent>
        <TitleComponent title='Tutor Registration' />
        <Text style={styles.blockText}>
          <Text>
            Click on a subject and check ALL the courses that you would like
            to tutor{'\n\n'}
          </Text>
          <Text style={{fontWeight: 'bold'}}>Note: </Text>
          <Text>
            You must complete and successfully pass an individual assessment
            for each course you select in order to be verified to tutor that
            course (this will be discussed in more detail once your account
            has been created)
          </Text>
        </Text>
        <FlatList
          data={Object.keys(this.state.subjects)}
          renderItem={({item}) => this.renderSubject(item)}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
        <ButtonComponent
          enabled={validInputs}
          onPress={this.onPressNext}
          text='Next'
          arrow={true}/>
      </ContainerComponent>
    );
  }
}

const styles = StyleSheet.create({
  subjectText: {
    fontFamily: fonts.gothic,
    fontSize: 20,
    color: colors.black,
    marginVertical: 10,
  },
  courseText: {
    fontFamily: fonts.gothic,
    fontSize: 13,
    color: colors.black,
    marginTop: 3,
  },
  arrowDown: {
    transform: [{rotate: '90deg'}],
  },
  arrowUp: {
    transform: [{rotate: '-90deg'}],
  },
});
