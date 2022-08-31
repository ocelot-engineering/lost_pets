import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

class Bookmark extends Component {
    render() {
        return(
                <View style = {styles.container}>
                    <Avatar
                        rounded
                        size="large"
                        //title="LP"
                        icon={{name: 'wrench', type: 'font-awesome'}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        />
                    <Text style = {styles.text}>Bookmark Page</Text>
                    <Text>Under construction...</Text>
                </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
        fontSize: 29,
        fontWeight: 'bold',
        color: 'black',
        margin: 20
    }
  });

export default Bookmark;