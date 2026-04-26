import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function StylingSpacingScreen() {
  return (
    <ExampleLayout
      title="Margin and padding"
      description="margin pushes siblings away; padding grows the inner box around children. Only width and height participate in layout along with flex."
      propsNote={`margin, marginHorizontal, marginVertical\npadding, paddingTop, ...\n gap (newer RN) for spacing between flex children`}
      morePropsNote={`margin: 'auto' on cross axis (limited cases)\nNegative margins pull siblings closer\npadding* on TextInput affects touch target vs text box\nboxSizing is always border-box style`}>
      <View style={styles.outer}>
        <Text style={styles.tag}>margin: 12 on outer</Text>
        <View style={styles.inner}>
          <Text style={styles.tag}>padding: 16 on inner</Text>
          <View style={styles.core}>
            <Text style={styles.coreText}>Content</Text>
          </View>
        </View>
      </View>
      <View style={styles.gapRow}>
        <View style={styles.gapItem} />
        <View style={styles.gapItem} />
        <View style={styles.gapItem} />
      </View>
      <Text style={styles.note}>Row uses gap: 10</Text>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  outer: {
    margin: 12,
    backgroundColor: colors.surfaceMuted,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
  },
  inner: {
    margin: 8,
    padding: 16,
    backgroundColor: colors.surface,
    borderRadius: 8,
  },
  tag: {
    color: colors.textMuted,
    fontSize: 11,
    marginBottom: 6,
  },
  core: {
    backgroundColor: colors.accentMuted,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  coreText: {
    color: colors.text,
    fontWeight: '600',
  },
  gapRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  gapItem: {
    flex: 1,
    height: 36,
    borderRadius: 6,
    backgroundColor: colors.accent,
  },
  note: {
    marginTop: 8,
    fontSize: 12,
    color: colors.textMuted,
  },
});
