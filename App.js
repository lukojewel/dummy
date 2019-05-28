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
            CustomIcon: require("./src/Icons/CustomIcon.ttf"),
            "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
            "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
            "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
            "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
            "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
            "Poppins-ThinItalic": require("./assets/fonts/Poppins-ThinItalic.ttf")
        });

        this.setState({
            fontsLoaded: false
        });
    }
    render() {
        if (this.state.fontsLoaded) {
            return (
                <View
                    style={{
                        flex: 1,
                        alignSelf: "center",
                        justifyContent: "center"
                    }}
                >
                    <Text>Loading....</Text>
                </View>
            );
        }

        return <Main />;
    }
}
