import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ReviewDetails from './src/screens/reviewDetails';
import About from './src/screens/about';
// import Sound from 'react-native-sound'
import Header from './src/components/header';
import WhaleItem from './src/components/whaleItem';

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

let soundsList = [];
for (let index = 1; index < 5; index++) {
  const whaleSound = new Sound(`whale${index}`, Sound.MAIN_BUNDLE, (error) => {
    if (error){
      console.log('failed to load the sound ', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whaleSound.getDuration() + 'number of channels: ' + whaleSound.getNumberOfChannels());
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
    { text: 'Happy whale', image: require('./android/app/src/main/res/images/whale1.jpg'), key: 1 },
    { text: 'Sad whale', image: require('./android/app/src/main/res/images/whale2.jpg'), key: 2 },
    { text: 'Surprised whale', image: require('./android/app/src/main/res/images/whale3.jpg'), key: 3 },
    { text: 'hello whale', image: require('./android/app/src/main/res/images/whale4.jpg'), key: 4 }
  ]);

  const playSound = (soundIndex) => {
    if(soundsList){
      soundsList[soundIndex-1].play((success) => {
        if(success){
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
  }

  const soundScreen = () => {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <View>
            <FlatList 
              numColumns={2}
              data={whales}
              renderItem={({ item }) => (
                <WhaleItem item={item} playSound={playSound}  />
              )}
            />
          </View>
        </View>
      </View>
    )
  }

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={soundScreen} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  }
});

export default App;