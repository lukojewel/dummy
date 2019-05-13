/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-13 22:50:09
 * @modify date 2019-05-13 22:50:09
 * @desc [description]
 */
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";

//My imports
import { Provider } from "react-redux";
import store from "./store";
import Navigator from "./navigator";
import Theme from "./app-properties";

export default class index extends Component {
    render() {
        return (
            <Provider store={store}>
                <SafeAreaView
                    style={styles.container}
                    forceInset={{ top: "always" }}
                >
                    <Navigator />
                </SafeAreaView>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.primaryColor
    }
});
