import { FlashList } from '@shopify/flash-list';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

const DATA = Array.from({ length: 40 }, (_, i) => ({
  id: String(i),
  title: `Row ${i + 1}`,
}));

function RowSeparator() {
  return <View style={styles.sep} />;
}

export function LibraryFlashListScreen() {
  return (
    <ExampleLayout
      title="@shopify/flash-list"
      description="FlashList is a drop-in FlatList replacement tuned for performance: recycling, predictable updates, and fast layout without hand-tuning every row size (v2+ measures cells automatically)."
      propsNote={`data, renderItem\nkeyExtractor\ndrawDistance — prefetch margin\nListHeaderComponent, ItemSeparatorComponent\nnumColumns, inverted`}
      morePropsNote={`overrideItemLayout for spans / grid\ngetItemType for heterogeneous rows\nonLoad — first draw timing\nRecyclerListView lineage — aggressive recycling`}
    >
      <Text style={styles.sub}>Bounded height + nested scroll</Text>
      <FlashList
        data={DATA}
        keyExtractor={item => item.id}
        style={styles.list}
        nestedScrollEnabled
        ListHeaderComponent={
          <View style={styles.banner}>
            <Text style={styles.bannerText}>FlashList header</Text>
          </View>
        }
        ItemSeparatorComponent={RowSeparator}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowText}>{item.title}</Text>
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
  list: {
    maxHeight: 220,
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
});
