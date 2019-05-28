/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-27 15:21:45
 * @modify date 2019-05-27 15:21:45
 * @desc [description]
 */
import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { Input } from "react-native-elements";

import { Button, Logo } from "../../common";

export class Profile extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, margin: 20 }}>
                    <View
                        style={{
                            marginBottom: 15,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Logo />
                        <Text
                            style={{
                                fontFamily: "Poppins-SemiBold",
                                fontSize: 14
                            }}
                        >
                            Cafe Coffee Day
                        </Text>
                    </View>
                    <View style={[style.shadow, { marginBottom: 15 }]}>
                        <Input
                            value={"ccdbng@gmail.com"}
                            textContentType="none"
                            label="Email"
                            labelStyle={{
                                fontSize: 8,
                                fontFamily: "Poppins-SemiBold",
                                color: "#8b8b8b"
                            }}
                            inputStyle={{
                                fontSize: 12,
                                fontFamily: "Poppins-Regular",
                                marginTop: -5,
                                marginBottom: -5
                            }}
                            inputContainerStyle={{
                                borderBottomColor: "#e4e4e4"
                            }}
                            containerStyle={{ marginBottom: 6 }}
                            editable={false}
                            // errorStyle={{ color: "red" }}
                            // errorMessage="ENTER A VALID ERROR HERE"
                        />
                        <Input
                            value={"+91 8301827967"}
                            textContentType="none"
                            label="Phone"
                            labelStyle={{
                                fontSize: 8,
                                fontFamily: "Poppins-SemiBold",
                                color: "#8b8b8b"
                            }}
                            inputStyle={{
                                fontSize: 12,
                                fontFamily: "Poppins-Regular",
                                marginTop: -5,
                                marginBottom: -5
                            }}
                            inputContainerStyle={{
                                borderBottomColor: "#e4e4e4"
                            }}
                            containerStyle={{ marginBottom: 6 }}
                            editable={false}
                            // errorStyle={{ color: "red" }}
                            // errorMessage="ENTER A VALID ERROR HERE"
                        />
                        <Input
                            value={"8ADTBHEF45"}
                            textContentType="none"
                            label="GST Number"
                            labelStyle={{
                                fontSize: 8,
                                fontFamily: "Poppins-SemiBold",
                                color: "#8b8b8b"
                            }}
                            inputStyle={{
                                fontSize: 12,
                                fontFamily: "Poppins-Regular",
                                marginTop: -5,
                                marginBottom: -5
                            }}
                            inputContainerStyle={{
                                borderBottomColor: "#e4e4e4"
                            }}
                            containerStyle={{ marginBottom: 6 }}
                            editable={false}
                            // errorStyle={{ color: "red" }}
                            // errorMessage="ENTER A VALID ERROR HERE"
                        />
                        <Input
                            value={"Alex Dobie"}
                            textContentType="none"
                            label="Contact Person"
                            labelStyle={{
                                fontSize: 8,
                                fontFamily: "Poppins-SemiBold",
                                color: "#8b8b8b"
                            }}
                            inputStyle={{
                                fontSize: 12,
                                fontFamily: "Poppins-Regular",
                                marginTop: -5,
                                marginBottom: -5
                            }}
                            inputContainerStyle={{
                                borderBottomColor: "#e4e4e4"
                            }}
                            containerStyle={{ marginBottom: 6 }}
                            editable={false}
                            // errorStyle={{ color: "red" }}
                            // errorMessage="ENTER A VALID ERROR HERE"
                        />
                        <Input
                            value={"Karnataka"}
                            textContentType="none"
                            label="State"
                            labelStyle={{
                                fontSize: 8,
                                fontFamily: "Poppins-SemiBold",
                                color: "#8b8b8b"
                            }}
                            inputStyle={{
                                fontSize: 12,
                                fontFamily: "Poppins-Regular",
                                marginTop: -5,
                                marginBottom: -5
                            }}
                            inputContainerStyle={{
                                borderBottomColor: "#e4e4e4"
                            }}
                            containerStyle={{ marginBottom: 6 }}
                            editable={false}
                            // errorStyle={{ color: "red" }}
                            // errorMessage="ENTER A VALID ERROR HERE"
                        />
                        <Input
                            value={"Bengaluru"}
                            textContentType="none"
                            label="City"
                            labelStyle={{
                                fontSize: 8,
                                fontFamily: "Poppins-SemiBold",
                                color: "#8b8b8b"
                            }}
                            inputStyle={{
                                fontSize: 12,
                                fontFamily: "Poppins-Regular",
                                marginTop: -5,
                                marginBottom: -5
                            }}
                            inputContainerStyle={{
                                borderBottomColor: "#e4e4e4"
                            }}
                            containerStyle={{ marginBottom: 6 }}
                            editable={false}
                            // errorStyle={{ color: "red" }}
                            // errorMessage="ENTER A VALID ERROR HERE"
                        />
                        <Input
                            value={"#5, 6th block, 27th Main, Jayanagar"}
                            textContentType="none"
                            label="Address"
                            labelStyle={{
                                fontSize: 8,
                                fontFamily: "Poppins-SemiBold",
                                color: "#8b8b8b"
                            }}
                            inputStyle={{
                                fontSize: 12,
                                fontFamily: "Poppins-Regular",
                                marginTop: -5,
                                marginBottom: -5
                            }}
                            inputContainerStyle={{
                                borderBottomColor: "#e4e4e4"
                            }}
                            containerStyle={{ marginBottom: 6 }}
                            editable={false}
                            // errorStyle={{ color: "red" }}
                            // errorMessage="ENTER A VALID ERROR HERE"
                        />
                        <Input
                            value={"560068"}
                            textContentType="none"
                            label="Pincode"
                            labelStyle={{
                                fontSize: 8,
                                fontFamily: "Poppins-SemiBold",
                                color: "#8b8b8b"
                            }}
                            inputStyle={{
                                fontSize: 12,
                                fontFamily: "Poppins-Regular",
                                marginTop: -5,
                                marginBottom: -5
                            }}
                            inputContainerStyle={{
                                borderBottomColor: "#e4e4e4"
                            }}
                            containerStyle={{ marginBottom: 6 }}
                            editable={false}
                            // errorStyle={{ color: "red" }}
                            // errorMessage="ENTER A VALID ERROR HERE"
                        />
                    </View>
                    <View style={{ marginBottom: 15, flexDirection: "row" }}>
                        <Button title="Logout" />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Profile;

const style = StyleSheet.create({
    shadow: {
        borderRadius: 6,
        overflow: "hidden",
        shadowColor: "#EDEDED",
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
        padding: 20
    }
});
