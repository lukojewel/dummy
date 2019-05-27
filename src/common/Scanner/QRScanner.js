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
    Text,
    View,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";
import { Constants, Permissions, BarCodeScanner } from "expo";

import { InputField, Button } from "../../common";

const { height, width } = Dimensions.get("window");

export default class BarcodeScanner extends React.Component {
    state = {
        hasCameraPermission: null,
        scanned: false,
        code: "",
        focusId: ""
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === "granted" });
    }

    render() {
        const { hasCameraPermission, scanned, focusId } = this.state;

        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <ScrollView>
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
                                    scanned
                                        ? undefined
                                        : this.handleBarCodeScanned
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
                            <Text
                                style={{
                                    fontSize: 10,
                                    color: "#ed4c14",
                                    fontFamily: "Poppins-Bold"
                                }}
                            >
                                OR
                            </Text>
                        </View>
                        <View style={{}}>
                            <InputField
                                placeholder="Code"
                                label="Enter Offer Code"
                                id="code"
                                focusId={focusId}
                                onFocus={this._onFocusAnimation}
                                onBlur={this._onBlurAnimation}
                                errorMessage=""
                                value={this.state.code}
                                onChangeText={code => this.setState({ code })}
                            />
                        </View>
                        <View
                            style={{
                                marginVertical: 10,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Button
                                title="Proceed"
                                onPress={() =>
                                    this.props.navigation.navigate("Tabs")
                                }
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    _onFocusAnimation = focusId => {
        this.setState({ focusId });
    };

    _onBlurAnimation = () => {
        this.setState({ focusId: "" });
    };

    handleBarCodeScanned = ({ type, data }) => {
        this.setState({ scanned: true, code: data });
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
}
