/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-20 20:34:38
 * @modify date 2019-05-20 20:34:38
 * @desc [description]
 */

import React, { Component } from "react";
import {
    Animated,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View,
    RefreshControl
} from "react-native";

import { DetailContainer } from "../../common";
import CustomIcon from "../../Icons/CustomIcon";
import { textFontSize } from "../../utils/UtilityFunctions";

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class CouponsDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(
                // iOS has negative initial scroll value because content inset...
                Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0
            ),
            refreshing: false
        };
    }

    _renderScrollViewContent() {
        const data = Array.from({ length: 30 });
        return (
            <View style={styles.scrollViewContent}>
                <View
                    style={{
                        borderTopEndRadius: 20,
                        borderTopStartRadius: 20,
                        backgroundColor: "#fff"
                    }}
                >
                    <DetailContainer />
                </View>
            </View>
        );
    }

    render() {
        // Because of content inset the scroll value will be negative on iOS so bring
        // it back to 0.
        const scrollY = Animated.add(
            this.state.scrollY,
            Platform.OS === "ios" ? HEADER_MAX_HEIGHT : 0
        );
        const headerTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -HEADER_SCROLL_DISTANCE],
            extrapolate: "clamp"
        });

        const imageOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: "clamp"
        });
        const titleOpacity = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 1, 1],
            extrapolate: "clamp"
        });
        const imageTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 100],
            extrapolate: "clamp"
        });

        const titleScale = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 1],
            extrapolate: "clamp"
        });
        const titleTranslate = scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [0, 0, -8],
            extrapolate: "clamp"
        });

        return (
            <View style={styles.fill}>
                <StatusBar
                    translucent
                    barStyle="light-content"
                    backgroundColor="rgba(0, 0, 0, 0.251)"
                />
                <Animated.ScrollView
                    style={styles.fill}
                    scrollEventThrottle={1}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: { y: this.state.scrollY }
                                }
                            }
                        ],
                        { useNativeDriver: true }
                    )}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => {
                                this.setState({ refreshing: true });
                                setTimeout(
                                    () => this.setState({ refreshing: false }),
                                    1000
                                );
                            }}
                            // Android offset for RefreshControl
                            progressViewOffset={HEADER_MAX_HEIGHT}
                        />
                    }
                    // iOS offset for RefreshControl
                    contentInset={{
                        top: HEADER_MAX_HEIGHT
                    }}
                    contentOffset={{
                        y: -HEADER_MAX_HEIGHT
                    }}
                >
                    {this._renderScrollViewContent()}
                </Animated.ScrollView>
                <Animated.View
                    pointerEvents="none"
                    style={[
                        styles.header,
                        { transform: [{ translateY: headerTranslate }] }
                    ]}
                >
                    <Animated.Image
                        style={[
                            styles.backgroundImage,
                            {
                                opacity: imageOpacity,
                                transform: [{ translateY: imageTranslate }]
                            }
                        ]}
                        source={require("../../../assets/event.png")}
                    />
                </Animated.View>
                <Animated.View
                    style={[
                        styles.bar,
                        {
                            opacity: titleOpacity,
                            transform: [
                                { scale: titleScale },
                                { translateY: titleTranslate }
                            ]
                        }
                    ]}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "flex-start",
                                flexDirection: "row",
                                paddingLeft: 10,
                                paddingTop: 9
                            }}
                        >
                            <CustomIcon
                                name="lt_back"
                                size={15}
                                style={[styles.headerIcon, { color: "#000" }]}
                                onPress={() => this.props.navigation.pop()}
                            />
                        </View>
                        <View style={{ flex: 3, justifyContent: "center" }}>
                            <Text
                                style={[
                                    styles.title,
                                    {
                                        color: "#000"
                                    }
                                ]}
                            >
                                Cafe Coffee Day
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "flex-end",
                                flexDirection: "row",
                                paddingLeft: 10,
                                paddingTop: 8
                            }}
                        >
                            <CustomIcon
                                name="lt_edit"
                                size={16}
                                style={[
                                    styles.headerIcon,
                                    { color: "#000", marginHorizontal: 10 }
                                ]}
                                onPress={() => {}}
                            />
                            <CustomIcon
                                name="lt_qr_code_2"
                                size={16}
                                style={[
                                    styles.headerIcon,
                                    { color: "#000", marginHorizontal: 10 }
                                ]}
                                onPress={() =>
                                    this.props.navigation.navigate("QRScanner")
                                }
                            />
                        </View>
                    </View>
                </Animated.View>
                <Animated.View
                    style={[
                        styles.bar,
                        {
                            opacity: imageOpacity,
                            transform: [
                                { scale: titleScale },
                                { translateY: titleTranslate }
                            ]
                        }
                    ]}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "flex-start",
                                flexDirection: "row",
                                paddingLeft: 10,
                                paddingTop: 9
                            }}
                        >
                            <CustomIcon
                                name="lt_back"
                                size={15}
                                style={styles.headerIcon}
                                onPress={() => this.props.navigation.pop()}
                            />
                        </View>
                        <View style={{ flex: 3, justifyContent: "center" }}>
                            <Text style={styles.title}>Cafe Coffee Day</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "flex-end",
                                flexDirection: "row",
                                paddingLeft: 10,
                                paddingTop: 8
                            }}
                        >
                            <CustomIcon
                                name="lt_edit"
                                size={16}
                                style={[
                                    styles.headerIcon,
                                    { marginHorizontal: 10 }
                                ]}
                                onPress={() => {}}
                            />
                            <CustomIcon
                                name="lt_qr_code_2"
                                size={16}
                                style={[
                                    styles.headerIcon,
                                    { marginHorizontal: 10 }
                                ]}
                                onPress={() =>
                                    this.props.navigation.navigate("QRScanner")
                                }
                            />
                        </View>
                    </View>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fill: {
        flex: 1
    },
    content: {
        flex: 1
    },
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        overflow: "hidden",
        height: HEADER_MAX_HEIGHT
    },
    backgroundImage: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: "cover"
    },
    bar: {
        backgroundColor: "transparent",
        marginTop: Platform.OS === "ios" ? 28 : 38,
        height: 32,
        // alignItems: "center",
        // justifyContent: "center",
        flexDirection: "row",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
    },
    title: {
        color: "#fff",
        fontSize: textFontSize(14),
        lineHeight: 16,
        marginBottom: -4,
        fontFamily: "Poppins-SemiBold"
    },
    headerIcon: {
        color: "#fff",
        marginHorizontal: 20
    },
    scrollViewContent: {
        // iOS uses content inset, which acts like padding.
        paddingTop: Platform.OS !== "ios" ? HEADER_MAX_HEIGHT : 0,
        backgroundColor: "#000"
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: "#D3D3D3",
        alignItems: "center",
        justifyContent: "center"
    }
});
