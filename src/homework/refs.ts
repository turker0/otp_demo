import type { ImageSourcePropType } from 'react-native';

export type HomeworkId =
  | 'beginner1'
  | 'beginner2'
  | 'beginner3'
  | 'advanced1'
  | 'advanced2'
  | 'advanced3';

export const HOMEWORK_IMAGES: Record<HomeworkId, ImageSourcePropType> = {
  beginner1: require('../assets/homework/hw_beginner1.png'),
  beginner2: require('../assets/homework/hw_beginner2.png'),
  beginner3: require('../assets/homework/hw_beginner3.png'),
  advanced1: require('../assets/homework/hw_advanced1.png'),
  advanced2: require('../assets/homework/hw_advanced2.png'),
  advanced3: require('../assets/homework/hw_advanced3.png'),
};

