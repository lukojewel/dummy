/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-24 12:01:16
 * @modify date 2019-05-24 12:01:16
 * @desc [description]
 */

import React, { Component } from "react";
import { Text, View, Button } from "react-native";

export class LocationDetails extends Component {
    render() {
        return (
            <View>
                <Text> LocationDetails </Text>
                <Button
                    title="Back"
                    onPress={() =>
                        this.props.navigation.navigate("ShopDetails")
                    }
                />
                <Button
                    title="Save"
                    onPress={() => this.props.navigation.navigate("Tabs")}
                />
            </View>
        );
    }
}

export default LocationDetails;
