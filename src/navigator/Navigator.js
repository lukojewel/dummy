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
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderColor: "#EDEDED",
                                    borderWidth: 1,
                                    height: 50,
                                    width: 50,
                                    marginLeft: 10,
                                    padding: 5,
                                    borderRadius: 50,
                                    shadowColor: "#EDEDED",
                                    shadowOffset: {
                                        width: 0,
                                        height: 4
                                    },
                                    shadowOpacity: 0.18,
                                    shadowRadius: 1,

                                    elevation: 1
                                }}
                            >
                                <Image
                                    style={{
                                        alignSelf: "center",
                                        height: 37,
                                        width: 37,
                                        borderWidth: 1,
                                        borderRadius: 30
                                    }}
                                    source={require("../../assets/ccd1.png")}
                                />
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    marginLeft: 10
                                }}
                            >
                                <Text style={{ color: "#A8A4A4" }}>Your</Text>
                                <Text
                                    style={{
                                        color: "#000",
                                        fontWeight: "900"
                                    }}
                                >
                                    Coupons
                                </Text>
                            </View>
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
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#fff"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        },
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
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderColor: "#EDEDED",
                                    borderWidth: 1,
                                    height: 50,
                                    width: 50,
                                    marginLeft: 10,
                                    padding: 5,
                                    borderRadius: 50
                                }}
                            >
                                <Image
                                    style={{
                                        alignSelf: "center",
                                        height: 37,
                                        width: 37,
                                        borderWidth: 1,
                                        borderRadius: 30
                                    }}
                                    source={require("../../assets/ccd1.png")}
                                />
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    marginLeft: 10
                                }}
                            >
                                <Text style={{ color: "#A8A4A4" }}>Your</Text>
                                <Text
                                    style={{
                                        color: "#000",
                                        fontWeight: "900"
                                    }}
                                >
                                    Create Coupons
                                </Text>
                            </View>
                        </View>
                    )
                };
            }
        }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#fff"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        },
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
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderColor: "#EDEDED",
                                    borderWidth: 1,
                                    height: 50,
                                    width: 50,
                                    marginLeft: 10,
                                    padding: 5,
                                    borderRadius: 50
                                }}
                            >
                                <Image
                                    style={{
                                        alignSelf: "center",
                                        height: 37,
                                        width: 37,
                                        borderWidth: 1,
                                        borderRadius: 30
                                    }}
                                    source={require("../../assets/ccd1.png")}
                                />
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    alignItems: "flex-start",
                                    justifyContent: "center",
                                    marginLeft: 10
                                }}
                            >
                                <Text style={{ color: "#A8A4A4" }}>Your</Text>
                                <Text
                                    style={{
                                        color: "#000",
                                        fontWeight: "900"
                                    }}
                                >
                                    Claims
                                </Text>
                            </View>
                        </View>
                    )
                };
            }
        }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#fff"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        },
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

// tabBarIcon: ({tintColor}) =>
//       <View style={{
//           height: 80,
//           width: 80,
//           borderRadius: 100,
//           backgroundColor: '#FE6D64',
//           paddingTop: 15}}>
//         <Icon name="ios-heart-outline" type="ionicon" size={45}
//          color{tintColor}/>
//       </View>
//     }

const AppSwitchNavigator = createSwitchNavigator({
    Dashboard: { screen: TabsStackNavigator },
    Tabs: { screen: TabsStackNavigator },
    Users: { screen: Users }
});

export default createAppContainer(AppSwitchNavigator);
