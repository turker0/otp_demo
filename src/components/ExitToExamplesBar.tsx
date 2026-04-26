import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, spacing } from '../theme';

export function ExitToExamplesBar() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrap, { paddingTop: Math.max(insets.top, spacing.sm) }]}>
      <Pressable
        hitSlop={12}
        onPress={() => navigation.goBack()}
        style={({ pressed }) => [styles.press, pressed && styles.pressPressed]}>
        <Text style={styles.link}>← All examples</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.surface,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
    paddingBottom: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  press: {
    alignSelf: 'flex-start',
  },
  pressPressed: {
    opacity: 0.7,
  },
  link: {
    color: colors.accent,
    fontSize: 16,
    fontWeight: '600',
  },
});
