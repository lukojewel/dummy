/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-24 12:01:16
 * @modify date 2019-05-24 12:01:16
 * @desc [description]
 */

import React, { Component } from "react";
import {
    Text,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView
} from "react-native";
import { MapView, Location, Permissions } from "expo";
import { Input, Button } from "react-native-elements";

import { HeaderTitle } from "../../../common";
import CustomIcon from "../../../Icons/CustomIcon";

const { height, width } = Dimensions.get("window");

export class LocationDetails extends Component {
    state = {
        mapRegion: null,
        hasLocationPermissions: false,
        locationResult: null,
        focusId: ""
    };

    componentDidMount() {
        this._getLocationAsync();
    }

    _handleMapRegionChange = mapRegion => {
        console.log(mapRegion.nativeEvent.coordinate);
        this._getAddress(mapRegion.nativeEvent.coordinate);
        this.setState({
            mapRegion: {
                ...this.state.mapRegion,
                ...mapRegion.nativeEvent.coordinate
            }
        });
    };

    _getAddress = async coordinate => {
        let [address] = await Location.reverseGeocodeAsync(coordinate);
        console.log(address);
        this.setState({
            address
        });
    };

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== "granted") {
            this.setState({
                locationResult: "Permission to access location was denied"
            });
        } else {
            this.setState({ hasLocationPermissions: true });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ locationResult: JSON.stringify(location) });

        this._getAddress(location.coords);
        // Center the map on the location we just fetched.
        this.setState({
            mapRegion: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }
        });
    };

    _getCurrentLocation = async () => {
        let location = await Location.getCurrentPositionAsync({});
        console.log(location);
        this.setState({ locationResult: JSON.stringify(location) });
        this._getAddress(location.coords);
        // Center the map on the location we just fetched.
        this.setState({
            mapRegion: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }
        });
    };

    render() {
        const { mapRegion, address = {}, focusId } = this.state;
        let labelStyle = {
            fontWeight: "400",
            fontSize: 12,
            backgroundColor: "#FFF",
            position: "absolute",
            top: -15,
            left: 10,
            padding: 5
        };

        let initialLabelStyle = {
            position: "absolute",
            top: -15,
            left: 10,
            padding: 5
        };
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View
                            style={{
                                height: height * 0.65,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <View
                                style={{
                                    position: "absolute",
                                    top: 25,
                                    left: 25,
                                    zIndex: 100,
                                    backgroundColor: "#FFF",
                                    alignContent: "center",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: 50,
                                    width: 50,
                                    borderRadius: 50,
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
                            >
                                <CustomIcon
                                    name="lt_back"
                                    size={24}
                                    style={{
                                        color: "#000",
                                        fontWeight: "900",
                                        alignItems: "flex-start",
                                        marginLeft: 10,
                                        marginRight: 10
                                    }}
                                    onPress={() => {
                                        this.props.navigation.pop();
                                    }}
                                />
                            </View>
                            {this.state.locationResult === null ? (
                                <Text>Finding your current location...</Text>
                            ) : this.state.hasLocationPermissions === false ? (
                                <Text>
                                    Location permissions are not granted.
                                </Text>
                            ) : this.state.mapRegion === null ? (
                                <Text>Map region doesn't exist.</Text>
                            ) : (
                                <MapView
                                    style={{ alignSelf: "stretch", flex: 1 }}
                                    region={this.state.mapRegion}
                                    showsUserLocation={true}
                                    // provider=""
                                    // onRegionChange={this._handleMapRegionChange}
                                >
                                    {mapRegion && (
                                        <MapView.Marker
                                            draggable
                                            coordinate={mapRegion}
                                            onDragEnd={
                                                this._handleMapRegionChange
                                            }
                                        />
                                    )}
                                </MapView>
                            )}

                            {mapRegion && (
                                <View
                                    style={{
                                        position: "absolute",
                                        bottom: 30,
                                        right: 30,
                                        zIndex: 100,
                                        backgroundColor: "#FFF",
                                        alignContent: "center",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: 40,
                                        width: 40,
                                        borderRadius: 40,
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
                                >
                                    <TouchableOpacity
                                        activeOpacity={0.6}
                                        onPress={this._getCurrentLocation}
                                    >
                                        <Image
                                            style={{ height: 25, width: 25 }}
                                            source={require("../../../../assets/location.png")}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                        <View style={{ marginHorizontal: 20, flex: 1 }}>
                            <View style={{ marginVertical: 15 }}>
                                <HeaderTitle
                                    title="Location"
                                    subText="Set Store"
                                />
                            </View>
                            <View style={{ marginVertical: 15 }}>
                                <Input
                                    placeholder="Location"
                                    label={
                                        focusId == "location" ? "Location" : ""
                                    }
                                    labelStyle={
                                        focusId == "location"
                                            ? labelStyle
                                            : initialLabelStyle
                                    }
                                    containerStyle={{
                                        borderWidth: 1,
                                        borderRadius: 6,
                                        borderColor: "#EDEDED"
                                    }}
                                    inputContainerStyle={{
                                        borderBottomWidth: 0
                                    }}
                                    inputStyle={{
                                        fontSize: 14
                                    }}
                                    type="password"
                                    onFocus={() =>
                                        this._onFocusAnimation("location")
                                    }
                                    onBlur={this._onBlurAnimation}
                                    // errorStyle={{ color: "red" }}
                                    // errorMessage="ENTER A VALID ERROR HERE"
                                />
                            </View>
                            <View style={{ marginVertical: 15 }}>
                                <Button
                                    title="Confirm & Register"
                                    type="outline"
                                    buttonStyle={{ borderColor: "#ed4c14" }}
                                    titleStyle={{ color: "#ed4c14" }}
                                    onPress={() =>
                                        this.props.navigation.navigate("Tabs")
                                    }
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }

    _onFocusAnimation = focusId => {
        this.setState({ focusId });
    };

    _onBlurAnimation = () => {
        this.setState({ focusId: "" });
    };
}

export default LocationDetails;
