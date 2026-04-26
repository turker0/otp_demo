import React from 'react';
import { StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { colors, spacing } from '../../../theme';

export function LibraryKeyboardScreen() {
  const scheme = useColorScheme();
  const isDark = scheme !== 'light';

  return (
    <KeyboardAwareScrollView
      style={[styles.root, isDark && styles.rootDark]}
      contentContainerStyle={styles.content}
      bottomOffset={32}
      keyboardShouldPersistTaps="handled">
      <Text style={[styles.title, isDark && styles.titleDark]}>
        react-native-keyboard-controller
      </Text>
      <Text style={[styles.body, isDark && styles.bodyDark]}>
        KeyboardProvider wraps the app (see App.tsx). KeyboardAwareScrollView keeps
        focused fields visible while the keyboard animates, with consistent behavior
        on iOS and Android.
      </Text>
      <Text style={[styles.sub, isDark && styles.subDark]}>Props and API notes</Text>
      <Text style={[styles.mono, isDark && styles.monoDark]}>
        bottomOffset — extra space above keyboard{'\n'}
        KeyboardAvoidingView from the same package{'\n'}
        useKeyboardHandler for custom animations
      </Text>
      <Text style={[styles.sub, isDark && styles.subDark]}>Live demo</Text>
      <View style={styles.demoBox}>
        {Array.from({ length: 6 }, (_, i) => (
          <TextInput
            key={i}
            placeholder={`Field ${i + 1} — try one near the bottom`}
            placeholderTextColor={colors.textMuted}
            style={styles.input}
          />
        ))}
        <Text style={styles.hint}>
          Focus the lower fields: content should scroll so the field stays above the
          keyboard.
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  rootDark: {
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.md,
    paddingBottom: spacing.xl * 2,
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
    marginBottom: spacing.md,
  },
  monoDark: {
    color: colors.textMuted,
    backgroundColor: colors.surface,
  },
  demoBox: {
    padding: spacing.md,
    borderRadius: 12,
    backgroundColor: colors.demoBg,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: colors.text,
    fontSize: 15,
    backgroundColor: colors.surface,
  },
  hint: {
    marginTop: 4,
    fontSize: 12,
    color: colors.textMuted,
    lineHeight: 17,
  },
});
