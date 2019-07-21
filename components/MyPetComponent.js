import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Picker, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Avatar, Button } from 'react-native-elements';
import moment from 'moment';

class MyPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            species: '',
            breed: '',
            age: 0,
            area: '',
            lost_since: '',
            description: ''
        }
    }

    render() {
        return(
            <ScrollView>
                <View>
                    <Text>Let's find {this.state.name}!</Text>
                    <Avatar
                        size="large"
                        //title="LP"
                        icon={{name: 'heart', type: 'font-awesome'}}
                        onPress={() => console.log("Image upload!")}
                        activeOpacity={0.7}
                        />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Pet Name</Text>
                    <TextInput 
                        style={styles.formItem}
                        placeholder='eg. Thor'
                        onChangeText = {(text) => this.setState({name: text})}
                        />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Species</Text>
                    <TextInput 
                        style={styles.formItem}
                        placeholder='eg. Dog'
                        onChangeText = {(text) => this.setState({species: text})}
                        />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Breed</Text>
                    <TextInput 
                        style={styles.formItem}
                        placeholder='eg. Golden Retriever'
                        onChangeText = {(text) => this.setState({breed: text})}
                        />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Age</Text>
                    <TextInput 
                        style={styles.formItem}
                        placeholder='eg. 3'
                        keyboardType='numeric'
                        onChangeText = {(text) => this.setState({age: text})}
                        />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Area Lost</Text>
                    <TextInput 
                        style={styles.formItem}
                        placeholder='eg. Melbourne'
                        onChangeText = {(text) => this.setState({area: text})}
                        />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Lost Since</Text>
                    <DatePicker
                            style={styles.dateForm}
                            date={this.state.lost_since}
                            format='Do MMMM YYYY, h:mm a'
                            mode="datetime"
                            placeholder={'eg. ' + moment(new Date()).format('Do MMMM YYYY,  h:mm a')}
                            minDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
                            maxDate={new Date()}
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            customStyles={{
                                dateInput: styles.dateText,
                                placeholderText: styles.dateText,
                                dateText: styles.dateText
                            }}
                            onDateChange={(date) => {this.setState({lost_since: date})}}
                        />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formLabel}>Description</Text>
                    <TextInput 
                        style={styles.formItem}
                        placeholder='eg. Thor has a long coat and is very friendly'
                        onChangeText = {(text) => this.setState({description: text})}
                        />
                </View>
                <Button
                    title = 'Submit'
                    type = 'outline'
                    containerStyle={styles.buttonContainer}
                    onPress = {() => this.props.navigation.navigate('LostList')}
                    />
            </ScrollView>
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

export default MyPet;