import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

const BLOCKS = Array.from({ length: 8 }, (_, i) => i + 1);
const H_TILES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export function ComponentScrollViewScreen() {
  return (
    <ExampleLayout
      title="ScrollView"
      description="ScrollView renders all children at once and is ideal for small, bounded content. For long lists prefer FlatList or SectionList."
      propsNote={`horizontal — row axis scrolling\ncontentContainerStyle — padding for inner content\nshowsVerticalScrollIndicator, showsHorizontalScrollIndicator\nkeyboardShouldPersistTaps: handled | always | never`}
      morePropsNote={`nestedScrollEnabled — nested scrolls (Android)\npagingEnabled + horizontal — carousel pattern\nalwaysBounceVertical (iOS), bounces\nrefreshControl — pull to refresh (see RefreshControl screen)\nonScroll, scrollEventThrottle for tracking`}>
      <Text style={styles.section}>Vertical (nested)</Text>
      <ScrollView
        nestedScrollEnabled
        style={styles.scroller}
        contentContainerStyle={styles.inner}
        scrollEventThrottle={16}
        keyboardShouldPersistTaps="handled">
        {BLOCKS.map(n => (
          <View key={n} style={styles.card}>
            <Text style={styles.cardText}>Scroll block {n}</Text>
          </View>
        ))}
      </ScrollView>
      <Text style={[styles.section, styles.mt]}>Horizontal</Text>
      <ScrollView
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.hInner}>
        {H_TILES.map(t => (
          <View key={t} style={styles.tile}>
            <Text style={styles.tileText}>{t}</Text>
          </View>
        ))}
      </ScrollView>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  section: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  mt: {
    marginTop: 16,
  },
  scroller: {
    maxHeight: 160,
  },
  inner: {
    paddingBottom: 8,
    gap: 8,
  },
  card: {
    padding: 14,
    borderRadius: 10,
    backgroundColor: colors.surface,
  },
  cardText: {
    color: colors.text,
    fontSize: 15,
  },
  hInner: {
    gap: 10,
    paddingVertical: 4,
  },
  tile: {
    width: 72,
    height: 72,
    borderRadius: 12,
    backgroundColor: colors.accentMuted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileText: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
  },
});
