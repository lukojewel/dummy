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

import { HeaderTitle, InputField, Button } from "../../../common";
import { textFontSize } from "../../../utils/UtilityFunctions";

export class ShopDetails extends Component {
    state = {
        focusId: ""
    };
    render() {
        const { focusId } = this.state;
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                margin: 20
                            }}
                        >
                            <View
                                style={{
                                    // flex: 1,
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    alignSelf: "flex-start"
                                }}
                            >
                                <Image
                                    style={{
                                        height: 24,
                                        width: 23,
                                        marginVertical: 16
                                    }}
                                    source={require("../../../../assets/path_14.png")}
                                />
                                <View style={{ marginTop: 20 }}>
                                    <HeaderTitle
                                        title="Details"
                                        subText="Shop"
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    paddingTop: 90,
                                    justifyContent: "center",
                                    alignContent: "center"
                                }}
                            >
                                <View
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 100,
                                        zIndex: 100,
                                        padding: 3,
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
                                    <Text
                                        style={{
                                            fontSize: textFontSize(8),
                                            fontFamily: "Poppins-Medium"
                                        }}
                                    >
                                        Upload
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: textFontSize(8),
                                            fontFamily: "Poppins-Medium"
                                        }}
                                    >
                                        Store Image
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ margin: 20 }}>
                            <View>
                                <InputField
                                    placeholder="Store Name"
                                    id="name"
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    focusId={focusId}
                                    // errorMessage=""
                                />
                                <InputField
                                    placeholder="Category"
                                    id="category"
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    focusId={focusId}
                                    // errorMessage=""
                                />
                                <InputField
                                    placeholder="State"
                                    id="state"
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    focusId={focusId}
                                    // errorMessage=""
                                />
                                <InputField
                                    placeholder="City"
                                    id="city"
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    focusId={focusId}
                                    // errorMessage=""
                                />
                                <InputField
                                    placeholder="Address"
                                    id="address"
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    focusId={focusId}
                                    // errorMessage=""
                                />
                                <InputField
                                    placeholder="Pincode"
                                    id="pincode"
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    focusId={focusId}
                                    type="numeric"
                                    // errorMessage=""
                                />

                                <InputField
                                    placeholder="GST Number"
                                    id="gst"
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    focusId={focusId}
                                    type="visible-password"
                                    // errorMessage=""
                                />
                            </View>
                            <View
                                style={{ flexDirection: "row", marginTop: 10 }}
                            >
                                <Button
                                    title="Continue"
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
                                        fontSize: textFontSize(10),
                                        fontFamily: "Poppins-Medium",
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
