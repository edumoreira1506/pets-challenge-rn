import React from 'react';
import{ View, Image } from 'react-native';

const PetImage = ({
  image
}) => (
  <View>
    <Image
      style={{ width: 50, height: 50 }}
      source={image}
    />
  </View>
);

export default PetImage;
