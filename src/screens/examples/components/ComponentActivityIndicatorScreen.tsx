import React, { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentActivityIndicatorScreen() {
  const [large, setLarge] = useState(false);
  const [animating, setAnimating] = useState(true);

  return (
    <ExampleLayout
      title="ActivityIndicator"
      description="Shows a platform spinner while work is in progress. Pair with conditional rendering or overlays."
      propsNote={`size: small | large (iOS) or number dp (Android)\ncolor — tint\nanimating={false} freezes/hides spinner`}
      morePropsNote={`hidesWhenStopped (iOS) — hide when not animating\nCombine with delay timers to avoid spinner flash on fast loads\nFor determinate progress use libraries or custom Views`}>
      <View style={styles.center}>
        <ActivityIndicator
          size={large ? 'large' : 'small'}
          color={colors.accent}
          animating={animating}
        />
      </View>
      <View style={styles.row}>
        <Pressable onPress={() => setLarge(l => !l)} style={styles.toggle}>
          <Text style={styles.toggleText}>Toggle size</Text>
        </Pressable>
        <Pressable onPress={() => setAnimating(a => !a)} style={styles.toggle}>
          <Text style={styles.toggleText}>animating</Text>
        </Pressable>
      </View>
      <Text style={styles.note}>
        animating={String(animating)} — when false the spinner stops (iOS also
        respects hidesWhenStopped).
      </Text>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  center: {
    paddingVertical: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  toggle: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: colors.surface,
  },
  toggleText: {
    color: colors.text,
    fontWeight: '600',
  },
  note: {
    marginTop: 12,
    fontSize: 12,
    color: colors.textMuted,
    lineHeight: 17,
    textAlign: 'center',
  },
});
