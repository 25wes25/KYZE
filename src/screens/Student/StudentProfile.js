import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../styles';

const user = {
  name: 'Pedram H.',
};

const shortcuts = [
  "Home",
  "Favorite Starbucks",
  "Santa Monica Library",
];

export default class StudentProfileScreen extends React.Component {
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
            </View>
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.contentContainer}>
            <Text style={styles.heading}>
              Shortcuts
            </Text>
            {shortcuts.map((e, i) => {
                return (
                  <View key={i}>
                    <View style={styles.dividerLine}/>
                    <TouchableOpacity>
                      <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 10,
                      }}>
                        <View style={styles.icon}/>
                        <Text style={styles.heading}>
                          {e}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })
            }
          </View>
          <View style={styles.dividerLine}/>
          <View style={styles.dividerLine}/>
          <View style={styles.contentContainer}>
            <Text style={styles.heading}>
              Session History
            </Text>
            {shortcuts.map((e, i) => {
                return (
                  <View key={i}>
                    <View style={styles.dividerLine}/>
                    <TouchableOpacity>
                      <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginVertical: 10,
                      }}>
                        <View style={styles.icon}/>
                        <Text style={styles.heading}>
                          {e}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })
            }
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
  },
  dividerLine: {
    flex: 1,
    backgroundColor: colors.black,
    height: 1,
    marginVertical: 10,
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
    color: colors.black,
  },
  subheading: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 5,
  },
  icon: {
    height: 40,
    width: 40,
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: colors.lightGray,
    marginRight: 20,
  },
  name: {
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 22,
    color: colors.black,
    textAlign: 'center',
    marginBottom: 5,
  },
});
