import { createDrawerNavigator } from "@react-navigation/drawer";
import { createAppContainer } from "react-navigation";

import About from "../screens/about";
import ReviewDetails from "../screens/reviewDetails";

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: ReviewDetails,
    },
    About: {
        screen: About,
    }
});

export default RootDrawerNavigator;