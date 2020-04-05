import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import nextArrow from '../../../res/images/nextArrow.png';
import star from '../../../res/images/starSmall.png';
import {colors} from '../../styles';

const DATA = [
  {
    id: 0
  },
  {
    id: 1,
    name: "Deanna E.",
    avgRating: 4.9,
    headline: "M.S. in Engineering from UCLA with 10+ years of tutoring experience",
    hours: "200+",
    rate: 60,
  },
  {
    id: 2,
    name: "Deanna E.",
    avgRating: 4.9,
    headline: "M.S. in Engineering from UCLA with 10+ years of tutoring experience",
    hours: "200+",
    rate: 60,
  },
  {
    id: 3,
    name: "Deanna E.",
    avgRating: 4.9,
    headline: "M.S. in Engineering from UCLA with 10+ years of tutoring experience",
    hours: "200+",
    rate: 60,
  },
  {
    id: 4,
    name: "Deanna E.",
    avgRating: 4.9,
    headline: "M.S. in Engineering from UCLA with 10+ years of tutoring experience",
    hours: "200+",
    rate: 60,
  },
  {
    id: 5,
    name: "Deanna E.",
    avgRating: 4.9,
    headline: "M.S. in Engineering from UCLA with 10+ years of tutoring experience",
    hours: "200+",
    rate: 60,
  },
];

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: false,
      course: '',
      location: '',
      date: '',
    };
  }

  onChangeCourse(course) {
    this.setState({
      course: course,
    });
  }

  onChangeLocation(location) {
    this.setState({
      location: location,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onPressSearch() {
    this.setState({
      searched: true,
    });
  }

  render() {
    let validInputs =
      this.state.course.length > 0 &&
      this.state.location.length > 0 &&
      this.state.date.length > 0;

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              {
                (item.id==0) ? (
                  <View key={item.id}>
                    <TextInput
                      style={styles.input}
                      placeholder="Search course or subject"
                      placeholderTextColor={colors.opaqueBlack}
                      onChangeText={course => this.onChangeCourse(course)}
                      value={this.state.course}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Set meeting location"
                      placeholderTextColor={colors.opaqueBlack}
                      onChangeText={location => this.onChangeLocation(location)}
                      value={this.state.location}
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Set date, time, and duration"
                      placeholderTextColor={colors.opaqueBlack}
                      onChangeText={date => this.onChangeDate(date)}
                      value={this.state.date}
                    />
                    <TouchableOpacity
                      style={[
                        styles.loginButtonContainer,
                        validInputs && {backgroundColor: colors.mintGreen},
                      ]}
                      disabled={!validInputs}
                      onPress={() => this.onPressSearch()}>
                      <Text style={styles.loginButtonText}>Search</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View key={item.id}>
                    {
                      this.state.searched ? (
                        <View>
                          <View style={styles.dividerLine}/>
                          <TouchableOpacity style={{flexDirection: "row"}}>
                            <View style={styles.icon}/>
                            <View style={{marginLeft: 10, flex: 3}}>
                              <View style={{flexDirection: "column"}}>
                                <Text style={styles.messageName}>{item.name}</Text>
                                <View style={{
                                  flex: 1,
                                  flexDirection: 'row',
                                }}>
                                  <Text style={[styles.reviewAvg, {marginLeft: 0}]}>
                                    {item.avgRating}
                                  </Text>
                                  <View style={{
                                    flexDirection: 'row',
                                    marginHorizontal: 10,
                                  }}>
                                    {Array(5).fill(0).map((e, i) => {
                                      return (
                                        <Image key={10000+i} source={star}/>
                                      );
                                    })}
                                  </View>
                                </View>
                                <Text style={styles.messagePreview}>{item.headline}</Text>
                              </View>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                              <Text style={{marginLeft: 'auto'}}>
                                {'$'+item.rate+'/hr'}
                              </Text>
                              <Image source={nextArrow}/>
                            </View>
                          </TouchableOpacity>
                        </View>
                      ) : (
                        <View/>
                      )
                    }
                  </View>
                )
              }
            </View>
          )}
        />
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
  itemContainer: {
    marginHorizontal: 30,
  },
  dividerLine: {
    flex: 1,
    backgroundColor: colors.black,
    height: 1,
    marginVertical: 10,
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.lightGray,
  },
  messageName: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  messagePreview: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 12,
    color: colors.black,
  },
  input: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 18,
    lineHeight: 22,
    color: colors.black,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 15,
  },
  loginButtonContainer: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.lightGray,
    marginVertical: 20,
    marginHorizontal: 50,
  },
  loginButtonText: {
    fontFamily: 'Apple SD Gothic Neo',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,
    fontSize: 16,
    color: colors.black,
    overflow: 'hidden',
  },
});
