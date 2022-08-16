import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, PlayScreen, ProfileScreen } from '../screens';
import { View, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <View style={styles.navigator}>
            <Tab.Navigator
                initialRouteName='Home'
                backBehavior="initialRoute">
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name='Play'
                    component={PlayScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="ios-game-controller-outline" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="user-o" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
    )
};

const styles = StyleSheet.create({
    navigator: {
        width: '100%',
        height: '100%'
    }
});

export default AppNavigator;