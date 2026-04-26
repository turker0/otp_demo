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
      description="Pressable is the modern touchable primitive. It exposes pressed state for styling, supports long press, and works well with accessibility."
      propsNote={`onPress, onLongPress, onPressIn, onPressOut\nstyle={({ pressed }) => [...]}\nhitSlop, pressRetentionOffset\nandroid_ripple={{ color, borderless }}`}
      morePropsNote={`unstable_pressDelay — ms before press in\nandroid_disableSound\naccessibilityRole, accessibilityState: disabled\nPressable can wrap complex layouts (unlike legacy Text-only Button)`}>
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
