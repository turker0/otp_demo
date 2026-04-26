import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function StylingTypographyScreen() {
  return (
    <ExampleLayout
      title="Typography"
      description="Text styles map closely to CSS typography. Use fontFamily for custom fonts once loaded, and letterSpacing for tracking."
      propsNote={`fontSize, lineHeight\nfontWeight: '400' | '700' | '800'\ntextAlign: left | center | right\nletterSpacing, textTransform`}
      morePropsNote={`fontStyle: italic | normal\nincludeFontPadding (Android) — trim extra line height\nfontVariant — tabular-nums, small-caps (where supported)\nCustom fonts: load with expo-font or react-native-asset linking`}>
      <Text style={styles.h1}>Display heading</Text>
      <Text style={styles.body}>
        Body copy with comfortable lineHeight for reading on a phone.
      </Text>
      <Text style={styles.centered}>Centered caption</Text>
      <View style={styles.row}>
        <Text style={styles.upper}>uppercase</Text>
        <Text style={styles.spaced}>Spaced</Text>
      </View>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 8,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.textMuted,
    marginBottom: 12,
  },
  centered: {
    fontSize: 13,
    textAlign: 'center',
    color: colors.accent,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upper: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '700',
    color: colors.text,
    letterSpacing: 1.2,
  },
  spaced: {
    letterSpacing: 4,
    fontSize: 14,
    color: colors.textMuted,
  },
});
