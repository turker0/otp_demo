import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentPressableScreen() {
  const [count, setCount] = useState(0);
  const [ripple, setRipple] = useState(true);

  return (
    <ExampleLayout
      title="Pressable"
      description="Pressable is the modern, recommended touchable API. It supersedes TouchableOpacity, TouchableHighlight, and TouchableWithoutFeedback by exposing pressed state for any feedback (opacity, underlay, ripple, custom styles) in one primitive."
      propsNote={`onPress, onLongPress, onPressIn, onPressOut\nstyle={({ pressed }) => [...]} — replaces activeOpacity / underlayColor\nhitSlop, pressRetentionOffset\nandroid_ripple={{ color, borderless }}`}
      morePropsNote={`Why Pressable won: one API for all press feedback + better a11y.\nLegacy Touchable* screens in this section show the older patterns.\nunstable_pressDelay — ms before press in\naccessibilityRole, accessibilityState: disabled`}>
      <Pressable
        hitSlop={12}
        onPress={() => setCount(c => c + 1)}
        android_ripple={
          ripple ? { color: 'rgba(255,255,255,0.35)', borderless: false } : undefined
        }
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}>
        <Text style={styles.buttonText}>Tap count: {count}</Text>
      </Pressable>
      <Pressable
        onLongPress={() => setCount(0)}
        style={({ pressed }) => [
          styles.secondary,
          pressed && styles.secondaryPressed,
        ]}>
        <Text style={styles.secondaryText}>Long press to reset</Text>
      </Pressable>
      <View style={styles.row}>
        <Text style={styles.caption}>Android ripple</Text>
        <Pressable onPress={() => setRipple(r => !r)} style={styles.toggle}>
          <Text style={styles.toggleText}>{ripple ? 'On' : 'Off'}</Text>
        </Pressable>
      </View>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accent,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 16,
  },
  secondary: {
    marginTop: 12,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  secondaryPressed: {
    backgroundColor: colors.surface,
  },
  secondaryText: {
    color: colors.text,
    fontSize: 14,
  },
  row: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  caption: {
    color: colors.textMuted,
    fontSize: 13,
  },
  toggle: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.surfaceMuted,
  },
  toggleText: {
    color: colors.text,
    fontWeight: '700',
  },
});
