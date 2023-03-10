import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {FlatList, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHouse,
  faArrowsSpin,
  faBottleDroplet,
  faLungs,
  faFish,
  faMapLocationDot,
  faMusic,
  faRulerVertical,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import ReviewDetails from './src/screens/reviewDetails';
import About from './src/screens/about';
import Echolocation from './src/screens/echolocation';
import Melody from './src/screens/melody';
import Tallest from './src/screens/tallest';
import Evolution from './src/screens/evolution';
import Mammals from './src/screens/mammals';
import Lungs from './src/screens/lungs';
import NoFish from './src/screens/noFish';
// import Sound from 'react-native-sound'
import Header from './src/components/header';
import WhaleItem from './src/components/whaleItem';

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

let soundsList = [];
for (let index = 1; index < 5; index++) {
  const whaleSound = new Sound(`whale${index}`, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound ', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        whaleSound.getDuration() +
        'number of channels: ' +
        whaleSound.getNumberOfChannels(),
    );
    // whaleSound.setSpeed(0.2);
  });
  soundsList.push(whaleSound);
}

const App = () => {
  // const [whales, setWhales] = useState([
  //   { text: 'Happy whale', key: 1 },
  //   { text: 'Sad whale', key: 2 },
  //   { text: 'Surprised whale', key: 3 },
  //   { text: 'hello whale', key: 4 }
  // ]);

  const [whales, setWhales] = useState([
    {
      text: 'Happy whale',
      image: require('./android/app/src/main/res/images/whale1.jpg'),
      key: 1,
    },
    {
      text: 'Sad whale',
      image: require('./android/app/src/main/res/images/whale2.jpg'),
      key: 2,
    },
    {
      text: 'Surprised whale',
      image: require('./android/app/src/main/res/images/whale3.jpg'),
      key: 3,
    },
    {
      text: 'hello whale',
      image: require('./android/app/src/main/res/images/whale4.jpg'),
      key: 4,
    },
  ]);

  const playSound = soundIndex => {
    if (soundsList) {
      soundsList[soundIndex - 1].play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
  };

  const SoundScreen = () => {
    return (
      <View style={styles.container}>
        <Header title={'Whales'} />
        <View style={styles.content}>
          <View>
            <FlatList
              numColumns={2}
              data={whales}
              renderItem={({item}) => (
                <WhaleItem item={item} playSound={playSound} />
              )}
            />
          </View>
        </View>
      </View>
    );
  };

  // const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let icon;

            if (route.name === 'Home') {
              icon = focused ? faHouse : faHouse;
            } else if (route.name === 'Evolution') {
              icon = focused ? faArrowsSpin : faArrowsSpin;
            } else if (route.name === 'Mammals') {
              icon = focused ? faBottleDroplet : faBottleDroplet;
            } else if (route.name === 'Lungs') {
              icon = focused ? faLungs : faLungs;
            } else if (route.name === 'NoFish') {
              icon = focused ? faFish : faFish;
            } else if (route.name === 'Echolocation') {
              icon = focused ? faMapLocationDot : faMapLocationDot;
            } else if (route.name === 'Melody') {
              icon = focused ? faMusic : faMusic;
            } else if (route.name === 'Tallest') {
              icon = focused ? faRulerVertical : faRulerVertical;
            } else if (route.name === 'About us') {
              icon = focused ? faAddressCard : faAddressCard;
            }
            return <FontAwesomeIcon icon={icon} />;
          },
        })}>
        <Tab.Screen name="Home" component={SoundScreen} />
        <Tab.Screen name="Evolution" component={Evolution} />
        <Tab.Screen name="Mammals" component={Mammals} />
        <Tab.Screen name="Lungs" component={Lungs} />
        <Tab.Screen name="NoFish" component={NoFish} />
        <Tab.Screen name="Echolocation" component={Echolocation} />
        <Tab.Screen name="Melody" component={Melody} />
        <Tab.Screen name="Tallest" component={Tallest} />
        <Tab.Screen name="About us" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );

  // return (
  //   <NavigationContainer>
  //     <Drawer.Navigator initialRouteName="Home">
  //       <Drawer.Screen
  //         name="Home"
  //         component={SoundScreen}
  //         options={{
  //           drawerIcon: () => <FontAwesomeIcon icon={faHouse} />,
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="Evolution"
  //         component={Evolution}
  //         options={{
  //           drawerIcon: () => <FontAwesomeIcon icon={faArrowsSpin} />,
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="Mammals"
  //         component={Mammals}
  //         options={{
  //           drawerIcon: () => <FontAwesomeIcon icon={faBottleDroplet} />,
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="Lungs"
  //         component={Lungs}
  //         options={{
  //           drawerIcon: () => <FontAwesomeIcon icon={faLungs} />,
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="NoFish"
  //         component={NoFish}
  //         options={{
  //           drawerIcon: () => <FontAwesomeIcon icon={faFish} />,
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="Echolocation"
  //         component={Echolocation}
  //         options={{
  //           drawerIcon: () => <FontAwesomeIcon icon={faMapLocationDot} />,
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="Melody"
  //         component={Melody}
  //         options={{
  //           drawerIcon: () => <FontAwesomeIcon icon={faMusic} />,
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="Tallest"
  //         component={Tallest}
  //         options={{
  //           drawerIcon: () => <FontAwesomeIcon icon={faRulerVertical} />,
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="About Us"
  //         component={About}
  //         options={{
  //           drawerIcon: () => <FontAwesomeIcon icon={faAddressCard} />,
  //         }}
  //       />
  //     </Drawer.Navigator>
  //   </NavigationContainer>
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
});

export default App;
