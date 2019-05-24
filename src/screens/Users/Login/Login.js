/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-24 12:00:06
 * @modify date 2019-05-24 12:00:06
 * @desc [description]
 */

import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Button, Input } from "react-native-elements";

import { HeaderTitle } from "../../../common";

export class Login extends Component {
    render() {
        return (
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
                            <HeaderTitle title="To continue" subText="Login" />
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
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={{ justifyContent: "flex-end" }}
                    >
                        <Text
                            style={{
                                fontSize: 10,
                                textAlign: "right"
                            }}
                        >
                            Forgot password?
                        </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row" }}>
                        <Button
                            title="Login"
                            type="outline"
                            buttonStyle={{
                                paddingHorizontal: 20,
                                borderColor: "#ed4c14"
                            }}
                            titleStyle={{
                                color: "#ed4c14"
                            }}
                            onPress={() =>
                                this.props.navigation.navigate("Tabs")
                            }
                        />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => this.props.navigation.navigate("Signup")}
                    >
                        <Text
                            style={{
                                marginVertical: 10,
                                lineHeight: 20,
                                fontSize: 10,
                                textDecorationLine: "underline"
                            }}
                        >
                            Register for new account
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Login;
