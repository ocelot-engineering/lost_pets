import React, { Component } from 'react';
import { View, Platform } from 'react-native'
import { Icon } from 'react-native-elements';
import Lost from './LostComponent';
import LostMap from '../components/LostMapComponent';
import LostPetProfile from '../components/LostPetProfileComponent';
import Bookmark from '../components/BookmarkComponent';
import MyPet from '../components/MyPetComponent';
import Settings from '../components/SettingsComponent';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, SafeAreaView } from 'react-navigation';

// Navigators ------------------------------------------

const LostNavigator = createStackNavigator({
    LostList: Lost,
    LostMap: LostMap,
    LostPetProfile: LostPetProfile
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
            title: 'Bookmarked',
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
            title: 'My Pet',
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
    initialRouteName: 'MyPet',
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    }
});

// Container ------------------------------------------

const AppContainer = createAppContainer(TabNavigator);

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
