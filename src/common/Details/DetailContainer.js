/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-21 12:47:10
 * @modify date 2019-05-21 12:47:10
 * @desc [description]
 */

import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";

import Logo from "../Image/Logo";
const { height, width } = Dimensions.get("window");

export class DetailContainer extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.headerContainer}>
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Logo />
                        </View>
                    </View>
                    <View style={{ flex: 4 }}>
                        <View style={[style.headerContainer, {}]}>
                            <Text style={style.expiryText}>EXPIRES ON:</Text>
                            <Text style={style.dateText}>
                                April 5, 2019 5:00 pm
                            </Text>
                        </View>
                        <View style={{ flex: 1, marginBottom: 10 }}>
                            <Text style={style.titleText}>
                                Flat 50% discount on all our products for first
                                100 couples
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                borderBottomWidth: 1,
                                borderColor: "#e4e4e4"
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                                marginVertical: 10,
                                flexDirection: "row"
                            }}
                        >
                            <Text
                                style={{
                                    padding: 5,
                                    paddingHorizontal: 15,
                                    borderRadius: 6,
                                    backgroundColor: "#cbe0f9",
                                    color: "#003370",
                                    fontFamily: "Poppins-Regular",
                                    fontSize: 10
                                }}
                            >
                                5 days left
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={style.bodyContainer}>
                    <View>
                        <Text
                            style={{
                                fontFamily: "Poppins-SemiBold",
                                fontSize: 10
                            }}
                        >
                            Notes:
                        </Text>
                    </View>
                    <View>
                        <View
                            style={{ flexDirection: "row", marginVertical: 5 }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Poppins-Light",
                                    fontSize: 10,
                                    lineHeight: 16.7
                                }}
                            >
                                {"\u2022"}
                            </Text>
                            <Text
                                style={{
                                    flex: 1,
                                    paddingLeft: 5,
                                    fontFamily: "Poppins-Light",
                                    fontSize: 10,
                                    lineHeight: 16.7
                                }}
                            >
                                React-native doesn't seem to like my use of
                                nested flex boxes.
                            </Text>
                        </View>
                        <View
                            style={{ flexDirection: "row", marginVertical: 5 }}
                        >
                            <Text
                                style={{
                                    fontFamily: "Poppins-Light",
                                    fontSize: 10,
                                    lineHeight: 16.7
                                }}
                            >
                                {"\u2022"}
                            </Text>
                            <Text
                                style={{
                                    flex: 1,
                                    paddingLeft: 5,
                                    fontFamily: "Poppins-Light",
                                    fontSize: 10,
                                    lineHeight: 16.7
                                }}
                            >
                                But I'm not sure how to express the need for all
                                3 line elements (bullet, bolded text and normal
                                text)
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginVertical: 5 }}>
                        <Text
                            style={{
                                color: "#003370",
                                fontFamily: "Poppins-Medium",
                                fontSize: 10
                            }}
                        >
                            Read More
                        </Text>
                    </View>
                    <View
                        style={{
                            marginVertical: 25,
                            borderWidth: 0.5,
                            borderColor: "#e4e4e4",
                            borderRadius: 6,
                            overflow: "hidden"
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                borderBottomWidth: 0.5,
                                borderColor: "#e4e4e4",
                                backgroundColor: "#fefaf8",
                                paddingHorizontal: 20,
                                paddingVertical: 15
                            }}
                        >
                            <View>
                                <Text
                                    style={{
                                        fontFamily: "Poppins-SemiBold",
                                        color: "#ed4c14",
                                        fontSize: 10
                                    }}
                                >
                                    Claims
                                </Text>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        fontFamily: "Poppins-Regular",
                                        color: "#ee5926",
                                        fontSize: 12
                                    }}
                                >
                                    3/200
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                paddingHorizontal: 10
                            }}
                        >
                            {this.renderTableContent()}
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    renderTableContent = () => {
        return [1, 2, 3].map((item, index) => {
            return (
                <View
                    key={index}
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignSelf: "center",
                        borderBottomWidth: 0.5,
                        borderColor: "#EDEDED",
                        padding: 10
                    }}
                >
                    <View style={{ marginRight: 10 }}>
                        <View>
                            <Image
                                style={{
                                    height: 33,
                                    width: 33,
                                    borderRadius: 33
                                }}
                                source={require("../../../assets/aviator.png")}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            alignSelf: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <View>
                            <View>
                                <Text style={style.name}>James John</Text>
                                <Text style={style.date}>
                                    April 5, 2019 5:00 pm
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View
                                style={{
                                    alignContent: "flex-end"
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 6,
                                        fontFamily: "Poppins-Medium",
                                        alignSelf: "flex-end"
                                    }}
                                >
                                    Bill{" "}
                                    <Text
                                        style={[style.name, { fontSize: 10 }]}
                                    >
                                        {"\u20B9"} 800
                                    </Text>
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 6,
                                        fontFamily: "Poppins-Medium",
                                        alignSelf: "flex-end"
                                    }}
                                >
                                    Discount{" "}
                                    <Text
                                        style={[
                                            style.name,
                                            { fontSize: 10, color: "#ff0107" }
                                        ]}
                                    >
                                        {"\u20B9"} 300
                                    </Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        });
    };
}

export default DetailContainer;

const style = StyleSheet.create({
    container: { padding: 20, flex: 1, minHeight: height },
    headerContainer: { flexDirection: "row" },
    bodyContainer: {
        flex: 1,
        marginVertical: 25
    },
    expiryText: {
        fontFamily: "Poppins-Bold",
        color: "#ed4c14",
        fontSize: 10
    },
    dateText: {
        fontFamily: "Poppins-Regular",
        fontSize: 10,
        alignSelf: "center",
        paddingLeft: 15
    },
    date: {
        fontFamily: "Poppins-Regular",
        color: "#787878",
        fontSize: 8
    },
    name: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 10
    },
    titleText: {
        paddingVertical: 5,
        fontSize: 14,
        fontFamily: "Poppins-Medium"
    }
});
