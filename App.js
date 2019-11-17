import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Heroes from './src/screens/Heroes';
import HeroDetails from './src/screens/HeroDetails';
import Episodes from './src/screens/Episodes';
import EpisodeDetails from './src/screens/EpisodeDetails';

const HeroesStack = createStackNavigator({
  Heroes: {
    screen: Heroes,
    navigationOptions: () => ({
      title: 'Heroes',
      headerBackTitle: null,
    }),
  },
  HeroDetails: {
    screen: HeroDetails,
    navigationOptions: () => ({
      title: 'HeroDetails',
      headerBackTitle: null,
    }),
  },
});

const EpisodesStack = createStackNavigator({
  Episodes: {
    screen: Episodes,
    navigationOptions: () => ({
      title: 'Episodes',
      headerBackTitle: null,
    }),
  },
  EpisodeDetails: {
    screen: EpisodeDetails,
    navigationOptions: () => ({
      title: 'EpisodeDetails',
      headerBackTitle: null,
    }),
  },
  HeroDetails: {
    screen: HeroDetails,
    navigationOptions: () => ({
      title: 'HeroDetails',
      headerBackTitle: null,
    }),
  },
});
const TabNavigator = createBottomTabNavigator({
  Heroes: {
    screen: HeroesStack,
    navigationOptions: () => ({
      title: 'Heroes',
      headerBackTitle: null,
    }),
  },
  Episodes: {
    screen: EpisodesStack,
    navigationOptions: () => ({
      title: 'Episodes',
      headerBackTitle: null,
    }),
  },
});

export default createAppContainer(TabNavigator);
