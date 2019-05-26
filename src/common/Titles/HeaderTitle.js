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
                marginLeft: 10
            }}
        >
            {subText && (
                <Text style={{ color: "#A8A4A4", fontSize: 14 }}>
                    {subText}
                </Text>
            )}
            <Text
                style={{
                    color: "#000",
                    fontWeight: "900",
                    fontSize: 14
                }}
            >
                {title}
            </Text>
        </View>
    );
};

export default HeaderTitle;
