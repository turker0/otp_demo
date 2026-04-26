import React, { type ReactNode } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { colors, spacing } from '../../theme';

type Props = {
  title: string;
  brief: string;
  referenceSource: ImageSourcePropType;
  referenceMaxHeightFraction?: number;
  children: ReactNode;
};

export function HomeworkLayout({
  title,
  brief,
  referenceSource,
  referenceMaxHeightFraction = 0.62,
  children,
}: Props) {
  const { width, height } = useWindowDimensions();
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  const frameHeight = Math.min(height * referenceMaxHeightFraction, width * 2.4);

  return (
    <ScrollView
      nestedScrollEnabled
      style={[styles.root, isDark && styles.rootDark]}
      contentContainerStyle={styles.content}>
      <Text style={[styles.title, isDark && styles.titleDark]}>{title}</Text>
      <Text style={[styles.brief, isDark && styles.briefDark]}>{brief}</Text>

      <Text style={[styles.label, isDark && styles.labelDark]}>Target design</Text>
      <View style={[styles.imageFrame, { height: frameHeight }]}>
        <Image
          source={referenceSource}
          style={styles.referenceImage}
          resizeMode="contain"
          accessibilityLabel="Homework reference design"
        />
      </View>

      <Text style={[styles.label, isDark && styles.labelDark, styles.mt]}>
        Your implementation
      </Text>
      <View style={[styles.workShell, isDark && styles.workShellDark]}>
        {children}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  rootDark: {
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: spacing.xl * 2,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0f172a',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
  },
  titleDark: {
    color: colors.text,
  },
  brief: {
    fontSize: 14,
    lineHeight: 20,
    color: '#475569',
    paddingHorizontal: spacing.md,
    marginTop: spacing.sm,
    marginBottom: spacing.md,
  },
  briefDark: {
    color: colors.textMuted,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.xs,
  },
  labelDark: {
    color: colors.textMuted,
  },
  mt: {
    marginTop: spacing.lg,
  },
  imageFrame: {
    width: '100%',
    backgroundColor: '#0b1220',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#cbd5e1',
  },
  referenceImage: {
    width: '100%',
    height: '100%',
  },
  workShell: {
    marginHorizontal: spacing.md,
    minHeight: 320,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#60a5fa',
    borderStyle: 'dashed',
    backgroundColor: '#ffffff',
    padding: spacing.md,
  },
  workShellDark: {
    backgroundColor: colors.demoBg,
    borderColor: colors.accentMuted,
  },
});

