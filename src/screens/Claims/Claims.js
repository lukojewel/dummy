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
                    padding: 10,
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
                            padding: 6,
                            marginRight: 20,
                            borderColor:
                                this.state.isActive == "latest" ? "red" : null
                        }}
                        titleStyle={{
                            color:
                                this.state.isActive == "latest"
                                    ? "#333"
                                    : "#666"
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
                            padding: 6,
                            marginRight: 20,
                            borderColor:
                                this.state.isActive == "no_of_claims"
                                    ? "red"
                                    : null
                        }}
                        titleStyle={{
                            color:
                                this.state.isActive == "no_of_claims"
                                    ? "#333"
                                    : "#666"
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
                        height: 60,
                        width: 60,
                        borderRadius: 100,
                        backgroundColor: "tomato",
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
                        <CustomIcon name="lt_qr_code" size={25} color="#FFF" />
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
                        {[1].map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        flex: 1,
                                        flexDirection: "row",
                                        marginBottom: 10,
                                        borderWidth: 1,
                                        borderColor: "#EDEDED",
                                        borderRadius: 6,
                                        overflow: "hidden"
                                    }}
                                    onPress={() =>
                                        this.props.navigation.navigate(
                                            "ClaimDetails"
                                        )
                                    }
                                    activeOpacity={0.8}
                                >
                                    <View
                                        style={{
                                            flex: 1,
                                            flexDirection: "row",
                                            height: 100
                                        }}
                                    >
                                        <View
                                            style={{
                                                flex: 2,
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
                                                justifyContent: "center",
                                                paddingHorizontal: 20
                                            }}
                                        >
                                            <Text>
                                                Flat {item}0% discount on all
                                                our products for first 100
                                                couples
                                            </Text>
                                            <Text
                                                style={{
                                                    color: "red",
                                                    fontWeight: "400",
                                                    fontSize: 12
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
                                <Text style={{ color: "#666" }}>
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
                        <Text> Latest </Text>
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
