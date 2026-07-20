import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentSafeAreaViewScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ExampleLayout
      title="SafeAreaView"
      description="SafeAreaView pads content so it stays clear of notches, status bars, and home indicators. Prefer react-native-safe-area-context (this demo) over the built-in RN SafeAreaView, which is iOS-only and deprecated."
      propsNote={`edges — which sides to inset: top | bottom | left | right\nstyle — same as View\nuseSafeAreaInsets() — manual padding when you need finer control`}
      morePropsNote={`App root should wrap with SafeAreaProvider (already done here).\nBuilt-in react-native SafeAreaView lacks Android support — avoid it.\nSee Libraries → Safe Area Context for deeper API notes.`}>
      <SafeAreaView edges={['left', 'right']} style={styles.padded}>
        <Text style={styles.title}>SafeAreaView (horizontal edges)</Text>
        <Text style={styles.body}>
          Content stays inside the safe region on the left and right.
        </Text>
      </SafeAreaView>
      <View style={styles.insetCard}>
        <Text style={styles.title}>Live insets (useSafeAreaInsets)</Text>
        <Text style={styles.mono}>
          top={insets.top} bottom={insets.bottom}
          {'\n'}
          left={insets.left} right={insets.right}
        </Text>
      </View>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  padded: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  insetCard: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: 10,
    padding: 12,
  },
  title: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 6,
  },
  body: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  mono: {
    fontFamily: 'Menlo',
    fontSize: 12,
    lineHeight: 18,
    color: colors.accent,
  },
});
