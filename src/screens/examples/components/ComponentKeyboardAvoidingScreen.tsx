import { useHeaderHeight } from '@react-navigation/elements';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import { colors, spacing } from '../../../theme';

export function ComponentKeyboardAvoidingScreen() {
  const scheme = useColorScheme();
  const isDark = scheme !== 'light';
  const headerHeight = useHeaderHeight();
  const [behavior] = useState<'padding' | 'height' | 'position'>(
    Platform.OS === 'ios' ? 'padding' : 'height',
  );

  return (
    <KeyboardAvoidingView
      style={[styles.root, isDark && styles.rootDark]}
      behavior={behavior}
      keyboardVerticalOffset={headerHeight}>
      <View style={styles.docs}>
        <Text style={[styles.title, isDark && styles.titleDark]}>
          KeyboardAvoidingView
        </Text>
        <Text style={[styles.body, isDark && styles.bodyDark]}>
          Built-in RN wrapper that adjusts layout when the keyboard opens. Must be
          a flex screen root — nesting it inside ScrollView (e.g. ExampleLayout)
          prevents avoidance from working.
        </Text>
        <Text style={[styles.sub, isDark && styles.subDark]}>
          Key props and styles
        </Text>
        <Text style={[styles.mono, isDark && styles.monoDark]}>
          {`behavior: padding | height | position (iOS)\nkeyboardVerticalOffset — header / status bar height\nenabled — toggle avoidance`}
        </Text>
        <Text style={[styles.sub, isDark && styles.subDark]}>
          More properties and API
        </Text>
        <Text style={[styles.mono, isDark && styles.monoDark]}>
          {`Often combined with ScrollView or keyboardShouldPersistTaps\nFor complex chat UIs many teams prefer react-native-keyboard-controller\ncontentContainerStyle belongs on ScrollView, not here`}
        </Text>
      </View>

      <View style={styles.demoBox}>
        <Text style={styles.label}>behavior on this device: {behavior}</Text>
        <TextInput
          placeholder="Focus me — keyboard shifts layout"
          placeholderTextColor={colors.textMuted}
          style={styles.input}
        />
        <TextInput
          placeholder="Second field"
          placeholderTextColor={colors.textMuted}
          style={styles.input}
        />
        <Text style={styles.hint}>
          Fields stay above the keyboard because KeyboardAvoidingView is the screen
          root with flex:1.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    justifyContent: 'space-between',
  },
  rootDark: {
    backgroundColor: colors.background,
  },
  docs: {
    padding: spacing.md,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: spacing.sm,
  },
  titleDark: {
    color: colors.text,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    color: '#334155',
    marginBottom: spacing.md,
  },
  bodyDark: {
    color: colors.textMuted,
  },
  sub: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
  },
  subDark: {
    color: colors.text,
  },
  mono: {
    fontFamily: 'Menlo',
    fontSize: 12,
    lineHeight: 18,
    color: '#475569',
    backgroundColor: '#e2e8f0',
    padding: spacing.sm,
    borderRadius: 8,
  },
  monoDark: {
    color: colors.textMuted,
    backgroundColor: colors.surface,
  },
  demoBox: {
    margin: spacing.md,
    padding: spacing.md,
    borderRadius: 12,
    backgroundColor: colors.demoBg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  label: {
    color: colors.textMuted,
    fontSize: 12,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: colors.text,
    marginBottom: 8,
    backgroundColor: colors.surface,
  },
  hint: {
    marginTop: 4,
    fontSize: 12,
    color: colors.textMuted,
    lineHeight: 17,
  },
});
