import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function StylingPositionScreen() {
  return (
    <ExampleLayout
      title="Position and z-index"
      description="position: relative is default. absolute removes the child from normal flow and positions it against the nearest positioned ancestor (often a relative parent)."
      propsNote={`position: relative | absolute\n top, left, right, bottom (numeric or %)\n zIndex — draw order among siblings (higher on top)`}
      morePropsNote={`Use alignSelf on flex children instead of absolute when possible\nposition: fixed is not like web; use different patterns\nFor overlays prefer Modal or a full-screen Pressable layer`}>
      <View style={styles.stage}>
        <Text style={styles.caption}>Parent is position relative</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>absolute badge</Text>
        </View>
        <View style={[styles.layer, styles.layerBack]}>
          <Text style={styles.layerText}>zIndex: 1</Text>
        </View>
        <View style={[styles.layer, styles.layerTop]}>
          <Text style={styles.layerText}>zIndex: 2 (on top)</Text>
        </View>
      </View>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  stage: {
    position: 'relative',
    height: 160,
    borderRadius: 12,
    backgroundColor: colors.surface,
    padding: 12,
    overflow: 'visible',
  },
  caption: {
    color: colors.textMuted,
    fontSize: 12,
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: colors.accent,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    color: '#0f172a',
    fontSize: 11,
    fontWeight: '700',
  },
  layer: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 12,
    height: 44,
    borderRadius: 8,
    backgroundColor: colors.accentMuted,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  layerBack: {
    zIndex: 1,
  },
  layerTop: {
    zIndex: 2,
    bottom: 36,
    backgroundColor: colors.surfaceMuted,
  },
  layerText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '600',
  },
});
