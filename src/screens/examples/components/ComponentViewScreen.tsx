import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentViewScreen() {
  return (
    <ExampleLayout
      title="View"
      description="View is the fundamental building block for layout. It maps to native containers, supports flexbox, styles, and can group accessibility for children."
      propsNote={`style — layout, colors, borders, transforms\npointerEvents: auto | none | box-none | box-only\nneedsOffscreenAlphaCompositing — rasterize for tricky alpha`}
      morePropsNote={`accessibilityRole, accessibilityLabel, accessibilityHint\ntestID — for tests and automation\ncollapsable={false} (Android) — keep view in hierarchy for debugging\nremoveClippedSubviews on scroll parents (perf)`}>
      <View style={styles.row} pointerEvents="box-none">
        <View style={[styles.box, styles.boxPrimary]}>
          <Text style={styles.boxLabel}>A</Text>
        </View>
        <View style={[styles.box, styles.boxSecondary]}>
          <Text style={styles.boxLabel}>B</Text>
        </View>
      </View>
      <View style={styles.nested}>
        <Text style={styles.caption}>Nested views inherit flex from parent.</Text>
      </View>
      <View style={styles.hitSlopDemo} pointerEvents="box-only">
        <Text style={styles.caption}>
          pointerEvents demo: outer uses box-none / inner cards receive touches.
        </Text>
      </View>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  box: {
    flex: 1,
    height: 72,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxPrimary: {
    backgroundColor: colors.accentMuted,
  },
  boxSecondary: {
    backgroundColor: colors.surfaceMuted,
  },
  boxLabel: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '700',
  },
  nested: {
    marginTop: 12,
    padding: 12,
    backgroundColor: colors.surface,
    borderRadius: 8,
  },
  caption: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  hitSlopDemo: {
    marginTop: 12,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
