import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CollectScreen, PlayScreen, ProfileScreen } from '../screens';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    const handleCreatePress = () => {

    }

    return (
        <View style={styles.navigator}>
            <Tab.Navigator
                initialRouteName='Play'
                backBehavior="initialRoute">

                <Tab.Screen
                    name='Play'
                    component={PlayScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="ios-game-controller-outline" color={color} size={size} />
                        ),
                        headerTitleAlign: 'center',
                        headerTitle: () => <Image style={styles.appLogo} source={require('../assets/logo.png')} />
                    }}
                />

                <Tab.Screen
                    name='Collect'
                    component={CollectScreen}
                    options={{
                        headerShown: true,
                        headerTransparent: true,
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="diamond" color={color} size={size} />
                        ),
                        headerTitle: 'Posts',
                        headerTitleAlign: 'center',
                        headerTitleStyle: styles.shadow,
                        headerLeft: () => (
                            <TouchableOpacity
                                style={styles.createContainer}
                                onPress={handleCreatePress}>
                                <Ionicons style={styles.shadow} name='ios-add' size={30} color={colors.offWhite} />
                                <Text style={[styles.shadow, { fontSize: 12, color: colors.white }]}>Create</Text>
                            </TouchableOpacity>
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
                        headerTitleAlign: 'center',
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
    },
    shadow: {
        textShadowColor: 'black',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 5,
        shadowOpacity: 0.5
    },
    createContainer: {
        alignItems: 'center',
        marginLeft: 10,
    },
    appLogo: {
        height: 33,
        width: 33,
        transform: [{rotate: '-45deg'}]
    }
});

export default AppNavigator;