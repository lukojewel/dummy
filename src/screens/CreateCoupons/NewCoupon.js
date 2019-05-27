/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-21 12:44:11
 * @modify date 2019-05-21 12:44:11
 * @desc [description]
 */
import React, { Component } from "react";
import {
    Text,
    ScrollView,
    View,
    Image,
    StyleSheet,
    KeyboardAvoidingView
} from "react-native";
import { Input, Button } from "react-native-elements";

export class NewCoupon extends Component {
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
                <ScrollView contentContainerStyle={style.contentContainer}>
                    <View style={style.container}>
                        <View style={style.formContainer}>
                            <View style={style.section}>
                                <View style={style.imageUpload}>
                                    <View style={{}}>
                                        <Image
                                            style={{ height: 50, width: 50 }}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                            padding: 10
                                        }}
                                    >
                                        <Text>
                                            Click here to upload a cover image
                                            for your offer
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={style.section}>
                                <Input
                                    placeholder="Heading"
                                    label={
                                        focusId == "heading"
                                            ? "Coupon Heading"
                                            : ""
                                    }
                                    labelStyle={
                                        focusId == "heading"
                                            ? labelStyle
                                            : initialLabelStyle
                                    }
                                    onFocus={() =>
                                        this._onFocusAnimation("heading")
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
                            <View style={style.section}>
                                <Input
                                    placeholder="Discount in %"
                                    label={
                                        focusId == "discount"
                                            ? "Discount in %"
                                            : ""
                                    }
                                    labelStyle={
                                        focusId == "discount"
                                            ? labelStyle
                                            : initialLabelStyle
                                    }
                                    onFocus={() =>
                                        this._onFocusAnimation("discount")
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
                            <View style={style.section}>
                                <Input
                                    placeholder="Maximum coupon count"
                                    label={
                                        focusId == "count"
                                            ? "Maximum coupon count"
                                            : ""
                                    }
                                    labelStyle={
                                        focusId == "count"
                                            ? labelStyle
                                            : initialLabelStyle
                                    }
                                    onFocus={() =>
                                        this._onFocusAnimation("count")
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
                            <View style={style.section}>
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: "row",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <View style={{ flex: 1, marginRight: 20 }}>
                                        <Input
                                            placeholder="Start date"
                                            label={
                                                focusId == "start-date"
                                                    ? "Start date"
                                                    : ""
                                            }
                                            labelStyle={
                                                focusId == "start-date"
                                                    ? labelStyle
                                                    : initialLabelStyle
                                            }
                                            onFocus={() =>
                                                this._onFocusAnimation(
                                                    "start-date"
                                                )
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
                                    <View style={{ flex: 1, marginLeft: 20 }}>
                                        <Input
                                            placeholder="End date"
                                            label={
                                                focusId == "end-date"
                                                    ? "End date"
                                                    : ""
                                            }
                                            labelStyle={
                                                focusId == "end-date"
                                                    ? labelStyle
                                                    : initialLabelStyle
                                            }
                                            onFocus={() =>
                                                this._onFocusAnimation(
                                                    "end-date"
                                                )
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
                            </View>
                            <View style={style.section}>
                                <Input
                                    placeholder="Offer notes"
                                    label={
                                        focusId == "notes" ? "Offer notes" : ""
                                    }
                                    labelStyle={
                                        focusId == "notes"
                                            ? labelStyle
                                            : initialLabelStyle
                                    }
                                    onFocus={() =>
                                        this._onFocusAnimation("notes")
                                    }
                                    onBlur={this._onBlurAnimation}
                                    containerStyle={{
                                        borderWidth: 1,
                                        borderRadius: 6,
                                        borderColor: "#EDEDED"
                                    }}
                                    inputContainerStyle={{
                                        borderBottomWidth: 0,
                                        justifyContent: "flex-start"
                                    }}
                                    inputStyle={{
                                        fontSize: 14
                                    }}
                                    multiline={true}
                                    numberOfLines={10}
                                    // errorStyle={{ color: "red" }}
                                    // errorMessage="ENTER A VALID ERROR HERE"
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Button
                                title="Cancel"
                                type="clear"
                                titleStyle={{ color: "#333" }}
                            />
                            <Button
                                title="Create & Publish"
                                type="outline"
                                buttonStyle={{ borderColor: "tomato" }}
                                titleStyle={{ color: "tomato" }}
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

export default NewCoupon;

const style = StyleSheet.create({
    contentContainer: {
        paddingVertical: 5,
        marginBottom: 20
    },
    container: { flex: 1, padding: 10 },
    formContainer: {
        marginVertical: 10
    },
    section: {
        marginVertical: 10
    },
    imageUpload: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#ed4c14",
        borderRadius: 6,
        borderStyle: "dashed",
        flexDirection: "row",
        padding: 20,
        backgroundColor: "#ed4c14"
    }
});
