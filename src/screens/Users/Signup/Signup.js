/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-24 12:00:17
 * @modify date 2019-05-24 12:00:17
 * @desc [description]
 */

import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Button, Input } from "react-native-elements";

import { HeaderTitle } from "../../../common";

export class Signup extends Component {
    render() {
        return (
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
                                marginLeft: 20,
                                marginTop: 42
                            }}
                        >
                            <Image
                                source={require("../../../../assets/path_14.png")}
                            />
                            <View style={{ marginVertical: 50 }}>
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
                            <View style={{ marginVertical: 10 }}>
                                <Input
                                    placeholder="User name"
                                    label="Email"
                                    labelStyle={{
                                        fontWeight: "400",
                                        fontSize: 12,
                                        backgroundColor: "#FFF",
                                        position: "absolute",
                                        top: -15,
                                        left: 10,
                                        padding: 5
                                    }}
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
                                    placeholder="First name"
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
                                    placeholder="Last name"
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
                                    placeholder="Phone number"
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
                                    type="number"
                                    // errorStyle={{ color: "red" }}
                                    // errorMessage="ENTER A VALID ERROR HERE"
                                />
                            </View>
                            <View style={{ marginVertical: 10 }}>
                                <Input
                                    placeholder="Password"
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
                                    type="password"
                                    // errorStyle={{ color: "red" }}
                                    // errorMessage="ENTER A VALID ERROR HERE"
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 10 }}>
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
                                    fontSize: 10,
                                    textDecorationLine: "underline"
                                }}
                            >
                                I already have an account
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Signup;
