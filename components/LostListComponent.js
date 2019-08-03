import React from 'react';
import { FlatList, ScrollView, View, Text, StyleSheet, Alert, TouchableHighlight, TouchableOpacity } from 'react-native';
import { ListItem, Icon, Button } from 'react-native-elements';
//import { SwipeListView } from 'react-native-swipe-list-view';
import Swipeable from 'react-native-swipeable';

function LostList(props) {

    const leftButtons = [
        <TouchableOpacity style={[styles.leftSwipeItem, {backgroundColor: 'lightblue'}]}>
            <Icon 
                name='bookmark-o' 
                type = 'font-awesome'
                color = 'white'
                />
        </TouchableOpacity>];
    

    const rightButtons = [
        <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'tomato'}]}>
            <Icon 
                name = 'exclamation' 
                type = 'font-awesome'
                color = 'white'
                />
        </TouchableOpacity>,
        <TouchableOpacity style={[styles.rightSwipeItem, {backgroundColor: 'yellow'}]}>
          <Text>2</Text>
        </TouchableOpacity>
      ];

    const renderLostItem = ({item, index}) => {
        return(
            <Swipeable leftButtons={leftButtons} rightButtons={rightButtons} onleftActionRelease = {() => console.log('BOOKMARKED!')}>
                <ListItem
                    key = {index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={false}
                    leftAvatar={{ 
                        title: item.name[0],
                        source: item.image
                        }}
                    />
            </Swipeable>
        )
    };
/*
    const renderHiddenItem = ({data, rowMap}) => {
        return(
            <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{backgroundColor: styles.swipeIcon.backgroundColor}}>
                    <Icon
                        //raised
                        reverse
                        //containerStyle = {{backgroundColor: styles.swipeIcon.backgroundColor}}
                        //name = {props.favorite ? 'heart' : 'heart-o'}
                        name='bookmark-o'
                        type = 'font-awesome'
                        //color = '#f50'
                        color={styles.swipeIcon.backgroundColor}
                        onPress = {() => Alert.alert('You are keeping an eye out for ' + 'this pet')}
                        //onPress = {() => props.favorite ? console.log('Already favorite') : props.onPressFavorite()}
                    />
                </View>
                <Icon
                    //raised
                    reverse
                    containerStyle = {{backgroundColor: 'tomato'}}
                    //name = {props.favorite ? 'heart' : 'heart-o'}
                    name='exclamation'
                    type = 'font-awesome'
                    //color = '#f50'
                    color={'tomato'}
                    onPress = {() => Alert.alert('You are keeping an eye out for ' + 'this pet')}
                    //onPress = {() => props.favorite ? console.log('Already favorite') : props.onPressFavorite()}
                />
        </View>
        );
    }
    */

    return(
        <ScrollView>
            <FlatList
                //useFlatList
                data={props.pets}
                renderItem={renderLostItem}
                keyExtractor={item => item.id.toString()}
                //renderHiddenItem={renderHiddenItem}
                //friction = {7}
                //swipeToOpenPercent ={100}
                //stopRightSwipe ={1}
                //leftOpenValue={75}
                //rightOpenValue={-75}
                />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20
    },
    listItem: {
      height: 75,
      alignItems: 'center',
      justifyContent: 'center'
    },
    leftSwipeItem: {
      flex: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingRight: 20
    },
    rightSwipeItem: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 20
    },
  
  });

export default LostList;