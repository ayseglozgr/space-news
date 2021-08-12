import React, { useEffect, useState } from 'react'
import { Pressable, TextInput, View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = () => {
  const [usernameInput, setUsernameInput] = useState('')

  const handleTextInputChange = (text) => {
    // console.log(text)
    setUsernameInput(text)
  }
  const handleUpdateButtonPress = async () => {
    const res = await fetch(`https://api.github.com/users/${usernameInput}`)
    const obj = await res.json()

    if (obj.message === "Not Found") {
      alert('No such user.')
      return
    }
    try {
      await AsyncStorage.setItem('@username', obj.login)
      console.log(obj.login)
      alert('User found and saved successfuly')
    } catch (e) {
      console.log('There was a problem when storing username', e)
    }
  }
  useEffect(() => {
    AsyncStorage.getItem('@username')
      .then(username => {
        console.log(username)
        setUsernameInput(username)
      })
  }, [])
  return (
    <View style={{
      flex: 1,
      padding: 20
    }}>
      <TextInput
        value={usernameInput}
        onChangeText={(text) => handleTextInputChange(text)}
        style={{
          backgroundColor: '#ffffff',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#cccccc',
          paddingLeft: 20,
          fontSize: 18,
          alignItems:'center',
          justifyContent:'center',
        }}
      />
      <Pressable
        onPress={() => handleUpdateButtonPress()}
        style={{
          backgroundColor: '#00ff00',
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#cccccc',
        }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>Update</Text>
      </Pressable>
    </View>
  )
}

export default App