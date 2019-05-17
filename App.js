/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-13 20:07:48
 * @modify date 2019-05-13 20:07:48
 * @desc [description]
 */
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Font } from "expo";

//My imports
import Theme from "./src/app-properties";
import Main from "./src";

import CustomIcon from "./src/Icons/CustomIcon";

export default class App extends React.Component {
    state = {
        fontsLoaded: true
    };

    async componentDidMount() {
        await Font.loadAsync({
            CustomIcon: require("./src/Icons/CustomIcon.ttf")
        });

        this.setState({
            fontsLoaded: false
        });
    }
    render() {
        if (this.state.fontsLoaded) {
            return <Text>Loading....</Text>;
        }

        return <Main />;
    }
}
