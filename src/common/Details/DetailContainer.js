/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-21 12:47:10
 * @modify date 2019-05-21 12:47:10
 * @desc [description]
 */

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class DetailContainer extends Component {
    render() {
        return (
            <View style={style.container}>
                <View style={style.headerContainer}>
                    <View style={{ flex: 1 }}>
                        <View
                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: 50,
                                backgroundColor: "#CCC"
                            }}
                        />
                    </View>
                    <View style={{ flex: 4 }}>
                        <View
                            style={[
                                style.headerContainer,
                                { paddingVertical: 5 }
                            ]}
                        >
                            <Text style={style.expiryText}>EXPIRES ON:</Text>
                            <Text style={style.dateText}>
                                April 5, 2019 5:00 pm
                            </Text>
                        </View>
                        <View style={{ flex: 1, paddingVertical: 5 }}>
                            <Text style={style.titleText}>
                                Flat 50% discount on all our products for first
                                100 couples
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                borderBottomWidth: 1,
                                borderColor: "#CCC"
                            }}
                        />
                        <View
                            style={{
                                flex: 1,
                                paddingVertical: 5,
                                flexDirection: "row"
                            }}
                        >
                            <Text
                                style={{
                                    padding: 5,
                                    paddingHorizontal: 15,
                                    borderRadius: 6,
                                    backgroundColor: "#85b2bf"
                                }}
                            >
                                5 days left
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={style.bodyContainer}>
                    <View>
                        <Text style={style.titleText}>Notes:</Text>
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
                            <Text>{"\u2022"}</Text>
                            <Text style={{ flex: 1, paddingLeft: 5 }}>
                                But I'm not sure how to express the need for all
                                3 line elements (bullet, bolded text and normal
                                text)
                            </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginVertical: 5 }}>
                        <Text>Read More</Text>
                    </View>
                    <View
                        style={{
                            marginVertical: 25,
                            borderWidth: 0.5,
                            borderColor: "#EDEDED",
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
                                borderColor: "#EDEDED",
                                backgroundColor: "#ffe6de5e",
                                padding: 20
                            }}
                        >
                            <View>
                                <Text style={{ color: "tomato" }}>Claims</Text>
                            </View>
                            <View>
                                <Text style={{ color: "tomato" }}>3/200</Text>
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
                        <View
                            style={{
                                height: 50,
                                width: 50,
                                borderRadius: 50,
                                backgroundColor: "#CCC"
                            }}
                        />
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
                                        fontSize: 12,
                                        alignSelf: "flex-end"
                                    }}
                                >
                                    Bill{" "}
                                    <Text
                                        style={[style.name, { fontSize: 14 }]}
                                    >
                                        {"\u20B9"} 400
                                    </Text>
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        alignSelf: "flex-end"
                                    }}
                                >
                                    Discount{" "}
                                    <Text
                                        style={[
                                            style.name,
                                            { fontSize: 14, color: "tomato" }
                                        ]}
                                    >
                                        {"\u20B9"} 40
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
    container: { padding: 20, flex: 1 },
    headerContainer: { flexDirection: "row" },
    bodyContainer: {
        flex: 1,
        marginVertical: 25
    },
    expiryText: {
        color: "tomato",
        fontWeight: "800",
        fontSize: 14
    },
    dateText: {
        fontSize: 14,
        alignSelf: "center",
        paddingLeft: 15
    },
    date: {
        color: "#CCC",
        fontSize: 12
    },
    name: {
        fontWeight: "800"
    },
    titleText: {
        paddingBottom: 10,
        fontSize: 14,
        fontFamily: "Poppins-Medium"
    }
});
