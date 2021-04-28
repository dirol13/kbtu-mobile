import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { Constants } from 'expo'
import { saveContact } from './contacts'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
  btn: {
    marginTop: 20,
  }
})

export default class AddContactForm extends React.Component {
  state = {
    name: '',
    isFormValid: false,
    phone: ''
  }

  handleNameChange = name => {
    this.setState({ name })
  }

  handleInputChange = (text) => {
    if (/^\d+$/.test(text) || text === '') {
      this.setState({ phone: text })
    }
  }

  saveMyData = () => {
    if (this.state.name != '' && this.state.phone != null) {
      saveContact(this.state.name, this.state.phone)
      alert(this.state.name + ' ' + this.state.phone)
    } else {
      alert('Fill the fields')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.phone}
          onChangeText={this.handleInputChange}
          maxLength={12}
        />
        <View style={styles.btn}>
          <Button title="Task2" onPress={() => this.saveMyData()} />
        </View>
      </View>
    )
  }
}
