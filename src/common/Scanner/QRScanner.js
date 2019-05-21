/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-20 18:11:54
 * @modify date 2019-05-20 18:11:54
 * @desc [description]
 */
"use strict";

import React, { Component } from "react";

import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking
} from "react-native";
// import * as Permissions from "expo-permissions";
import QRCodeScanner from "react-native-qrcode-scanner";

export default class QRScanner extends Component {
    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error("An error occured", err)
        );
    };

    // async componentDidMount() {
    //     const { status } = await Permissions.getAsync(
    //         Permissions.NOTIFICATIONS
    //     );
    //     if (status !== "granted") {
    //         alert(
    //             "Hey! You might want to enable notifications for my app, they are good."
    //         );
    //     } else {
    //         alert("Permission granted");
    //     }
    // }

    render() {
        return (
            <QRCodeScanner
                onRead={this.onSuccess}
                onCameraReady={e => console.log(e)}
                onMountError={e => console.log(e)}
                topContent={<Text style={styles.centerText}>hi</Text>}
                bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable}>
                        <Text style={styles.buttonText}>OK. Got it!</Text>
                    </TouchableOpacity>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: "#777"
    },
    textBold: {
        fontWeight: "500",
        color: "#000"
    },
    buttonText: {
        fontSize: 21,
        color: "rgb(0,122,255)"
    },
    buttonTouchable: {
        padding: 16
    }
});
