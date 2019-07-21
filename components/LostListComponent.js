import React from 'react';
import { FlatList, ScrollView } from 'react-native';
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
        <ScrollView>
            <FlatList
                data={props.pets}
                renderItem={renderLostItem}
                keyExtractor={item => item.id.toString()}
                />
        </ScrollView>
    );
}

export default LostList;
