import React from 'react';
import { FlatList, View, SafeAreaView } from 'react-native';
import { ListItem } from 'react-native-elements';

function LostList(props) {
    const renderLostItem = ({item, index}) => {
        return(
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
        )
    };

    return(
        <SafeAreaView>
            <View>
                <FlatList
                    data={props.pets}
                    renderItem={renderLostItem}
                    keyExtractor={item => item.id.toString()}
                    />
            </View>
        </SafeAreaView>
    );
}

export default LostList;
