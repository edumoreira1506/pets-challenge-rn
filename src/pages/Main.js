import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Pet from '../components/Pet';
import PetForm from '../components/PetForm';

import { getPets } from '../services/pet';

const Main = () => {
  const [ pets, setPets ] = useState(getPets());
  const [ name, setName ] = useState('');
  const [ age, setAge ] = useState('');
  const [ animal, setAnimal ] = useState('');

  const handleAddPet = () => {
    setPets(prevPets => [ ...prevPets, { name, age, animal } ])
    setName('');
    setAge('');
    setAnimal('');
  }

  return (
    <View style={styles.container}>
      <Text>Animals:</Text>
      <PetForm
        name={{
          value: name,
          onChange: setName
        }}
        age={{
          value: age,
          onChange: setAge
        }}
        animal={{
          value: animal,
          onChange: setAnimal
        }}
        onAdd={handleAddPet}
      />
      {
        pets.map(pet => (
          <Pet
            key={pet.name}
            name={pet.name}
            age={pet.age}
            animal={pet.animal}
          />
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Main;
