import React, { useState, useEffect } from 'react';
import { View, ImageBackground, ActivityIndicator } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import images from '../../res/images';
import styles from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Heroes(props) {
  const [heroId, setHeroId] = useState(null);
  const [inputValue, onChangeText] = useState('');

  const GET_HERO = gql`
    query HeroById {
      character(id: ${heroId}) {
        name
        gender
        species
        image,
        status
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_HERO);

  useEffect(() => {
    if (heroId !== null && !loading) {
      if (data && data.character) {
        if (Object.values(data.character).includes(null)) {
          alert('Wrong Value Passed to input');
          return null;
        }
      }
      props.navigation.navigate('HeroDetails', { hero: data });
    }
    if (error) {
      alert('Something went wrong');
    }
  }, [data]);

  const validateAndSetId = function (id) {
    const firstSymbol = Number(id.split(0, 1));
    if (firstSymbol === 0 || /[a-z]+$/i.test(id)) {
      return null;
    }
    setHeroId(inputValue);
  };

  return (
    <ImageBackground
      source={images.heroesBackground}
      style={styles.imageContainer}
    >
      {loading ? (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color="yellow" />
        </View>
      ) : (
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
              onPress={() => validateAndSetId(inputValue)}
              text="Search"
            />
          </View>
        </View>
      )}
    </ImageBackground>
  );
}
