import React from 'react';
import * as Animatable from 'react-native-animatable';
import images from '../../res/images';
import styles from './styles';

export default function HeroElement() {
  return (
    <Animatable.Image animation="zoomInUp" style={styles.image} source={images.progress} />
  );
}
