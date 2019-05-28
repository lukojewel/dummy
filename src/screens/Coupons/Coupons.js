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
    RefreshControl,
    Dimensions
} from "react-native";
import { Button } from "react-native-elements";
import { ZeroState } from "../../common";

import CustomIcon from "../../Icons/CustomIcon";
const { height, width } = Dimensions.get("window");
import { textFontSize } from "../../utils/UtilityFunctions";

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
                            paddingVertical: 3,
                            marginRight: 20,
                            borderColor:
                                this.state.isActive == "latest"
                                    ? "#ed4c14"
                                    : null
                        }}
                        titleStyle={{
                            fontFamily: "Poppins-Regular",
                            fontSize: textFontSize(11),
                            color:
                                this.state.isActive == "expiring_soon"
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
                        title="Expiring soon"
                        onPress={() => this.tabSelect("expiring_soon")}
                        buttonStyle={{
                            paddingHorizontal: 11,
                            paddingVertical: 3,
                            borderColor:
                                this.state.isActive == "expiring_soon"
                                    ? "#ed4c14"
                                    : null
                        }}
                        titleStyle={{
                            fontFamily: "Poppins-Regular",
                            fontSize: textFontSize(11),
                            color:
                                this.state.isActive == "expiring_soon"
                                    ? "#000"
                                    : "#a4a4a4"
                        }}
                        type={
                            this.state.isActive == "expiring_soon"
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
                        {[1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map(
                            (item, index) => {
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
                                                        fontSize: textFontSize(
                                                            12
                                                        )
                                                    }}
                                                >
                                                    Flat {item}0% discount on
                                                    all our products for first
                                                    100 couples
                                                </Text>
                                                <Text
                                                    style={{
                                                        marginHorizontal: 20,
                                                        marginTop: 5,
                                                        fontFamily:
                                                            "Poppins-Light",
                                                        fontSize: textFontSize(
                                                            10
                                                        ),
                                                        color: "#ed4c14"
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
                    <View
                        style={{
                            justifyContent: "center",
                            alignSelf: "center"
                        }}
                    >
                        <ZeroState />
                    </View>
                );
                break;

            default:
                return (
                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        <Text
                            style={{
                                fontFamily: "Poppins-Light",
                                fontSize: textFontSize(10)
                            }}
                        >
                            {" "}
                            Loading...{" "}
                        </Text>
                    </ScrollView>
                );
                break;
        }
    };
}

export default index;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        paddingVertical: 5,
        marginBottom: 60
    }
});
