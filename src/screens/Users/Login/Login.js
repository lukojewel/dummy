/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-24 12:00:06
 * @modify date 2019-05-24 12:00:06
 * @desc [description]
 */

import React, { Component } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from "react-native";

import { HeaderTitle, InputField, Button } from "../../../common";

export class Login extends Component {
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
                                        title="To continue"
                                        subText="Login"
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
                                    focusId={focusId}
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    errorMessage=""
                                />
                                <InputField
                                    placeholder="Password"
                                    id="password"
                                    focusId={focusId}
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    errorMessage=""
                                    secureTextEntry
                                />
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                style={{ justifyContent: "flex-end" }}
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        "PhoneVerification"
                                    )
                                }
                            >
                                <Text
                                    style={{
                                        fontSize: 8,
                                        fontFamily: "Poppins-Medium",
                                        textAlign: "right"
                                    }}
                                >
                                    Forgot password?
                                </Text>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "row" }}>
                                <Button
                                    title="Login"
                                    onPress={() =>
                                        this.props.navigation.navigate("Tabs")
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
                                        fontFamily: "Poppins-Medium",
                                        textDecorationLine: "underline"
                                    }}
                                >
                                    Register for new account
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

export default Login;
