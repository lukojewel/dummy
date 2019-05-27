/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-27 18:31:23
 * @modify date 2019-05-27 18:31:23
 * @desc [description]
 */
import React, { Component } from "react";
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView
} from "react-native";

import { InputField, Button } from "../../../common";

export class OTPVerification extends Component {
    state = {
        focusId: ""
    };
    render() {
        const { focusId } = this.state;
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <ScrollView>
                    <View style={{ flex: 1, margin: 20 }}>
                        <InputField
                            placeholder="One Time Password"
                            id="otp"
                            onFocus={this._onFocusAnimation}
                            onBlur={this._onBlurAnimation}
                            focusId={focusId}
                            type="password"
                            // errorMessage=""
                        />
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Button
                                title="Submit"
                                onPress={() =>
                                    this.props.navigation.navigate("Login")
                                }
                            />
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => alert("Resend OTP")}
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
                                Resend OTP
                            </Text>
                        </TouchableOpacity>
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

export default OTPVerification;
