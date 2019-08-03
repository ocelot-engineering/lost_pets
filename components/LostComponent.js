import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Button } from 'react-native-elements'
import { PETS } from '../shared/pets';
import LostList from './LostListComponent';

class Lost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: PETS
        };
    }

    render() {
        return(
            <View>
                <LostList pets = {this.state.pets} navigation = {this.props.navigation} />
                <Button
                    title = 'Switch To Map'
                    raised
                    type = 'outline'
                    containerStyle={{
                        width: '50%',
                        alignSelf: 'center'
                    }}
                    onPress = {() => this.props.navigation.navigate('LostMap')}
                    />
            </View>
        );
    }
};

export default Lost;
