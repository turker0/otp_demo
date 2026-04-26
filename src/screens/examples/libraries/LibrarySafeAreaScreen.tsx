import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function LibrarySafeAreaScreen() {
  return (
    <ExampleLayout
      title="react-native-safe-area-context"
      description="SafeAreaProvider (already at app root) supplies inset values. SafeAreaView or useSafeAreaInsets() keep content out of notches, status bars, and home indicators."
      propsNote={`SafeAreaView edges={['top','left','right']}\nuseSafeAreaInsets() for manual padding\ninitialMetrics for SSR / tests`}
      morePropsNote={`useSafeAreaFrame() — rect inside safe area\nSafeAreaProvider can nest for modals\nreact-native SafeAreaView is deprecated; prefer this library\nKeyboard + safe area: combine insets.bottom with keyboard height`}>
      <SafeAreaView edges={['left', 'right']} style={styles.insetDemo}>
        <Text style={styles.demoText}>
          This block uses SafeAreaView with horizontal edges. The welcome screen
          uses useSafeAreaInsets for bottom padding on the scroll content.
        </Text>
      </SafeAreaView>
      <View style={styles.bar}>
        <Text style={styles.barText}>Visual “notch” bar (inset simulation)</Text>
      </View>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  insetDemo: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  demoText: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
  bar: {
    height: 28,
    backgroundColor: colors.accentMuted,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barText: {
    fontSize: 11,
    color: colors.text,
    fontWeight: '600',
  },
});
