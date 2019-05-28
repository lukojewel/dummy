/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-14 00:04:14
 * @modify date 2019-05-14 00:04:14
 * @desc [description]
 */

import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    RefreshControl
} from "react-native";
import { Button, Card } from "react-native-elements";

import CustomIcon from "../../Icons/CustomIcon";

export class index extends Component {
    state = {
        isActive: "latest",
        refreshing: false
    };

    tabSelect = name => {
        this.setState({ isActive: name });
    };

    render() {
        return (
            <View
                style={{
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    flex: 1
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        marginBottom: 5
                    }}
                >
                    <Button
                        title="Latest"
                        onPress={() => this.tabSelect("latest")}
                        buttonStyle={{
                            paddingHorizontal: 11,
                            paddingVertical: 9,
                            marginRight: 20,
                            borderColor:
                                this.state.isActive == "latest"
                                    ? "#ed4c14"
                                    : null
                        }}
                        titleStyle={{
                            fontFamily: "Poppins-Regular",
                            fontSize: 11,
                            color:
                                this.state.isActive == "latest"
                                    ? "#000"
                                    : "#a4a4a4"
                        }}
                        type={
                            this.state.isActive == "latest"
                                ? "outline"
                                : "clear"
                        }
                    />
                    <Button
                        title="No. of claims"
                        onPress={() => this.tabSelect("no_of_claims")}
                        buttonStyle={{
                            paddingHorizontal: 11,
                            paddingVertical: 9,
                            borderColor:
                                this.state.isActive == "no_of_claims"
                                    ? "#ed4c14"
                                    : null
                        }}
                        titleStyle={{
                            fontFamily: "Poppins-Regular",
                            fontSize: 11,
                            color:
                                this.state.isActive == "no_of_claims"
                                    ? "#000"
                                    : "#a4a4a4"
                        }}
                        type={
                            this.state.isActive == "no_of_claims"
                                ? "outline"
                                : "clear"
                        }
                    />
                </View>
                <View>{this.renderContent()}</View>

                {/* Slipet for scan fixed icon on bottom right corner */}
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        bottom: 20,
                        right: 20,
                        zIndex: 100,
                        height: 54,
                        width: 54,
                        borderRadius: 54,
                        backgroundColor: "#ed4c14",
                        overflow: "hidden",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 4
                        },
                        shadowOpacity: 0.68,
                        shadowRadius: 5,
                        elevation: 4
                    }}
                    onPress={() => this.props.navigation.navigate("QRScanner")}
                    activeOpacity={0.8}
                >
                    <View
                        style={{
                            flex: 1,
                            alignSelf: "center",
                            justifyContent: "center"
                        }}
                    >
                        <CustomIcon name="lt_qr_code" size={20} color="#FFF" />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    _onRefresh = () => {
        this.setState({ refreshing: true });
        setTimeout(() => {
            this.setState({ refreshing: false });
        }, 2000);
    };

    renderContent = () => {
        switch (this.state.isActive) {
            case "latest":
                return (
                    <ScrollView
                        contentContainerStyle={styles.contentContainer}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
                    >
                        {[1, 2].map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        flex: 1,
                                        height: 84,
                                        flexDirection: "row",
                                        marginBottom: 10,
                                        borderWidth: 1,
                                        borderColor: "#e4e4e4",
                                        borderRadius: 6,
                                        overflow: "hidden"
                                    }}
                                    onPress={() =>
                                        this.props.navigation.navigate(
                                            "CouponsDetails"
                                        )
                                    }
                                    activeOpacity={0.8}
                                >
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: "row",
                                            height: 84
                                        }}
                                    >
                                        <View
                                            style={{
                                                flex: 2,
                                                width: 84,
                                                height: 84,
                                                overflow: "hidden"
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    flex: 1,
                                                    alignSelf: "center"
                                                }}
                                                resizeMode="contain"
                                                source={require("../../../assets/ccd-coffee.png")}
                                            />
                                        </View>
                                        <View
                                            style={{
                                                flex: 5,
                                                alignItems: "flex-start",
                                                justifyContent: "center"
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    marginHorizontal: 20,
                                                    fontFamily:
                                                        "Poppins-Medium",
                                                    fontSize: 12
                                                }}
                                            >
                                                Flat {item}0% discount on all
                                                our products for first 100
                                                couples
                                            </Text>
                                            <Text
                                                style={{
                                                    marginHorizontal: 20,
                                                    marginTop: 5,
                                                    fontFamily: "Poppins-Light",
                                                    fontSize: 10,
                                                    color: "#ed4c14"
                                                }}
                                            >
                                                30 days left
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                );
                break;

            case "no_of_claims":
                return (
                    <ScrollView
                        contentContainerStyle={styles.contentContainer}
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh}
                            />
                        }
                    >
                        <View
                            style={{
                                height: 300
                                // backgroundColor: "#EDEDED"
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignSelf: "center"
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#666",
                                        fontFamily: "Poppins-Medium",
                                        fontSize: 12
                                    }}
                                >
                                    Zero State
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                );
                break;

            default:
                return (
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        <Text> Loading... </Text>
                    </ScrollView>
                );
                break;
        }
    };
}

export default index;

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 5,
        marginBottom: 20
    }
});
