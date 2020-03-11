import React from 'react';
import PetImage from './PetImage';
import { View, Text } from 'react-native';

import { getSentence, isDog } from '../services/pet';

const Pet = props => (
  <View>
    <Text>
      { getSentence(props) }
    </Text>
    {
      isDog(props) && (
        <PetImage
          image={props.image}
        />
      )
    }
  </View>
);

export default Pet;