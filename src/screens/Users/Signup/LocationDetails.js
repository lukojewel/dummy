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

import { HeaderTitle, InputField, Button } from "../../../common";
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
                                    size={15}
                                    style={{
                                        color: "#000"
                                        // margin: 20
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
                            <HeaderTitle title="Location" subText="Set Store" />
                            <View style={{ marginVertical: 5 }}>
                                <InputField
                                    placeholder="Location"
                                    id="location"
                                    focusId={focusId}
                                    type="password"
                                    onFocus={this._onFocusAnimation}
                                    onBlur={this._onBlurAnimation}
                                    // errorMessage=""
                                />
                            </View>
                            <View
                                style={{
                                    marginVertical: 5,
                                    flexDirection: "row"
                                }}
                            >
                                <Button
                                    title="Confirm & Register"
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
