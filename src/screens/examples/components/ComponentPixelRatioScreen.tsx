import React from 'react';
import { PixelRatio, StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentPixelRatioScreen() {
  const ratio = PixelRatio.get();
  const fontScale = PixelRatio.getFontScale();
  const logical = 100;
  const physical = PixelRatio.getPixelSizeForLayoutSize(logical);
  const rounded = PixelRatio.roundToNearestPixel(8.4);

  return (
    <ExampleLayout
      title="PixelRatio"
      description="PixelRatio bridges density-independent layout units and physical device pixels. Use it when aligning hairlines, loading density-specific images, or rounding fractional layouts."
      propsNote={`PixelRatio.get() — device pixel density (e.g. 2, 3)\nPixelRatio.getFontScale() — user accessibility text scale\ngetPixelSizeForLayoutSize(n) — layout → physical pixels\nroundToNearestPixel(n) — snap to a whole pixel`}
      morePropsNote={`@2x / @3x image assets map to PixelRatio buckets.\nHairline borders often use StyleSheet.hairlineWidth (density-aware).\nPrefer layout units for UI; reach for PixelRatio for precision edges.`}>
      <View style={styles.card}>
        <Row label="PixelRatio.get()" value={String(ratio)} />
        <Row label="getFontScale()" value={String(fontScale)} />
        <Row
          label={`${logical} layout → pixels`}
          value={String(physical)}
        />
        <Row label="roundToNearestPixel(8.4)" value={String(rounded)} />
      </View>
      <View style={styles.demoRow}>
        <View style={[styles.box, { borderWidth: 1 / ratio }]}>
          <Text style={styles.boxText}>1/{ratio} border</Text>
        </View>
        <View style={[styles.box, { borderWidth: StyleSheet.hairlineWidth }]}>
          <Text style={styles.boxText}>hairlineWidth</Text>
        </View>
      </View>
    </ExampleLayout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  rowLabel: {
    flex: 1,
    color: colors.textMuted,
    fontSize: 12,
  },
  rowValue: {
    fontFamily: 'Menlo',
    color: colors.accent,
    fontSize: 13,
    fontWeight: '600',
  },
  demoRow: {
    flexDirection: 'row',
    gap: 10,
  },
  box: {
    flex: 1,
    height: 64,
    borderRadius: 8,
    borderColor: colors.accent,
    backgroundColor: colors.surfaceMuted,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  boxText: {
    color: colors.text,
    fontSize: 11,
    textAlign: 'center',
  },
});
