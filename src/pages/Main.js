import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pet from '../components/Pet';

import { getPets } from '../services/pet';

const Main = () => (
  <View style={styles.container}>
    <Text>Animals:</Text>
    {
      getPets().map(pet => (
        <Pet
          key={pet.name}
          name={pet.name}
          age={pet.age}
          animal={pet.animal}
          image={pet.image}
        />
      ))
    }
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main;
