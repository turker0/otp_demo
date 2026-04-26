import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function StylingColorsBordersScreen() {
  return (
    <ExampleLayout
      title="Colors and borders"
      description="Use backgroundColor for fills, border* for outlines, and borderRadius for rounding. Shadows differ: iOS uses shadow*, Android often uses elevation."
      propsNote={`borderWidth, borderColor, borderRadius\nshadowColor, shadowOffset, shadowOpacity (iOS)\nelevation (Android)\nopacity`}
      morePropsNote={`borderTopLeftRadius, ... per-corner radii\noutline* (newer RN / experimental on some platforms)\nbackgroundColor supports #rgb, rgba(), hsl()\nUse Platform.select for shadow vs elevation pairs`}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Rounded card</Text>
        <Text style={styles.cardSub}>borderRadius: 16</Text>
      </View>
      <View style={styles.outline}>
        <Text style={styles.outlineText}>2px dashed border</Text>
      </View>
      <View style={Platform.OS === 'ios' ? styles.shadowIos : styles.shadowAndroid}>
        <Text style={styles.shadowLabel}>
          {Platform.OS === 'ios' ? 'iOS shadow' : 'Android elevation'}
        </Text>
      </View>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.accentMuted,
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  cardTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  cardSub: {
    color: colors.textMuted,
    fontSize: 13,
    marginTop: 4,
  },
  outline: {
    borderWidth: 2,
    borderColor: colors.accent,
    borderStyle: 'dashed',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  outlineText: {
    color: colors.text,
    textAlign: 'center',
  },
  shadowIos: {
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  shadowAndroid: {
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 12,
    elevation: 8,
  },
  shadowLabel: {
    color: colors.text,
    textAlign: 'center',
  },
});
