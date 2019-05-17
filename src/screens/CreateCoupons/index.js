/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-14 18:29:36
 * @modify date 2019-05-14 18:29:36
 * @desc [description]
 */

import React, { Component } from "react";
import { Text, View } from "react-native";

export class index extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text> Create Coupons </Text>
            </View>
        );
    }
}

export default index;
