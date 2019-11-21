import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import images from '../../res/images';
import styles from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Heroes(props) {
  const [inputValue, onChangeText] = useState('');


  const validateInput = function (id) {
    const firstSymbol = Number(id.split(0, 1));
    if (firstSymbol === 0 || firstSymbol === '') {
      alert('Wrong Value Passed to input');
      onChangeText('');
      return null;
    }
    props.navigation.navigate('HeroDetails', { heroId: inputValue });
  };

  return (
    <ImageBackground
      source={images.heroesBackground}
      style={styles.imageContainer}
    >
      <View style={styles.innerContainer}>
        <View style={styles.searchContainer}>
          <Input
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="input ID here"
            value={inputValue}
          />
          <Button
            style={styles.button}
            onPress={() => validateInput(inputValue)}
            text="Search"
          />
        </View>
      </View>
    </ImageBackground>
  );
}
