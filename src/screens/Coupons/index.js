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
                    padding: 10
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
                        title="Expiring soon"
                        onPress={() => this.tabSelect("expiring_soon")}
                        buttonStyle={{
                            padding: 6,
                            borderColor:
                                this.state.isActive == "expiring_soon"
                                    ? "red"
                                    : null
                        }}
                        titleStyle={{
                            color:
                                this.state.isActive == "expiring_soon"
                                    ? "#333"
                                    : "#666"
                        }}
                        type={
                            this.state.isActive == "expiring_soon"
                                ? "outline"
                                : "clear"
                        }
                    />
                </View>
                <View style={{ marginBottom: 80 }}>{this.renderContent()}</View>

                {/* Slipet for scan fixed icon on bottom right corner */}
                <TouchableOpacity
                    style={{
                        position: "absolute",
                        bottom: 60,
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
                    onPress={() => alert("Scan comming.... ")}
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
                        {[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map(
                            (item, index) => {
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
                                        onPress={() => alert("Hay " + index)}
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
                                                    Flat {item}0% discount on
                                                    all our products for first
                                                    100 couples
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
                            }
                        )}
                    </ScrollView>
                );
                break;

            case "expiring_soon":
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
                                height: 300,
                                backgroundColor: "#EDEDED"
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
        paddingVertical: 5
    }
});
