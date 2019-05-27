/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-24 12:01:23
 * @modify date 2019-05-24 12:01:23
 * @desc [description]
 */

import React, { Component } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView
} from "react-native";
import { Button, Input } from "react-native-elements";

import { HeaderTitle } from "../../../common";

export class ShopDetails extends Component {
    state = {
        focusId: ""
    };
    render() {
        const { focusId } = this.state;
        let labelStyle = {
            fontWeight: "400",
            fontSize: 12,
            backgroundColor: "#FFF",
            position: "absolute",
            top: -15,
            left: 10,
            padding: 5
        };

        let initialLabelStyle = {
            position: "absolute",
            top: -15,
            left: 10,
            padding: 5
        };
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
                        <View
                            style={{
                                // flex: 1,
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    marginLeft: 20,
                                    marginTop: 42
                                }}
                            >
                                <Image
                                    source={require("../../../../assets/path_14.png")}
                                />
                                <View style={{ marginVertical: 50 }}>
                                    <HeaderTitle
                                        title="Details"
                                        subText="Shop"
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignContent: "center"
                                }}
                            >
                                <View
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 100,
                                        padding: 10,
                                        borderWidth: 1,
                                        borderStyle: "dashed",
                                        borderColor: "#ed4c14",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        overflow: "hidden",
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 4
                                        },
                                        shadowOpacity: 0.28,
                                        shadowRadius: 0,
                                        elevation: 2
                                    }}
                                >
                                    <Text style={{ fontSize: 8 }}>Upload</Text>
                                    <Text style={{ fontSize: 8 }}>
                                        Store Image
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ margin: 20 }}>
                            <View>
                                <View style={{ marginVertical: 10 }}>
                                    <Input
                                        placeholder="Store Name"
                                        label={
                                            focusId == "name"
                                                ? "Store Name"
                                                : ""
                                        }
                                        labelStyle={
                                            focusId == "name"
                                                ? labelStyle
                                                : initialLabelStyle
                                        }
                                        onFocus={() =>
                                            this._onFocusAnimation("name")
                                        }
                                        onBlur={this._onBlurAnimation}
                                        containerStyle={{
                                            borderWidth: 1,
                                            borderRadius: 6,
                                            borderColor: "#EDEDED"
                                        }}
                                        inputContainerStyle={{
                                            borderBottomWidth: 0
                                        }}
                                        inputStyle={{
                                            fontSize: 14
                                        }}
                                        type="email"
                                        // errorStyle={{ color: "red" }}
                                        // errorMessage="ENTER A VALID ERROR HERE"
                                    />
                                </View>

                                <View style={{ marginVertical: 10 }}>
                                    <Input
                                        placeholder="Category"
                                        label={
                                            focusId == "category"
                                                ? "Category"
                                                : ""
                                        }
                                        labelStyle={
                                            focusId == "category"
                                                ? labelStyle
                                                : initialLabelStyle
                                        }
                                        onFocus={() =>
                                            this._onFocusAnimation("category")
                                        }
                                        onBlur={this._onBlurAnimation}
                                        containerStyle={{
                                            borderWidth: 1,
                                            borderRadius: 6,
                                            borderColor: "#EDEDED"
                                        }}
                                        inputContainerStyle={{
                                            borderBottomWidth: 0
                                        }}
                                        inputStyle={{
                                            fontSize: 14
                                        }}
                                        // errorStyle={{ color: "red" }}
                                        // errorMessage="ENTER A VALID ERROR HERE"
                                    />
                                </View>
                                <View style={{ marginVertical: 10 }}>
                                    <Input
                                        placeholder="State"
                                        label={
                                            focusId == "state" ? "State" : ""
                                        }
                                        labelStyle={
                                            focusId == "state"
                                                ? labelStyle
                                                : initialLabelStyle
                                        }
                                        onFocus={() =>
                                            this._onFocusAnimation("state")
                                        }
                                        onBlur={this._onBlurAnimation}
                                        containerStyle={{
                                            borderWidth: 1,
                                            borderRadius: 6,
                                            borderColor: "#EDEDED"
                                        }}
                                        inputContainerStyle={{
                                            borderBottomWidth: 0
                                        }}
                                        inputStyle={{
                                            fontSize: 14
                                        }}
                                        // errorStyle={{ color: "red" }}
                                        // errorMessage="ENTER A VALID ERROR HERE"
                                    />
                                </View>
                                <View style={{ marginVertical: 10 }}>
                                    <Input
                                        placeholder="City"
                                        label={focusId == "city" ? "City" : ""}
                                        labelStyle={
                                            focusId == "city"
                                                ? labelStyle
                                                : initialLabelStyle
                                        }
                                        onFocus={() =>
                                            this._onFocusAnimation("city")
                                        }
                                        onBlur={this._onBlurAnimation}
                                        containerStyle={{
                                            borderWidth: 1,
                                            borderRadius: 6,
                                            borderColor: "#EDEDED"
                                        }}
                                        inputContainerStyle={{
                                            borderBottomWidth: 0
                                        }}
                                        inputStyle={{
                                            fontSize: 14
                                        }}
                                        // errorStyle={{ color: "red" }}
                                        // errorMessage="ENTER A VALID ERROR HERE"
                                    />
                                </View>
                                <View style={{ marginVertical: 10 }}>
                                    <Input
                                        placeholder="Address"
                                        label={
                                            focusId == "address"
                                                ? "Address"
                                                : ""
                                        }
                                        labelStyle={
                                            focusId == "address"
                                                ? labelStyle
                                                : initialLabelStyle
                                        }
                                        onFocus={() =>
                                            this._onFocusAnimation("address")
                                        }
                                        onBlur={this._onBlurAnimation}
                                        containerStyle={{
                                            borderWidth: 1,
                                            borderRadius: 6,
                                            borderColor: "#EDEDED"
                                        }}
                                        inputContainerStyle={{
                                            borderBottomWidth: 0
                                        }}
                                        inputStyle={{
                                            fontSize: 14
                                        }}
                                        // errorStyle={{ color: "red" }}
                                        // errorMessage="ENTER A VALID ERROR HERE"
                                    />
                                </View>
                                <View style={{ marginVertical: 10 }}>
                                    <Input
                                        placeholder="Pincode"
                                        label={
                                            focusId == "pincode"
                                                ? "Pincode"
                                                : ""
                                        }
                                        labelStyle={
                                            focusId == "pincode"
                                                ? labelStyle
                                                : initialLabelStyle
                                        }
                                        onFocus={() =>
                                            this._onFocusAnimation("pincode")
                                        }
                                        onBlur={this._onBlurAnimation}
                                        containerStyle={{
                                            borderWidth: 1,
                                            borderRadius: 6,
                                            borderColor: "#EDEDED"
                                        }}
                                        inputContainerStyle={{
                                            borderBottomWidth: 0
                                        }}
                                        inputStyle={{
                                            fontSize: 14
                                        }}
                                        // errorStyle={{ color: "red" }}
                                        // errorMessage="ENTER A VALID ERROR HERE"
                                    />
                                </View>
                                <View style={{ marginVertical: 10 }}>
                                    <Input
                                        placeholder="GST Number"
                                        label={
                                            focusId == "gst" ? "GST Number" : ""
                                        }
                                        labelStyle={
                                            focusId == "gst"
                                                ? labelStyle
                                                : initialLabelStyle
                                        }
                                        onFocus={() =>
                                            this._onFocusAnimation("gst")
                                        }
                                        onBlur={this._onBlurAnimation}
                                        containerStyle={{
                                            borderWidth: 1,
                                            borderRadius: 6,
                                            borderColor: "#EDEDED"
                                        }}
                                        inputContainerStyle={{
                                            borderBottomWidth: 0
                                        }}
                                        inputStyle={{
                                            fontSize: 14
                                        }}
                                        // errorStyle={{ color: "red" }}
                                        // errorMessage="ENTER A VALID ERROR HERE"
                                    />
                                </View>
                            </View>
                            <View
                                style={{ flexDirection: "row", marginTop: 10 }}
                            >
                                <Button
                                    title="Continue"
                                    type="outline"
                                    buttonStyle={{
                                        paddingHorizontal: 20,
                                        borderColor: "#ed4c14"
                                    }}
                                    titleStyle={{
                                        color: "#ed4c14"
                                    }}
                                    onPress={() =>
                                        this.props.navigation.navigate(
                                            "LocationDetails"
                                        )
                                    }
                                />
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() =>
                                    this.props.navigation.navigate("Signup")
                                }
                            >
                                <Text
                                    style={{
                                        marginVertical: 10,
                                        lineHeight: 20,
                                        fontSize: 10,
                                        textDecorationLine: "underline"
                                    }}
                                >
                                    Back to previous page
                                </Text>
                            </TouchableOpacity>
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
}

export default ShopDetails;
