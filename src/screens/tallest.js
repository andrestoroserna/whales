import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';
import Header from '../components/header';

const Tallest = () => {
  return (
    <View style={globalStyles.container}>
      <Header title={'The tallest'} />
      <View style={styles.item}>
        <Image
          style={styles.card_image}
          source={require('../../android/app/src/main/res/images/tallest.gif')}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 2,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    height: 200,
  },
  card_image: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
});

export default Tallest;
