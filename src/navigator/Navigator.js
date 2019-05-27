/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-13 23:13:31
 * @modify date 2019-05-13 23:13:31
 * @desc [description]
 */

import React, { Component } from "react";
import { View, Text, Image, Platform, StyleSheet } from "react-native";
import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
    createBottomTabNavigator
} from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
    Splash,
    Users,
    Coupons,
    Claims,
    CreateCoupons,
    CouponsDetails,
    ClaimDetails,
    Profile
} from "../screens";
import CustomIcon from "../Icons/CustomIcon";
import { Logo, HeaderTitle, QRScanner } from "../common";
import {
    Signup,
    LocationDetails,
    ShopDetails,
    Login,
    PhoneVerification,
    OTPVerification
} from "../screens/Users";
import { Button } from "react-native-elements";

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: "#fff"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold"
    }
};

const CouponsStack = createStackNavigator(
    {
        Coupons: {
            screen: Coupons,
            navigationOptions: ({ navigation }) => {
                return {
                    // headerTitle: "Coupons",
                    headerLeft: (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "flex-start",
                                flexDirection: "row"
                            }}
                        >
                            <Logo
                                onPress={() => navigation.navigate("Profile")}
                            />
                            <HeaderTitle title="Coupons" subText="Your" />
                        </View>
                    )
                };
            }
        }
    },
    {
        defaultNavigationOptions,
        navigationOptions: {
            tabBarLabel: "Coupons"
        }
    }
);

const CreateCouponsStack = createStackNavigator(
    {
        CreateCoupons: {
            screen: CreateCoupons,
            navigationOptions: ({ navigation }) => {
                return {
                    headerTitle: "Create Coupons",
                    headerLeft: (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "flex-start",
                                flexDirection: "row"
                            }}
                        >
                            <CustomIcon
                                name="lt_back"
                                size={15}
                                style={[styles.headerIcon, { color: "#000" }]}
                                onPress={() => {
                                    navigation.goBack(null);
                                }}
                            />
                            <HeaderTitle title="New Coupon" subText="Create" />
                        </View>
                    )
                };
            }
        }
    },
    {
        defaultNavigationOptions,
        navigationOptions: {
            tabBarLabel: "Create Coupons",
            tabBarVisible: false
        }
    }
);
const ClaimsStack = createStackNavigator(
    {
        Claims: {
            screen: Claims,
            navigationOptions: ({ navigation }) => {
                return {
                    headerLeft: (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "flex-start",
                                flexDirection: "row"
                            }}
                        >
                            <Logo
                                onPress={() => navigation.navigate("Profile")}
                            />
                            <HeaderTitle title="Claims" subText="All" />
                        </View>
                    )
                };
            }
        }
    },
    {
        defaultNavigationOptions,
        navigationOptions: {
            tabBarLabel: "Claims"
        }
    }
);

const MainTabNavigator = createBottomTabNavigator(
    {
        CouponsStack,
        CreateCouponsStack,
        ClaimsStack
    },
    {
        navigationOptions: ({ navigation }) => {
            const { routeName } = navigation.state.routes[
                navigation.state.index
            ];
            return {
                header: null,
                headerTitle: routeName
            };
        },
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === "CouponsStack") {
                    iconName = `lt_coupon`;
                } else if (routeName === "CreateCouponsStack") {
                    iconName = `lt_plus`;
                    return (
                        <View
                            style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                position: "absolute",
                                padding: 5,
                                backgroundColor: "#FFF",
                                bottom: 5,
                                borderRadius: 50,
                                height: 50,
                                width: 50
                            }}
                        >
                            <CustomIcon
                                name="lt_plus"
                                size={20}
                                color={tintColor}
                            />
                        </View>
                    );
                } else if (routeName === "ClaimsStack") {
                    iconName = `lt_claim`;
                }

                return (
                    <CustomIcon name={iconName} size={16} color={tintColor} />
                );
            }
        }),
        tabBarOptions: {
            activeTintColor: "tomato",
            inactiveTintColor: "gray"
        }
    }
);
const TabsStackNavigator = createStackNavigator({
    MainTabNavigator: MainTabNavigator,
    QRScanner: {
        screen: QRScanner,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "flex-start",
                            flexDirection: "row"
                        }}
                    >
                        <CustomIcon
                            name="lt_back"
                            size={15}
                            style={[styles.headerIcon, { color: "#000" }]}
                            onPress={() => navigation.pop()}
                        />
                        <HeaderTitle title="Scan QR code" />
                    </View>
                )
            };
        }
    },
    CouponsDetails: {
        screen: CouponsDetails,
        navigationOptions: () => {
            return {
                header: null,
                headerTitle: "Coupon Details"
            };
        }
    },
    ClaimDetails: {
        screen: ClaimDetails,
        navigationOptions: () => {
            return {
                header: null,
                headerTitle: "Claim Details"
            };
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "flex-start",
                            flexDirection: "row"
                        }}
                    >
                        <CustomIcon
                            name="lt_cancel"
                            size={15}
                            style={[styles.headerIcon, { color: "#000" }]}
                            onPress={() => navigation.pop()}
                        />
                        <HeaderTitle title="Profile" subText="Store" />
                    </View>
                ),
                headerRight: (
                    <Button
                        title="Edit Profile"
                        type="outline"
                        buttonStyle={{
                            marginVertical: 14,
                            marginHorizontal: 20,
                            borderColor: "#ee3a43",
                            borderRadius: 3.3
                        }}
                        titleStyle={{
                            paddingHorizontal: 10,
                            paddingVertical: 20,
                            color: "#ed4c14",
                            fontFamily: "Poppins-SemiBold",
                            fontSize: 10
                        }}
                    />
                )
            };
        }
    }
});

const RegisterStack = createStackNavigator({
    Signup: {
        screen: Signup,
        navigationOptions: () => {
            return {
                header: null
            };
        }
    },
    ShopDetails: {
        screen: ShopDetails,
        navigationOptions: () => {
            return {
                header: null
                // headerTitle: "Shop Details"
            };
        }
    },
    LocationDetails: {
        screen: LocationDetails,
        navigationOptions: () => {
            return {
                header: null
                // headerTitle: "Location Details"
            };
        }
    }
});

const LoginStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: () => {
            return {
                header: null
            };
        }
    },
    PhoneVerification: {
        screen: PhoneVerification,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "flex-start",
                            flexDirection: "row"
                        }}
                    >
                        <CustomIcon
                            name="lt_back"
                            size={15}
                            style={[styles.headerIcon, { color: "#000" }]}
                            onPress={() => navigation.pop()}
                        />
                        <HeaderTitle title="Verification" subText="Phone" />
                    </View>
                )
            };
        }
    },
    OTPVerification: {
        screen: OTPVerification,
        navigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "flex-start",
                            flexDirection: "row"
                        }}
                    >
                        <CustomIcon
                            name="lt_back"
                            size={15}
                            style={[styles.headerIcon, { color: "#000" }]}
                            onPress={() => navigation.pop()}
                        />
                        <HeaderTitle title="Verification" subText="OTP" />
                    </View>
                )
            };
        }
    }
});

const AppSwitchNavigator = createSwitchNavigator({
    UserLogin: { screen: LoginStack },
    Register: { screen: RegisterStack },
    Tabs: { screen: TabsStackNavigator }
});

export default createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
    title: {
        color: "#fff",
        fontSize: 14,
        lineHeight: 16,
        fontFamily: "Poppins-SemiBold"
    },
    headerIcon: {
        color: "#fff",
        margin: 20
    }
});
