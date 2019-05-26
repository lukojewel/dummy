/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-20 18:11:54
 * @modify date 2019-05-20 18:11:54
 * @desc [description]
 */
"use strict";

import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Constants, Permissions, BarCodeScanner } from "expo";

import { Input, Button } from "react-native-elements";

const { height, width } = Dimensions.get("window");

export default class BarcodeScanner extends React.Component {
    state = {
        hasCameraPermission: null,
        scanned: false,
        code: ""
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === "granted" });
    }

    render() {
        const { hasCameraPermission, scanned } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        height: height * 0.6,
                        width: width
                    }}
                >
                    {hasCameraPermission === null ? (
                        <Text>Requesting for camera permission</Text>
                    ) : hasCameraPermission === false ? (
                        <Text>No access to camera</Text>
                    ) : (
                        <BarCodeScanner
                            onBarCodeScanned={
                                scanned ? undefined : this.handleBarCodeScanned
                            }
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                flex: 1
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: "transparent",
                                    height: 200,
                                    width: 200,
                                    borderWidth: 1,
                                    borderRadius: 1,
                                    borderStyle: "dashed",
                                    flexDirection: "row",
                                    borderColor: "#FFF"
                                }}
                            />

                            {scanned && (
                                <Button
                                    title={"Tap to Scan Again"}
                                    onPress={() =>
                                        this.setState({
                                            scanned: false,
                                            code: ""
                                        })
                                    }
                                />
                            )}
                        </BarCodeScanner>
                    )}
                </View>

                <View
                    style={{
                        paddingHorizontal: 20,
                        backgroundColor: "#FFF"
                        // position: "absolute",
                        // bottom: 0,
                        // left: 0,
                        // right: 0,
                        // width: width,
                        // height: height * 0.4
                    }}
                >
                    <View
                        style={{
                            marginVertical: 10,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Text style={{ fontWeight: "900", color: "#ed4c14" }}>
                            OR
                        </Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Input
                            placeholder="Code"
                            label="Enter Offer Code"
                            labelStyle={{
                                fontWeight: "400",
                                fontSize: 8,
                                backgroundColor: "#FFF",
                                position: "absolute",
                                top: -15,
                                left: 10,
                                padding: 5
                            }}
                            containerStyle={{
                                borderWidth: 1,
                                borderRadius: 6,
                                borderColor: "#EDEDED"
                            }}
                            inputContainerStyle={{
                                borderBottomWidth: 0
                            }}
                            inputStyle={{
                                fontSize: 12
                            }}
                            value={this.state.code}
                            type="password"
                            // errorStyle={{ color: "red" }}
                            // errorMessage="ENTER A VALID ERROR HERE"
                        />
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <Button
                            title="Proceed"
                            type="outline"
                            buttonStyle={{ borderColor: "#ed4c14" }}
                            titleStyle={{ color: "#ed4c14" }}
                            onPress={() =>
                                this.props.navigation.navigate("Tabs")
                            }
                        />
                    </View>
                </View>
            </View>
        );
    }

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true, code: data });
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
}
