import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeworkLayout } from '../../../homework/components/HomeworkLayout';
import { HOMEWORK_IMAGES } from '../../../homework/refs';
import { HomeworkHelper } from '../../../homework/components/HomeworkHelper';
import { colors } from '../../../theme';
import { ChatListItem } from './components/ChatListItem';
import { HWDivider, HWIconButton } from './components/HWPrimitives';

const SAMPLE = [
  { name: 'Sarah Jenkins', preview: 'Are you free later today?', time: '2:41 PM', unreadCount: 2 },
  { name: 'Alex Dev', preview: 'Let’s ship the feature.', time: '1:10 PM' },
  { name: 'Earth Focus', preview: 'That trail looks amazing.', time: 'Yesterday' },
];

export function Advanced1ChatListScreen() {
  return (
    <HomeworkLayout
      title="Advanced #1 — Chat List"
      brief="Recreate the chat list. Use the starter components below (ChatListItem, HWAvatar, HWIconButton) and compose the full screen."
      referenceSource={HOMEWORK_IMAGES.advanced1}
      referenceMaxHeightFraction={0.62}>
      <HomeworkHelper
        title="Starter components"
        body="These are intentionally incomplete primitives. Your job is to arrange them into the exact layout: top bar, search row, list, and bottom nav."
      />
      <View style={styles.starterHeader}>
        <HWIconButton icon="menu" />
        <Text style={styles.headerTitle}>Chats</Text>
        <HWIconButton icon="plus" />
      </View>
      <HWDivider />
      {SAMPLE.map((c, idx) => (
        <View key={`${c.name}-${idx}`}>
          <ChatListItem {...c} />
          <HWDivider />
        </View>
      ))}
      <Text style={styles.note}>
        TODO: add search bar, section spacing, and bottom tab bar to match the reference.
      </Text>
    </HomeworkLayout>
  );
}

const styles = StyleSheet.create({
  starterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 10,
  },
  headerTitle: {
    color: colors.text,
    fontWeight: '900',
    fontSize: 16,
  },
  note: {
    marginTop: 12,
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 17,
  },
});

