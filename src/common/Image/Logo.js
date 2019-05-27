/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-20 13:14:32
 * @modify date 2019-05-20 13:14:32
 * @desc [description]
 */

import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

const Logo = props => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                width: 40,
                padding: 3,
                marginHorizontal: 20,
                marginVertical: 9,
                borderRadius: 40,
                overflow: "hidden",
                shadowColor: "#EDEDED",
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.1,
                shadowRadius: 1,
                elevation: 1.2
            }}
            onPress={props.onPress}
        >
            <Image
                style={{
                    alignSelf: "center",
                    height: 32,
                    width: 21
                }}
                source={require("../../../assets/logo.png")}
            />
        </TouchableOpacity>
    );
};

export default Logo;
