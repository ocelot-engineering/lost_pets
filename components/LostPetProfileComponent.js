import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Alert } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'; 
import { PETS } from '../shared/pets';

class LostPetProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pet: PETS.filter((pet) => pet.id === this.props.navigation.getParam('petId'))[0]
        };
        this.onPressCustomAlert = this.onPressCustomAlert.bind(this);
        this.currencyPrint = this.currencyPrint.bind(this)
    }

    onPressCustomAlert = (pet) => () => {
        Alert.alert(
            title = 'You have found ' + pet.name + '!',
            message = 'Let the owner know by sending them a message',
            buttons = [
                {
                    text: 'Send message to ' + pet.owner, 
                    onPress: () => console.log('Alert Owner pressed')
                },
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                }
              ],
              {cancelable: true},
            )
    } 

    currencyPrint = (currency) => {
        if (currency === 'EU') {
            return('€')
        } else {
            return('$')
        }
    }

    render() {
        //const petId = this.props.navigation.getParam('petId');
        //const pet = this.state.pets.filter((pet) => pet.id === petId)

        return(
            <SafeAreaView style={{flex: 1}}>
                <ScrollView>
                    <Card
                        title={this.state.pet.name}
                        image={this.state.pet.image}
                        imageStyle={{height: 400}}
                        titleStyle={{fontSize: 40}}
                        >
                        <Text style={{marginBottom: 10}}>
                            {this.state.pet.description}
                        </Text>
                        <View style={styles.formRow}>
                            <Text style={styles.formLabel}>Missing Since</Text>
                            <Text style={styles.formItem}>{this.state.pet.lost_since}</Text>
                        </View>
                        <View style={styles.formRow}>
                            <Text style={styles.formLabel}>Area</Text>
                            <Text style={styles.formItem}>{this.state.pet.area}</Text>
                        </View>
                        <View style={styles.formRow}>
                            <Text style={styles.formLabel}>Species</Text>
                            <Text style={styles.formItem}>{this.state.pet.species}</Text>
                        </View>
                        <View style={styles.formRow}>
                            <Text style={styles.formLabel}>Breed</Text>
                            <Text style={styles.formItem}>{this.state.pet.breed}</Text>
                        </View>
                        <View style={styles.formRow}>
                            <Text style={styles.formLabel}>Age</Text>
                            <Text style={styles.formItem}>{this.state.pet.age}</Text>
                        </View>
                        <View style={styles.formRow}>
                            <Text style={styles.formLabel}>Owner</Text>
                            <Text style={styles.formItem}>{this.state.pet.owner}</Text>
                        </View>
                        <View>
                            <Button
                                icon={
                                    <Icon 
                                    name='bookmark-o' 
                                    type = 'font-awesome'
                                    color = 'white'
                                    />
                                }
                                buttonStyle={{borderRadius: 0, margin: 20, marginBottom: 10, backgroundColor:'lightblue'}}
                                title=' Bookmark Pet' 
                                onPress={() => console.log(this.state.pet.name)}
                                />
                            <Button
                                icon={
                                    <Icon 
                                    name = 'exclamation' 
                                    type = 'font-awesome'
                                    color = 'white'
                                    />
                                }
                                buttonStyle={{borderRadius: 0, margin: 20, marginBottom: 50, backgroundColor:'tomato'}}
                                title=' Report Found' 
                                onPress={this.onPressCustomAlert(this.state.pet)}
                                />
                        </View>
                    </Card>
                </ScrollView>
            </SafeAreaView>
        )
    }
};

const styles = StyleSheet.create({
    formRow: {
      //alignItems: 'center',
      //justifyContent: 'center',
      flex: 1,
      flexDirection: 'column',
      margin: 20,
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: 'grey'
    },
    formLabel: {
        fontSize: 14,
        paddingBottom: 4,
        flex: 1
    },
    formItem: {
        fontSize: 24,
        flex: 1
    },
    buttonContainer: {
        width: '80%',
        alignSelf: 'center',
        paddingTop: 60,
        paddingBottom: 120
    },
    dateForm : {
        flex: 1, 
        width: '100%'
    },
    dateText: {
        fontSize: 24,
        borderWidth: 0,
        alignItems: 'flex-start'
    }
});


export default LostPetProfile;