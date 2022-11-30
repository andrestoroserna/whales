import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ReviewDetails from "../screens/reviewDetails";
import About from "../screens/about";

const screens = {
    ReviewDetails: {
        screen: ReviewDetails
    },
    About: {
        screen: About
    }
}

const HomeStack = createNativeStackNavigator();
HomeStack.screens = screens;

export default HomeStack;