/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-27 18:31:23
 * @modify date 2019-05-27 18:31:23
 * @desc [description]
 */
import React, { Component } from "react";
import { View, ScrollView, KeyboardAvoidingView } from "react-native";

import { InputField, Button } from "../../../common";

export class PhoneVerification extends Component {
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
                            placeholder="Phone Number"
                            id="phone"
                            onFocus={this._onFocusAnimation}
                            onBlur={this._onBlurAnimation}
                            focusId={focusId}
                            type="number"
                            // errorMessage=""
                        />
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Button
                                title="Get OTP"
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        "OTPVerification"
                                    )
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
}

export default PhoneVerification;
