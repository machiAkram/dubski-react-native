import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FeedScreen, HomeScreen, ProfileScreen } from '../screens';
import { View, StyleSheet } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <View style={styles.navigator}>
            <Tab.Navigator
                initialRouteName="Home"
                backBehavior="initialRoute" >
                <Tab.Screen
                    name='Feed'
                    component={FeedScreen}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => (
                            <Octicons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Octicons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
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