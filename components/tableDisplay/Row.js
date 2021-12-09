import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";

export default class Row extends React.Component {

    handleEditPress = () => {
        const { items, onEditPress } = this.props;

        onEditPress(items);
    };

    handleRemovePress = () => {
        const { items, onRemovePress } = this.props;

        onRemovePress(items.id);
    };

    render() {
        const { items } = this.props;

        return (
            <View style={styles.row}>
                {
                    Object.keys(items).map((key, index) => {
                        return (
                            <View key={index} style={[styles.cell,
                            { backgroundColor: index % 2 === 0 ? 'lightgray' : 'gray' }]}>
                                <Text>{items[key]}</Text>
                            </View>
                        )
                    })
                }
                <TouchableOpacity style={styles.edit} onPress={this.handleEditPress}>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.remove} onPress={this.handleRemovePress}>
                    <Text style={styles.removeText}>X</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        alignItems: 'stretch',
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 2,
    },
    cell: {
        flex: 1,
        alignItems: 'center',
    },
    edit: {
        width: 50,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'green',
    },
    editText: {
        color: 'green',
        fontWeight: 'bold',
    },
    remove: {
        width: 50,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'red',
    },
    removeText: {
        color: 'red',
        fontWeight: 'bold',
    },
});