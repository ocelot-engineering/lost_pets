import React, { Component } from 'react';
import { View } from 'react-native'
import { Icon } from 'react-native-elements';
import Lost from './LostComponent';
import LostMap from './LostMapComponent';
import Bookmark from './BookmarkComponent';
import MyPet from './MyPetComponent';
import Settings from './SettingsComponent';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

// Navigators ------------------------------------------

const LostNavigator = createStackNavigator({
    LostList: Lost,
    LostMap: LostMap
});

const BookmarkNavigator = createStackNavigator({
    Bookmark: Bookmark
});

const MyPetNavigator = createStackNavigator({
    MyPet: MyPet
});

const SettingsNavigator = createStackNavigator({
    Settings: Settings
});

const TabNavigator = createBottomTabNavigator({
        Lost: {
            screen: LostNavigator,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="paw"
                        type='font-awesome'
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Bookmark: {
            screen: BookmarkNavigator,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="bookmark"
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        MyPet: {
            screen: MyPetNavigator,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="heart"
                        type='font-awesome'
                        color={tintColor}
                        size={24}
                    />
                )
            })
        },
        Settings: {
            screen: SettingsNavigator,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="cog"
                        type='font-awesome'
                        color={tintColor}
                        size={24}
                    />
                )
            })
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
});

const AppContainer = createAppContainer(TabNavigator);

// Container ------------------------------------------

class Main extends Component {
    render() {
        return(
            <View style={{flex:1}}>
                <AppContainer />
            </View>
        )
    }
}

export default Main;
