import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';
import Header from '../components/header';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMicrophone} from '@fortawesome/free-solid-svg-icons';

var Sound = require('react-native-sound');
Sound.setCategory('Playback');

const Translator = () => {
  const whaleSound = new Sound(`hola`, Sound.MAIN_BUNDLE, error => {
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

  const playSound = () => {
    whaleSound.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  };

  return (
    <View style={globalStyles.container}>
      <Header title={'Translator'} />
      <TouchableOpacity style={styles.item} onPress={() => playSound()}>
        <View>
          <FontAwesomeIcon
            style={styles.microphone_icon}
            size={100}
            mask="circle"
            transform="shrink-6"
            icon={faMicrophone}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 100,
    height: 100,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 100,
    alignSelf: 'center',
  },
  microphone_icon: {
    alignSelf: 'center',
  },
});

export default Translator;
