/**
 * @author Praveen Reddy
 * @email praveen.reddivari@gmail.com
 * @create date 2019-05-13 23:13:31
 * @modify date 2019-05-13 23:13:31
 * @desc [description]
 */

// External Imports
import {
    createAppContainer,
    createSwitchNavigator,
    createBottomTabNavigator
} from "react-navigation";
// My Imports
import {
    Splash,
    Users,
    Coupons,
    Favourites,
    Home,
    Menu,
    Tickets
} from "../screens";

const Tabs = createBottomTabNavigator({
    Home: Home,
    Tickets: Tickets
});

export default createAppContainer(
    createSwitchNavigator(
        {
            SplashScreen: { screen: Splash },
            // AuthenticatedStackNavigator: {
            //     screen: AuthenticatedStackNavigator
            // },
            // Anonymous: { screen: Anonymous }
            Users: { screen: Users },
            Tabs: { screen: Tabs }
        },
        {
            headerMode: "none",
            initialRouteName: "SplashScreen"
        }
    )
);
