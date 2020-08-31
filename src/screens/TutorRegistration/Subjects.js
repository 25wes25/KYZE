import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../styles';
import nextArrow from '../../../res/images/nextArrow.png';
import TitleComponent from '../../components/TitleComponent';
import ButtonComponent from '../../components/ButtonComponent';
import ContainerComponent from '../../components/ContainerComponent';
import CheckboxComponent from '../../components/CheckboxComponent';

export default class SubjectsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [
        {
          title: 'Math',
          expanded: false,
          courses: [
            {title: 'Below Algebra I', selected: false},
            {title: 'Algebra I', selected: false},
            {title: 'Geometry', selected: false},
            {title: 'Algebra II', selected: false},
            {title: 'ACT & SAT Math', selected: false},
            {title: 'Statistics', selected: false},
          ],
        },
        {
          title: 'Chemistry',
          expanded: false,
          courses: [
            {title: 'Below General Chemistry', selected: false},
            {title: 'General Chemistry I', selected: false},
            {title: 'General Chrmistry II', selected: false},
            {title: 'Organic Chemistry I', selected: false},
            {title: 'Organic Chemistry II', selected: false},
            {title: 'Above Organic Chemistry', selected: false},
          ],
        },
        {
          title: 'English',
          expanded: false,
          courses: [
            {title: 'Below High School Level Writing', selected: false},
            {title: 'High School Level Writing', selected: false},
            {title: 'ACT & SAT Writing', selected: false},
            {title: 'ACT & SAT Reading Comprehension', selected: false},
            {title: 'College/University Level Writing', selected: false},
            {title: 'Above College/University Level Writing', selected: false},
          ],
        },
      ],
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
        {this.state.subjects.map((subject, i) => {
          return (
            <View key={i}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}
                onPress={index => this.openClose(i)}>
                <Image
                  source={nextArrow}
                  style={subject.expanded ? styles.arrowUp : styles.arrowDown}
                />
                <Text style={styles.subjectText}>{subject.title}</Text>
              </TouchableOpacity>
              {subject.expanded ? (
                subject.courses.map((course, j) => {
                  return (
                    <View
                      key={j}
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 8,
                      }}>
                      <CheckboxComponent
                        enabled={course.selected}
                        onPress={(indexI, indexJ) => this.onPressCheck(i, j)}/>
                      <Text style={styles.courseText}>{course.title}</Text>
                    </View>
                  );
                })
              ) : (
                <View />
              )}
            </View>
          );
        })}
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
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    color: colors.black,
    marginTop: 9,
  },
  subjectText: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 20,
    color: colors.black,
    marginVertical: 10,
  },
  courseText: {
    fontFamily: 'Apple SD Gothic Neo',
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
