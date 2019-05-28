/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-28 15:10:09
 * @modify date 2019-05-28 15:10:09
 * @desc [description]
 */
import React from "react";
import { View, Text, Image } from "react-native";

const ZeroState = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <View
                style={{
                    flex: 1,
                    margin: 20,
                    justifyContent: "flex-end",
                    alignItems: "center"
                }}
            >
                <Image
                    style={{ height: 173, width: 196 }}
                    source={require("../../../assets/nothing.png")}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    margin: 20,
                    justifyContent: "flex-start",
                    alignItems: "center"
                }}
            >
                <Text
                    style={{
                        fontFamily: "Poppins-Bold",
                        fontSize: 16,
                        color: "#000",
                        marginBottom: 10
                    }}
                >
                    Nothing Found
                </Text>
                <Text
                    style={{
                        fontFamily: "Poppins-Medium",
                        fontSize: 10,
                        color: "#000"
                    }}
                >
                    Sorry that happened. Please try again.
                </Text>
            </View>
        </View>
    );
};

export default ZeroState;
