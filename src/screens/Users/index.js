/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-14 00:02:00
 * @modify date 2019-05-14 00:02:00
 * @desc [description]
 */

import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export default class index extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text> Users </Text>
                <Button
                    onPress={() => this.props.navigation.navigate("Tabs")}
                    title="Learn More"
                    color="#841584"
                />
            </View>
        );
    }
}
