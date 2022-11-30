import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const WhaleItem = ({item, playSound}) => {
  console.log('playSound list ', playSound);
  // const imageLocation = item.image;
  // console.log('image', imageLocation);
  return (
    <TouchableOpacity style={styles.item}  onPress={() => playSound(item.key)}>
      <View >
        <Image style={styles.card_image} source={item.image}/>
        {/* <Text>
            {item.text}
        </Text> */}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    item: {
      flex: 2,
      borderRadius: 6,
      elevation: 3,
      backgroundColor: '#fff',
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#333',
      shadowOpacity: 0.3,
      shadowRadius: 2,
      marginHorizontal: 4,
      marginVertical: 6,
      height: 200
    },
    card_image: {
      alignSelf: 'center',
      resizeMode: 'contain',
      height: '100%',
      width: '100%',
      borderRadius: 10
    }
})

export default WhaleItem;