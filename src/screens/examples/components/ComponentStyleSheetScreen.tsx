import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentStyleSheetScreen() {
  return (
    <ExampleLayout
      title="StyleSheet"
      description="StyleSheet.create validates and optimizes style objects. Prefer it over inline objects for reusable styles, hairline borders, and absoluteFill helpers."
      propsNote={`StyleSheet.create({ ... }) — define named styles\nStyleSheet.hairlineWidth — thinnest visible border\nStyleSheet.absoluteFill — position: absolute + inset 0\nStyleSheet.flatten / compose — merge style arrays`}
      morePropsNote={`Styles are not CSS — no cascading selectors or media queries here.\nArrays of styles: later entries override earlier ones.\nSee the Styling section for flex, spacing, typography, and more.`}>
      <View style={styles.card}>
        <Text style={styles.title}>Created with StyleSheet.create</Text>
        <View style={styles.hairline} />
        <Text style={styles.caption}>
          Divider uses StyleSheet.hairlineWidth ({StyleSheet.hairlineWidth}px)
        </Text>
      </View>
      <View style={styles.fillParent}>
        <View style={[StyleSheet.absoluteFill, styles.fillChild]}>
          <Text style={styles.fillText}>StyleSheet.absoluteFill</Text>
        </View>
      </View>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  title: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 10,
  },
  hairline: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    marginBottom: 10,
  },
  caption: {
    color: colors.textMuted,
    fontSize: 12,
  },
  fillParent: {
    height: 80,
    borderRadius: 10,
    backgroundColor: colors.surfaceMuted,
    overflow: 'hidden',
  },
  fillChild: {
    backgroundColor: 'rgba(56, 189, 248, 0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fillText: {
    color: colors.text,
    fontWeight: '600',
    fontSize: 13,
  },
});
