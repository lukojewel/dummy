/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-13 23:13:31
 * @modify date 2019-05-13 23:13:31
 * @desc [description]
 */

import React, { Component } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
    createBottomTabNavigator
} from "react-navigation";

import { textFontSize } from "../utils/UtilityFunctions";
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
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0
                    },
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
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0
                    },
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
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0
                    },
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
                let tabLabel;
                if (routeName === "CouponsStack") {
                    iconName = `lt_coupon`;
                    tabLabel = "Coupons";
                } else if (routeName === "CreateCouponsStack") {
                    iconName = `lt_plus`;
                    tabLabel = "Create Coupons";
                    return (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "absolute",
                                    padding: 2,
                                    backgroundColor: "#fff",
                                    bottom: 22,
                                    borderRadius: 40,
                                    height: 40,
                                    width: 40
                                }}
                            >
                                <CustomIcon
                                    name="lt_plus"
                                    size={20}
                                    color={tintColor}
                                />
                            </View>
                            <Text
                                style={{
                                    fontFamily: "Poppins-SemiBold",
                                    fontSize: textFontSize(6),
                                    margin: 5,
                                    marginBottom: -10,
                                    color: tintColor
                                }}
                            >
                                {tabLabel}
                            </Text>
                        </View>
                    );
                } else if (routeName === "ClaimsStack") {
                    iconName = `lt_claim`;
                    tabLabel = "Claims";
                }

                return (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <CustomIcon
                            name={iconName}
                            size={16}
                            color={tintColor}
                        />
                        <Text
                            style={{
                                fontFamily: "Poppins-SemiBold",
                                fontSize: textFontSize(6),
                                margin: 5,
                                color: tintColor
                            }}
                        >
                            {tabLabel}
                        </Text>
                    </View>
                );
            }
        }),

        tabBarOptions: {
            showLabel: false,
            activeTintColor: "#ed4c14",
            inactiveTintColor: "#010101",
            style: {
                elevation: 22,
                shadowOffset: {
                    width: 0,
                    height: 4
                },
                shadowRadius: 22,
                shadowColor: "#000",
                borderTopWidth: 0
            },
            labelStyle: {
                fontFamily: "Poppins-SemiBold",
                fontSize: textFontSize(6)
            }
        }
    }
);
const TabsStackNavigator = createStackNavigator({
    MainTabNavigator: MainTabNavigator,
    QRScanner: {
        screen: QRScanner,
        navigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0
                },
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
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0
                },
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
                            fontSize: textFontSize(10)
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
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0
                },
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
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0
                },
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
        fontSize: textFontSize(14),
        lineHeight: 16,
        fontFamily: "Poppins-SemiBold"
    },
    headerIcon: {
        color: "#fff",
        margin: 20
    }
});
