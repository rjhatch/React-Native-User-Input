import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";

import CustomButton from "../CustomButton";

export default class PersonForm extends React.Component {
    constructor(props) {
        super(props);

        const { id, firstName, lastName } = this.props;

        this.state = {
            firstName: id ? firstName : '',
            lastName: id ? lastName : '',
        };
    };

    //used to update the state on change text.
    handleFirstNameChange = firstName => {
        this.setState({ firstName });
    };

    //used to update the state on change text.
    handleLastNameChange = lastName => {
        this.setState({ lastName });
    };

    //handles what happens when the form is submitted.
    handleSubmit = () => {
        const { onFormSubmit, id } = this.props;
        const { lastName, firstName } = this.state;


        onFormSubmit({
            id,
            firstName,
            lastName,
        });
    }

    render() {
        const { id, onFormClose } = this.props;
        const {firstName, lastName} = this.state;

        const submitText = id ? 'Update' : 'Create';

        return (
            <View style={styles.formContainer}>
                <View style={styles.attributeContainer}>
                    <Text style={styles.textInputTitle}>First Name</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            onChangeText={this.handleFirstNameChange}
                            defaultValue={firstName}
                        />
                    </View>
                </View>
                <View style={styles.attributeContainer}>
                    <Text style={styles.textInputTitle}>Last Name</Text>
                    <View style={styles.textInputContainer}>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid="transparent"
                            onChangeText={this.handleLastNameChange}
                            defaultValue={lastName}
                        />
                    </View>
                </View>
                <View style={styles.buttonGroup}>
                    <CustomButton
                        small
                        color="#21BA45"
                        title={submitText}
                        onPress={this.handleSubmit}
                    />
                    <CustomButton
                        small
                        color="#DB2828"
                        title="Cancel"
                        onPress={onFormClose}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: 'white',
        borderColor: '#D6D7DA',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    attributeContainer: {
        marginVertical: 8,
    },
    textInputContainer: {
        borderColor: '#D6D7DA',
        borderRadius: 2,
        borderWidth: 1,
        marginBottom: 5,
    },
    textInput: {
        height: 30,
        padding: 5,
        fontSize: 12,
    },
    textInputTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});