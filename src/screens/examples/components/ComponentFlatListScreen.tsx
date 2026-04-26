import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

const DATA = Array.from({ length: 18 }, (_, i) => ({
  id: String(i),
  title: `Item ${i + 1}`,
}));

function RowSeparator() {
  return <View style={styles.sep} />;
}

export function ComponentFlatListScreen() {
  return (
    <ExampleLayout
      title="FlatList"
      description="FlatList virtualizes rows: only visible items mount. Provide data, keyExtractor, and renderItem for efficient lists."
      propsNote={`data, renderItem, keyExtractor\nListHeaderComponent, ListFooterComponent\nItemSeparatorComponent, columnWrapperStyle (with numColumns)\ninitialNumToRender, windowSize, maxToRenderPerBatch`}
      morePropsNote={`inverted — chat-style reverse\nnumColumns — grid; item width auto\ngetItemLayout — skip measurement when height fixed\nonViewableItemsChanged + viewabilityConfig for impressions\nListEmptyComponent when data=[]`}>
      <Text style={styles.sub}>List with header + separators</Text>
      <FlatList
        data={DATA}
        keyExtractor={item => item.id}
        style={styles.list}
        nestedScrollEnabled
        ListHeaderComponent={
          <View style={styles.banner}>
            <Text style={styles.bannerText}>Header component</Text>
          </View>
        }
        ItemSeparatorComponent={RowSeparator}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowText}>{item.title}</Text>
          </View>
        )}
      />
      <Text style={[styles.sub, styles.mt]}>numColumns={3} grid</Text>
      <FlatList
        data={DATA.slice(0, 9)}
        keyExtractor={item => item.id}
        numColumns={3}
        style={styles.gridList}
        nestedScrollEnabled
        columnWrapperStyle={styles.colWrap}
        renderItem={({ item }) => (
          <View style={styles.cell}>
            <Text style={styles.cellText}>{item.title}</Text>
          </View>
        )}
      />
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  sub: {
    color: colors.textMuted,
    fontSize: 12,
    marginBottom: 8,
    fontWeight: '600',
  },
  mt: {
    marginTop: 16,
  },
  list: {
    maxHeight: 200,
  },
  banner: {
    backgroundColor: colors.accentMuted,
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  bannerText: {
    color: colors.text,
    fontWeight: '700',
    textAlign: 'center',
  },
  sep: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
  },
  row: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  rowText: {
    color: colors.text,
    fontSize: 15,
  },
  gridList: {
    maxHeight: 200,
  },
  colWrap: {
    gap: 8,
    marginBottom: 8,
  },
  cell: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  cellText: {
    color: colors.text,
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
  },
});
