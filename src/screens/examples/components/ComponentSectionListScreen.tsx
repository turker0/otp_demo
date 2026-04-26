import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

type Row = { id: string; name: string };

function SectionSeparator() {
  return <View style={styles.sep} />;
}

const SECTIONS: { title: string; data: Row[] }[] = [
  {
    title: 'Favorites',
    data: [
      { id: '1', name: 'Alpha' },
      { id: '2', name: 'Bravo' },
    ],
  },
  {
    title: 'Recent',
    data: [
      { id: '3', name: 'Charlie' },
      { id: '4', name: 'Delta' },
      { id: '5', name: 'Echo' },
    ],
  },
];

export function ComponentSectionListScreen() {
  return (
    <ExampleLayout
      title="SectionList"
      description="SectionList is like FlatList but data is grouped into sections with optional sticky headers—ideal for alphabet lists, settings screens, and grouped tables."
      propsNote={`sections: { title, data, key? }[]\nrenderItem — same shape as FlatList\nkeyExtractor\nrenderSectionHeader, renderSectionFooter\nstickySectionHeadersEnabled`}
      morePropsNote={`SectionSeparatorComponent, ItemSeparatorComponent\ninitialNumToRender, maxToRenderPerBatch (perf)\ngetItemLayout when rows are fixed height\nListEmptyComponent when all sections empty`}>
      <SectionList
        sections={SECTIONS}
        keyExtractor={item => item.id}
        style={styles.list}
        nestedScrollEnabled
        stickySectionHeadersEnabled
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowText}>{item.name}</Text>
          </View>
        )}
        SectionSeparatorComponent={SectionSeparator}
      />
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  list: {
    maxHeight: 280,
  },
  header: {
    backgroundColor: colors.surfaceMuted,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 4,
  },
  headerText: {
    color: colors.accent,
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  row: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  rowText: {
    color: colors.text,
    fontSize: 15,
  },
  sep: {
    height: 12,
  },
});
