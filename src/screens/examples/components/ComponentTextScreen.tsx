import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentTextScreen() {
  return (
    <ExampleLayout
      title="Text"
      description="The Text component displays strings and supports nesting, styling, and touch handling for portions of text (via nested Text). Use it for all readable copy."
      propsNote={`numberOfLines + ellipsizeMode — truncation\nselectable — copy / selection\nallowFontScaling — respect OS font size (default true)\ndataDetectorType — mail, link, phone (where supported)`}
      morePropsNote={`maxFontSizeMultiplier — cap accessibility text scaling\nlineBreakStrategyIOS (iOS 14+)\ntextBreakStrategy (Android)\naccessibilityRole: header | link | text\nonTextLayout — measure wrapped lines`}>
      <Text style={styles.base}>Default body text.</Text>
      <Text style={styles.bold}>Bold using fontWeight.</Text>
      <Text style={styles.muted}>Muted secondary line.</Text>
      <Text style={styles.monoInline}>Monospace inline</Text>
      <Text style={styles.nestedWrap}>
        Mixed styles:{' '}
        <Text style={styles.linkInline}>nested link tone</Text>
        {' and '}
        <Text style={styles.warnInline}>nested warning tone</Text>.
      </Text>
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={styles.multiTrunc}>
        Long paragraph that wraps to multiple lines and then truncates with an
        ellipsis when numberOfLines is set to two and ellipsizeMode is tail.
      </Text>
      <Text numberOfLines={1} ellipsizeMode="middle" style={styles.truncate}>
        middle-ellipsis-single-line-example-very-long-string
      </Text>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  base: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 8,
  },
  bold: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.accent,
    marginBottom: 8,
  },
  muted: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: 8,
  },
  monoInline: {
    fontFamily: 'Menlo',
    fontSize: 13,
    color: colors.success,
    marginBottom: 8,
  },
  nestedWrap: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 10,
    lineHeight: 20,
  },
  linkInline: {
    color: colors.accent,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  warnInline: {
    color: '#fbbf24',
    fontWeight: '700',
  },
  multiTrunc: {
    marginTop: 4,
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
  },
  truncate: {
    marginTop: 8,
    fontSize: 13,
    color: colors.textMuted,
  },
});
