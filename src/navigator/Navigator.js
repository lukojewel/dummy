/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-13 23:13:31
 * @modify date 2019-05-13 23:13:31
 * @desc [description]
 */

import React, { Component } from "react";
import { View, Text, Image, Platform } from "react-native";
import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
    createBottomTabNavigator
} from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Splash, Users, Coupons, Claims, CreateCoupons } from "../screens";
import CustomIcon from "../Icons/CustomIcon";

import { Logo, HeaderTitle } from "../common";

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: "#fff"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: "bold"
    }
};

const Detail = props => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detail</Text>
    </View>
);

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
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: -20
                            }}
                        >
                            {<Logo />}
                            {<HeaderTitle title="Coupons" subText="Your" />}
                        </View>
                    )
                };
            }
        },
        Detail: {
            screen: Detail
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
                    // headerTitle: "Create Coupons",
                    headerLeft: (
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: -20
                            }}
                        >
                            {<Logo />}
                            {
                                <HeaderTitle
                                    title="Create Coupons"
                                    subText="Your"
                                />
                            }
                        </View>
                    )
                };
            }
        }
    },
    {
        defaultNavigationOptions,
        navigationOptions: {
            tabBarLabel: "Create Coupons"
        }
    }
);
const ClaimsStack = createStackNavigator(
    {
        Claims: {
            screen: Claims,
            navigationOptions: ({ navigation }) => {
                return {
                    // headerTitle: "Claims",
                    headerLeft: (
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: -20
                            }}
                        >
                            {<Logo />}
                            {<HeaderTitle title="Claims" subText="Your" />}
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
                                size={25}
                                color={tintColor}
                            />
                        </View>
                    );
                } else if (routeName === "ClaimsStack") {
                    iconName = `lt_claim`;
                }

                // You can return any component that you like here!
                return (
                    <CustomIcon name={iconName} size={24} color={tintColor} />
                );
            }
        }),
        tabBarOptions: {
            activeTintColor: "tomato",
            inactiveTintColor: "gray"
        }
    }
);
const TabsStackNavigator = createStackNavigator(
    {
        MainTabNavigator: MainTabNavigator
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: (
                    <Icon
                        style={{ paddingLeft: 10 }}
                        name="md-menu"
                        size={30}
                    />
                )
            };
        }
    }
);

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: { screen: TabsStackNavigator },
    Tabs: { screen: TabsStackNavigator },
    Users: { screen: Users }
});

export default createAppContainer(AppSwitchNavigator);
