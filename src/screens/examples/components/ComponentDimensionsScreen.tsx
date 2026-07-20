import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentDimensionsScreen() {
  const window = useWindowDimensions();
  const [screen, setScreen] = useState(Dimensions.get('screen'));

  useEffect(() => {
    const sub = Dimensions.addEventListener('change', ({ screen: next }) => {
      setScreen(next);
    });
    return () => sub.remove();
  }, []);

  return (
    <ExampleLayout
      title="Dimensions"
      description="Dimensions reports device width and height. Prefer useWindowDimensions() in components — it re-renders on rotation — over a one-shot Dimensions.get()."
      propsNote={`Dimensions.get('window' | 'screen')\nuseWindowDimensions() — reactive hook (preferred)\nDimensions.addEventListener('change', handler)`}
      morePropsNote={`window — app viewport; screen — full device including system UI.\nOn some Android devices window ≠ screen (nav bar / cutouts).\nAvoid caching get() at module scope — values can change.`}>
      <View style={styles.card}>
        <Text style={styles.label}>useWindowDimensions (live)</Text>
        <Text style={styles.mono}>
          {Math.round(window.width)} × {Math.round(window.height)}
          {'\n'}
          scale={window.scale} · fontScale={window.fontScale}
        </Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Dimensions.get(&apos;screen&apos;)</Text>
        <Text style={styles.mono}>
          {Math.round(screen.width)} × {Math.round(screen.height)}
        </Text>
      </View>
      <View
        style={[
          styles.preview,
          { width: Math.min(window.width * 0.4, 160) },
        ]}>
        <Text style={styles.previewText}>40% of window width</Text>
      </View>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  label: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
  },
  mono: {
    fontFamily: 'Menlo',
    fontSize: 13,
    lineHeight: 20,
    color: colors.accent,
  },
  preview: {
    height: 56,
    borderRadius: 10,
    backgroundColor: colors.accentMuted,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  previewText: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 12,
    textAlign: 'center',
  },
});
