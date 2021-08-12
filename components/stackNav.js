import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SpaceNews from './spaceNews';
import newsDetail from './newsDetail';


const Stack = createStackNavigator();
 
export default function stackNav(){
    return (

    <Stack.Navigator>
        <Stack.Screen name= "Home" component ={SpaceNews}/>
        <Stack.Screen name = "Detail" component = {newsDetail}/>
    </Stack.Navigator>

    )
}
