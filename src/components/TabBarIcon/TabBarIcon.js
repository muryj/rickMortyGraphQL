import React from 'react';
import { Text } from 'react-native';

const iconMap = {
  episodes: '𝔼',
  heroes: 'ℍ',
};

const TabBarIcon = ({
  name, color, style
}) => {
  const icon = iconMap[name];

  // eslint-disable-next-line react-native/no-inline-styles
  return <Text style={[{ fontSize: 26, color }, style]}>{icon}</Text>;
};

export default TabBarIcon;
