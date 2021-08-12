
import { Text, View, ScrollView, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native';


const Profile = (props) => {
  const [userData, setUserData] = useState({})
  const [repoData, setRepoData] = useState([])

  useEffect(() => {
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem('@username')
        .then(username => {
          fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => {
              setUserData(data)
              // console.log(data.login)

              fetch(data.repos_url)
                .then(repos => repos.json())
                .then(data2 => {
                  setRepoData(data2)
                  console.log(data2.id)
                })
            })
        })

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );
  return (
    <ScrollView style={{
      backgroundColor: '#E2E1E6'
    }}>
      <View style={{ backgroundColor: 'white', flexDirection: 'row', paddingLeft: '75%', paddingTop: 10 }}>

        <Image source={require('../Assets/shareIcon.png')}
          style={{ marginRight: 20, width: 30, height: 30, borderRadius: 100 }} />

        <Image source={require('../Assets/settingsIcon.png')}
          style={{ width: 30, height: 30, borderRadius: 100 }} />

      </View>
      <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
        <Image source={{ uri: userData.avatar_url }}
          style={{ marginTop: 30, marginLeft: 15, width: 70, height: 70, borderRadius: 100 }} />
        <View style={{ paddingLeft: 10, paddingBottom: 5 }}>
          <Text style={{ paddingLeft: 10, color: '#000000', fontSize: 25, marginTop: 35, fontWeight: 'bold' }}>
            {userData.name}
          </Text>
          <Text style={{ paddingLeft: 10, paddingTop: 5, fontSize: 17 }}>
            {userData.login}
          </Text>
        </View>
      </View>

      <View style={{ backgroundColor: 'white', paddingLeft: 25, paddingTop: 10 }}>
        <Text style={{ fontSize: 17, color: 'black' }}>
          {userData.bio}
        </Text>
      </View>

      <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>
        <Image

          source={require('../Assets/locationIcon.png')}
          style={{ margin: 10, marginLeft: 20, width: 20, height: 20, }} />
        <Text style={{ paddingTop: 10, color: 'black', fontSize: 17 }}>
          {userData.location}
        </Text>
      </View>
      <View style={{ backgroundColor: 'white', flexDirection: 'row', }}>
        <Image source={require('../Assets/userIcon.png')}
          style={{ margin: 10, marginLeft: 20, marginTop: 11, width: 20, height: 20 }} />
        <Text style={{ paddingTop: 10, color: 'black', fontSize: 17 }}>
          {userData.followers} followers • {userData.following} following
        </Text>
      </View>
      <View style={{ backgroundColor: 'white', flexDirection: 'row', marginTop: 15 }}>
        <Image source={require('../Assets/starIcon.png')}
          style={{ marginLeft: 10, marginLeft: 20, marginTop: 11, width: 20, height: 20, }} />
        <Text style={{ fontWeight: 'bold', marginLeft: 10, marginLeft: 10, marginTop: 10, fontSize: 17 }}>
          Popular
        </Text>
      </View>
      <ScrollView horizontal={true}
        style={{ backgroundColor: 'white', alignContent: 'center', flexDirection: 'row', paddingBottom: 10 }}>
        {repoData.map((repo, index) => {
          return (
            <View key={repo.id} style={{ borderWidth: 1, borderColor: '#E2E1E1', marginTop: 10, marginBottom: 10, marginLeft: 8, marginRight: 8, borderRadius: 7, paddingRight: 120, borderRadius: 10 }}>
              <View style={{ flexDirection: 'row', margin: 10 }}>
                <Image source={{ uri: userData.avatar_url }}
                  style={{ width: 15, height: 15, borderRadius: 100, margin: 3 }} />
                <Text style={{ fontSize: 16 }}>
                  {userData.login}
                </Text>
              </View>
              <View>
                <Text style={{ marginLeft: 15, fontWeight: 'bold', fontSize: 17 }}>
                  {repo.name}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 60 }}>
                <Image source={require('../Assets/starIcon1.png')}
                  style={{ width: 15, height: 15, borderRadius: 100, margin: 3, marginLeft: 10 }} />
                <Text>
                  1
                </Text>
                <View style={{ backgroundColor: '#FF6190', height: 10, width: 10, borderRadius: 100, marginTop: 5, marginRight: 5, marginLeft: 5 }}>

                </View>
                <Text>
                  {repo.language}
                </Text>
              </View>
            </View>
          )
        })}

      </ScrollView>

      <View
        style={{ backgroundColor: 'white', flexDirection: 'row', borderTopWidth: 1, borderTopColor: '#E2E1E1', paddingBottom: 5 }}>
        <View style={{ width: 28, height: 28, margin: 10, marginLeft: 20, backgroundColor: '#434343', borderRadius: 4 }}>
          <Image source={require('../Assets/repositoryIcon.png')}
            style={{ width: 17, height: 17, alignSelf: 'center', marginTop: 6 }} />
        </View>
        <Text style={{ paddingTop: 12, fontSize: 17 }}>
          Repositories
        </Text>
        <Text style={{ paddingTop: 12, fontSize: 17, position:'absolute',right:20 }}>
          {userData.public_repos}
        </Text>
      </View>
      <View
        style={{ backgroundColor: 'white', flexDirection: 'row', paddingBottom: 5 }}>
        <View style={{ width: 28, height: 28, margin: 10, marginLeft: 20, backgroundColor: '#FF8324', borderRadius: 4 }}>
          <Image source={require('../Assets/organizationIcon.png')}
            style={{ width: 17, height: 17, alignSelf: 'center', marginTop: 6 }} />
        </View>
        <Text style={{ paddingTop: 12, fontSize: 17 }}>
          Organizations
        </Text>
        <Text style={{ paddingTop: 12, fontSize: 17, position:'absolute',right:20 }}>
          0
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white', flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#BDBDBD'
        }}>
        <View style={{ width: 28, height: 28, margin: 10, marginLeft: 20, backgroundColor: '#FFD424', borderRadius: 4 }}>
          <Image source={require('../Assets/whiteStarIcon.png')}
            style={{ width: 17, height: 17, alignSelf: 'center', marginTop: 6 }} />
        </View>
        <Text style={{ paddingTop: 12, fontSize: 17 }}>
          Starred
        </Text>
        <Text style={{ paddingTop: 12, fontSize: 17, position:'absolute',right:20 }}>
          3
        </Text>
      </View>
    </ScrollView>
  )
}
export default Profile