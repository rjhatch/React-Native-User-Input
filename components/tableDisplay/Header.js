import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import CustomButton from "../CustomButton";

export default function Header({
    title,
    leftButtonText,
    rightButtonText,
    onLeftButtonPress,
    onRightButtonPress
}) {
    return (
        <View style={styles.container}>
            <View style={[styles.button, {left: 20}]}>
                <CustomButton title={leftButtonText} color={'black'} onPress={onLeftButtonPress} small />
            </View>
            <Text style={styles.title}>{title}</Text>
            <View style={[styles.button, {right: 20}]}>
                <CustomButton title={rightButtonText} color={'green'} onPress={onRightButtonPress} small />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 36,
    },
    button: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        justifyContent: 'center',
    },
});