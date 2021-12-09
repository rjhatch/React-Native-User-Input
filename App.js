import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Constants from 'expo-constants';

import Table from './components/tableDisplay/Table';
import PersonForm from './components/forms/PersonForm';

export default class App extends React.Component {
  state = {
    peopleList: [
      {
        id: 1,
        firstName: 'Richie',
        lastName: 'Hatch',
      },
      {
        id: 2,
        firstName: 'Shelly',
        lastName: 'Hatch',
      },
    ],
    peopleId: 0,
  }

  //update the people id based on the number of people in the array
  componentDidMount() {
    const { peopleList } = this.state;

    this.setState({ peopleId: peopleList.length + 1 });
  }

  //add a person to the array
  addPerson = (attrs = {}) => {
    const { peopleList, peopleId } = this.state;

    //don't create the new person if either field is blank
    if (attrs.firstName === '' || attrs.lastName === '') return;

    const newPerson = { id: peopleId, firstName: attrs.firstName || 'FIRST', lastName: attrs.lastName || 'LAST' };

    this.setState({ peopleList: [...peopleList, newPerson], peopleId: peopleId + 1 })
  };

  //update a person based on the id.
  updatePerson = (attrs = {}) => {
    const { peopleList } = this.state;

    this.setState({
      peopleList: peopleList.map(person => {
        if (person.id === attrs.id) {
          const { id, firstName, lastName } = attrs;

          return {
            id,
            firstName,
            lastName,
          };
        }

        return person;
      }),
    });
  };

  //remove a person based on the id.
  removePerson = personId => {
    this.setState({
      peopleList: this.state.peopleList.filter(p => p.id !== personId),
    });
  };

  render() {
    return (
        <View style={styles.container}>
          <Table
            title={'People'}
            buttonText={'Add Person'}
            items={this.state.peopleList}
            onCreateSubmit={this.addPerson}
            onEditSubmit={this.updatePerson}
            onRemovePress={this.removePerson}
          />
        </View>
    );
  }
}

const platformVersion =
  Platform.OS === 'ios'
    ? parseInt(Platform.Version, 10)
    : Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:
    Platform.OS === 'android' || platformVersion < 11
      ? Constants.statusBarHeight
      : 0,
  },
});
