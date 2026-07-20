import React, { useRef } from 'react';
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentAnimatedScreen() {
  const opacity = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  const fadePulse = () => {
    opacity.setValue(1);
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0.2,
        duration: 350,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const slide = () => {
    translateX.setValue(0);
    Animated.timing(translateX, {
      toValue: 80,
      duration: 500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      Animated.spring(translateX, {
        toValue: 0,
        useNativeDriver: true,
        friction: 6,
      }).start();
    });
  };

  const bounce = () => {
    scale.setValue(1);
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.25,
        duration: 180,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <ExampleLayout
      title="Animated"
      description="Animated is React Native's built-in animation library: drive opacity, transforms, and layout with Animated.Value, timing, spring, and sequence. Course note: almost every production app uses react-native-reanimated instead for smoother UI-thread animations — learn Animated first, then graduate to Reanimated."
      propsNote={`new Animated.Value(n)\nAnimated.timing / spring / decay\nAnimated.sequence, parallel, loop, stagger\nuseNativeDriver: true — opacity & transform only`}
      morePropsNote={`Animated.View / Text / Image / ScrollView\ninterpolate — map input range → output (color, rotate)\nLayoutAnimation — separate API for layout transitions\nCommunity standard: react-native-reanimated (worklets on UI thread)`}>
      <View style={styles.stage}>
        <Animated.View
          style={[
            styles.box,
            {
              opacity,
              transform: [{ translateX }, { scale }],
            },
          ]}
        />
      </View>
      <View style={styles.row}>
        <Pressable style={styles.btn} onPress={fadePulse}>
          <Text style={styles.btnText}>Fade</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={slide}>
          <Text style={styles.btnText}>Slide</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={bounce}>
          <Text style={styles.btnText}>Scale</Text>
        </Pressable>
      </View>
      <Text style={styles.note}>
        Reanimated keeps animations on the UI thread and is the usual choice for
        gestures, shared transitions, and complex motion.
      </Text>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  stage: {
    height: 120,
    borderRadius: 10,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  box: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: colors.accent,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  btn: {
    flex: 1,
    backgroundColor: colors.surfaceMuted,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 13,
  },
  note: {
    marginTop: 12,
    fontSize: 12,
    lineHeight: 17,
    color: colors.textMuted,
  },
});
