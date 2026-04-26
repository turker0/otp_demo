import React, { useCallback, useState } from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentRefreshControlScreen() {
  const [refreshingScroll, setRefreshingScroll] = useState(false);
  const [refreshingList, setRefreshingList] = useState(false);
  const [listTick, setListTick] = useState(0);

  const onScrollRefresh = useCallback(() => {
    setRefreshingScroll(true);
    setTimeout(() => setRefreshingScroll(false), 1200);
  }, []);

  const onListRefresh = useCallback(() => {
    setRefreshingList(true);
    setTimeout(() => {
      setListTick(t => t + 1);
      setRefreshingList(false);
    }, 1200);
  }, []);

  const rows = Array.from({ length: 8 }, (_, i) => ({
    id: `${i}-${listTick}`,
    label: `Row ${i + 1} (refresh #${listTick})`,
  }));

  return (
    <ExampleLayout
      title="RefreshControl"
      description="RefreshControl is the pull-to-refresh spinner used as refreshControl on ScrollView, FlatList, or SectionList."
      propsNote={`refreshing — boolean from your state\nonRefresh — start async fetch\ncolors / tintColor — spinner colors (platform)\nprogressViewOffset (Android) — offset below toolbar`}
      morePropsNote={`title + titleColor (legacy iOS pull label)\nCombine with FlatList onRefresh prop (same pattern)\nAvoid setting refreshing true without clearing it on error`}>
      <Text style={styles.h}>ScrollView + RefreshControl</Text>
      <ScrollView
        style={styles.scroller}
        nestedScrollEnabled
        refreshControl={
          <RefreshControl refreshing={refreshingScroll} onRefresh={onScrollRefresh} />
        }>
        <View style={styles.block}>
          <Text style={styles.blockText}>Pull down in this box</Text>
        </View>
        <View style={[styles.block, styles.block2]}>
          <Text style={styles.blockText}>More content</Text>
        </View>
      </ScrollView>
      <Text style={[styles.h, styles.mt]}>FlatList + onRefresh</Text>
      <FlatList
        data={rows}
        keyExtractor={item => item.id}
        style={styles.list}
        nestedScrollEnabled
        refreshControl={
          <RefreshControl refreshing={refreshingList} onRefresh={onListRefresh} />
        }
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowText}>{item.label}</Text>
          </View>
        )}
      />
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  h: {
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
    maxHeight: 120,
  },
  block: {
    height: 100,
    borderRadius: 10,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  block2: {
    backgroundColor: colors.surfaceMuted,
  },
  blockText: {
    color: colors.text,
    fontSize: 14,
  },
  list: {
    maxHeight: 140,
  },
  row: {
    paddingVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  rowText: {
    color: colors.text,
    fontSize: 14,
  },
});
