/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-13 20:05:57
 * @modify date 2019-05-13 20:05:57
 * @desc [description]
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

//My imports
import i18nStrings from "../../constants/i18nStrings";
import Theme from "../../app-properties";

class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> {i18nStrings.appTitle} </Text>
            </View>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("Tabs");
        }, 200);
    }
}

const mapStateToProps = state => ({
    tickets: state.tickets
});

export default connect(
    mapStateToProps,
    {}
)(Splash);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: Theme.primaryColor,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: "#fff"
    }
});
