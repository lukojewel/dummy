/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-20 13:07:07
 * @modify date 2019-05-20 13:07:07
 * @desc [description]
 */

import React from "react";
import { View, Text } from "react-native";

const HeaderTitle = ({ title, subText }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "flex-start",
                justifyContent: "center",
                marginVertical: 13
            }}
        >
            {subText && (
                <Text
                    style={{
                        color: "#9c9c9c",
                        fontSize: 14,
                        fontFamily: "Poppins-Light"
                    }}
                >
                    {subText}
                </Text>
            )}
            <Text
                style={{
                    color: "#000000",
                    fontSize: 16,
                    fontFamily: "Poppins-Bold"
                }}
            >
                {title}
            </Text>
        </View>
    );
};

export default HeaderTitle;
