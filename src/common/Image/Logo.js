/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-20 13:14:32
 * @modify date 2019-05-20 13:14:32
 * @desc [description]
 */

import React from "react";
import { View, Image } from "react-native";

const Logo = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                width: 50,
                marginLeft: 10,
                padding: 5,
                borderRadius: 50,
                overflow: "hidden",
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 4
                },
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 2
            }}
        >
            <Image
                style={{
                    alignSelf: "center",
                    height: 37,
                    width: 37,
                    borderWidth: 1,
                    borderRadius: 30
                }}
                source={require("../../../assets/ccd1.png")}
            />
        </View>
    );
};

export default Logo;
