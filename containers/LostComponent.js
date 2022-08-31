import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux';
import LostList from '../components/LostListComponent';
import { fetchLostPets } from '../actions/ActionCreators';

const mapStateToProps = state => ({
    pets: state.lostPets.pets
})
  
const mapDispatchToProps = dispatch => ({
    fetchLostPets: () => dispatch(fetchLostPets())
})

class Lost extends Component {

    componentDidMount() {
        this.props.fetchLostPets();
    }

    render() {

        return(
            <View>
                <LostList pets = {this.props.pets} navigation = {this.props.navigation} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Lost);
