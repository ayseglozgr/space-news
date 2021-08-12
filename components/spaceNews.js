
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, View, Text, Pressable } from 'react-native'


const Article = (props) => {
    const handlePress = (data) => {
        console.log(data.url)
        props.navigation.navigate('Detail', { url: data.url })
    }
    return (
        <Pressable
            onPress={() => handlePress(props.data)}
            style={{
                backgroundColor: '#202020',
                borderRadius: 10,
                padding: 10,
                marginTop: 10,

            }}>

            <Image
                width={500}
                height={200}

                style={{
                    width: "100%",
                    height: 300,
                    padding: 55,
                    borderRadius: 20,
                }}
                source={{ uri: props.data.imageUrl, width: 100, height: 100 }}
            />

            <Text style={{
                padding: 10,
                paddingBottom: 0,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
            }}>
                {props.data.title}
            </Text>
            <Text style={{
                padding: 10,
                color: 'white',
                fontStyle: 'italic',
                fontSize: 12,
            }}>
                {props.data.summary}
            </Text>
            <View style={{ flex: 1 }}>

            </View>
        </Pressable>

    )


}

const SpaceNews = (props) => {

    const [news, setNews] = useState([])
    useEffect(() => {

        fetch('https://api.spaceflightnewsapi.net/v3/articles')
            .then(res => res.json())
            .then(data => {

                setNews(data)
            })
    }, [])

    return (

        <ScrollView style={{
            flex: 1,
            padding: 5,

        }}>
            {
                news.map(e => {
                    return (
                        <Article data={e} key={e.id} navigation={props.navigation} />

                    )
                })

            }
        </ScrollView>

    )
}
export default SpaceNews


  
