import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function StylingFlexScreen() {
  return (
    <ExampleLayout
      title="Flex and layout"
      description="React Native uses Yoga flexbox. Default flexDirection is column. Combine flex, justifyContent, and alignItems to build rows and grids."
      propsNote={`flexDirection: 'row' | 'column'\njustifyContent: flex-start | center | space-between\nalignItems: stretch | center | flex-end\nflex: 1 — grow to fill space`}
      morePropsNote={`alignContent — lines in multi-line flex (wrap)\nflexWrap: wrap | nowrap\nalignSelf overrides parent alignItems on one child\nflexGrow / flexShrink / flexBasis (same as web)`}>
      <Text style={styles.caption}>Row + space-between</Text>
      <View style={styles.rowBetween}>
        <View style={styles.pill} />
        <View style={styles.pill} />
        <View style={styles.pill} />
      </View>
      <Text style={[styles.caption, styles.mt]}>flex: 1 siblings</Text>
      <View style={styles.rowGrow}>
        <View style={[styles.growBox, { backgroundColor: colors.accentMuted }]} />
        <View style={[styles.growBox, { backgroundColor: colors.surfaceMuted }]} />
      </View>
      <Text style={[styles.caption, styles.mt]}>Column + alignItems center</Text>
      <View style={styles.colCenter}>
        <View style={styles.small} />
        <View style={[styles.small, styles.smallMid]} />
        <View style={styles.small} />
      </View>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  caption: {
    color: colors.textMuted,
    fontSize: 12,
    marginBottom: 6,
  },
  mt: {
    marginTop: 14,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 48,
    backgroundColor: colors.surface,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  pill: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.accent,
  },
  rowGrow: {
    flexDirection: 'row',
    height: 56,
    gap: 8,
  },
  growBox: {
    flex: 1,
    borderRadius: 8,
  },
  colCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 12,
    backgroundColor: colors.surface,
    borderRadius: 8,
  },
  small: {
    width: 40,
    height: 16,
    borderRadius: 4,
    backgroundColor: colors.border,
  },
  smallMid: {
    width: 80,
    backgroundColor: colors.accent,
  },
});
