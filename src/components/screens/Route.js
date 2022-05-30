import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from "./HomeStack"
import Conta from "./Conta";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Route = ()=>{

    return(
        <NavigationContainer initialRoutename="Home">
            <Tab.Navigator
                screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = "home-outline"

                    } else if (route.name === 'Conta') {
                        iconName = "person-outline"
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tab.Screen name="Home" component={HomeStack}/>
                <Tab.Screen name="Conta" component={Conta}/>

            </Tab.Navigator>
        </NavigationContainer>

    );
}

export default Route;