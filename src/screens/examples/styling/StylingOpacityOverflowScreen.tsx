import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function StylingOpacityOverflowScreen() {
  return (
    <ExampleLayout
      title="Opacity and overflow"
      description="opacity is a multiplicative style from 0 to 1. overflow controls whether children painting outside the box is clipped (hidden) or visible."
      propsNote={`opacity — affects subtree and hit testing when low\noverflow: visible | hidden (default visible on RN)\n borderRadius + overflow hidden clips children to rounded rect`}
      morePropsNote={`Touchable children can become hard to tap at very low opacity\nAndroid elevation ignores overflow hidden in some cases — test devices\nPrefer LayoutAnimation or Reanimated for animated opacity`}>
      <View style={styles.row}>
        <View style={[styles.tile, styles.op100]}>
          <Text style={styles.tileText}>1</Text>
        </View>
        <View style={[styles.tile, styles.op55]}>
          <Text style={styles.tileText}>0.55</Text>
        </View>
        <View style={[styles.tile, styles.op25]}>
          <Text style={styles.tileText}>0.25</Text>
        </View>
      </View>
      <Text style={styles.label}>overflow: hidden + borderRadius</Text>
      <View style={styles.clip}>
        <View style={styles.stickOut} />
      </View>
      <Text style={styles.label}>overflow: visible (default)</Text>
      <View style={styles.noclip}>
        <View style={styles.stickOut} />
      </View>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  tile: {
    flex: 1,
    height: 52,
    borderRadius: 8,
    backgroundColor: colors.accentMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  op100: { opacity: 1 },
  op55: { opacity: 0.55 },
  op25: { opacity: 0.25 },
  tileText: {
    color: colors.text,
    fontWeight: '700',
  },
  label: {
    color: colors.textMuted,
    fontSize: 12,
    marginBottom: 6,
  },
  clip: {
    height: 56,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.surface,
    marginBottom: 16,
  },
  noclip: {
    height: 56,
    borderRadius: 12,
    overflow: 'visible',
    backgroundColor: colors.surface,
  },
  stickOut: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.accent,
    position: 'absolute',
    right: -40,
    top: -40,
    opacity: 0.85,
  },
});
