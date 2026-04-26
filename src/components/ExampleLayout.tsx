import React, { type ReactNode } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import { colors, spacing } from '../theme';

type Props = {
  title: string;
  description: string;
  propsNote?: string;
  morePropsNote?: string;
  children: ReactNode;
};

export function ExampleLayout({
  title,
  description,
  propsNote,
  morePropsNote,
  children,
}: Props) {
  const scheme = useColorScheme();
  const isDark = scheme !== 'light';

  return (
    <ScrollView
      nestedScrollEnabled
      style={[styles.scroll, isDark && styles.scrollDark]}
      contentContainerStyle={styles.content}>
      <Text style={[styles.title, isDark && styles.titleDark]}>{title}</Text>
      <Text style={[styles.body, isDark && styles.bodyDark]}>{description}</Text>
      {propsNote ? (
        <>
          <Text style={[styles.subheading, isDark && styles.subheadingDark]}>
            Key props and styles
          </Text>
          <Text style={[styles.mono, isDark && styles.monoDark]}>{propsNote}</Text>
        </>
      ) : null}
      {morePropsNote ? (
        <>
          <Text style={[styles.subheading, isDark && styles.subheadingDark]}>
            More properties and API
          </Text>
          <Text style={[styles.mono, isDark && styles.monoDark]}>
            {morePropsNote}
          </Text>
        </>
      ) : null}
      <Text style={[styles.subheading, isDark && styles.subheadingDark]}>
        Live demo
      </Text>
      <View style={styles.demoBox}>
        {children}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  scrollDark: {
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
  subheading: {
    fontSize: 14,
    fontWeight: '600',
    color: '#0f172a',
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
  },
  subheadingDark: {
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
    overflow: 'hidden',
  },
  monoDark: {
    color: colors.textMuted,
    backgroundColor: colors.surface,
  },
  demoBox: {
    marginTop: spacing.sm,
    padding: spacing.md,
    borderRadius: 12,
    backgroundColor: colors.demoBg,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
