/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-24 12:00:17
 * @modify date 2019-05-24 12:00:17
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

export class Signup extends Component {
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
                                justifyContent: "space-between"
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    margin: 20
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
                                        title="To Lockticket"
                                        subText="Sign up"
                                    />
                                </View>
                            </View>
                            <View
                                style={{
                                    flex: 1
                                }}
                            >
                                <Image
                                    style={{
                                        width: 297,
                                        height: 263,
                                        position: "absolute",
                                        top: -77,
                                        right: -83
                                    }}
                                    source={require("../../../../assets/mask_group_1.png")}
                                />
                            </View>
                        </View>

                        <View style={{ flex: 2, margin: 20 }}>
                            <View>
                                <InputField
                                    placeholder="User name"
                                    label="Email"
                                    id="email"
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    focusId={focusId}
                                    type="email"
                                    // errorMessage=""
                                />
                                <InputField
                                    placeholder="First name"
                                    id="first-name"
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    focusId={focusId}
                                    // errorMessage=""
                                />
                                <InputField
                                    placeholder="Last name"
                                    id="last-name"
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    focusId={focusId}
                                    // errorMessage=""
                                />
                                <InputField
                                    placeholder="Phone number"
                                    id="phone"
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    focusId={focusId}
                                    // errorMessage=""
                                />
                                <InputField
                                    placeholder="Password"
                                    id="password"
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    focusId={focusId}
                                    // errorMessage=""
                                />
                                <InputField
                                    placeholder="Password"
                                    id="password"
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    focusId={focusId}
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
                                            "ShopDetails"
                                        )
                                    }
                                />
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() =>
                                    this.props.navigation.navigate("Login")
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
                                    I already have an account
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

export default Signup;
