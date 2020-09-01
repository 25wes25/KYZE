import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import {colors, fonts} from '../../styles';
import {subjects} from '../../testing';
import nextArrow from '../../../res/images/nextArrow.png';
import TitleComponent from '../../components/TitleComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';
import CheckboxComponent from '../../components/CheckboxComponent';

export default class SubjectsScreen extends React.Component {
  constructor(props) {
    super(props);
    let subjectList = [];
    for (let i=0; i<subjects.length; i++) {
      let subject = subjects[i];
      let courseList = [];
      for (let j=0; j<subject.courses.length; j++) {
        let course = subject.courses[j];
        courseList.push({
          id: j,
          title: course,
          selected: false,
        });
      }
      subjectList.push({
        id: i,
        title: subject.name,
        expanded: false,
        courses: courseList,
      });
    }

    this.state = {
      subjects: subjectList
    };
  }

  onPressNext = () => {
    this.props.navigation.navigate('Basic Info');
  };

  openClose(index) {
    let newSubjects = this.state.subjects;
    newSubjects[index].expanded = !newSubjects[index].expanded;
    this.setState({
      subjects: newSubjects,
    });
  }

  onPressCheck(indexI, indexJ) {
    let newSubjects = this.state.subjects;
    newSubjects[indexI].courses[indexJ].selected = !newSubjects[indexI].courses[
      indexJ
    ].selected;
    this.setState({
      subjects: newSubjects,
    });
  }

  renderSubject(subject) {
    return (
      <View>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
          }}
          onPress={index => this.openClose(subject.id)}>
          <Image
            source={nextArrow}
            style={subject.expanded ? styles.arrowUp : styles.arrowDown}
          />
          <Text style={styles.subjectText}>{subject.title}</Text>
        </TouchableOpacity>
        {subject.expanded ? (
          <FlatList
            data={subject.courses}
            renderItem={({item}) => this.renderCourse(item, subject)}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        ) : (
          <View />
        )}
      </View>
    );
  }

  renderCourse(course, subject) {
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
          onPress={(indexI, indexJ) => this.onPressCheck(subject.id, course.id)}/>
        <Text style={styles.courseText}>{course.title}</Text>
      </View>
    );
  }

  render() {
    let validInputs = true;
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
          data={this.state.subjects}
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
  blockText: {
    fontFamily: fonts.gothic,
    fontSize: 14,
    color: colors.black,
    marginTop: 9,
  },
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
