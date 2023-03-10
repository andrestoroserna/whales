import React, {useState} from 'react';
import FamilyMemberItem from '../components/familyMemberItem';
import {StyleSheet, View, Text, FlatList, Image} from 'react-native';
import {globalStyles} from '../styles/global';
import Header from '../components/header';

const About = () => {
  const [familyMembers, setfamilyMembers] = useState([
    {
      title: 'Malena Toro',
      image: require('../../android/app/src/main/res/images/Male.jpg'),
      description:
        'Male es estudiante de Transición, con 6 años tiene la maravillosa habilidad de hacer preguntas filosóficas antes de dormir buscando alargar el tiempo del día y no dormir muchas horas en la noche, ya que es demasiado aburrido. Es la encargada de contar la historia detrás de cada una de las imágenes de esta aplicación.',
      key: 1,
    },
    {
      title: 'Yaqueline Espinosa',
      image: require('../../android/app/src/main/res/images/Yaqui.jpg'),
      description:
        'Yaqui es Economista de profesión y apasionada por las manualidades. Fue la encargada de dar vida a cada una de las imágenes de la aplicación.',
      key: 2,
    },
    {
      title: 'Andrés Felipe Toro',
      image: require('../../android/app/src/main/res/images/Gordo.jpg'),
      description:
        'El Gordo es Desarrollador de Software y empezó este proyecto con el interés de mostrarle a Malena de una forma más tangible las cosas que su papá hace en el trabajo (que no es solo sentarse a esperar la hora de salida ;) ).',
      key: 3,
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <Header title={'About us'} />
      <FlatList
        numColumns={1}
        data={familyMembers}
        renderItem={({item}) => <FamilyMemberItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
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

export default About;
