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
    KeyboardAvoidingView,
    TouchableOpacity,
    Keyboard
} from "react-native";
import moment from "moment";

import { InputField, Button } from "../../common";
import { textFontSize } from "../../utils/UtilityFunctions";
import DateTimePicker from "react-native-modal-datetime-picker";

export class NewCoupon extends Component {
    state = {
        focusId: "",
        startDate: "",
        endDate: "",
        isDateTimePickerVisible: false
    };

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        let _date = "";
        if (date) {
            _date = moment(date).format("YYYY-MM-DD");
        }
        if (this.state.focusId == "start-date") {
            this.setState({ startDate: _date });
        } else if (this.state.focusId == "end-date") {
            this.setState({ endDate: _date });
        }
        Keyboard.dismiss();
        this.hideDateTimePicker();
    };

    render() {
        const { focusId } = this.state;
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <ScrollView contentContainerStyle={style.contentContainer}>
                    <View style={style.container}>
                        <View style={style.formContainer}>
                            <View style={style.section}>
                                <View style={style.imageUpload}>
                                    <View style={{}}>
                                        <Image
                                            style={{ height: 86, width: 70 }}
                                            source={require("../../../assets/group_174.png")}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                            padding: 10
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: "#8c8b8b",
                                                fontFamily: "Poppins-Medium",
                                                fontSize: textFontSize(10)
                                            }}
                                        >
                                            Click here to upload a cover image
                                            for your offer
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <InputField
                                placeholder="Heading"
                                label="Coupon Heading"
                                id="heading"
                                onFocus={this._onFocusAnimation}
                                onBlur={this._onBlurAnimation}
                                focusId={focusId}
                                // errorMessage=""
                            />
                            <InputField
                                placeholder="Discount in %"
                                id="discount"
                                onFocus={this._onFocusAnimation}
                                onBlur={this._onBlurAnimation}
                                focusId={focusId}
                                // errorMessage=""
                            />
                            <InputField
                                placeholder="Maximum coupon count"
                                id="count"
                                onFocus={this._onFocusAnimation}
                                onBlur={this._onBlurAnimation}
                                focusId={focusId}
                                // errorMessage=""
                            />
                            <View style={style.section}>
                                <View
                                    style={{
                                        flex: 1,
                                        flexDirection: "row",
                                        justifyContent: "space-between"
                                    }}
                                >
                                    <InputField
                                        placeholder="Start date"
                                        id="start-date"
                                        onFocus={this._onFocusAnimation}
                                        onBlur={this._onBlurAnimation}
                                        focusId={focusId}
                                        value={this.state.startDate}
                                        // keyboardType="none"
                                        // errorMessage=""
                                    />
                                    <View style={{ paddingHorizontal: 5 }} />
                                    <InputField
                                        placeholder="End date"
                                        id="end-date"
                                        onFocus={this._onFocusAnimation}
                                        onBlur={this._onBlurAnimation}
                                        focusId={focusId}
                                        value={this.state.endDate}
                                        // keyboardType="none"
                                        // errorMessage=""
                                    />
                                </View>
                            </View>

                            <InputField
                                placeholder="Offer notes"
                                id="notes"
                                onFocus={this._onFocusAnimation}
                                onBlur={this._onBlurAnimation}
                                focusId={focusId}
                                multiline={true}
                                numberOfLines={10}
                                inputStyle={{
                                    fontSize: textFontSize(12),
                                    fontFamily: "Poppins-Light",
                                    color: "#000000",
                                    marginTop: 8,
                                    textAlignVertical: "top",
                                    justifyContent: "flex-start"
                                }}
                                // errorMessage=""
                            />
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                style={{ marginRight: 30 }}
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
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                            <Button title="Create & Publish" />
                        </View>
                    </View>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                    />
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    _onFocusAnimation = focusId => {
        if (focusId == "start-date" || focusId == "end-date") {
            this.setState({ focusId, isDateTimePickerVisible: true });
        } else {
            this.setState({ focusId });
        }
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
    container: { flex: 1, paddingHorizontal: 20, paddingVertical: 10 },
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
        backgroundColor: "#fdf6f3",
        justifyContent: "center",
        alignItems: "center"
    }
});
