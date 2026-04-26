import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function StylingSizeTransformScreen() {
  return (
    <ExampleLayout
      title="Size and transform"
      description="Width and height accept numbers (density-independent pixels) or percentages. min/max helpers clamp flexible layouts. transform applies matrix operations in order."
      propsNote={`width, height, minWidth, maxHeight, etc.\naspectRatio — e.g. 16/9 keeps media proportion\ntransform: [{ translateX }, { scale }, { rotate }]`}
      morePropsNote={`flexBasis, flexGrow, flexShrink interact with size\nDimensions API vs onLayout for measuring\nTransforms compose left-to-right in the array`}>
      <View style={styles.aspect}>
        <Text style={styles.aspectText}>aspectRatio: 2 (wide)</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.minBox}>
          <Text style={styles.small}>minWidth 80</Text>
        </View>
        <View style={styles.flex1}>
          <Text style={styles.small}>flex:1 sibling</Text>
        </View>
      </View>
      <View style={styles.transformHost}>
        <View style={styles.transformed}>
          <Text style={styles.tText}>rotate + scale</Text>
        </View>
      </View>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  aspect: {
    width: '100%',
    aspectRatio: 2,
    borderRadius: 10,
    backgroundColor: colors.surfaceMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  aspectText: {
    color: colors.text,
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  minBox: {
    minWidth: 100,
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.accentMuted,
    justifyContent: 'center',
  },
  flex1: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.surface,
    justifyContent: 'center',
  },
  small: {
    color: colors.text,
    fontSize: 12,
  },
  transformHost: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderRadius: 10,
  },
  transformed: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: colors.accent,
    transform: [{ rotate: '-6deg' }, { scale: 1.05 }],
  },
  tText: {
    color: '#0f172a',
    fontWeight: '700',
  },
});
