import React from "react";
import {
    Text,
    View,
    StyleSheet
} from "react-native";
import PersonForm from "../forms/PersonForm";

import Header from "./Header";
import Row from "./Row";

export default class Table extends React.Component {
    state = {
        collapsed: false,
        createForm: false,
        editForm: false,
        editEntity: {},
    };

    toggleCollapse = () => {
        this.setState({ collapsed: !this.state.collapsed });
    };

    toggleCreateForm = () => {
        this.setState({ createForm: !this.state.createForm });
    };

    handleFormSubmit = entity => {
        const { onCreateSubmit } = this.props;

        onCreateSubmit(entity);

        this.handleCloseForm();
    };

    handleEditFormSubmit = entity => {
        const { onEditSubmit } = this.props;

        onEditSubmit(entity);

        this.handleCloseForm();
    };

    handleCloseForm = () => {
        this.setState({ createForm: false, editForm: false, collapsed: false });
    };

    handleEditPress = entity => {
        this.setState({ collapsed: true, editForm: true, createForm: false, editEntity: entity });
    };

    handleRemovePress = entityId => {
        const { onRemovePress } = this.props;

        onRemovePress(entityId);
    };

    render() {
        const { title, buttonText, items } = this.props;
        const { createForm, editForm, collapsed, editEntity } = this.state;

        return (
            <View style={styles.table}>
                <Header
                    title={title}
                    leftButtonText={collapsed ? '+' : '-'}
                    rightButtonText={buttonText}
                    onLeftButtonPress={this.toggleCollapse}
                    onRightButtonPress={this.toggleCreateForm}
                />
                {createForm && (
                    <PersonForm onFormSubmit={this.handleFormSubmit} onFormClose={this.handleCloseForm} />
                )}
                {editForm && (
                    <PersonForm
                        id={editEntity.id}
                        firstName={editEntity.firstName}
                        lastName={editEntity.lastName}
                        onFormSubmit={this.handleEditFormSubmit}
                        onFormClose={this.handleCloseForm}
                    />
                )}
                {!collapsed &&
                    items.map((row, index) => {
                        return (
                            <Row
                                key={index}
                                items={row}
                                onEditPress={this.handleEditPress}
                                onRemovePress={this.handleRemovePress}
                            />);
                    })
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    table: {
        flex: 1,
    }
});