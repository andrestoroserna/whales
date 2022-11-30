import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";

const screens = {
    About: {
        screen: About,
        navigationOptions: {
            title: 'About',
        }
    },
}

const AboutStack = createNativeStackNavigator();
AboutStack.screens = screens;

export default AboutStack